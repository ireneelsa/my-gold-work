import Header from './components/Header';
import Hero from './components/Hero';
import AudienceSection from './components/AudienceSection';
import HowItWorks from './components/HowItWorks';
import FeaturesSection from './components/FeaturesSection';
import DemoSection from './components/DemoSection';
import Footer from './components/Footer';

export default function App() {
  return <><Header /><main id="main"><Hero /><AudienceSection /><HowItWorks /><FeaturesSection /><DemoSection /></main><Footer /></>;
}
