import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModelCard } from './ModelCard';

export function FeaturedModels() {
  const featuredModels = [
    {
      name: 'Gemini 2.5 Pro',
      provider: 'google',
      providerUrl: 'https://openrouter.ai/google',
      modelUrl: 'https://openrouter.ai/google/gemini-2.5-pro',
      iconSrc: 'https://openrouter.ai/images/icons/GoogleGemini.svg',
      tokensPerWeek: '181.1B',
      latency: '2.6s',
      weeklyGrowth: '-9.99%',
      isFeatured: false
    },
    {
      name: 'Horizon Beta',
      provider: 'openrouter',
      providerUrl: 'https://openrouter.ai/openrouter',
      modelUrl: 'https://openrouter.ai/openrouter/horizon-beta',
      iconSrc: 'https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://openrouter.ai/&size=256',
      tokensPerWeek: '156.5B',
      latency: '1.3s',
      weeklyGrowth: '--',
      isNew: true,
      isFeatured: true
    },
    {
      name: 'Claude Sonnet 4',
      provider: 'anthropic',
      providerUrl: 'https://openrouter.ai/anthropic',
      modelUrl: 'https://openrouter.ai/anthropic/claude-sonnet-4',
      iconSrc: 'https://openrouter.ai/images/icons/Anthropic.svg',
      tokensPerWeek: '658.4B',
      latency: '2.2s',
      weeklyGrowth: '-6.54%',
      isFeatured: false
    }
  ];

  return (
    <div className="w-full min-w-80 space-y-3 md:w-auto">
      {/* Mobile featured model */}
      <div className="block md:hidden">
        <ModelCard {...featuredModels[1]} />
        <div className="flex items-center justify-between px-2 pt-4">
          <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
          <a className="text-primary text-xs hover:underline" href="https://openrouter.ai/rankings?view=trending">
            View Trending
            <ExternalLink className="inline-block ml-px size-3" />
          </a>
        </div>
      </div>

      {/* Desktop featured models */}
      <div className="hidden space-y-3 md:block">
        <div className="flex items-center justify-between">
          <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
          <Button variant="link" className="h-6 px-1.5 text-xs text-primary gap-0">
            View Trending
            <ExternalLink className="inline-block ml-px size-3" />
          </Button>
        </div>
        <div className="space-y-3">
          {featuredModels.map((model) => (
            <ModelCard key={model.name} {...model} />
          ))}
        </div>
      </div>
    </div>
  );
}