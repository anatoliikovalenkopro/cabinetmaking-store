import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import TrustBar from './components/TrustBar/TrustBar';
import Services from './components/Services/Services';
import Tables from './components/Tables/Tables';
import Process from './components/Process/Process';
import Gallery from './components/Gallery/Gallery';
import Alberta from './components/Alberta/Alberta';
import Testimonials from './components/Testimonials/Testimonials';
import Faq from './components/Faq/Faq';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import useReveal from './hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <TrustBar />
        <Services />
        <Tables />
        <Process />
        <Gallery />
        <Alberta />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
