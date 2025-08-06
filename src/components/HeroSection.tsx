import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function HeroSection() {
  return (
    <div className="flex flex-col items-center gap-24 px-6 md:gap-28 md:px-8 md:pt-8">
      <div className="flex w-full max-w-4xl flex-col justify-center py-8 md:py-0">
        <div className="mb-3 flex flex-col gap-2 md:-mb-48 md:gap-1">
          <h1 className="my-0 w-full py-0 text-5xl font-semibold">
            <span className="mb-1 hidden md:block">The Unified</span>
            <span className="hidden md:block">Interface For LLMs</span>
            <span className="flex flex-col gap-0.5 text-3xl md:hidden">
              <div>The Unified</div>
              <div>Interface For LLMs</div>
            </span>
          </h1>
          <p className="text-slate-11 text-md mb-4 md:mb-8 md:pt-2 md:text-xl">
            Better <a href="#" className="text-primary hover:underline">prices</a>, better{' '}
            <a href="#" className="text-primary hover:underline">uptime</a>, no subscription.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-16 min-w-full flex-shrink-0">
          <div className="group/card text-card-foreground rounded-xl transition-all duration-200 hover:border-slate-7 hover:text-slate-12 border hover:shadow-lg bg-background relative w-full p-2 shadow-md md:translate-y-5">
            {/* Routing curves SVG */}
            <div className="absolute -right-10 top-1/2 hidden -translate-y-1/2 translate-x-1/3 md:flex">
              <svg className="h-80 w-12" viewBox="-5 0 50 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <title>Routing Curves</title>
                <g stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 150C12 150 15 75 25 65" className="origin-center transition-all duration-300 text-slate-6" />
                  <path d="M2 160C12 160 22 160 25 160" className="origin-center transition-all duration-300 text-primary" />
                  <path d="M2 170C12 170 15 255 25 255" className="origin-center transition-all duration-300 text-slate-6" />
                </g>
                <g className="text-slate-7">
                  <circle cx="35" cy="60" r="4" fill="currentColor" className="origin-center transition-all duration-300 text-slate-7" />
                  <circle cx="35" cy="160" r="6" fill="currentColor" className="origin-center transition-all duration-300 text-primary" />
                  <circle cx="35" cy="260" r="4" fill="currentColor" className="origin-center transition-all duration-300 text-slate-7" />
                </g>
              </svg>
            </div>

            <div className="flex w-full items-center justify-between gap-3 flex-row">
              <Input 
                className="w-full appearance-none py-2 transition duration-150 ease-in-out placeholder:text-foreground/30 shadow-border focus:shadow-inner focus:outline-none text-muted-foreground bg-background focus:bg-background/80 h-10 flex-1 rounded-lg border-0 px-4"
                placeholder="Start a message..."
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
              <Button className="aspect-square h-10 px-3 transition-colors md:aspect-auto md:flex-shrink-0 group">
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>

          <div className="w-full min-w-80 space-y-3 md:w-auto">
            {/* Mobile routing curves */}
            <div className="block md:hidden">
              <svg width="100%" className="h-10" viewBox="0 0 320 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <title>Routing Curves</title>
                <g stroke="currentColor" strokeWidth="1.5">
                  <path d="M155 2C160 15 60 5 60 18" className="origin-center transition-all duration-300 text-slate-6" />
                  <path d="M160 2C160 12 160 15 160 18" className="origin-center transition-all duration-300 text-primary" />
                  <path d="M165 2C160 15 260 5 260 18" className="origin-center transition-all duration-300 text-slate-6" />
                </g>
                <g className="text-slate-7">
                  <circle cy="24" cx="60" r="3" fill="currentColor" className="origin-center transition-all duration-300 text-slate-7" />
                  <circle cy="24" cx="160" r="4" fill="currentColor" className="origin-center transition-all duration-300 text-primary" />
                  <circle cy="24" cx="260" r="3" fill="currentColor" className="origin-center transition-all duration-300 text-slate-7" />
                </g>
              </svg>
            </div>

            {/* Model provider icons - mobile */}
            <div className="grid grid-cols-3 gap-4 pb-3 md:hidden">
              {[
                { name: 'Google', src: 'https://openrouter.ai/images/icons/GoogleGemini.svg' },
                { name: 'OpenRouter', src: 'https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://openrouter.ai/&size=256' },
                { name: 'Anthropic', src: 'https://openrouter.ai/images/icons/Anthropic.svg' }
              ].map((provider) => (
                <Button key={provider.name} variant="ghost" className="h-11 p-4">
                  <div className="flex items-center justify-center flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 size-8 transition-transform group-hover:scale-110 group-hover:rotate-12">
                    <div className="overflow-hidden rounded-full">
                      <img width="256" height="256" alt={`Favicon for ${provider.name}`} className="h-full w-full object-cover" src={provider.src} />
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}