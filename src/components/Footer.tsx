import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Icon } from './Icon';
import { FACEBOOK_URL, INSTAGRAM_URL, PHONE_NUMBER, PRIVACY_POLICY_URL, TEL_URL, WHATSAPP_DEMO_URL, YOUTUBE_INSTALL_VIDEO_URL, getAppStoreLink } from '../constants/links';

export default function Footer() {
  const stripRef = useRef<HTMLDivElement>(null);
  const colsRef = useRef<HTMLDivElement>(null);
  useScrollReveal(stripRef);
  useScrollReveal(colsRef);
  return <footer className="foot"><div className="wrap">
    <div className="fstrip reveal-stagger" ref={stripRef}><a href={TEL_URL}><Icon name="phone" /><div><small>Call us</small><span>{PHONE_NUMBER}</span></div></a><a href={WHATSAPP_DEMO_URL} target="_blank" rel="noopener"><Icon name="chat" /><div><small>WhatsApp</small><span>Request a demo</span></div></a><a href={getAppStoreLink()} target="_blank" rel="noopener"><span className="store-icons"><Icon name="googleplay" className="ic ic-fill" aria-hidden="false" aria-label="Google Play" /><Icon name="appstore" className="ic ic-fill" aria-hidden="false" aria-label="App Store" /></span><div><small>Play Store and App Store</small><span>Get the app</span></div></a></div>
    <div className="cols reveal-stagger" ref={colsRef}><div><a className="brand" href="#home" aria-label="My Gold Work, back to top"><span className="mark" aria-hidden="true" /><span><b>My Gold Work</b><small>The Jewellery app of India</small></span></a><p className="legal">LUXE AR JEWELL PRIVATE LIMITED</p></div><div className="links"><h4>Explore</h4><a href="#how-it-works">How it works</a><a href="#features">Features</a><a href="#demo">Get a demo</a></div><div className="links social"><h4>Social</h4><a href={INSTAGRAM_URL} target="_blank" rel="noopener"><Icon name="instagram" />Instagram</a><a href={FACEBOOK_URL} target="_blank" rel="noopener"><Icon name="facebook" />Facebook</a><a href={YOUTUBE_INSTALL_VIDEO_URL} target="_blank" rel="noopener"><Icon name="youtube" />Youtube</a></div><div className="links"><h4>The app</h4><a href={getAppStoreLink()} target="_blank" rel="noopener">Get the app</a><a href={PRIVACY_POLICY_URL} target="_blank" rel="noopener">App privacy policy</a></div></div>
    <p className="end">© 2026 LUXE AR JEWELL PRIVATE LIMITED</p>
  </div></footer>;
}
