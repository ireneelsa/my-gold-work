import { useEffect, useRef, useState } from 'react';

// Cycles the "Upload your designs" feature card through the steps of adding a catalogue item:
// the form itself, then picking a category, then picking a product type, then the existing photo
// already used for this card. Self-contained: FeaturesSection only swaps the <img> for this.
const IMAGES = [
  { src: '/images/add-catalogue-inhand.jpg', alt: 'Hand holding a phone showing the Add Catalogue form, with Product Name, Category, Product Type and an Add Product image field, jewellery shop in the background', wide: true },
  { src: '/images/category-inhand.jpg', alt: 'Hand holding a phone showing the Add Catalogue form’s Category list, with options like Diamond Jewellery, Fancy Designs and Rose Gold, jewellery shop in the background', wide: true },
  { src: '/images/product-types-inhand.jpg', alt: 'Hand holding a phone showing the Add Catalogue form’s Product Types list, with options like Diamond Jewellery1, Rose Gold and Bridal Jewellery, jewellery shop in the background', wide: true },
  { src: '/images/13.jpg', alt: 'Hand holding a phone whose camera frames a gold necklace on a display bust, in a busy jewellery shop with staff at the counter', wide: false },
] as const;

const INTERVAL_MS = 3000;

export function UploadDesignsSequence() {
  const [index, setIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  // bumped on every manual dot click, so the auto-advance timer restarts from a fresh interval
  // instead of the next tick landing right after the user's own choice
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => {
      if (!pausedRef.current) setIndex((current) => (current + 1) % IMAGES.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [resetKey]);

  useEffect(() => {
    // hover-to-pause covers the whole card (photo + title/description), not just the photo itself,
    // so attach to the card figure rather than this component's own (smaller, stacking-order-lower) root
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
    {IMAGES.map((image, i) => <img key={image.src} className={`seq-img ${image.wide ? 'seq-img-wide' : ''} ${i === index ? 'on' : ''}`} src={image.src} alt={image.alt} loading="lazy" />)}
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
