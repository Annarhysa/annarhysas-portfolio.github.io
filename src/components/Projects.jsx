import { projects } from '../data/profile';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <header className="section__header">
          <span className="section__label">Portfolio</span>
          <h2 className="section__title">Projects of Note</h2>
        </header>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`project-item ${index % 2 === 0 ? 'project-item--alt' : ''}`}
            >
              <div className="project-item__image">
                <img src={project.image} alt={project.name} loading="lazy" />
              </div>
              <div className="project-item__content">
                <h3 className="project-item__title">{project.name}</h3>
                <p className="project-item__description">{project.description}</p>
                <div className="project-item__tags">
                  {project.stack.map((tech) => (
                    <span key={tech} className="project-item__tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
