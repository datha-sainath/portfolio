import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { skillGroups } from '../data/resume';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Skills</span>
          <h2 className="section-title">Tools of the trade</h2>
          <p className="section-lead">Languages, frameworks and platforms I use to build and ship.</p>
        </Reveal>

        <div className="skills">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.08}>
              <div className="glass skill-card">
                <h3>{group.title}</h3>
                <motion.div
                  className="tags"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={{ show: { transition: { staggerChildren: 0.05 } } }}
                >
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      className="tag"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        show: { opacity: 1, scale: 1 },
                      }}
                      whileHover={{ y: -3, scale: 1.05 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
