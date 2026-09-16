/**
 * Files an account deletion request for the platform team to action.
 *
 * Writes to the `account_deletion_requests` table with the public anon key.
 * Row level security only allows inserting fresh pending requests, and nobody
 * outside the platform administrators can read them back.
 */
export type DeletionRequest = {
  email: string;
  full_name?: string;
  parish_name?: string;
  reason?: string;
};

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const deletionFormConfigured = Boolean(url && anonKey);

export async function submitDeletionRequest(request: DeletionRequest): Promise<void> {
  if (!url || !anonKey) {
    throw new Error('The request form is not set up yet. Please email us instead.');
  }

  const res = await fetch(`${url.replace(/\/$/, '')}/rest/v1/account_deletion_requests`, {
    method: 'POST',
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(request),
  });

  if (!res.ok) {
    throw new Error('We could not send your request. Please check your email address and try again.');
  }
}
