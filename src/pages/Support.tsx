import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { site, mailto, whatsappUrl } from '../config/site';
import { useDocumentTitle } from '../lib/useDocumentTitle';
import { PageHero } from '../components/PageHero';
import { IconChat, IconChurch, IconMail } from '../components/Icons';

const topics: { q: string; a: ReactNode }[] = [
  {
    q: "I can't sign in",
    a: 'Check that you are using the email address you registered with, and that caps lock is off. If you still cannot sign in, contact us with that email address and we will help.',
  },
  {
    q: 'I am waiting for my parish to admit me',
    a: 'New members are admitted by their parish administrator. If it is taking a while, contact your parish office directly.',
  },
  {
    q: "My parish isn't in the list",
    a: 'Choose the option to contact support on the sign-up screen, or message us on WhatsApp with the parish name and location.',
  },
  {
    q: 'I recorded a payment but it still shows as pending',
    a: 'Your parish administrator confirms each payment once it appears in the parish account. This can take a few days. For questions about a specific payment, contact your parish office.',
  },
  {
    q: 'How do I change my parish or group?',
    a: 'Open your profile and request a transfer. The administrator of your current parish reviews it.',
  },
  {
    q: 'I am not getting notifications',
    a: 'Make sure notifications are allowed for Church Life in your phone settings, then sign out and back in to refresh your device registration.',
  },
  {
    q: 'How do I delete my account?',
    a: (
      <>
        In the app, go to <strong>Profile → Delete Account</strong>. Without the app, use the{' '}
        <Link to="/delete-account">account deletion page</Link>.
      </>
    ),
  },
];

export function Support() {
  useDocumentTitle('Support');
  const emailHref = mailto(site.supportEmail, `${site.appName} support`);

  return (
    <>
      <PageHero eyebrow="Support" title="How can we help?">
        Get help with the {site.appName} app. We aim to reply within [2 working days].
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="card-grid">
            <div className="card">
              <span className="icon-chip"><IconMail /></span>
              <h2>Email</h2>
              <p>Best for account questions and anything that needs detail.</p>
              <span className="card__value">{site.supportEmail}</span>
              {emailHref && (
                <a className="btn btn--primary btn--sm" href={emailHref}>
                  Send an email
                </a>
              )}
            </div>

            <div className="card">
              <span className="icon-chip icon-chip--gold"><IconChat /></span>
              <h2>WhatsApp</h2>
              <p>Quick questions, and adding a parish that isn&apos;t listed yet.</p>
              <span className="card__value">{site.whatsapp}</span>
              <a
                className="btn btn--primary btn--sm"
                href={whatsappUrl(`Hello, I need help with the ${site.appName} app.`)}
                target="_blank"
                rel="noreferrer"
              >
                Open WhatsApp
              </a>
            </div>

            <div className="card">
              <span className="icon-chip icon-chip--violet"><IconChurch /></span>
              <h2>Your parish office</h2>
              <p>
                For Mass intentions, payment confirmations, group membership and parish information, your parish office
                can help fastest.
              </p>
              <span className="card__value">{site.supportHours}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Common questions</span>
            <h2>Quick answers</h2>
          </div>
          <div className="faq">
            {topics.map((t) => (
              <details key={t.q}>
                <summary>{t.q}</summary>
                <div>{t.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
