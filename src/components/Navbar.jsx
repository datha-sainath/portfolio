import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/resume';

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      >
        <div className="container navbar__inner">
          <button className="navbar__brand" onClick={() => go('top')} aria-label="Back to top">
            <span className="navbar__logo">DS</span>
            <span>{profile.name}</span>
          </button>

          <nav className="navbar__links" aria-label="Main navigation">
            {links.map((l) => (
              <button key={l.id} onClick={() => go(l.id)}>
                {l.label}
              </button>
            ))}
          </nav>

          <button
            className="navbar__toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className={open ? 'open' : ''} />
            <span className={open ? 'open' : ''} />
          </button>
        </div>
        <div className="navbar__progress" style={{ transform: `scaleX(${progress})` }} />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {links.map((l, i) => (
              <motion.button
                key={l.id}
                onClick={() => go(l.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {l.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
