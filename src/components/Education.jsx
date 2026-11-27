import Reveal from './Reveal';
import { education } from '../data/resume';

export default function Education() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Education</span>
          <h2 className="section-title">Academic journey</h2>
        </Reveal>

        <div className="timeline">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 0.15} y={30}>
              <div className="timeline__item">
                <span className="timeline__dot" />
                <div className="glass timeline__card">
                  <div className="timeline__head">
                    <h3>{e.degree}</h3>
                    <span className="timeline__period">{e.period}</span>
                  </div>
                  <p className="timeline__school">{e.school}</p>
                  <p className="timeline__detail">{e.detail}</p>
                  {e.coursework && (
                    <div className="tags">
                      {e.coursework.map((c) => (
                        <span key={c} className="tag">
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
