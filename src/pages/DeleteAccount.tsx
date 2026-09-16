import { useState, type FormEvent } from 'react';
import { Link } from 'react-router';
import { site, mailto } from '../config/site';
import { useDocumentTitle } from '../lib/useDocumentTitle';
import { deletionFormConfigured, submitDeletionRequest } from '../lib/deletionRequest';
import { PageHero } from '../components/PageHero';
import { IconCheck, IconInfo, IconTrash } from '../components/Icons';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function RequestForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = (name: string) => String(data.get(name) ?? '').trim();

    // Bots fill every field, people never see this one.
    if (text('website')) {
      setStatus('sent');
      return;
    }

    const email = text('email');
    if (!EMAIL_RE.test(email)) {
      setEmailError('Enter the email address you use to sign in to the app.');
      return;
    }
    setEmailError('');

    setStatus('sending');
    setError('');
    try {
      await submitDeletionRequest({
        email: email.toLowerCase(),
        full_name: text('full_name') || undefined,
        parish_name: text('parish_name') || undefined,
        reason: text('reason') || undefined,
      });
      setStatus('sent');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="success-panel" role="status">
        <span className="icon-chip">
          <IconCheck />
        </span>
        <h2>Request received</h2>
        <p>
          We will confirm the request with you at the email address you gave, then delete the account within [30 days].
        </p>
      </div>
    );
  }

  const fallback = mailto(site.privacyEmail, `${site.appName} account deletion request`);

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      {!deletionFormConfigured && (
        <div className="form-status" role="alert">
          The online form is not available right now. Please email {site.privacyEmail} instead.
        </div>
      )}

      <div className="field">
        <label htmlFor="email">Account email address</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          aria-invalid={emailError ? true : undefined}
          aria-describedby={emailError ? 'email-error' : undefined}
        />
        {emailError && (
          <span id="email-error" className="field__error">
            {emailError}
          </span>
        )}
      </div>

      <div className="field">
        <label htmlFor="full_name">
          Full name <span>(optional)</span>
        </label>
        <input id="full_name" name="full_name" autoComplete="name" maxLength={120} />
      </div>

      <div className="field">
        <label htmlFor="parish_name">
          Parish <span>(optional)</span>
        </label>
        <input id="parish_name" name="parish_name" maxLength={160} />
      </div>

      <div className="field">
        <label htmlFor="reason">
          Anything you&apos;d like us to know <span>(optional)</span>
        </label>
        <textarea id="reason" name="reason" maxLength={1000} />
      </div>

      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Leave this empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="check">
        <input type="checkbox" checked={confirmed} onChange={(e) => setConfirmed(e.target.checked)} />
        <span>I understand that deleting my account is permanent and cannot be undone.</span>
      </label>

      {status === 'error' && (
        <div className="form-status" role="alert">
          {error}
          {fallback && (
            <>
              {' '}
              You can also email <a href={fallback}>{site.privacyEmail}</a>.
            </>
          )}
        </div>
      )}

      <button type="submit" className="btn btn--danger" disabled={!confirmed || status === 'sending' || !deletionFormConfigured}>
        <IconTrash />
        {status === 'sending' ? 'Sending request…' : 'Request account deletion'}
      </button>
    </form>
  );
}

export function DeleteAccount() {
  useDocumentTitle('Delete your account');

  return (
    <>
      <PageHero eyebrow="Your data" title={`Delete your ${site.appName} account`}>
        You can delete your {site.appName} account and the personal information linked to it at any time, from the app
        or from this page.
      </PageHero>

      <section className="section">
        <div className="container two-col">
          <div className="card card--pad-lg">
            <h2>Delete it in the app</h2>
            <p>This is the quickest way. Your account is deleted immediately.</p>
            <ol className="num-steps">
              <li>
                <span>
                  Open <b>{site.appName}</b> and sign in.
                </span>
              </li>
              <li>
                <span>
                  Go to the <b>Profile</b> tab.
                </span>
              </li>
              <li>
                <span>
                  Scroll down and tap <b>Delete Account</b>.
                </span>
              </li>
              <li>
                <span>
                  Tap <b>Delete my account</b> to confirm.
                </span>
              </li>
            </ol>

            <h3>What is deleted</h3>
            <ul className="list-tight">
              <li>Your sign-in details and profile</li>
              <li>Group memberships and group chat messages</li>
              <li>Notifications, requests and activity history</li>
            </ul>

            <h3>What your parish keeps</h3>
            <p>
              Support records, pledges and Mass intention bookings stay with your parish as part of its financial
              records and schedule of Masses. They are separated from your account and no longer show your name. Backups
              are cleared within [30 days]. See the <Link to="/privacy#retention">privacy policy</Link> for details.
            </p>
          </div>

          <div className="card card--pad-lg">
            <h2>Request deletion here</h2>
            <p>
              No longer have the app? Send us a request and we will delete the account for you after confirming it is
              yours.
            </p>
            <div className="callout callout--info" style={{ marginTop: 16, marginBottom: 0 }}>
              <IconInfo />
              <span>We only use these details to find and delete your account.</span>
            </div>
            <RequestForm />
          </div>
        </div>
      </section>
    </>
  );
}
