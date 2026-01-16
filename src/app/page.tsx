import Header from '@/components/Header';
import Hero from '@/components/Hero';
import JournalScope from '@/components/JournalScope';
import Journals from '@/components/Journals';
import CallForPapers from '@/components/CallForPapers';
import CurrentArticles from '@/components/CurrentArticles';
import CardShowcase from '@/components/CardShowcase';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/ui/CookieBanner';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <JournalScope />
      <Journals />
      <CallForPapers />
      <CurrentArticles />
      <CardShowcase />
      <Footer />
      
      {/* Fixed Cookie Banner */}
      <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:max-w-[600px] z-50">
        <CookieBanner />
      </div>
    </main>
  );
}
