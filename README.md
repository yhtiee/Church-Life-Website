# Church Life website

The public site for the Church Life app: the landing page, plus the pages the app stores require.

| Route             | Purpose                                                               |
| ----------------- | --------------------------------------------------------------------- |
| `/`               | Landing page with store badges                                        |
| `/privacy`        | Privacy policy (App Store and Google Play privacy policy URL)         |
| `/terms`          | Terms of use                                                          |
| `/support`        | Support page (App Store support URL)                                  |
| `/delete-account` | Account deletion instructions and request form (Google Play requirement) |

## Setup

```bash
npm install
cp .env.example .env   # fill in the Supabase URL and anon key
npm run dev
```

Only use the **anon** key here. Never use the service role key.

## Before submitting to the stores

Every value in `[square brackets]` is a placeholder. Most of them live in `src/config/site.ts`: the legal owner, the jurisdiction, the support and privacy emails, the store URLs, the domain and the effective date. The rest are in the page text; search the `src` folder for `[` to find them all.

The store badges read "Coming soon" until real store URLs are set.

Have someone qualified review the privacy policy and terms before you publish.

## Deletion requests

The form on `/delete-account` adds a row to the `account_deletion_requests` table in Supabase. Only platform administrators can read those rows. Handle each request in the Supabase dashboard:

1. Confirm the request with the person by email.
2. Delete the user under Authentication.
3. Set the row's `status` to `completed`.

## Deploying

Run `npm run build`, then deploy the `dist` folder. It is a single-page app, so the host must send every route to `index.html`:

- **Vercel:** `vercel.json` already does this.
- **Netlify and Cloudflare Pages:** `public/_redirects` already does this.

Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in the host's environment settings.
