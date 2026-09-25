import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icon';
import { WHATSAPP_DEMO_URL } from '../constants';

const playUrl = 'https://play.google.com/store/apps/details?id=com.techiearray.delivery';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => setMenuOpen(false);
  useEffect(() => {
    if (!menuOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) closeMenu();
    };
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') closeMenu(); };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <header className="top">
      <div className="wrap">
        <details className="menu" ref={menuRef} open={menuOpen} onToggle={(event) => setMenuOpen(event.currentTarget.open)}>
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
        <div className="cta-r"><a className="call" href="tel:+919160591699" aria-label="Call us"><Icon name="phone" /></a><a className="btn btn-gold btn-sm" href={playUrl} target="_blank" rel="noopener">Get the app</a></div>
      </div>
    </header>
    <div className="mbar">
      <a className="btn btn-gold" href={playUrl} target="_blank" rel="noopener">Get the app</a>
      <a className="btn btn-line" href={WHATSAPP_DEMO_URL} target="_blank" rel="noopener">Request a demo</a>
    </div>
  </>;
}
