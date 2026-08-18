import { blogs } from '../data/profile';
import ScrollArrow from './ScrollArrow';

export default function Blogs() {
  return (
    <section id="blogs" className="section">
      <header className="section__header">
        <span className="section__label">Writing</span>
        <h2 className="section__title">Technical Blog Posts</h2>
      </header>

      <div className="blogs-grid">
        {blogs.map((blog) => (
          <a
            key={blog.url}
            href={blog.url}
            target="_blank"
            rel="noreferrer"
            className="blog-box"
          >
            <div>
              <span className="blog-box__category">{blog.category}</span>
              <h3 className="blog-box__title">{blog.title}</h3>
              <p className="blog-box__abstract">{blog.abstract}</p>
            </div>
            <div className="blog-box__footer">
              <span className="blog-box__date">{blog.date}</span>
              <span className="blog-box__arrow">→</span>
            </div>
          </a>
        ))}
      </div>

      <ScrollArrow currentId="blogs" />
    </section>
  );
}
