import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowDownRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile, stats } from '../data/resume';

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % profile.roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="top" className="hero">
      <div className="hero__orb hero__orb--a" />
      <div className="hero__orb hero__orb--b" />
      <div className="hero__orb hero__orb--c" />

      <div className="container hero__inner">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="eyebrow">
            Hello, I am
          </motion.span>

          <motion.h1 variants={item} className="hero__name">
            <span className="gradient-text">{profile.name}</span>
          </motion.h1>

          <motion.div variants={item} className="hero__role">
            <span>I work as an </span>
            <span className="hero__role-rotator">
              <AnimatePresence mode="wait">
                <motion.span
                  key={profile.roles[index]}
                  initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -24, filter: 'blur(6px)' }}
                  transition={{ duration: 0.45 }}
                  className="hero__role-text"
                >
                  {profile.roles[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.p variants={item} className="hero__lead">
            {profile.headline} {profile.about.split('.')[0]}.
          </motion.p>

          <motion.div variants={item} className="hero__actions">
            <a className="btn btn-primary" href="#projects">
              View my work <FiArrowDownRight />
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </motion.div>

          <motion.div variants={item} className="hero__socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <FiMail />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__stats"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="glass stat"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="stat__value gradient-text">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        aria-label="Scroll to about"
      >
        <span />
      </motion.a>
    </section>
  );
}
