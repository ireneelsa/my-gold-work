import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Icon } from './Icon';
import { WHATSAPP_DEMO_URL } from '../constants';

export default function Footer() {
  const stripRef = useRef<HTMLDivElement>(null);
  const colsRef = useRef<HTMLDivElement>(null);
  useScrollReveal(stripRef);
  useScrollReveal(colsRef);
  return <footer className="foot"><div className="wrap">
    <div className="fstrip reveal-stagger" ref={stripRef}><a href="tel:+919160591699"><Icon name="phone" /><div><small>Call us</small><span>+91 91605 91699</span></div></a><a href={WHATSAPP_DEMO_URL} target="_blank" rel="noopener"><Icon name="chat" /><div><small>WhatsApp</small><span>Request a demo</span></div></a><a href="https://play.google.com/store/apps/details?id=com.techiearray.delivery" target="_blank" rel="noopener"><Icon name="play" /><div><small>Google Play</small><span>Get the app</span></div></a></div>
    <div className="cols reveal-stagger" ref={colsRef}><div><a className="brand" href="#home" aria-label="My Gold Work, back to top"><span className="mark" aria-hidden="true" /><span><b>My Gold Work</b><small>The Jewellery app of India</small></span></a><p className="legal">LUXE AR JEWELL PRIVATE LIMITED</p></div><div className="links"><h4>Explore</h4><a href="#how-it-works">How it works</a><a href="#features">Features</a><a href="#demo">Get a demo</a></div><div className="links"><h4>The app</h4><a href="https://play.google.com/store/apps/details?id=com.techiearray.delivery" target="_blank" rel="noopener">Get it on Google Play</a><a href="https://my-gold-work.web.app/privacyPolicy.html" target="_blank" rel="noopener">App privacy policy</a></div></div>
    <p className="end">© 2026 LUXE AR JEWELL PRIVATE LIMITED</p>
  </div></footer>;
}
