import { Link } from 'react-router';
import { site, mailto } from '../config/site';
import { useDocumentTitle } from '../lib/useDocumentTitle';
import { PageHero } from '../components/PageHero';
import { DocLayout, type DocSection } from '../components/DocLayout';
import { IconInfo } from '../components/Icons';

function Email({ address }: { address: string }) {
  const href = mailto(address, `${site.appName} privacy`);
  return href ? <a href={href}>{address}</a> : <strong>{address}</strong>;
}

const sections: DocSection[] = [
  {
    id: 'who-we-are',
    title: 'Who we are',
    body: (
      <>
        <p>
          {site.appName} is provided by <strong>{site.legalOwner}</strong> ("we", "us"), {site.postalAddress}. We are
          responsible for the personal information processed through the app and this website.
        </p>
        <p>
          Your parish also uses the information you share with it through {site.appName}. Parish administrators are
          responsible for how they use it within the parish.
        </p>
      </>
    ),
  },
  {
    id: 'what-we-collect',
    title: 'Information we collect',
    body: (
      <>
        <p>We only collect what the app needs to connect you with your parish.</p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>What it includes</th>
                <th>Why we need it</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Account details</td>
                <td>Full name, baptismal name (optional), email address, password (stored only in hashed form)</td>
                <td>To create your account and sign you in</td>
              </tr>
              <tr>
                <td>Profile details</td>
                <td>Phone number, sex, birth month, parish, parish group, and any role or duty title your parish gives you</td>
                <td>So your parish can recognise you, admit you and place you in the right groups, and so birthdays can be celebrated</td>
              </tr>
              <tr>
                <td>Parish activity</td>
                <td>
                  Group memberships and requests, group chat messages, parish transfer requests, and a history of actions
                  you take in the app
                </td>
                <td>To run the features you use and let your parish review requests</td>
              </tr>
              <tr>
                <td>Support and giving records</td>
                <td>
                  Amounts, categories, dates and notes for support and pledges you record, the account you paid into, and
                  wishes, prayers and gifts you send to celebrants
                </td>
                <td>So your parish can confirm transfers and keep accurate records</td>
              </tr>
              <tr>
                <td>Mass intentions</td>
                <td>Your name as the requester, the date and time, the type of intention and its details</td>
                <td>So the parish can offer the Mass you requested</td>
              </tr>
              <tr>
                <td>Device information</td>
                <td>A push notification token for your device</td>
                <td>To send you parish notifications, if you allow them</td>
              </tr>
              <tr>
                <td>Photos</td>
                <td>Images that parish administrators upload for notices and celebrations</td>
                <td>To show them on the home screen</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          We do not collect your location, contacts or payment card details, and we do not use advertising identifiers
          or track you across other apps and websites.
        </p>
      </>
    ),
  },
  {
    id: 'payments',
    title: 'Payments',
    body: (
      <p>
        {site.appName} does not process payments. When you support your parish or a celebrant, you make the transfer
        yourself through your own bank. The app only records the details you enter so the parish can confirm the
        transfer. Your bank's own terms and privacy policy apply to the transfer.
      </p>
    ),
  },
  {
    id: 'who-can-see',
    title: 'Who can see your information',
    body: (
      <>
        <ul>
          <li>
            <strong>Your parish administrators</strong> can see your profile and the requests, records and bookings you
            make with their parish.
          </li>
          <li>
            <strong>Other members</strong> can see your name where a feature needs it, such as in a group you have
            joined or on a celebration. If you send a wish anonymously, the celebrant does not see your name, although
            parish administrators still can, so that they can confirm your transfer.
          </li>
          <li>
            <strong>Platform administrators</strong> at {site.legalOwner} can see account information when it is
            needed to run the service, handle support requests or keep it secure.
          </li>
        </ul>
        <p>We do not sell your personal information or share it with advertisers.</p>
      </>
    ),
  },
  {
    id: 'service-providers',
    title: 'Service providers',
    body: (
      <>
        <p>We use a small number of providers to run the app. They process data only on our instructions.</p>
        <ul>
          <li>
            <strong>Supabase</strong>: database, sign-in and file storage.
          </li>
          <li>
            <strong>Expo</strong>: app updates and delivering push notifications.
          </li>
          <li>
            <strong>Apple and Google</strong>: delivering push notifications to your device.
          </li>
        </ul>
        <p>
          Some buttons in the app open WhatsApp so you can message your parish or our support team. Anything you send
          there is handled under WhatsApp's own privacy policy.
        </p>
        <p>These providers may store data outside your country. Where they do, we rely on appropriate safeguards.</p>
      </>
    ),
  },
  {
    id: 'retention',
    title: 'How long we keep it',
    body: (
      <>
        <p>We keep your information for as long as you have an account.</p>
        <p>When you delete your account:</p>
        <ul>
          <li>
            Your sign-in details, profile, group memberships, group chat messages, notifications, requests and activity
            history are deleted straight away.
          </li>
          <li>
            Support records, pledges and Mass intention bookings are <strong>kept by your parish</strong> because they
            form part of its financial records and its schedule of Masses. They are separated from your account and no
            longer show your name.
          </li>
          <li>Backups are overwritten on a rolling basis within [30 days].</li>
        </ul>
      </>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your choices and rights',
    body: (
      <>
        <p>You can:</p>
        <ul>
          <li>see and update most of your details from the Profile screen in the app;</li>
          <li>turn notifications off in your device settings;</li>
          <li>
            delete your account at any time from <strong>Profile → Delete Account</strong>, or through our{' '}
            <Link to="/delete-account">account deletion page</Link>;
          </li>
          <li>
            ask us for a copy of your information, or ask us to correct or restrict it, by writing to{' '}
            <Email address={site.privacyEmail} />.
          </li>
        </ul>
        <p>
          Depending on where you live, data protection law in {site.jurisdiction} may give you further rights,
          including the right to complain to the data protection authority.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    title: 'Security',
    body: (
      <p>
        Data is encrypted in transit. Access is restricted so that members only see information from their own parish,
        and administrator actions are logged. No system is perfectly secure, so please use a strong password and keep
        it private.
      </p>
    ),
  },
  {
    id: 'children',
    title: 'Children',
    body: (
      <p>
        {site.appName} is intended for people aged [13] and over. If you believe a child under that age has created an
        account, contact us and we will delete it.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: (
      <p>
        We will update this page when our practices change and show the new effective date at the top. If a change is
        significant, we will also tell you in the app.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact us',
    body: (
      <p>
        Questions about privacy can be sent to <Email address={site.privacyEmail} />, or by post to {site.legalOwner},{' '}
        {site.postalAddress}.
      </p>
    ),
  },
];

export function Privacy() {
  useDocumentTitle('Privacy Policy');
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" meta={`Effective ${site.policiesEffective}`}>
        How {site.appName} collects, uses and protects your information.
      </PageHero>
      <DocLayout
        intro={
          <div className="callout callout--info">
            <IconInfo />
            <span>
              <strong>In short:</strong> we collect what your parish needs to know you, we never sell it, we don&apos;t
              handle your money, and you can delete your account from the app at any time.
            </span>
          </div>
        }
        sections={sections}
      />
    </>
  );
}
