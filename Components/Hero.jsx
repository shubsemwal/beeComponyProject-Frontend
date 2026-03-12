import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay"></div>

      <div className="hero__content">
        <p className="hero__eyebrow">YOUR VISION, OUR EXPERTISE!</p>

        <h1 className="hero__heading">
          Award-Winning Digital <br />
          Marketing Agency for <br />
          High-Growth Brands
        </h1>

        <p className="hero__subtext">
          We help brands in speeding up their growth through strategic marketing, brand
          experiences that are powerful and focused on performance execution. Our solutions
          are designed to deliver real, measurable ROI as we build like driving traffic,
          improving conversions and creating digital assets.
        </p>

        <a href="#" className="hero__cta">
          Get A Free Quote &nbsp;↗
        </a>
      </div>

      {/* Stats Card */}
      <div className="hero__card">
        <div className="hero__card-avatars">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="client"
            className="hero__avatar"
          />
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="client"
            className="hero__avatar"
          />
          <img
            src="https://randomuser.me/api/portraits/men/55.jpg"
            alt="client"
            className="hero__avatar"
          />
          <span className="hero__avatar-badge">5k+</span>
        </div>

        <div className="hero__card-stat">
          <span className="hero__card-number">50+</span>
          <span className="hero__card-label">Awards Wining</span>
        </div>

        {/* Bar chart */}
        <div className="hero__chart">
          {[40, 65, 45, 80, 55, 90, 60, 75].map((h, i) => (
            <div
              key={i}
              className="hero__bar"
              style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}