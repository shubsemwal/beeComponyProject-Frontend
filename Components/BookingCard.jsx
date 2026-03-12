import "./BookingCard.css";

const HIGHLIGHTS = [
  { icon: "✅", text: "60+ Team Members" },
  { icon: "✅", text: "Affordable Pricing Plan" },
  { icon: "✅", text: "Growth Oriented Strategies" },
];

export default function BookingCard() {
  return (
    <section className="booking">
      <div className="booking__card">
        <h2 className="booking__heading">Do you want truly impressive results?</h2>
        <p className="booking__sub">
          Ready to elevate your online presence? Get in touch with us today for personalized
          solutions tailored to your business needs.
        </p>

        <div className="booking__highlights">
          {HIGHLIGHTS.map((h) => (
            <span className="booking__highlight" key={h.text}>
              <span className="booking__highlight-icon">{h.icon}</span>
              {h.text}
            </span>
          ))}
        </div>

        <a href="#" className="booking__btn">
          Book a Free Consultation
        </a>

        {/* Decorative sparkles */}
        <span className="booking__spark booking__spark--tl">✦</span>
        <span className="booking__spark booking__spark--tr">✦</span>
        <span className="booking__spark booking__spark--bl">✦</span>
        <span className="booking__spark booking__spark--br">✦</span>
      </div>
    </section>
  );
}