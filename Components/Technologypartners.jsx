import "./TechnologyPartners.css";

const TECH_PARTNERS = [
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Google Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    subtitle: "Google Partner",
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  },
  {
    name: "AWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
];

const LICENSED_TOOLS = [
  {
    name: "SEMrush",
    logo: "https://cdn.worldvectorlogo.com/logos/semrush.svg",
  },
  {
    name: "ahrefs",
    logo: "https://cdn.worldvectorlogo.com/logos/ahrefs.svg",
  },
  {
    name: "Looker",
    logo: "https://cdn.worldvectorlogo.com/logos/looker-1.svg",
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  },
  {
    name: "Webflow",
    logo: "https://cdn.worldvectorlogo.com/logos/webflow-1.svg",
  },
  {
    name: "Figma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
  {
    name: "Shopify",
    logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
  },
  {
    name: "Zapier",
    logo: "https://cdn.worldvectorlogo.com/logos/zapier-1.svg",
  },
];

export default function TechnologyPartners() {
  return (
    <section className="partners">
      {/* Tech Partners */}
      <div className="partners__block">
        <h2 className="partners__heading">
          Our <span className="partners__accent">Technology</span> Partners
        </h2>
        <div className="partners__grid partners__grid--tech">
          {TECH_PARTNERS.map((p) => (
            <div className="partners__card" key={p.name}>
              <img src={p.logo} alt={p.name} className="partners__logo" />
              {p.subtitle && (
                <span className="partners__subtitle">{p.subtitle}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="partners__divider" />

      {/* Licensed Tools */}
      <div className="partners__block">
        <h2 className="partners__heading partners__heading--licensed">
          Licensed + Partnered Tools
        </h2>
        <div className="partners__grid partners__grid--licensed">
          {LICENSED_TOOLS.map((t) => (
            <div className="partners__card" key={t.name}>
              <img src={t.logo} alt={t.name} className="partners__logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}