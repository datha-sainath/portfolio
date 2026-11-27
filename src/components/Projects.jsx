import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';
import Reveal from './Reveal';
import { projects } from '../data/resume';

function ProjectCard({ project }) {
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="glass project-card"
    >
      <div className="project-card__glow" />
      <div className="project-card__head">
        <div>
          <h3>{project.title}</h3>
          <p className="project-card__sub">{project.subtitle}</p>
        </div>
        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer" className="project-card__link" aria-label={`${project.title} link`}>
            <FiArrowUpRight />
          </a>
        )}
      </div>

      <p className="project-card__desc">{project.description}</p>

      <ul className="project-card__list">
        {project.highlights.map((h) => (
          <li key={h}>
            <FiCheckCircle /> <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="tags">
        {project.tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Projects</span>
          <h2 className="section-title">Things I have built</h2>
          <p className="section-lead">A few AI and backend projects, from data pipelines to multi-agent systems.</p>
        </Reveal>

        <div className="projects">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.15}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
