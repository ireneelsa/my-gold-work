import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Icon } from './Icon';
import { getAppStoreLink, PHONE_NUMBER, TEL_URL, WHATSAPP_DEMO_URL } from '../constants/links';

export default function DemoSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  useScrollReveal(textRef);
  useScrollReveal(imageRef);
  return <section className="demo" id="demo" aria-labelledby="demo-title"><div className="in">
    <div className="txt reveal" ref={textRef}><p className="label">Get a demo</p><h2 id="demo-title">Your craftsmanship. <em className="gi" style={{ display: 'block' }}>A new way to show it.</em></h2><p className="lead">See what LIVE TRY-ON can do for your jewellery business.</p><div className="cta"><a className="btn btn-gold" href={getAppStoreLink()} target="_blank" rel="noopener"><Icon name="download" />Download the app</a><a className="btn btn-line" href={WHATSAPP_DEMO_URL} target="_blank" rel="noopener"><Icon name="chat" />Request a demo</a></div><div className="reach"><a className="tel" href={TEL_URL}><Icon name="phone" />{PHONE_NUMBER}</a><a className="talk" href={WHATSAPP_DEMO_URL} target="_blank" rel="noopener"><Icon name="chat" />Let’s talk</a></div></div>
    <div className="img reveal-right" ref={imageRef}><figure className="slot fill has-img"><img src="/images/16.jpg" style={{ objectPosition: '50% 30%' }} alt="Jewellery shop owner holding up a phone showing a woman wearing a gold necklace, shop counter in the background" loading="lazy" /></figure></div>
  </div></section>;
}
