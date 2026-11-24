import { LanguageProvider } from "./i18n/LanguageContext";
import { ThemeProvider } from "./theme/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { TechMarquee } from "./components/TechMarquee";
import { Process } from "./components/Process";
import { Examples } from "./components/Examples";
import { Work } from "./components/Work";
import { Founders } from "./components/Founders";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Services />
        <Examples />
        <Process />
        <Work />
        <Founders />
        <Contact />
      </main>
        <Footer />
        <WhatsAppFloat />
      </LanguageProvider>
    </ThemeProvider>
  );
}
