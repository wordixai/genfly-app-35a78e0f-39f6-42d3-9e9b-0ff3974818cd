import { Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <div className="size-5 rounded bg-primary"></div>
            </div>
            <span className="font-semibold text-lg">OpenRouter</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Models</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Chat</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Rankings</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Enterprise</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Docs</a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />
            <Input 
              placeholder="Search" 
              className="pl-10 w-64"
            />
          </div>
          <Button variant="outline" size="sm">
            Sign in
          </Button>
          <Button className="md:hidden" variant="ghost" size="icon">
            <Menu className="size-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}