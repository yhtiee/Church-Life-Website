import { Link } from 'react-router';
import { site, mailto } from '../config/site';
import { useDocumentTitle } from '../lib/useDocumentTitle';
import { PageHero } from '../components/PageHero';
import { DocLayout, type DocSection } from '../components/DocLayout';

const sections: DocSection[] = [
  {
    id: 'agreement',
    title: 'About these terms',
    body: (
      <p>
        These terms govern your use of the {site.appName} app and website, provided by {site.legalOwner}. By creating an
        account or using the app you agree to them. Our <Link to="/privacy">Privacy Policy</Link> explains how we handle
        your information.
      </p>
    ),
  },
  {
    id: 'accounts',
    title: 'Your account',
    body: (
      <ul>
        <li>You must be at least [13] years old to create an account.</li>
        <li>Give accurate details, and keep your password private. You are responsible for activity on your account.</li>
        <li>Your parish decides whether to admit you and which groups and roles you hold.</li>
        <li>
          You can delete your account at any time from <strong>Profile → Delete Account</strong>.
        </li>
      </ul>
    ),
  },
  {
    id: 'parishes',
    title: 'Parishes and their content',
    body: (
      <>
        <p>
          Mass schedules, readings, reflections, notices, account details and other parish information are published
          by each parish&apos;s administrators, who are responsible for keeping them accurate. {site.legalOwner} does
          not check that content and is not responsible for it.
        </p>
        <p>
          Parish administrators must use members&apos; information only for parish purposes and must keep it
          confidential.
        </p>
      </>
    ),
  },
  {
    id: 'support-and-payments',
    title: 'Support and payments',
    body: (
      <>
        <p>
          {site.appName} does not collect, hold or transfer money. Any support, pledge, Mass offering or gift is a
          transfer you make yourself, directly to the account shown, and is between you and the recipient.
        </p>
        <ul>
          <li>Check the account details before you pay. If in doubt, confirm them with your parish office.</li>
          <li>Recording a payment in the app does not move money. It lets the parish confirm your transfer.</li>
          <li>Refunds and disputes must be settled with the recipient or your bank.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'conduct',
    title: 'Acceptable use',
    body: (
      <>
        <p>When using {site.appName}, including group chats and celebration wishes, do not:</p>
        <ul>
          <li>post anything unlawful, abusive, hateful, sexually explicit or misleading;</li>
          <li>harass other members or share their personal information without permission;</li>
          <li>impersonate someone else, or claim a role or title you do not hold;</li>
          <li>send spam or solicit money for anything other than the purposes the app provides;</li>
          <li>try to access data you are not permitted to see, or disrupt the service.</li>
        </ul>
        <p>Parish administrators may remove content and members. We may suspend accounts that break these rules.</p>
      </>
    ),
  },
  {
    id: 'your-content',
    title: 'Your content',
    body: (
      <p>
        You keep ownership of what you post. You allow us to store and display it to the people it is meant for, only
        as needed to run the app.
      </p>
    ),
  },
  {
    id: 'our-app',
    title: 'Our app',
    body: (
      <p>
        The app, its design and its software belong to {site.legalOwner} or its licensors. You may use the app for
        personal, non-commercial purposes and must not copy, modify or reverse engineer it except where the law allows.
      </p>
    ),
  },
  {
    id: 'availability',
    title: 'Availability and changes',
    body: (
      <p>
        We work to keep {site.appName} available but cannot promise it will always be uninterrupted or error-free. We
        may change or discontinue features, and will give notice of significant changes where we reasonably can.
      </p>
    ),
  },
  {
    id: 'liability',
    title: 'Disclaimers and liability',
    body: (
      <>
        <p>
          The app is provided &quot;as is&quot;. To the extent the law allows, {site.legalOwner} is not liable for
          indirect or consequential losses, for content published by parishes or members, or for transfers made
          between users and recipients.
        </p>
        <p>Nothing in these terms limits any rights you have that cannot be limited by law.</p>
      </>
    ),
  },
  {
    id: 'ending',
    title: 'Ending your use',
    body: (
      <p>
        You can stop using {site.appName} and delete your account at any time. We may suspend or close an account that
        breaks these terms. Sections that by their nature should continue, such as those on liability, will continue
        after your account ends.
      </p>
    ),
  },
  {
    id: 'law',
    title: 'Governing law',
    body: <p>These terms are governed by the laws of {site.jurisdiction}.</p>,
  },
  {
    id: 'app-stores',
    title: 'App stores',
    body: (
      <p>
        If you downloaded {site.appName} from the Apple App Store or Google Play, their terms also apply. Apple and
        Google are not responsible for the app or its support. These terms are between you and {site.legalOwner}.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    body: (
      <p>
        Questions about these terms can be sent to{' '}
        {mailto(site.supportEmail) ? (
          <a href={mailto(site.supportEmail, `${site.appName} terms`)}>{site.supportEmail}</a>
        ) : (
          <strong>{site.supportEmail}</strong>
        )}
        .
      </p>
    ),
  },
];

export function Terms() {
  useDocumentTitle('Terms of Use');
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" meta={`Effective ${site.policiesEffective}`}>
        The rules for using {site.appName}, written as plainly as we can.
      </PageHero>
      <DocLayout sections={sections} />
    </>
  );
}
