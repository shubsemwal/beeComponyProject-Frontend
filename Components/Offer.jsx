import "./Offer.css";

const SERVICES = [
  {
    icon: "🔍",
    title: "SEO",
    description:
      "We improve your website's ranking, increase organic traffic, and build long-term visibility through technical excellence, strategic content, and continuous optimization.",
    highlight: true,
  },
  {
    icon: "📈",
    title: "Performance Marketing",
    description:
      "Our team increases your ROI by creating results-based paid advertising campaigns on Google, Meta, and other platforms.",
    highlight: false,
  },
  {
    icon: "💻",
    title: "Website Development",
    description:
      "At Bee Online, we offer customised website development options that are suitable for your business needs and goals.",
    highlight: false,
  },
  {
    icon: "🛡️",
    title: "Website Maintenance",
    description:
      "We take care of security updates, backups, monitoring, and fixes in order to maintain your online presence that operates without interruption at all 24/7.",
    highlight: false,
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "We deliver user-centered design that transforms customer journeys, improves engagement, and improves conversion rates across your entire digital ecosystem.",
    highlight: false,
  },
];

export default function Offer() {
  return (
    <section className="offer">
      <div className="offer__inner">

        {/* Left Column */}
        <div className="offer__left">
          <h2 className="offer__heading">
            What We Offer
            <span className="offer__underline"></span>
          </h2>
          <p className="offer__desc">
            "Bee Online delivers tailored digital marketing, MLM strategies,
            website development and AI/ML-driven campaigns for your business."
          </p>
          <a href="#" className="offer__cta">
            Let's Talk &nbsp;↗
          </a>
        </div>

        {/* Right Grid */}
        <div className="offer__grid">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className={`offer__card ${service.highlight ? "offer__card--highlight" : ""}`}
            >
              <div className="offer__card-icon">{service.icon}</div>
              <h3 className="offer__card-title">{service.title}</h3>
              <p className="offer__card-desc">{service.description}</p>
              <a href="#" className="offer__card-link">
                Learn More →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}