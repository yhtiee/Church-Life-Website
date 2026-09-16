import { Link } from 'react-router';
import { useDocumentTitle } from '../lib/useDocumentTitle';

export function NotFound() {
  useDocumentTitle('Page not found');
  return (
    <section className="container not-found">
      <div>
        <strong>404</strong>
        <h1>This page can&apos;t be found</h1>
        <p>It may have moved, or the link may be mistyped.</p>
        <Link to="/" className="btn btn--primary">
          Back to home
        </Link>
      </div>
    </section>
  );
}
