import type { ReactNode } from 'react';

export type DocSection = { id: string; title: string; body: ReactNode };

/** Long legal text with a sticky table of contents. */
export function DocLayout({ intro, sections }: { intro?: ReactNode; sections: DocSection[] }) {
  return (
    <div className="container doc">
      <nav className="doc__toc" aria-label="On this page">
        <h2>On this page</h2>
        <ol>
          {sections.map((s, i) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>
                {i + 1}. {s.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <article className="prose">
        {intro}
        {sections.map((s, i) => (
          <section key={s.id} id={s.id}>
            <h2>
              {i + 1}. {s.title}
            </h2>
            {s.body}
          </section>
        ))}
      </article>
    </div>
  );
}
