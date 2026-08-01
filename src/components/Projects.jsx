import { projects } from '../data/profile';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <header className="section__header">
          <span className="section__label">Portfolio</span>
          <h2 className="section__title">Featured Projects</h2>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              className="project-card"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-card__image">
                <img src={project.image} alt={project.name} loading="lazy" />
                <div className="project-card__overlay" />
              </div>
              <div className="project-card__body">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag tag--sm">{tech}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
