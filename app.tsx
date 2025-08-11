import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServiceSection';
import { WorkSection } from './components/WorkSection';
import { ContactSection } from './components/ContactSection';


export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ServicesSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">
              © 2025 Studio VDB. All rights reserved.
            </p>
            <p className="text-sm">
              Independent Creative Studio
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}