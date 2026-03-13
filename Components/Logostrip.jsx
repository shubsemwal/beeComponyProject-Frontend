import "./Logostrip.css";

const logos = [
  {
    id: 1,
    svg: (
      <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="8" width="24" height="24" rx="5" fill="#c8d0dd" />
        <rect x="6" y="2" width="24" height="24" rx="5" fill="#9aa3b2" />
        <text x="36" y="26" fontFamily="'Outfit',sans-serif" fontSize="16" fontWeight="700" fill="#9aa3b2">logoipsum</text>
      </svg>
    ),
  },
  {
    id: 2,
    svg: (
      <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="20" r="12" fill="#c8d0dd" />
        <circle cx="22" cy="14" r="8" fill="#9aa3b2" />
        <text x="36" y="26" fontFamily="'Outfit',sans-serif" fontSize="16" fontWeight="700" fill="#9aa3b2">logoipsum</text>
      </svg>
    ),
  },
  {
    id: 3,
    svg: (
      <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="14,2 26,34 2,34" fill="#c8d0dd" />
        <text x="34" y="26" fontFamily="'Outfit',sans-serif" fontSize="16" fontWeight="700" fill="#9aa3b2">logoipsum</text>
      </svg>
    ),
  },
  {
    id: 4,
    svg: (
      <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2 L26 14 L14 26 L2 14 Z" fill="#c8d0dd" />
        <path d="M20 8 L28 20 L20 28 L12 20 Z" fill="#9aa3b2" />
        <text x="36" y="26" fontFamily="'Outfit',sans-serif" fontSize="16" fontWeight="700" fill="#9aa3b2">logoipsum</text>
      </svg>
    ),
  },
  {
    id: 5,
    svg: (
      <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="10" width="22" height="22" rx="11" fill="#c8d0dd" />
        <rect x="7" y="4" width="14" height="14" rx="4" fill="#9aa3b2" />
        <text x="32" y="26" fontFamily="'Outfit',sans-serif" fontSize="16" fontWeight="700" fill="#9aa3b2">logoipsum</text>
      </svg>
    ),
  },
  {
    id: 6,
    svg: (
      <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2 L24 10 L20 26 L8 26 L4 10 Z" fill="#c8d0dd" />
        <text x="32" y="26" fontFamily="'Outfit',sans-serif" fontSize="16" fontWeight="700" fill="#9aa3b2">logoipsum</text>
      </svg>
    ),
  },
];

// Triple-duplicate for seamless infinite scroll
const allLogos = [...logos, ...logos, ...logos];

export default function Logostrip() {
  return (
    <div className="logostrip">
      <div className="logostrip__track">
        {allLogos.map((logo, index) => (
          <div className="logostrip__item" key={index}>
            {logo.svg}
          </div>
        ))}
      </div>
    </div>
  );
}