import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { site } from '../config/site';
import { useDocumentTitle } from '../lib/useDocumentTitle';
import { StoreBadges } from '../components/StoreBadges';
import { PhoneMockup } from '../components/PhoneMockup';
import {
  IconArrowRight,
  IconBell,
  IconBook,
  IconCalendar,
  IconCheck,
  IconGift,
  IconHeart,
  IconLock,
  IconShield,
  IconUsers,
} from '../components/Icons';

import heroExterior from '../assets/images/hero-exterior.jpg';
import heroInterior from '../assets/images/hero-interior.jpg';
import community from '../assets/images/community.jpg';
import bibleStudy from '../assets/images/bible-study.jpg';
import massBooking from '../assets/images/mass-booking.jpg';
import giving from '../assets/images/giving.jpg';
import groups from '../assets/images/groups.jpg';
import readings from '../assets/images/readings.jpg';
import chapel from '../assets/images/chapel.jpg';

type Feature = { title: string; body: string; image: string; icon: ReactNode; tone?: string };

const features: Feature[] = [
  {
    title: 'Mass times and intentions',
    body: 'See your parish Mass schedule, devotions and sacraments, and book a Mass intention for a loved one in a few taps.',
    image: massBooking,
    icon: <IconCalendar />,
  },
  {
    title: 'Daily readings',
    body: "Read the day's Scripture with your parish's reflection, alongside the Bible, hymns, the Rosary and everyday prayers.",
    image: readings,
    icon: <IconBook />,
    tone: 'gold',
  },
  {
    title: 'Parish groups',
    body: 'Join the societies and groups in your parish, keep up with their news and talk with fellow members.',
    image: groups,
    icon: <IconUsers />,
    tone: 'violet',
  },
  {
    title: 'Support your parish',
    body: "View your parish's official account details, make your transfer, then record it so the parish can confirm it.",
    image: giving,
    icon: <IconHeart />,
  },
  {
    title: 'Celebrations',
    body: 'See who is marking a birthday or anniversary and send them a prayer and a gift, openly or anonymously.',
    image: community,
    icon: <IconGift />,
    tone: 'gold',
  },
  {
    title: 'Parish notices',
    body: 'Announcements, events and reminders from your parish arrive as notifications, so nothing is missed.',
    image: bibleStudy,
    icon: <IconBell />,
    tone: 'violet',
  },
];

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: 'Is Church Life free?',
    a: 'Yes. The app is free to download and use. Any support you give to your parish or to a celebrant goes directly to their bank account by your own transfer.',
  },
  {
    q: 'Does the app take payments?',
    a: 'No. Church Life never charges your card or holds money. It shows the account details your parish has published, and lets you record a transfer you have made so the parish can confirm it.',
  },
  {
    q: "My parish isn't listed. What can I do?",
    a: (
      <>
        Ask your parish office to get in touch, or reach us through the <Link to="/support">support page</Link>. We add
        parishes as they join.
      </>
    ),
  },
  {
    q: 'Can I move to another parish?',
    a: 'Yes. Request a transfer from your profile. The administrator of your current parish reviews and approves it.',
  },
  {
    q: 'Who can see my information?',
    a: (
      <>
        The administrators of your parish, and other members only where a feature needs it, such as group membership.
        Read the full <Link to="/privacy">privacy policy</Link>.
      </>
    ),
  },
  {
    q: 'How do I delete my account?',
    a: (
      <>
        In the app, open <strong>Profile</strong> and tap <strong>Delete Account</strong>. If you no longer have the app,
        use our <Link to="/delete-account">account deletion page</Link>.
      </>
    ),
  },
];

export function Home() {
  useDocumentTitle();

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <img className="hero__bg" src={heroExterior} alt="" fetchPriority="high" />
        <div className="container hero__inner">
          <div>
            <span className="eyebrow">For Catholic parishes</span>
            <h1>
              Your parish, <em>in your pocket.</em>
            </h1>
            <p className="hero__lead">{site.description}</p>
            <StoreBadges />
            <div className="hero__links">
              <a href="#features" className="btn btn--ghost-light btn--sm">
                See what&apos;s inside <IconArrowRight />
              </a>
              <a href="#parishes" className="btn btn--ghost-light btn--sm">
                I run a parish
              </a>
            </div>
          </div>
          <div className="hero__visual">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* Quick facts, overlapping the hero */}
      <div className="container band">
        <div className="band__grid">
          <div className="band__item">
            <span className="icon-chip"><IconCalendar /></span>
            <div>
              <h3>Every Mass time</h3>
              <p>Schedules kept up to date by your parish office.</p>
            </div>
          </div>
          <div className="band__item">
            <span className="icon-chip icon-chip--gold"><IconShield /></span>
            <div>
              <h3>Verified by your parish</h3>
              <p>Every support record is confirmed by a parish administrator.</p>
            </div>
          </div>
          <div className="band__item">
            <span className="icon-chip icon-chip--violet"><IconLock /></span>
            <div>
              <h3>Private by design</h3>
              <p>Your details stay within your parish. Delete your account at any time.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <section id="features" className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">What&apos;s inside</span>
            <h2>Everything your parish life needs</h2>
            <p>From Sunday Mass to Monday&apos;s society meeting, Church Life keeps you close to your community all week.</p>
          </div>

          <div className="feature-grid">
            {features.map((f) => (
              <article key={f.title} className="feature">
                <div className="feature__media">
                  <img src={f.image} alt="" loading="lazy" width={640} height={400} />
                </div>
                <div className="feature__body">
                  <h3>
                    <span className={`icon-chip${f.tone ? ` icon-chip--${f.tone}` : ''}`}>{f.icon}</span>
                    {f.title}
                  </h3>
                  <p>{f.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Get started */}
      <section className="section section--white">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Get started</span>
            <h2>Up and running in three steps</h2>
          </div>
          <ol className="steps">
            <li className="step">
              <h3>Download the app</h3>
              <p>Get Church Life free from the App Store or Google Play.</p>
            </li>
            <li className="step">
              <h3>Choose your parish</h3>
              <p>Create your account and pick your parish from the directory.</p>
            </li>
            <li className="step">
              <h3>Join in</h3>
              <p>Once your parish admits you, join groups, book intentions and follow the daily readings.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* Community split */}
      <section className="section">
        <div className="container split">
          <div className="split__media">
            <img src={community} alt="Parishioners talking outside their church after Mass" loading="lazy" />
            <div className="split__tag">
              <span className="icon-chip icon-chip--gold"><IconGift /></span>
              Celebrate together
            </div>
          </div>
          <div className="split__body">
            <span className="eyebrow">Community</span>
            <h2>A parish is its people</h2>
            <p>
              Church Life helps members know one another beyond the pews. Celebrate birthdays and anniversaries, pray for
              one another and stay in step with the groups you belong to.
            </p>
            <ul className="checklist">
              <li><IconCheck /> Wishes and prayers for celebrants, with the option to stay anonymous</li>
              <li><IconCheck /> Groups for societies, choirs, youth and more</li>
              <li><IconCheck /> Move to a new parish without starting again</li>
            </ul>
          </div>
        </div>
      </section>

      {/* For parishes */}
      <section id="parishes" className="section section--night">
        <div className="container split split--reverse">
          <div className="split__media">
            <img src={chapel} alt="A quiet parish chapel" loading="lazy" />
          </div>
          <div className="split__body">
            <span className="eyebrow">For parish priests and administrators</span>
            <h2>Run your parish from one place</h2>
            <p>
              Parish administrators get their own workspace to keep information current and look after members, with
              nothing to install on a computer.
            </p>
            <ul className="checklist">
              <li><IconCheck /> Publish Mass schedules, devotions, sacraments and daily reflections</li>
              <li><IconCheck /> Admit members, manage groups and assign duty roles</li>
              <li><IconCheck /> Confirm support, pledges and Mass intentions as they arrive</li>
              <li><IconCheck /> Post notices and celebrations to the home screen</li>
            </ul>
            <div className="stats">
              <div className="stat">
                <strong>[10+]</strong>
                <span>Parishes onboarded</span>
              </div>
              <div className="stat">
                <strong>[1,000+]</strong>
                <span>Parishioners connected</span>
              </div>
            </div>
            <Link to="/support" className="btn btn--gold">
              Bring your parish on board <IconArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section section--white">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Faith, every day</span>
            <h2>Made for the whole week</h2>
          </div>
          <div className="gallery">
            <figure>
              <img src={heroInterior} alt="" loading="lazy" />
              <figcaption>Sunday Mass</figcaption>
            </figure>
            <figure>
              <img src={readings} alt="" loading="lazy" />
              <figcaption>Morning reading</figcaption>
            </figure>
            <figure>
              <img src={bibleStudy} alt="" loading="lazy" />
              <figcaption>Bible study group</figcaption>
            </figure>
            <figure>
              <img src={groups} alt="" loading="lazy" />
              <figcaption>Parish societies</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Questions</span>
            <h2>Frequently asked</h2>
          </div>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <div>{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="section section--white">
        <div className="container">
          <div className="cta-band">
            <h2>Bring your parish with you</h2>
            <p>Download {site.appName} and stay connected to Mass, your groups and your community.</p>
            <StoreBadges />
          </div>
        </div>
      </section>
    </>
  );
}
