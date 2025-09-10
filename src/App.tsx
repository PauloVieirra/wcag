import { useState, useMemo, useEffect } from 'react';
import { AccessibilityBar } from './components/accessibility-bar';
import { SearchBar } from './components/search-bar';
import { WCAGCard, WCAGCriterion } from './components/wcag-card';
import { wcagCriteria } from './components/wcag-criteria';
import { VLibrasScript } from './components/vlibras-script';
import { LoginForm } from './components/auth/login-form';
import { AdminPanel } from './components/admin/admin-panel';
import { DatabaseStatus } from './components/admin/database-status';
import { Button } from './components/ui/button';
import { Settings, LogIn } from 'lucide-react';
import { useAuth } from './hooks/use-auth';
import { projectId, publicAnonKey } from './utils/supabase/info';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [databaseCards, setDatabaseCards] = useState<WCAGCriterion[]>([]);
  const [isLoadingCards, setIsLoadingCards] = useState(false);
  
  const { user, loading, signOut, setUser } = useAuth();

  // Load database cards when app starts
  useEffect(() => {
    loadDatabaseCards();
    initializeDatabase();
  }, []);

  const initializeDatabase = async () => {
    try {
      await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-6cf82b18/init`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.error('Error initializing database:', error);
    }
  };

  const loadDatabaseCards = async () => {
    setIsLoadingCards(true);
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-6cf82b18/wcag-cards`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const { cards } = await response.json();
        setDatabaseCards(cards || []);
      }
    } catch (error) {
      console.error('Error loading database cards:', error);
    } finally {
      setIsLoadingCards(false);
    }
  };

  // Combine mocked criteria with database cards
  const allCriteria = useMemo(() => {
    const combinedCards = [...wcagCriteria];
    
    // Add database cards that don't conflict with mocked ones
    databaseCards.forEach(dbCard => {
      const exists = combinedCards.some(card => card.id === dbCard.criterion_id);
      if (!exists) {
        combinedCards.push({
          ...dbCard,
          id: dbCard.criterion_id
        });
      }
    });

    return combinedCards.sort((a, b) => {
      // Sort by criterion ID (e.g., "1.1.1", "1.2.1", etc.)
      const aId = a.id.split('.').map(n => parseInt(n));
      const bId = b.id.split('.').map(n => parseInt(n));
      
      for (let i = 0; i < Math.max(aId.length, bId.length); i++) {
        const aVal = aId[i] || 0;
        const bVal = bId[i] || 0;
        if (aVal !== bVal) {
          return aVal - bVal;
        }
      }
      return 0;
    });
  }, [databaseCards]);

  const filteredCriteria = useMemo(() => {
    if (!searchQuery.trim()) {
      return allCriteria;
    }

    const query = searchQuery.toLowerCase().trim();
    
    return allCriteria.filter(criterion => {
      return (
        criterion.title.toLowerCase().includes(query) ||
        criterion.level.toLowerCase().includes(query) ||
        criterion.principle.toLowerCase().includes(query) ||
        criterion.category.toLowerCase().includes(query) ||
        criterion.description.toLowerCase().includes(query) ||
        criterion.keywords.some(keyword => keyword.toLowerCase().includes(query))
      );
    });
  }, [searchQuery, allCriteria]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleLoginSuccess = (userData: any) => {
    setUser(userData);
    setShowLogin(false);
  };

  const handleLogout = async () => {
    await signOut();
    setShowAdmin(false);
  };

  const handleHomeClick = () => {
    setShowAdmin(false);
  };

  const handleCardsUpdate = () => {
    loadDatabaseCards();
  };

  // Show loading while checking auth
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      </div>
    );
  }

  // Show login form
  if (showLogin) {
    return <LoginForm onLoginSuccess={handleLoginSuccess} />;
  }

  // Show admin panel
  if (showAdmin && user) {
    return (
      <AdminPanel 
        user={user} 
        onLogout={handleLogout} 
        onCardsUpdate={handleCardsUpdate}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <VLibrasScript />
      <AccessibilityBar 
        user={user}
        onLoginClick={() => setShowLogin(true)}
        onAdminClick={() => setShowAdmin(true)}
        onLogout={handleLogout}
        onHomeClick={handleHomeClick}
      />
      
      <main className="container mx-auto px-4 py-8" role="main">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="mb-4">
              Critérios de Sucesso WCAG 2.1/2.2
            </h1>
            
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Consulte e pesquise os critérios de acessibilidade das Web Content Accessibility Guidelines (WCAG) 
              de forma organizada e acessível. Ideal para UX Designers, desenvolvedores e pesquisadores de acessibilidade.
            </p>

            {databaseCards.length > 0 && (
              <p className="text-sm text-muted-foreground mt-2">
                Incluindo {databaseCards.length} critério(s) personalizado(s) do banco de dados
              </p>
            )}
          </header>

          <SearchBar onSearch={handleSearch} />

          <section 
            className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            aria-label="Lista de critérios WCAG"
          >
            {isLoadingCards ? (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">Carregando critérios...</p>
              </div>
            ) : filteredCriteria.length > 0 ? (
              filteredCriteria.map((criterion) => (
                <WCAGCard 
                  key={criterion.id} 
                  criterion={criterion} 
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground mb-4">
                  Nenhum critério encontrado para "{searchQuery}"
                </p>
                <p className="text-sm text-muted-foreground">
                  Tente pesquisar por títulos, níveis (A, AA, AAA), princípios ou palavras-chave
                </p>
              </div>
            )}
          </section>

          {filteredCriteria.length > 0 && (
            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p>
                Mostrando {filteredCriteria.length} de {allCriteria.length} critérios
                {searchQuery && ` para "${searchQuery}"`}
              </p>
              <p className="mt-1">
                ({wcagCriteria.length} critérios padrão + {databaseCards.length} personalizado(s))
              </p>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t bg-card/50 mt-16" role="contentinfo">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">
              Baseado nas Web Content Accessibility Guidelines (WCAG) 2.1 e 2.2
            </p>
            <p>
              Desenvolvido com foco em acessibilidade e usabilidade para profissionais de UX, 
              desenvolvimento e pesquisa em acessibilidade digital.
            </p>
          </div>
        </div>
      </footer>

      <DatabaseStatus />
    </div>
  );
}