import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { site } from '../config/site';
import { IconClose, IconMenu } from './Icons';
import logo from '../assets/images/logo.jpg';

const links = [
  { to: '/#features', label: 'Features' },
  { to: '/#parishes', label: 'For parishes' },
  { to: '/#faq', label: 'FAQ' },
  { to: '/support', label: 'Support' },
  { to: '/privacy', label: 'Privacy' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const current = location.pathname + location.hash;
  const [menuPath, setMenuPath] = useState(current);

  // Close the menu whenever the route changes.
  if (current !== menuPath) {
    setMenuPath(current);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className={`header${scrolled || open ? ' header--scrolled' : ''}`}>
        <div className="container header__inner">
          <Link to="/" className="brand">
            <img src={logo} alt="" width={38} height={38} />
            {site.appName}
          </Link>

          <nav className="nav" aria-label="Main">
            {links.map((l) =>
              l.to.includes('#') ? (
                <Link key={l.to} to={l.to}>
                  {l.label}
                </Link>
              ) : (
                <NavLink key={l.to} to={l.to}>
                  {l.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="header__actions">
            <Link to="/#download" className="btn btn--primary btn--sm header__download">
              Get the app
            </Link>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile">
          {links.map((l) => (
            <Link key={l.to} to={l.to}>
              {l.label}
            </Link>
          ))}
          <Link to="/terms">Terms of use</Link>
          <Link to="/delete-account">Delete account</Link>
          <Link to="/#download" className="btn btn--primary">
            Get the app
          </Link>
        </nav>
      )}
    </>
  );
}
