import { ExternalLink } from 'lucide-react';

interface ModelCardProps {
  name: string;
  provider: string;
  providerUrl: string;
  modelUrl: string;
  iconSrc: string;
  tokensPerWeek: string;
  latency: string;
  weeklyGrowth?: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

export function ModelCard({
  name,
  provider,
  providerUrl,
  modelUrl,
  iconSrc,
  tokensPerWeek,
  latency,
  weeklyGrowth,
  isNew = false,
  isFeatured = false
}: ModelCardProps) {
  const borderClass = isFeatured ? 'border-primary md:border-primary' : 'border-slate-6';
  const growthColorClass = weeklyGrowth?.startsWith('-') ? 'text-red-10' : weeklyGrowth === '--' ? 'text-slate-9' : 'text-green-10';

  return (
    <div className={`group/card text-card-foreground transition-all duration-200 hover:text-slate-12 hover:shadow-lg group bg-background rounded-lg border p-4 shadow-sm hover:border-primary ${borderClass}`}>
      <div className="space-y-2">
        <div>
          <a className="hover:underline" href={modelUrl}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <h3 className="text-foreground font-medium">{name}</h3>
                {isNew && (
                  <span className="bg-muted text-muted-foreground rounded-sm px-1.5 py-0.5 text-[10px]">New</span>
                )}
              </div>
              <div className="items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 hidden md:flex transition-transform group-hover:scale-110 group-hover:rotate-12">
                <div className="overflow-hidden rounded-full">
                  <img width="256" height="256" alt={`Favicon for ${provider}`} className="h-full w-full object-cover" src={iconSrc} />
                </div>
              </div>
            </div>
          </a>
          <div className="flex items-center">
            <span className="text-muted-foreground text-xs">
              by <a className="text-primary hover:underline" href={providerUrl}>{provider}</a>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 pt-2 md:pt-0">
          <div>
            <p className="text-green-10 text-sm font-medium">{tokensPerWeek}</p>
            <p className="text-muted-foreground text-[10px]">Tokens/wk</p>
          </div>
          <div>
            <p className="text-sm font-medium">{latency}</p>
            <p className="text-muted-foreground text-[10px]">Latency</p>
          </div>
          <div>
            <p className={`text-sm font-medium ${growthColorClass}`}>{weeklyGrowth || '--'}</p>
            <p className="text-muted-foreground text-[10px]">Weekly growth</p>
          </div>
        </div>
      </div>
    </div>
  );
}