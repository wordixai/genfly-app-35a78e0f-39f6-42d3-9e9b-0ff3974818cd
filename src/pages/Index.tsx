import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedModels } from '@/components/FeaturedModels';
import { StatsSection } from '@/components/StatsSection';
import { GetStartedSection } from '@/components/GetStartedSection';
import { FeatureCards } from '@/components/FeatureCards';
import { QuickLinks } from '@/components/QuickLinks';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground tabular-nums">
      <Header />
      
      <main>
        <div className="flex flex-1 flex-col items-center min-h-[calc(100vh-80px)] md:min-h-screen mx-auto bg-background text-foreground mb-16 mt-0 max-w-full lg:mt-8">
          <HeroSection />
          
          <div className="hidden md:block w-full max-w-4xl">
            <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-16 min-w-full flex-shrink-0 justify-end">
              <div className="w-full min-w-80 space-y-3 md:w-auto">
                <FeaturedModels />
              </div>
            </div>
          </div>

          <div className="block md:hidden w-full max-w-4xl px-6">
            <FeaturedModels />
          </div>

          <StatsSection />
          <GetStartedSection />
          <FeatureCards />
          <QuickLinks />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;