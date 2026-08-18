import { profile } from '../data/profile';

export default function Hero() {
  return (
    <section className="masthead">
      <h1 className="masthead__headline">Annarhysa<br />Albert</h1>
      <p className="masthead__sub">{profile.title}</p>
      <div className="masthead__info">
        <span>MSc. Artificial Intelligence Engineering — Universität Passau</span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <span>{profile.phone}</span>
      </div>
    </section>
  );
}
