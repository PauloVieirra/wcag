import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Alert, AlertDescription } from '../ui/alert';
import { Badge } from '../ui/badge';
import { LogOut, Plus, Settings, Users } from 'lucide-react';
import { WCAGForm } from './wcag-form';
import { WCAGCriterion } from '../wcag-card';
import { supabase } from '../../utils/supabase/client';
import { projectId } from '../../utils/supabase/info';

interface AdminPanelProps {
  user: any;
  onLogout: () => void;
  onCardsUpdate: () => void;
}

export function AdminPanel({ user, onLogout, onCardsUpdate }: AdminPanelProps) {
  const [databaseCards, setDatabaseCards] = useState<WCAGCriterion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const isAdmin = user?.profile?.role === 'admin';

  useEffect(() => {
    if (isAdmin) {
      loadDatabaseCards();
    }
  }, [isAdmin]);

  const loadDatabaseCards = async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-6cf82b18/wcag-cards`, {
        headers: {
          'Authorization': `Bearer ${user.session.access_token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(`Erro ao carregar critérios: ${errorData.error}`);
        return;
      }

      const { cards } = await response.json();
      setDatabaseCards(cards);
    } catch (err) {
      console.error('Load cards error:', err);
      setError('Erro inesperado ao carregar critérios');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCardCreated = () => {
    loadDatabaseCards();
    onCardsUpdate();
  };

  const deleteCard = async (cardId: string) => {
    if (!confirm('Tem certeza que deseja excluir este critério?')) {
      return;
    }

    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-6cf82b18/wcag-cards/${cardId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${user.session.access_token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(`Erro ao excluir critério: ${errorData.error}`);
        return;
      }

      loadDatabaseCards();
      onCardsUpdate();
    } catch (err) {
      console.error('Delete card error:', err);
      setError('Erro inesperado ao excluir critério');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold">Painel Administrativo</h1>
              {isAdmin && (
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Administrador
                </Badge>
              )}
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Olá, {user?.profile?.name || user?.email}
              </div>
              <Button variant="outline" onClick={onLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {!isAdmin ? (
          <Card>
            <CardHeader>
              <CardTitle>Acesso Restrito</CardTitle>
              <CardDescription>
                Apenas administradores podem acessar esta área.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Você está logado como: <strong>{user?.profile?.role || 'usuário'}</strong>
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Para obter acesso administrativo, entre em contato com o administrador do sistema.
              </p>
            </CardContent>
          </Card>
        ) : (
          <Tabs defaultValue="add-card" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="add-card" className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Adicionar Critério
              </TabsTrigger>
              <TabsTrigger value="manage-cards" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Gerenciar Critérios
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="add-card" className="mt-6">
              <WCAGForm onSubmit={handleCardCreated} session={user.session} />
            </TabsContent>
            
            <TabsContent value="manage-cards" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Critérios Cadastrados no Banco</CardTitle>
                  <CardDescription>
                    Gerencie os critérios WCAG salvos no banco de dados
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {error && (
                    <Alert className="mb-4 border-destructive">
                      <AlertDescription className="text-destructive">
                        {error}
                      </AlertDescription>
                    </Alert>
                  )}

                  {isLoading ? (
                    <p className="text-muted-foreground">Carregando critérios...</p>
                  ) : databaseCards.length === 0 ? (
                    <p className="text-muted-foreground">
                      Nenhum critério cadastrado no banco de dados ainda.
                    </p>
                  ) : (
                    <div className="space-y-4">
                      {databaseCards.map((card) => (
                        <div key={card.id} className="border rounded-lg p-4 space-y-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-medium">{card.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                {card.principle} • {card.category}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge 
                                variant="outline"
                                className={
                                  card.level === 'A' ? 'border-green-500 text-green-700' :
                                  card.level === 'AA' ? 'border-blue-500 text-blue-700' :
                                  'border-purple-500 text-purple-700'
                                }
                              >
                                {card.level}
                              </Badge>
                              <Button 
                                variant="destructive" 
                                size="sm"
                                onClick={() => deleteCard(card.id)}
                              >
                                Excluir
                              </Button>
                            </div>
                          </div>
                          
                          <p className="text-sm">{card.description}</p>
                          
                          {card.keywords && card.keywords.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                              {card.keywords.map((keyword, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {keyword}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  <Button 
                    variant="outline" 
                    onClick={loadDatabaseCards}
                    disabled={isLoading}
                    className="mt-4"
                  >
                    {isLoading ? 'Carregando...' : 'Atualizar Lista'}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </main>
    </div>
  );
}