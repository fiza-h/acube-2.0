import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Stats from '@/components/Stats';
import HowItWorks from '@/components/HowItWorks';
import TalentCategories from '@/components/TalentCategories';
import TalentShowcase from '@/components/TalentShowcase';
import Testimonials from '@/components/Testimonials';
import DimensionLabsHomeSection from '@/components/DimensionLabsHomeSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative bg-background text-foreground selection:bg-frosted-blue/30">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Mission />
        <Stats />
        <HowItWorks />
        <TalentCategories />
        <TalentShowcase />
        <Testimonials />
        <DimensionLabsHomeSection />
        <Footer />
      </div>
    </main>
  );
}
