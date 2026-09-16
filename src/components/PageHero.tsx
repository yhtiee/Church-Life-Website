import type { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  meta?: string;
};

export function PageHero({ eyebrow, title, children, meta }: Props) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {children && <p>{children}</p>}
        {meta && <p className="page-hero__meta">{meta}</p>}
      </div>
    </section>
  );
}
