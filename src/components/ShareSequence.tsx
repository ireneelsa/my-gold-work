import { useEffect, useRef, useState } from 'react';

// Cycles the "Share with your shop name" feature card between a finger tapping Share on the
// product page, the resulting WhatsApp forward with the shop's link, and the live try-on itself.
// Self-contained: FeaturesSection only swaps the <img> for this, same pattern as UploadDesignsSequence.
const IMAGES = [
  { src: '/images/14.jpg', alt: 'Hand holding a phone showing a gold necklace product page while a finger taps the Share button, in a busy jewellery shop with staff at the counter' },
  { src: '/images/whatsapp-forward-inhand.jpg', alt: 'Hand holding a phone showing a WhatsApp chat with a forwarded gold necklace link from the shop, jewellery shop in the background' },
  { src: '/images/live-tryon-inhand.jpg', alt: 'Hand holding a phone showing a gold necklace live try-on on a customer, jewellery shop in the background' },
] as const;

const INTERVAL_MS = 3000;

export function ShareSequence() {
  const [index, setIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => {
      if (!pausedRef.current) setIndex((current) => (current + 1) % IMAGES.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [resetKey]);

  useEffect(() => {
    const card = rootRef.current?.closest('.card');
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

  return <div className="seq" ref={rootRef}>
    {IMAGES.map((image, i) => <img key={image.src} className={`seq-img ${i === index ? 'on' : ''}`} src={image.src} alt={image.alt} loading="lazy" />)}
    <div className="seq-dots">
      {IMAGES.map((image, i) => <button
        key={image.src}
        type="button"
        className={i === index ? 'on' : ''}
        aria-label={`Show image ${i + 1} of ${IMAGES.length}`}
        aria-current={i === index}
        onClick={() => goTo(i)}
      />)}
    </div>
  </div>;
}
