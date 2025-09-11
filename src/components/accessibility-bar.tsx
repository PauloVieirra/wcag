import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Sun, Moon, Eye, Plus, Minus, Settings, LogIn, Home, Menu } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { useIsMobile } from './ui/use-mobile';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';

type Theme = 'light' | 'dark' | 'high-contrast';

interface AccessibilityBarProps {
  user?: any;
  onLoginClick?: () => void;
  onAdminClick?: () => void;
  onLogout?: () => void;
  onHomeClick?: () => void;
}

export function AccessibilityBar({ user, onLoginClick, onAdminClick, onLogout, onHomeClick }: AccessibilityBarProps) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [fontSize, setFontSize] = useState(16);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Load saved preferences
    const savedTheme = localStorage.getItem('theme') as Theme || 'dark';
    const savedFontSize = parseInt(localStorage.getItem('fontSize') || '16');
    
    setTheme(savedTheme);
    setFontSize(savedFontSize);
    
    applyTheme(savedTheme);
    applyFontSize(savedFontSize);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    document.documentElement.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  const applyFontSize = (size: number) => {
    document.documentElement.style.setProperty('--font-size', `${size}px`);
    localStorage.setItem('fontSize', size.toString());
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  const increaseFontSize = () => {
    if (fontSize < 18) {
      const newSize = fontSize + 1;
      setFontSize(newSize);
      applyFontSize(newSize);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 15) {
      const newSize = fontSize - 1;
      setFontSize(newSize);
      applyFontSize(newSize);
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'dark':
        return 'Tema Escuro';
      case 'high-contrast':
        return 'Alto Contraste';
      default:
        return 'Tema Claro';
    }
  };

  const accessibilityControls = (
    <>
      {/* Theme Controls */}
      <div className="flex items-center border rounded-md">
        <Button
          variant={theme === 'light' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => handleThemeChange('light')}
          aria-label="Ativar tema claro"
          className="rounded-r-none border-r"
        >
          <Sun className="h-4 w-4" />
        </Button>
        <Button
          variant={theme === 'dark' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => handleThemeChange('dark')}
          aria-label="Ativar tema escuro"
          className="rounded-none border-r"
        >
          <Moon className="h-4 w-4" />
        </Button>
        <Button
          variant={theme === 'high-contrast' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => handleThemeChange('high-contrast')}
          aria-label="Ativar alto contraste"
          className="rounded-l-none"
        >
          <Eye className="h-4 w-4" />
        </Button>
      </div>

      {/* Font Size Controls */}
      <div className="flex items-center gap-1">
        <Button
          variant="outline"
          size="sm"
          onClick={decreaseFontSize}
          disabled={fontSize <= 15}
          aria-label={`Diminuir tamanho da fonte. Tamanho atual: ${fontSize}px`}
        >
          <Minus className="h-4 w-4" />
          <span className="ml-1">A</span>
        </Button>
        <span className="px-2 py-1 text-sm bg-muted rounded min-w-[3rem] text-center" aria-live="polite">
          {fontSize}px
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={increaseFontSize}
          disabled={fontSize >= 18}
          aria-label={`Aumentar tamanho da fonte. Tamanho atual: ${fontSize}px`}
        >
          <span className="mr-1">A</span>
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </>
  );

  const userControls = (
    <>
      {user ? (
        <div className="flex items-center gap-2 ">
          <span className="text-sm text-muted-foreground" >
            {user.profile?.name || user.email}
          </span>
          
          <Button
            variant="outline"
            size="sm"
            onClick={onLogout}
            aria-label="Fazer logout"
          >
            Sair
          </Button>
        </div>
      ) : (
        <Button
          variant="outline"
          size="sm"
          onClick={onLoginClick}
          aria-label="Fazer login"
          className="flex items-center gap-1"
        >
          <LogIn className="h-4 w-4" />
          <span>Login</span>
        </Button>
      )}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-medium">WCAG Consulta</span>
            
            {!isMobile && (
              <NavigationMenu>
                <NavigationMenuList className="gap-1">
                  <NavigationMenuItem>
                    <Button variant="ghost" size="sm" onClick={onHomeClick} aria-label="Ir para a página inicial">
                      <Home className="h-4 w-4 sm:mr-2" />
                      <span className="hidden sm:inline">Início</span>
                    </Button>
                  </NavigationMenuItem>
                  {user && user.profile?.role === 'admin' && (
                    <NavigationMenuItem>
                      <Button variant="ghost" size="sm" onClick={onAdminClick} aria-label="Acessar painel administrativo">
                        <Settings className="h-4 w-4 sm:mr-2" />
                        <span className="hidden sm:inline">Admin</span>
                      </Button>
                    </NavigationMenuItem>
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            )}
          </div>
          
          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 py-4"  style={{ height: '100%' }}>
                  <div className="flex flex-col  gap-2">
                   
                    {user && user.profile?.role === 'admin' && (
                      <Button variant="ghost" onClick={onAdminClick} className="justify-start">
                        <Settings className="h-4 w-4 mr-2" />
                        Admin
                      </Button>
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <h3 className="text-sm font-medium">Acessibilidade</h3>
                    {accessibilityControls}
                  </div>
                  <div className="flex flex-col" style={{ height: '100%' }}/>
                     

                  <div className="flex flex-col gap-2">
                    {userControls}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <nav className="flex items-center gap-2" role="navigation" aria-label="Controles de acessibilidade e de usuário">
              {accessibilityControls}
              {userControls}
              <div 
                id="vlibras-container"
                className="ml-2"
                aria-label="Plugin VLibras para tradução em LIBRAS"
              >
                {/* VLibras will be injected here */}
              </div>
            </nav>
          )}
        </div>
      </div>
      
      <div 
        aria-live="polite" 
        aria-atomic="true"
        className="sr-only"
      >
        {getThemeLabel()} ativado
      </div>
    </header>
  );
}
