import { useEffect, useMemo, useRef, useState } from 'react';
import { usePhoneScroller } from '../hooks/usePhoneScroller';
import { useScrollReveal } from '../hooks/useScrollReveal';

const screens = [
  { title: 'Download the app', text: 'Get My Gold Work from Google Play.', image: '07.jpg', alt: 'My Gold Work on Google Play, ready to install' },
  { title: 'Browse the catalogue', text: 'Pick a design, then tap the camera icon.', image: '08.jpg', alt: "The app's home catalogue, with Camera in the bottom bar" },
  { title: 'Start the try-on', text: 'One tap and the camera opens, ready to go.', image: '09.jpg', alt: "The Free Try-On screen with a Got it, Let's Try button" },
  { title: 'See it live', text: 'The design shows on the customer, live, through the camera.', image: '10.jpg', alt: 'LIVE TRY-ON showing a gold necklace on a customer, live' },
] as const;

// desktop-only sizing so the phone never overflows a short viewport: header height + the sc-sticky
// block's own non-phone chrome (padding, row-gap, dots - the real measured values, no padded-on
// safety margin) subtracted from the window to get the space actually left for the phone, capped at
// a generous target height (~380px wide at the 9:19.5 ratio) so it reads as a confident phone mockup
// on any window tall enough to fit it, rather than growing indefinitely on very tall screens. The
// heading above is normal flow (not sticky), so it's fully scrolled away by the time the phone
// pins flush below the header - its height doesn't factor into this.
const HEADER_HEIGHT = 93;
const STICKY_CHROME = 64; // sc-sticky padding (16+24) + row-gap (16) + dots height (8)
const PHONE_NATURAL_HEIGHT = 823;
const PHONE_MIN_HEIGHT = 200;
// each of the steps gets this fraction of the block's height as scroll distance while the phone is
// pinned, so the pinned stretch is short and every step is shown for the same distance
const STEP_SCROLL_RATIO = 0.6;
const PHONE_SHADOW_REACH = 80; // box-shadow "0 24px 48px" reaches ~72px past the box; rounded up for AA/blur

export default function HowItWorks() {
  const introRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const [stickyHeight, setStickyHeight] = useState(0);
  const [phoneHeight, setPhoneHeight] = useState(PHONE_NATURAL_HEIGHT);
  const [isPastRange, setIsPastRange] = useState(false);
  const stepRefs = useMemo(() => screens.map(() => ({ current: null } as React.RefObject<HTMLDivElement | null>)), []);
  const currentStep = usePhoneScroller(stepRefs, stickyRef);
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
  useEffect(() => {
    const updatePhoneHeight = () => {
      const available = window.innerHeight - HEADER_HEIGHT - STICKY_CHROME;
      setPhoneHeight(Math.max(PHONE_MIN_HEIGHT, Math.min(PHONE_NATURAL_HEIGHT, available)));
    };
    updatePhoneHeight();
    window.addEventListener('resize', updatePhoneHeight);
    return () => window.removeEventListener('resize', updatePhoneHeight);
  }, []);
  useEffect(() => {
    // .phone's box-shadow extends well beyond its own box (blur + offset), and no ancestor can
    // clip it with overflow:hidden without breaking position:sticky (any ancestor with overflow
    // other than visible becomes the sticky containing block instead of the viewport). So once
    // the phone itself - including its shadow's reach - has scrolled fully past the viewport,
    // hide the whole sticky block explicitly. This only affects paint, not position calculations,
    // so it un-hides correctly on scrolling back up. Based on the phone's own extent (not the
    // sticky block's, which is taller) so there's no gap where the shadow could still bleed.
    const phone = phoneRef.current;
    if (!phone) return;
    let ticking = false;
    const update = () => {
      setIsPastRange(phone.getBoundingClientRect().bottom + PHONE_SHADOW_REACH <= 0);
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  const spacerHeight = stickyHeight > 0 ? `${Math.round(stickyHeight * STEP_SCROLL_RATIO)}px` : '1px';
  return <section className="how" id="how-it-works" aria-labelledby="how-title" style={{ '--phone-h': `${phoneHeight}px` } as React.CSSProperties}><div className="wrap">
    <div className="intro reveal" ref={introRef}><p className="label">How it works</p><h2 id="how-title">From design to sale in <em className="gi">three simple steps.</em></h2><div className="orn" aria-hidden="true"><i /></div></div>
    <div className="scroller">
      <div className="sc-sticky" ref={stickyRef} style={isPastRange ? { visibility: 'hidden' } : undefined}>
        <div className="sc-caption" aria-live="polite">
          {screens.map((screen, index) => <div className={`sc-caption-item ${currentStep === index + 1 ? 'on' : ''}`} key={screen.image}><span className="node">{index + 1}</span><h3>{screen.title}</h3><p>{screen.text}</p></div>)}
        </div>
        <div className="phone" ref={phoneRef}><div className="slot has-img">{screens.map((screen, index) => <img className={`sc-img ${currentStep === index + 1 ? 'on' : ''}`} key={screen.image} src={`/images/${screen.image}`} data-step={index + 1} alt={screen.alt} loading="lazy" />)}</div></div>
        <div className="sc-dots" aria-hidden="true">{screens.map((screen, index) => <i className={currentStep === index + 1 ? 'on' : ''} key={screen.image} />)}</div>
      </div>
      <div className="sc-steps" aria-hidden="true">{screens.map((screen, index) => <div className="sc-step" data-step={index + 1} key={screen.image} ref={stepRefs[index]} style={{ height: spacerHeight }} />)}</div>
    </div>
  </div></section>;
}
