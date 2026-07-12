import { LanguageProvider } from "./i18n/LanguageContext";
import { ThemeProvider } from "./theme/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Work } from "./components/Work";
import { Founders } from "./components/Founders";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Founders />
        <Contact />
      </main>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}
