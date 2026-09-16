import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';

/** Scrolls to the hash target, or to the top on a new page. */
function useScrollOnNavigate() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // The target may render in this same commit, so wait a frame.
      const id = decodeURIComponent(hash.slice(1));
      const frame = requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
      return () => cancelAnimationFrame(frame);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
}

export function Layout() {
  useScrollOnNavigate();
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
