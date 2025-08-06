export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'Status', href: '/status' },
    { name: 'Announcements', href: '/announcements' },
    { name: 'Docs', href: '/docs' },
    { name: 'About', href: '/about' },
    { name: 'Partners', href: '/partners' },
    { name: 'Enterprise', href: '/enterprise' },
    { name: 'Careers', href: '/careers' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' }
  ];

  return (
    <footer className="border-t bg-background/95 backdrop-blur mt-32">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              © {currentYear} - 2025 OpenRouter, Inc
            </span>
            <div className="flex items-center gap-2">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.006.146-.006.293-.006.446 0 4.531-3.445 9.755-9.74 9.755-1.93 0-3.726-.567-5.232-1.526.277.033.54.04.814.04 1.622 0 3.111-.552 4.295-1.472-1.508-.027-2.782-1.026-3.22-2.395.21.04.427.06.651.06.307 0 .61-.04.895-.115-1.588-.32-2.775-1.72-2.775-3.405v-.04c.463.26 1.006.42 1.575.44-.927-.627-1.54-1.68-1.54-2.88 0-.64.172-1.227.474-1.747 1.708 2.1 4.267 3.48 7.133 3.621-.06-.254-.094-.52-.094-.787 0-1.907 1.547-3.453 3.453-3.453.994 0 1.894.42 2.526 1.093.787-.154 1.527-.44 2.194-.84-.26.8-.806 1.48-1.52 1.907.7-.08 1.36-.267 1.974-.54-.464.693-1.054 1.307-1.734 1.8z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12 12-5.372 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5.017 12c0-3.629.285-4.736 2.541-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.983 8.378 18.983 12c0 3.629-.285 4.736-2.542 4.892zM10.5 9.4l3.5 2.6-3.5 2.6V9.4z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.37 0 4.15 1.55 4.15 4.9v6.2h.02z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}