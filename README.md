# Discogs Collection

This project was originally created by [@codeAdrian](https://github.com/codeAdrian).

All credit goes to him, I only modified little bits for myself.

## Running

Once you've cloned this repo and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.


## Changes

These are changes that I have made to this repo from the original:

- Moved the following values to `.env` for security as well as ease of changing:
  - `API_KEY`: Discogs API Key
  - `API_SECRET`: Discogs API Secret
  - `API_USERNAME`: The user to lookup the discogs collection for
  - `BASE_URL`: the base URL of the final production site (used in opengraph meta tags)
  - `USER_NAME`: the name of the site owner (for header, site title, etc)
  - `TWITTER_USER`: The Twitter username of the site owner (for footer and meta tags)
  - `LINKEDIN_USER`: The LinkedIn profile name of the site owner (for footer and meta tags)
  - `GITHUB_USER`: The Github username of the site owner (for footer and meta tags)
  - Env vars must be prefixed with `VITE_` in the `.env` file to import
  - To use env vars in `.ts` files, use format: `${import.meta.env.VITE_API_KEY}`. To use in `.svelte` files, import in a script block and then use format: `{USER_NAME}` in the html block.
- Changed site title (and meta tags) to the USER_NAME
- Changed font family from ***Germania One*** (hard rock/heavy metal style) to ***Permanent Marker*** via `styles/variable.pcss` and `app.html`
- Changed footer:
  - changed social links to site owner's (see above)
  - rephrased original attribution, and moved it below social links
- Changed favicons (i used [logoAI](https://www.logoai.com/make) + [svgomg](https://jakearchibald.github.io/svgomg/) + [favicon-generator](https://favicon.io/favicon-converter/))
- Removed facebook app info (?) from opengraph tags