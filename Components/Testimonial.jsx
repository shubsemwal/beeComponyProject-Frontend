import "./Blog.css";

const BLOGS = [
  {
    img: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=700&q=80",
    tags: ["Technology"],
    title: "The One Part of the Vision Pro That Apple Doesn't Want You to See",
    link: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=80",
    tags: ["Technology", "Product"],
    title: "Intel's CEO Says AI Is the Key to the Company's Comeback",
    link: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=700&q=80",
    tags: ["Security"],
    title: "Polar ID Is the Face ID Rival for Android Phones.",
    link: "#",
  },
];

export default function Blog() {
  return (
    <section className="blog">
      <div className="blog__inner">

        {/* Header Row */}
        <div className="blog__header">
          <div className="blog__header-left">
            <h2 className="blog__heading">Our Latest Blog and News</h2>
          </div>
          <div className="blog__header-right">
            <p className="blog__desc">
              Delve into real-world examples where our Technology Solutions, Consulting and Strategy,
            </p>
            <div className="blog__nav">
              <button className="blog__nav-btn" aria-label="Previous">←</button>
              <button className="blog__nav-btn blog__nav-btn--active" aria-label="Next">→</button>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="blog__grid">
          {BLOGS.map((post, i) => (
            <div className="blog__card" key={i}>
              <div className="blog__img-wrap">
                <img src={post.img} alt={post.title} className="blog__img" />
                <div className="blog__tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="blog__tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="blog__card-body">
                <h3 className="blog__card-title">{post.title}</h3>
                <a href={post.link} className="blog__card-link">Read More →</a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}