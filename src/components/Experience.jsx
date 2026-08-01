import { experience } from '../data/profile';

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <header className="section__header">
          <span className="section__label">Career</span>
          <h2 className="section__title">Professional Experience</h2>
        </header>

        <div className="timeline">
          {experience.map((item) => (
            <article key={item.company} className="timeline__item">
              <div className="timeline__marker" />

              <div className="timeline__card">
                <div className="timeline__company">
                  <h3>{item.company}</h3>
                  <span className="timeline__location">{item.location}</span>
                </div>

                {item.roles.map((role) => (
                  <div key={role.title} className="timeline__role">
                    <div className="timeline__role-header">
                      <h4>{role.title}</h4>
                      <time>{role.period}</time>
                    </div>
                    <ul className="timeline__highlights">
                      {role.highlights.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
