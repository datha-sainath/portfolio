import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import Reveal from './Reveal';
import { profile } from '../data/resume';

export default function Contact() {
  const items = [
    { icon: FiMail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: FiPhone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: FiMapPin, label: profile.location, href: null },
  ];
  const socials = [
    { icon: FiGithub, label: 'GitHub', href: profile.github },
    { icon: FiLinkedin, label: 'LinkedIn', href: profile.linkedin },
  ];

  return (
    <>
      <section id="contact" className="section contact">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h2 className="section-title">
              Let us build something <span className="gradient-text">together.</span>
            </h2>
            <p className="section-lead">
              I am open to internships, collaborations and interesting AI or backend projects.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="contact__grid">
              <div className="glass contact__card">
                {items.map(({ icon: Icon, label, href }) => (
                  <div key={label} className="contact__row">
                    <Icon />
                    {href ? <a href={href}>{label}</a> : <span>{label}</span>}
                  </div>
                ))}
              </div>

              <div className="glass contact__card contact__socials">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="btn btn-ghost">
                    <Icon /> {label}
                  </a>
                ))}
                <a href={`mailto:${profile.email}`} className="btn btn-primary">
                  <FiMail /> Say hello
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} {profile.fullName}. Built with React.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
