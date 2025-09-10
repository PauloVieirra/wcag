import { useState } from 'react';
import { Input } from './ui/input';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export function SearchBar({ onSearch, placeholder = "Buscar critérios da WCAG..." }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <section className="w-full max-w-2xl mx-auto mb-8" aria-label="Pesquisa de critérios WCAG">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" aria-hidden="true" />
        <Input
          type="search"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 h-12 text-base bg-input-background border-2 focus:border-primary transition-colors"
          aria-label="Campo de busca para critérios WCAG"
          autoComplete="off"
        />
      </div>
      {searchQuery && (
        <p className="mt-2 text-sm text-muted-foreground" aria-live="polite">
          Pesquisando por: "{searchQuery}"
        </p>
      )}
    </section>
  );
}