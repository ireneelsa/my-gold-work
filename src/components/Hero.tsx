import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Icon } from './Icon';
import { getAppStoreLink } from '../constants/links';

export default function Hero() {
  const stripRef = useRef<HTMLDivElement>(null);
  useScrollReveal(stripRef);
  return <><section className="hero" aria-labelledby="hero-title"><div className="wrap">
    <div className="hero-copy">
      <p className="label">Made for jewellery shop owners</p>
      <h1 id="hero-title">Turn a design<br />into <em className="gi" style={{ whiteSpace: 'nowrap' }}>a decision.</em></h1>
      <p className="lead">Let your customers fall in love with the look.</p>
      <p className="lead2">Bring your catalogue to life with <b>LIVE TRY-ON.</b></p>
      <div className="cta">
        <a className="btn btn-gold" href={getAppStoreLink()} target="_blank" rel="noopener"><Icon name="download" />Download the app</a>
        <a className="btn btn-line" href="#how-it-works">See how it works</a>
      </div>
    </div>
    <div className="hero-art">
      <div className="gold-arch" style={{ left: 'auto', right: 0, top: '7%', width: '86%' }} />
      <figure className="slot arch r45 has-img" style={{ right: '4%', top: '2%', width: '86%' }}><img src="/images/01.jpg" alt="Smiling Indian man pointing at a phone showing a woman wearing a gold necklace, jewellery shop in the background" /><figcaption className="ph"><b>IMAGE 01</b><span>Hero. Smiling Indian man pointing at a phone. Necklace shown on the phone screen, jewellery shop in the background.</span></figcaption></figure>
    </div>
  </div></section>
  <div className="strip reveal-stagger" ref={stripRef}><div className="wrap">
    <p className="it"><Icon name="necklace" />Your designs.</p><p className="it"><Icon name="shop" />Your shop name.</p><p className="it"><Icon name="spark" />A whole new way to show jewellery.</p>
  </div></div></>;
}
