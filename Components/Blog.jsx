import { useState } from "react";
import "./Testimonial.css";

const TESTIMONIALS = [
  {
    quote: "Superb Work! Amazing Performance!",
    body: "Explore BO's behind-the-scenes impact when we lowered the CAC from INR 9,960 to INR 4,500 through strategic digital marketing.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    company: "Candere | Kalyan Jewellers",
    sub: "A Kalyan Jewellers Company",
  },
  {
    quote: "Incredible ROI in Just 3 Months!",
    body: "BeeOnline transformed our paid campaigns and helped us achieve a 3x return on ad spend within the first quarter of engagement.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    company: "TechVista Solutions",
    sub: "A leading SaaS company",
  },
  {
    quote: "Best Digital Partner We've Had!",
    body: "From SEO to social media, BeeOnline covered everything. Our organic traffic grew by 180% and brand visibility skyrocketed.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    company: "NovaBrands Inc.",
    sub: "E-commerce & Retail",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  const t = TESTIMONIALS[current];

  return (
    <section className="testimonial">
      <div className="testimonial__inner">

        {/* Left */}
        <div className="testimonial__left">
          <h2 className="testimonial__heading">Our Testimonial</h2>
          <p className="testimonial__sub">A SYMPHONY OF SATISFIED VOICES!</p>
        </div>

        {/* Right */}
        <div className="testimonial__right">
          <div className="testimonial__quote-icon">"</div>

          <h3 className="testimonial__title">{t.quote}</h3>
          <p className="testimonial__body">{t.body}</p>

          <div className="testimonial__quote-icon testimonial__quote-icon--close">"</div>

          <div className="testimonial__client">
            <img src={t.logo} alt={t.company} className="testimonial__client-logo" />
            <div>
              <p className="testimonial__client-name">{t.company}</p>
              <p className="testimonial__client-sub">{t.sub}</p>
            </div>
          </div>

          <div className="testimonial__nav">
            <button className="testimonial__nav-btn" onClick={prev} aria-label="Previous">
              ←
            </button>
            <span className="testimonial__counter">
              {current + 1} / {TESTIMONIALS.length}
            </span>
            <button className="testimonial__nav-btn" onClick={next} aria-label="Next">
              →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}