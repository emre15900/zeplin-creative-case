import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Articles from '@/components/Articles';
import CallForPapers from '@/components/CallForPapers';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Articles />
      <CallForPapers />
      <Footer />
    </main>
  );
}
