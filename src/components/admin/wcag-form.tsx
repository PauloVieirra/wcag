import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { X, Plus } from 'lucide-react';
import { Alert, AlertDescription } from '../ui/alert';
import { WCAGCriterion } from '../wcag-card';
import { supabase } from '../../utils/supabase/client';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

interface WCAGFormProps {
  onSubmit: () => void;
  session: any;
}

export function WCAGForm({ onSubmit, session }: WCAGFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const [formData, setFormData] = useState({
    criterion_id: '',
    title: '',
    level: 'A' as 'A' | 'AA' | 'AAA',
    principle: '',
    category: '',
    description: '',
    keywords: [] as string[],
    url: ''
  });

  const [newKeyword, setNewKeyword] = useState('');

  const principles = ['Perceptível', 'Operável', 'Compreensível', 'Robusto'];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addKeyword = () => {
    if (newKeyword.trim() && !formData.keywords.includes(newKeyword.trim())) {
      setFormData(prev => ({
        ...prev,
        keywords: [...prev.keywords, newKeyword.trim()]
      }));
      setNewKeyword('');
    }
  };

  const removeKeyword = (keyword: string) => {
    setFormData(prev => ({
      ...prev,
      keywords: prev.keywords.filter(k => k !== keyword)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      if (!session?.access_token) {
        setError('Sessão expirada. Faça login novamente.');
        return;
      }

      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-6cf82b18/wcag-cards`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(`Erro ao criar critério: ${errorData.error}`);
        return;
      }

      setSuccess('Critério WCAG criado com sucesso!');
      
      // Reset form
      setFormData({
        criterion_id: '',
        title: '',
        level: 'A',
        principle: '',
        category: '',
        description: '',
        keywords: [],
        url: ''
      });

      // Notify parent component
      onSubmit();

    } catch (err) {
      console.error('Create card error:', err);
      setError('Erro inesperado ao criar critério');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeywordKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addKeyword();
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Adicionar Novo Critério WCAG</CardTitle>
        <CardDescription>
          Preencha os campos abaixo para adicionar um novo critério de acessibilidade
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="criterion_id">ID do Critério *</Label>
              <Input
                id="criterion_id"
                value={formData.criterion_id}
                onChange={(e) => handleInputChange('criterion_id', e.target.value)}
                placeholder="Ex: 1.1.1"
                required
                disabled={isLoading}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="level">Nível *</Label>
              <Select 
                value={formData.level} 
                onValueChange={(value) => handleInputChange('level', value)}
                disabled={isLoading}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o nível" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A">A</SelectItem>
                  <SelectItem value="AA">AA</SelectItem>
                  <SelectItem value="AAA">AAA</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Título *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              placeholder="Ex: 1.1.1 Conteúdo não textual [A]"
              required
              disabled={isLoading}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="principle">Princípio *</Label>
              <Select 
                value={formData.principle} 
                onValueChange={(value) => handleInputChange('principle', value)}
                disabled={isLoading}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o princípio" />
                </SelectTrigger>
                <SelectContent>
                  {principles.map(principle => (
                    <SelectItem key={principle} value={principle}>
                      {principle}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Categoria *</Label>
              <Input
                id="category"
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                placeholder="Ex: Alternativas em Texto"
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descrição *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Descreva o critério de acessibilidade..."
              rows={4}
              required
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="url">URL do Critério</Label>
            <Input
              id="url"
              type="url"
              value={formData.url}
              onChange={(e) => handleInputChange('url', e.target.value)}
              placeholder="https://www.w3.org/WAI/WCAG21/Understanding/..."
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label>Palavras-chave</Label>
            <div className="flex gap-2">
              <Input
                value={newKeyword}
                onChange={(e) => setNewKeyword(e.target.value)}
                onKeyPress={handleKeywordKeyPress}
                placeholder="Digite uma palavra-chave"
                disabled={isLoading}
              />
              <Button 
                type="button" 
                variant="outline" 
                onClick={addKeyword}
                disabled={isLoading || !newKeyword.trim()}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            
            {formData.keywords.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.keywords.map((keyword, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {keyword}
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 ml-1"
                      onClick={() => removeKeyword(keyword)}
                      disabled={isLoading}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {error && (
            <Alert className="border-destructive">
              <AlertDescription className="text-destructive">
                {error}
              </AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="border-green-500">
              <AlertDescription className="text-green-700">
                {success}
              </AlertDescription>
            </Alert>
          )}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Criando critério...' : 'Criar critério WCAG'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}