import { useState, useEffect } from 'react';
import { Alert, AlertDescription } from '../ui/alert';
import { Badge } from '../ui/badge';
import { Database, Wifi, WifiOff } from 'lucide-react';
import { projectId } from '../../utils/supabase/info';

export function DatabaseStatus() {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);

  useEffect(() => {
    checkConnection();
    // Check connection every 30 seconds
    const interval = setInterval(checkConnection, 30000);
    return () => clearInterval(interval);
  }, []);

  const checkConnection = async () => {
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-6cf82b18/health`);
      setIsConnected(response.ok);
      setLastChecked(new Date());
    } catch (error) {
      setIsConnected(false);
      setLastChecked(new Date());
    }
  };

  if (isConnected === null) {
    return null; // Loading state
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Badge 
        variant={isConnected ? "secondary" : "destructive"}
        className="flex items-center gap-2 py-2 px-3"
      >
        {isConnected ? (
          <>
            <Wifi className="h-3 w-3" />
            <Database className="h-3 w-3" />
            <span className="text-xs">Conectado</span>
          </>
        ) : (
          <>
            <WifiOff className="h-3 w-3" />
            <Database className="h-3 w-3" />
            <span className="text-xs">Desconectado</span>
          </>
        )}
      </Badge>
      
      {lastChecked && (
        <div className="text-xs text-muted-foreground mt-1 text-center">
          {lastChecked.toLocaleTimeString()}
        </div>
      )}
    </div>
  );
}