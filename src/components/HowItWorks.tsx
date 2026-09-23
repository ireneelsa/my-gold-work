import { useEffect, useMemo, useRef, useState } from 'react';
import { usePhoneScroller } from '../hooks/usePhoneScroller';
import { useScrollReveal } from '../hooks/useScrollReveal';

const screens = [
  { title: 'Download the app', text: 'Get My Gold Work from Google Play.', image: '07.jpg', alt: 'My Gold Work on Google Play, ready to install' },
  { title: 'Browse the catalogue', text: 'Pick a design, then tap the camera icon.', image: '08.jpg', alt: "The app's home catalogue, with Camera in the bottom bar" },
  { title: 'Start the try-on', text: 'One tap and the camera opens, ready to go.', image: '09.jpg', alt: "The Free Try-On screen with a Got it, Let's Try button" },
  { title: 'See it live', text: 'The design shows on the customer, live, through the camera.', image: '10.jpg', alt: 'LIVE TRY-ON showing a gold necklace on a customer, live' },
] as const;

export default function HowItWorks() {
  const introRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [stickyHeight, setStickyHeight] = useState(0);
  const stepRefs = useMemo(() => screens.map(() => ({ current: null } as React.RefObject<HTMLDivElement | null>)), []);
  const currentStep = usePhoneScroller(stepRefs);
  useScrollReveal(introRef);
  useEffect(() => {
    const sticky = stickyRef.current;
    if (!sticky) return;
    const updateHeight = () => setStickyHeight(sticky.getBoundingClientRect().height);
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(sticky);
    return () => observer.disconnect();
  }, []);
  const spacerHeight = stickyHeight > 0 ? `${stickyHeight}px` : '1px';
  return <section className="how" id="how-it-works" aria-labelledby="how-title"><div className="wrap">
    <div className="intro reveal" ref={introRef}><p className="label">How it works</p><h2 id="how-title">From design to sale in <em className="gi">three simple steps.</em></h2><div className="orn" aria-hidden="true"><i /></div></div>
    <div className="scroller">
      <div className="sc-sticky" ref={stickyRef}>
        <div className="sc-caption" aria-live="polite">
          {screens.map((screen, index) => <div className={`sc-caption-item ${currentStep === index + 1 ? 'on' : ''}`} key={screen.image}><span className="node">{index + 1}</span><h3>{screen.title}</h3><p>{screen.text}</p></div>)}
        </div>
        <div className="phone"><div className="slot has-img">{screens.map((screen, index) => <img className={`sc-img ${currentStep === index + 1 ? 'on' : ''}`} key={screen.image} src={`/images/${screen.image}`} data-step={index + 1} alt={screen.alt} loading="lazy" />)}</div></div>
        <div className="sc-dots" aria-hidden="true">{screens.map((screen, index) => <i className={currentStep === index + 1 ? 'on' : ''} key={screen.image} />)}</div>
      </div>
      <div className="sc-steps" aria-hidden="true">{screens.map((screen, index) => <div className="sc-step" data-step={index + 1} key={screen.image} ref={stepRefs[index]} style={{ height: spacerHeight }} />)}</div>
    </div>
  </div></section>;
}
