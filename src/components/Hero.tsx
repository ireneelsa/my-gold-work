import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Icon } from './Icon';

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
        <a className="btn btn-gold" href="https://play.google.com/store/apps/details?id=com.techiearray.delivery" target="_blank" rel="noopener"><Icon name="download" />Download the app</a>
        <a className="btn btn-line" href="#how-it-works">See how it works</a>
      </div>
      <p className="gp"><Icon name="play" />Available on Google Play</p>
    </div>
    <div className="hero-art">
      <div className="gold-arch" style={{ left: 'auto', right: 0, top: '7%', width: '86%' }} />
      <figure className="slot arch r45 has-img" style={{ right: '4%', top: '2%', width: '86%' }}><img src="/images/01.jpg" alt="Smiling Indian woman holding up a phone that shows her wearing a gold necklace" /><figcaption className="ph"><b>IMAGE 01</b><span>Hero. Smiling Indian woman holding a phone. Necklace only on the phone screen, her own neck bare.</span></figcaption></figure>
      <figure className="slot round sq loupe min has-img" style={{ left: 0, top: '67%', width: '31%' }}><img src="/images/02.jpg" alt="Close-up of a gold necklace" loading="lazy" /><figcaption className="ph"><b>IMAGE 02</b><span>Gold necklace close-up</span></figcaption></figure>
      <figure className="slot round sq loupe min has-img" style={{ left: '9%', top: '4%', width: '22%' }}><img src="/images/03.jpg" alt="Close-up of a gold jhumka earring" loading="lazy" /><figcaption className="ph"><b>IMAGE 03</b><span>Jhumka close-up</span></figcaption></figure>
    </div>
  </div></section>
  <div className="strip reveal-stagger" ref={stripRef}><div className="wrap">
    <p className="it"><Icon name="gem" />Your designs.</p><p className="it"><Icon name="shop" />Your shop name.</p><p className="it"><Icon name="spark" />A whole new way to show jewellery.</p>
  </div></div></>;
}
