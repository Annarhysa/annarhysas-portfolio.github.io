import { useLanguage } from '../context/LanguageContext';

const baseUrl = import.meta.env.BASE_URL;

export default function PhotoStrip() {
  const { content, t } = useLanguage();
  const { profile } = content;

  return (
    <>
      <div className="photo-strip">
        <div className="photo-col">
          <img src={`${baseUrl}images/about.png`} alt="Annarhysa Albert" />
        </div>
        <div className="photo-strip-rule" />
        <div className="photo-col-center">
          <div className="kicker">■ {t.featuredProfile}</div>
          <div className="lede">&ldquo;{profile.tagline}&rdquo;</div>
          <div className="byline">{t.byline}</div>
        </div>
        <div className="photo-strip-rule" />
        <div className="photo-col photo-col--right">
          <img src={`${baseUrl}images/about2.png`} alt="Annarhysa Albert" />
        </div>
      </div>

      <div className="contact-bar">
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <span className="contact-sep">|</span>
        <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
        <span className="contact-sep">|</span>
        <a href={`${baseUrl}CV/Resume.pdf`} download="Annarhysa-Albert-Resume.pdf">{t.resume}</a>
        <span className="contact-sep">|</span>
        <span>{profile.location}</span>
      </div>
    </>
  );
}
