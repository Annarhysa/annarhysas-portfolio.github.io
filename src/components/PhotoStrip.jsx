import { profile } from '../data/profile';

const baseUrl = import.meta.env.BASE_URL;

export default function PhotoStrip() {
  return (
    <>
      <div className="photo-strip">
        <div className="photo-col">
          <img src={`${baseUrl}images/about.png`} alt="Annarhysa Albert" />
        </div>
        <div className="photo-strip-rule" />
        <div className="photo-col-center">
          <div className="kicker">■ Featured Profile</div>
          <div className="lede">&ldquo;{profile.tagline}&rdquo;</div>
          <div className="byline">2+ YRS EXPERIENCE · PYTHON · LLMs · AWS · AZURE · NEXT.JS · PYTORCH</div>
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
        <a href={`${baseUrl}CV/Resume.pdf`} download="Annarhysa-Albert-Resume.pdf">Resume</a>
        <span className="contact-sep">|</span>
        <span>{profile.location}</span>
      </div>
    </>
  );
}
