import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Icon } from './Icon';

const demoUrl = 'https://wa.me/919160591699?text=Hello%20My%20Gold%20Work%2C%20I%20own%20a%20jewellery%20business%20and%20would%20like%20a%20demo.';
export default function DemoSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  useScrollReveal(textRef);
  useScrollReveal(imageRef);
  return <section className="demo" id="demo" aria-labelledby="demo-title"><div className="in">
    <div className="txt reveal" ref={textRef}><p className="label">Get a demo</p><h2 id="demo-title">Your craftsmanship. <em className="gi" style={{ display: 'block' }}>A new way to show it.</em></h2><p className="lead">See what LIVE TRY-ON can do for your jewellery business.</p><div className="cta"><a className="btn btn-gold" href="https://play.google.com/store/apps/details?id=com.techiearray.delivery" target="_blank" rel="noopener"><Icon name="download" />Download the app</a><a className="btn btn-line" href={demoUrl} target="_blank" rel="noopener"><Icon name="chat" />Request a demo</a></div><div className="reach"><a className="tel" href="tel:+919160591699"><Icon name="phone" />+91 91605 91699</a><a className="talk" href={demoUrl} target="_blank" rel="noopener"><Icon name="chat" />Let’s talk</a></div></div>
    <div className="img reveal-right" ref={imageRef}><figure className="slot fill has-img"><img src="/images/16.jpg" style={{ objectPosition: '60% 50%' }} alt="Woman at home trying a gold jewellery design on her phone" loading="lazy" /></figure></div>
  </div></section>;
}
