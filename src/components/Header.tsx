import { useState } from 'react';
import { Icon } from './Icon';
import { WHATSAPP_DEMO_URL } from '../constants';

const playUrl = 'https://play.google.com/store/apps/details?id=com.techiearray.delivery';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <header className="top">
      <div className="wrap">
        <details className="menu" open={menuOpen} onToggle={(event) => setMenuOpen(event.currentTarget.open)}>
          <summary aria-label="Menu"><Icon name="menu" /></summary>
          <nav className="drop" aria-label="Menu">
            <a href="#how-it-works" onClick={closeMenu}>How it works</a>
            <a href="#features" onClick={closeMenu}>Features</a>
            <a href="#demo" onClick={closeMenu}>Get a demo</a>
          </nav>
        </details>
        <nav aria-label="Main">
          <a href="#how-it-works">How it works</a>
          <a href="#features">Features</a>
          <a href="#demo">Get a demo</a>
        </nav>
        <a className="brand" href="#home" aria-label="My Gold Work, back to top">
          <span className="mark" aria-hidden="true" />
          <span><b>My Gold Work</b><small>The Jewellery app of India</small></span>
        </a>
        <div className="cta-r"><a className="btn btn-gold btn-sm" href={playUrl} target="_blank" rel="noopener">Get the app</a></div>
      </div>
    </header>
    <div className="mbar">
      <a className="btn btn-gold" href={playUrl} target="_blank" rel="noopener">Get the app</a>
      <a className="btn btn-line" href={WHATSAPP_DEMO_URL} target="_blank" rel="noopener">Request a demo</a>
    </div>
  </>;
}
