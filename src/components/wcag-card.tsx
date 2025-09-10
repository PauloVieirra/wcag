import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export interface WCAGCriterion {
  id: string;
  title: string;
  level: 'A' | 'AA' | 'AAA';
  principle: string;
  category: string;
  description: string;
  keywords: string[];
  url: string;
}

interface WCAGCardProps {
  criterion: WCAGCriterion;
}

const levelColors = {
  'A': 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-200',
  'AA': 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900 dark:text-blue-200',
  'AAA': 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900 dark:text-purple-200'
};

const principleColors = {
  'Perceptível': 'bg-pink-50 text-pink-700 dark:bg-pink-900/20 dark:text-pink-300',
  'Operável': 'bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300',
  'Compreensível': 'bg-cyan-50 text-cyan-700 dark:bg-cyan-900/20 dark:text-cyan-300',
  'Robusto': 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300'
};

export function WCAGCard({ criterion }: WCAGCardProps) {
  const handleExternalLink = () => {
    window.open(criterion.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card 
      className="h-full transition-all duration-200 hover:shadow-lg hover:scale-[1.02] focus-within:ring-2 focus-within:ring-primary/50 bg-card border border-border"
      tabIndex={0}
      role="article"
      aria-labelledby={`criterion-title-${criterion.id}`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 
              id={`criterion-title-${criterion.id}`}
              className="font-medium leading-tight mb-2"
            >
              {criterion.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge 
                variant="outline" 
                className={levelColors[criterion.level]}
                aria-label={`Nível ${criterion.level}`}
              >
                {criterion.level}
              </Badge>
              <Badge 
                variant="secondary"
                className={principleColors[criterion.principle as keyof typeof principleColors] || 'bg-gray-50 text-gray-700'}
                aria-label={`Princípio: ${criterion.principle}`}
              >
                {criterion.principle}
              </Badge>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleExternalLink}
            aria-label={`Acessar critério completo ${criterion.id} em nova aba`}
            className="shrink-0 p-2"
            title="Acessar critério completo"
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Categoria:</p>
            <p className="text-sm font-medium">{criterion.category}</p>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground mb-2">Descrição:</p>
            <p className="text-sm leading-relaxed">{criterion.description}</p>
          </div>
          
          {criterion.keywords.length > 0 && (
            <div>
              <p className="text-sm text-muted-foreground mb-2">Palavras-chave:</p>
              <div className="flex flex-wrap gap-1">
                {criterion.keywords.map((keyword, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-xs bg-accent/50"
                    aria-label={`Palavra-chave: ${keyword}`}
                  >
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}