import DeployBar from '@/components/DeployBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import ContactForm from '@/components/ContactForm';
import Plans from '@/components/Plans';
import Footer from '@/components/Footer';
import ThemeSwitch from '@/components/ThemeSwitch';

export default function Home() {
  return (
    <>
      <ThemeSwitch />
      <DeployBar />
      <main>
        <Hero />
        <About />
        <Projects />
        <ContactForm />
        <Plans />
      </main>
      <Footer />
    </>
  );
}