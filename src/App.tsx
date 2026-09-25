import Header from './components/Header';
import Hero from './components/Hero';
import AudienceSection from './components/AudienceSection';
import HowItWorks from './components/HowItWorks';
import FeaturesSection from './components/FeaturesSection';
import DemoSection from './components/DemoSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { useAnchorScroll } from './hooks/useAnchorScroll';

export default function App() {
  useAnchorScroll();
  return <><Header /><main id="main"><Hero /><AudienceSection /><HowItWorks /><FeaturesSection /><DemoSection /></main><Footer /><FloatingWhatsApp /></>;
}
