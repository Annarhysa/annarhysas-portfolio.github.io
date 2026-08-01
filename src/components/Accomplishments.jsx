import { accomplishments } from '../data/profile';

export default function Accomplishments() {
  return (
    <section id="accomplishments" className="section section--alt">
      <div className="container">
        <header className="section__header">
          <span className="section__label">Recognition</span>
          <h2 className="section__title">Accomplishments</h2>
        </header>

        <ul className="accomplishments-list">
          {accomplishments.map((item) => (
            <li key={item} className="accomplishment-item">
              <span className="accomplishment-item__icon" aria-hidden="true">★</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
