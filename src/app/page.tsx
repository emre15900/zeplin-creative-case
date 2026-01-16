import Header from '@/components/Header';
import Hero from '@/components/Hero';
import JournalScope from '@/components/JournalScope';
import Journals from '@/components/Journals';
import CallForPapers from '@/components/CallForPapers';
import CurrentArticles from '@/components/CurrentArticles';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <JournalScope />
      <Journals />
      <CallForPapers />
      <CurrentArticles />
      <Footer />
    </main>
  );
}
