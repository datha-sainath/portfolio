import Reveal from './Reveal';
import { profile, stats } from '../data/resume';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <Reveal>
          <span className="eyebrow">About me</span>
          <h2 className="section-title">
            Code that thinks, <span className="gradient-text">systems that scale.</span>
          </h2>
          <p className="about__text">{profile.about}</p>
          <p className="about__text">
            Based in <strong>{profile.location}</strong>. Always open to interesting AI, backend and
            product problems.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="about__grid">
            {stats.map((s) => (
              <div key={s.label} className="glass about__card">
                <span className="about__value gradient-text">{s.value}</span>
                <span className="about__label">{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
