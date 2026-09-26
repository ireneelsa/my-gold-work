import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Icon } from './Icon';

const features = [
  ['12.jpg', 'Hand holding a phone showing the LIVE TRY-ON screen with a gold necklace on a woman, and a row of other necklace options below, in a busy jewellery shop with staff at the counters', 'camera', 'LIVE TRY-ON', 'Let customers see how a design looks on them through their phone camera.'],
  ['13.jpg', 'Hand holding a phone whose camera frames a gold necklace on a display bust, in a busy jewellery shop with staff at the counter', 'upload', 'Upload your designs', 'Bring your own jewellery photos into the app. Ready for try-on after approval.'],
  ['14.jpg', 'Hand holding a phone showing a gold necklace product page while a finger taps the Share button, jewellery shop in the background', 'share', 'Share with your shop name', 'Send a jewellery link on WhatsApp. Customers try it from home.'],
  ['15.jpg', 'Hand tapping the heart on a gold necklace product page, with a "Product added to Saved" message, jewellery shop in the background', 'heart', 'Save favourite designs', 'Keep selected designs together, ready to show when a customer asks.'],
] as const;

export default function FeaturesSection() {
  const introRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  useScrollReveal(introRef);
  useScrollReveal(cardsRef);
  return <section className="feat" id="features" aria-labelledby="feat-title"><div className="wrap">
    <div className="intro reveal" ref={introRef}><p className="label">Features</p><h2 id="feat-title">Everything you need to <em className="gi">show your jewellery.</em></h2><div className="orn" aria-hidden="true"><i /></div></div>
    <div className="cards2 reveal-stagger" ref={cardsRef}>{features.map(([image, alt, icon, title, text]) => <figure className="slot r32 card has-img" key={image}><img src={`/images/${image}`} alt={alt} loading="lazy" /><div className="over"><Icon name={icon} /><h3>{title}</h3><p>{text}</p></div></figure>)}</div>
  </div></section>;
}
