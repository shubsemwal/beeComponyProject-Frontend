import { useEffect, useRef, useState } from "react";
import "./Impact.css";

const SLIDES = [
  {
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    label: "Traffic Growth",
  },
  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    label: "Lead Quality",
  },
  {
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
    label: "Cost per Acquisition",
  },
  {
    img: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&q=80",
    label: "Conversion Rate Improvement",
  },
  {
    img: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80",
    label: "Customer Engagement",
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    label: "Brand Awareness",
  },
];

export default function Impact() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Duplicate slides for seamless infinite loop
  const allSlides = [...SLIDES, ...SLIDES];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.querySelector(".impact__slide").offsetWidth + 20;
      trackRef.current.style.transform = `translateX(-${activeIndex * cardWidth}px)`;
    }
  }, [activeIndex]);

  return (
    <section className="impact">
      <div className="impact__header">
        <div className="impact__header-left">
          <h2 className="impact__heading">
            Impact On Clients
            <span className="impact__underline"></span>
          </h2>
        </div>
        <p className="impact__tagline">Your Growth. Your KPIs. Our Commitment.</p>
      </div>

      <div className="impact__slider-wrap">
        <div className="impact__track" ref={trackRef}>
          {allSlides.map((slide, i) => (
            <div className="impact__slide" key={i}>
              <div className="impact__img-wrap">
                <img src={slide.img} alt={slide.label} className="impact__img" />
              </div>
              <div className="impact__slide-footer">
                <span className="impact__dot"></span>
                <p className="impact__slide-label">{slide.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="impact__dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`impact__dot-btn ${i === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}