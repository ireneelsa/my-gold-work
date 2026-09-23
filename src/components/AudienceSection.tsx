import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AudienceSection() {
  const introRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  useScrollReveal(introRef);
  useScrollReveal(cardsRef);
  return <section className="aud" aria-labelledby="aud-title"><div className="wrap">
    <div className="intro reveal" ref={introRef}><p className="label">Who it’s for</p><h2 id="aud-title">Made for <em className="gi">every kind</em> of jewellery business.</h2><div className="orn" aria-hidden="true"><i /></div></div>
    <div className="cards3 reveal-stagger" ref={cardsRef}>
      <figure className="slot r45 card has-img"><img src="/images/jewellery%20shop.jpg" alt="Gold necklace and bangles displayed in a jewellery shop showcase" loading="lazy" /><div className="over"><h3>Local jewellery shops</h3></div></figure>
      <figure className="slot r45 card has-img"><img src="/images/05.jpg" alt="Hands turning a printed jewellery catalogue beside a phone showing designs" loading="lazy" /><div className="over"><h3>Catalogue retailers</h3></div></figure>
      <figure className="slot r45 card has-img"><img src="/images/06.jpg" alt="A goldsmith’s hands shaping a piece of gold jewellery" loading="lazy" /><div className="over"><h3>Traditional goldsmiths</h3></div></figure>
    </div>
  </div></section>;
}
