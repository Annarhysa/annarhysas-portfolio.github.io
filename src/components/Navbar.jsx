import { profile } from '../data/profile';

const baseUrl = import.meta.env.BASE_URL;

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__content">
          <div className="navbar__meta navbar__meta--left">
            <a href={`https://maps.google.com/?q=${encodeURIComponent(profile.location)}`} target="_blank" rel="noreferrer">
              {profile.location}
            </a>
            <span>•</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span>•</span>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
          </div>

          <div className="navbar__brand">
            Times of Annarhysa
          </div>

          <div className="navbar__meta navbar__meta--right">
            <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <span>•</span>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <span>•</span>
            <a href={`${baseUrl}CV/AnnaCV.pdf`} download="Annarhysa-Albert-CV.pdf">
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
