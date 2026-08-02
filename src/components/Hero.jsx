import { profile } from '../data/profile';

const baseUrl = import.meta.env.BASE_URL;

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__content">
        <div className="hero__paper">
          <div className="hero__text">
            <div className="hero__masthead">The Annarhysa Times • Portfolio Edition</div>
            <p className="hero__greeting">Hello, I'm</p>
            <h1 className="hero__name">{profile.name}</h1>
            <h2 className="hero__title">{profile.title}</h2>
            <p className="hero__tagline">{profile.tagline}</p>

            <div className="hero__meta">
              <span>{profile.location}</span>
              <span className="dot" />
              <span>AI · Cloud · Full-Stack</span>
            </div>

            <div className="hero__actions">
              <a href={profile.links.linkedin} className="btn btn--primary" target="_blank" rel="noreferrer">
                Hire Me
              </a>
              <a href={profile.links.github} className="btn btn--outline" target="_blank" rel="noreferrer">
                View GitHub
              </a>
              <a href={`${baseUrl}CV/AnnaCV.pdf`} className="btn btn--ghost" download="Annarhysa-Albert-CV">
                Download CV
              </a>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__collage">
              <figure className="hero__feature">
                <img src={`${baseUrl}images/about.png`} alt={profile.name} className="hero__feature-image" />
                <figcaption>
                  Main portrait • current profile image
                </figcaption>
              </figure>

              <div className="hero__supplementary">
                <figure className="hero__supplementary-card hero__supplementary-card--wide">
                  <img src={`${baseUrl}images/project-1.png`} alt="Protego project preview" />
                  <figcaption>Featured project</figcaption>
                </figure>

                <figure className="hero__supplementary-card">
                  <img src={`${baseUrl}images/project-2.jpg`} alt="MoodMate project preview" />
                  <figcaption>Supporting story</figcaption>
                </figure>

                <figure className="hero__supplementary-card">
                  <img src={`${baseUrl}images/project-3.png`} alt="Fine-tuning LLMs project preview" />
                  <figcaption>Research note</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to about">
        <span />
      </a>
    </section>
  );
}
