import { FiAward, FiCode, FiShield } from 'react-icons/fi';
import Reveal from './Reveal';
import { achievements, certifications } from '../data/resume';

const icons = [FiCode, FiAward, FiShield];

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Achievements & certifications</span>
          <h2 className="section-title">Milestones along the way</h2>
        </Reveal>

        <div className="achievements">
          {achievements.map((a, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={a.title} delay={i * 0.1}>
                <div className="glass achievement">
                  <span className="achievement__icon">
                    <Icon />
                  </span>
                  <h3>{a.title}</h3>
                  <p>{a.detail}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <h3 className="cert-heading">Certifications</h3>
          <ul className="certs">
            {certifications.map((c) => (
              <li key={c.title} className="glass cert">
                <FiAward className="cert__icon" />
                <div>
                  <span className="cert__title">{c.title}</span>
                  <span className="cert__issuer">{c.issuer}</span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
