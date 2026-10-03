import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const screens = [
  { title: 'Start the try-on', text: 'One tap and the camera opens, ready to go.', image: '09.jpg', alt: "The Free Try-On screen with a Got it, Let's Try button" },
  { title: 'See it live', text: 'The design shows on the customer, live, through the camera.', image: '10.jpg', alt: 'LIVE TRY-ON showing a gold necklace on a customer, live' },
] as const;

const INTERVAL_MS = 3000;

// Static, self-contained step sequence (heading -> phone -> caption, all in normal flow, nothing
// pinned or scrolled away) - same auto-advance/hover-pause/click-to-jump/reduced-motion pattern as
// ShareSequence and UploadDesignsSequence, so all three "how it works"-style sections behave alike.
export default function HowItWorks() {
  const introRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const pausedRef = useRef(false);
  const [resetKey, setResetKey] = useState(0);
  useScrollReveal(introRef);
  useScrollReveal(cardRef);

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => {
      if (!pausedRef.current) setIndex((current) => (current + 1) % screens.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [resetKey]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const pause = () => { pausedRef.current = true; };
    const resume = () => { pausedRef.current = false; };
    card.addEventListener('mouseenter', pause);
    card.addEventListener('mouseleave', resume);
    return () => {
      card.removeEventListener('mouseenter', pause);
      card.removeEventListener('mouseleave', resume);
    };
  }, []);

  const goTo = (i: number) => {
    setIndex(i);
    setResetKey((k) => k + 1);
  };

  return <section className="how" id="how-it-works" aria-labelledby="how-title"><div className="wrap">
    <div className="intro reveal" ref={introRef}><p className="label">How it works</p><h2 id="how-title">From design to sale in <em className="gi">two simple steps.</em></h2><div className="orn" aria-hidden="true"><i /></div></div>
    <div className="hiw-card reveal" ref={cardRef}>
      <div className="phone"><div className="slot has-img">
        {screens.map((screen, i) => <img className={`sc-img ${i === index ? 'on' : ''}`} key={screen.image} src={`/images/${screen.image}`} alt={screen.alt} loading="lazy" />)}
      </div></div>
      <div className="sc-caption" aria-live="polite">
        {screens.map((screen, i) => <div className={`sc-caption-item ${i === index ? 'on' : ''}`} key={screen.image}><span className="node">{i + 1}</span><h3>{screen.title}</h3><p>{screen.text}</p></div>)}
      </div>
      <div className="sc-dots">
        {screens.map((screen, i) => <button
          key={screen.image}
          type="button"
          className={i === index ? 'on' : ''}
          aria-label={`Show step ${i + 1} of ${screens.length}`}
          aria-current={i === index}
          onClick={() => goTo(i)}
        />)}
      </div>
    </div>
  </div></section>;
}
