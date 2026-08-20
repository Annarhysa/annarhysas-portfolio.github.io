import { useLanguage } from '../context/LanguageContext';
import ScrollArrow from './ScrollArrow';

export default function Accomplishments() {
  const { content, t } = useLanguage();
  const { accomplishments, featuredAccomplishment } = content;

  return (
    <section id="accomplishments" className="section">
      <header className="section__header">
        <span className="section__label">{t.accomplishments.label}</span>
        <h2 className="section__title">{t.accomplishments.title}</h2>
      </header>

      <div className="accomplishments-grid">
        {accomplishments.map((item) => (
          <div key={item.text} className={`accomplishment-card${item.image ? ' accomplishment-card--media' : ''}`}>
            {item.image && (
              <div className="accomplishment-card__image">
                <img src={item.image} alt={item.text} />
              </div>
            )}
            <div className="accomplishment-card__text">
              <p>{item.text}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="arrow-link accomplishment-card__link"
                  aria-label={`Read more about: ${item.text}`}
                >
                  ↗
                </a>
              )}
            </div>
          </div>
        ))}

        <div className="accomplishment-featured">
          <div className="accomplishment-featured__image">
            <img src={featuredAccomplishment.image} alt={featuredAccomplishment.text} />
          </div>
          <div className="accomplishment-card__text">
            <p>{featuredAccomplishment.text}</p>
            <a
              href={featuredAccomplishment.link}
              target="_blank"
              rel="noreferrer"
              className="arrow-link accomplishment-card__link"
              aria-label={`Read more about: ${featuredAccomplishment.text}`}
            >
              ↗
            </a>
          </div>
        </div>
      </div>

      <ScrollArrow currentId="accomplishments" />
    </section>
  );
}
