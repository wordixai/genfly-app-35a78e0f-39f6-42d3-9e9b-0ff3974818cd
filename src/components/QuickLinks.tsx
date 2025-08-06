import { ExternalLink, Blocks, BarChart3 } from 'lucide-react';

export function QuickLinks() {
  const links = [
    {
      title: 'Explore Models',
      description: 'Discover AI models across our collection, from all major labs and providers.',
      href: '/models',
      linkText: 'View models',
      icon: Blocks
    },
    {
      title: 'Model & App Rankings',
      description: 'Explore token usage across models, labs, and public applications.',
      href: '/rankings',
      linkText: 'View rankings',
      icon: BarChart3
    }
  ];

  return (
    <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-8 gap-16 md:gap-8">
      <div className="flex flex-col gap-4 h-full w-full md:col-span-3">
        {links.map((link) => (
          <a key={link.title} className="flex-1" href={link.href}>
            <div className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg p-4 flex flex-col gap-4 group h-full">
              <div className="flex flex-col gap-2 h-full">
                <h3 className="group-hover/card:text-slate-12 transition-colors duration-200 text-lg font-semibold">
                  <link.icon className="inline size-6 mr-2 mb-1" />
                  <span>{link.title}</span>
                </h3>
                <p className="text-sm text-muted-foreground">{link.description}</p>
              </div>
              <span className="text-muted-foreground inline-flex items-center">
                {link.linkText}
                <ExternalLink className="ml-1 inline-flex size-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="md:col-span-5 w-full">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Recent Announcements</h3>
            <a className="text-slate-10 group inline-flex text-sm" href="/announcements">
              <span className="inline-flex items-center gap-1">
                <span>View all</span>
                <ExternalLink className="inline-flex size-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          </div>
          <div className="flex flex-col gap-6">
            {[
              {
                title: 'Audio Inputs and PDF URLs for Apps',
                description: 'Add voice input and send PDFs by URL, on any model.',
                date: '8/3/2025',
                isNew: true,
                href: '/announcements/audio-inputs-and-pdf-urls-for-apps'
              },
              {
                title: 'Presets: How To Seamlessly Transfer Model Configurations Across Apps',
                description: 'Customize once and use everywhere. Server-side presets now simplify your model workflows.',
                date: '7/28/2025',
                isNew: true,
                href: '/announcements/presets-how-to-seamlessly-transfer-model-configurations-across-apps'
              },
              {
                title: 'New Privacy-Focused Provider Drop: Venice',
                description: 'Venice joins OpenRouter as a new provider, offering its flagship uncensored model for private, powerful, and non-restrictive AI.',
                date: '7/14/2025',
                isNew: false,
                href: '/announcements/new-privacy-focused-provider-drop-venice'
              }
            ].map((announcement) => (
              <a key={announcement.title} className="group" href={announcement.href}>
                <div className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg flex flex-col gap-2 p-4">
                  <h3 className="group-hover/card:text-slate-12 duration-200 text-lg font-medium transition-colors">
                    {announcement.title}
                  </h3>
                  <p className="text-slate-10 text-sm line-clamp-2">{announcement.description}</p>
                  <div className="flex items-center text-muted-foreground text-xs">
                    <time>{announcement.date}</time>
                    {announcement.isNew && (
                      <span className="bg-muted text-muted-foreground ml-2 rounded-sm px-1.5 py-0.5 text-[10px]">New</span>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}