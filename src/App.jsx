import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PhotoStrip from './components/PhotoStrip';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Accomplishments from './components/Accomplishments';
import Activities from './components/Activities';
import Hobbies from './components/Hobbies';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <article className="paper">
        <div id="home" className="home-block">
          <Hero />
          <PhotoStrip />
        </div>
        <main>
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Accomplishments />
          <Activities />
          <Hobbies />
          <Blogs />
          <Contact />
        </main>
        <Footer />
      </article>
    </LanguageProvider>
  );
}
