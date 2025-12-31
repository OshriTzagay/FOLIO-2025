import Navigation from '@/components/portfolio/Navigation';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import TechStackSection from '@/components/portfolio/TechStackSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';
import ScrollButtons from '@/components/portfolio/ScrollButtons';
import { ThemeProvider } from '@/hooks/use-theme';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <TechStackSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
        <ScrollButtons />
      </div>
    </ThemeProvider>
  );
};

export default Index;