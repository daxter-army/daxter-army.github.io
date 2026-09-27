# Web Portfolio (Current version: 5)

Personal portfolio for [Mehul Singh Teya](https://zudoku.in/), built with React and TypeScript.

## Features

- Responsive portfolio with light and dark themes.
- Build-time JSON-LD injection for structured profile data.
- An [`llms.txt`](https://zudoku.in/llms.txt) file that gives AI systems a concise, text-first summary of the site and its owner.
- SEO metadata, web app manifest, favicons, and optimized image assets.

## Development

```sh
npm install
npm run start
```

Create an optimized production build in `docs/` with:

```sh
npm run build
```

## Structured data

The profile schema lives in [`schema/profile.json`](schema/profile.json) instead of being maintained directly inside the HTML template. During `npm run build`, [`scripts/inject-json-ld.js`](scripts/inject-json-ld.js) validates the JSON and injects it into the generated `docs/index.html` as an inline `application/ld+json` script.

To update the structured data, edit `schema/profile.json` and rebuild the site. The development server intentionally keeps only the placeholder; injection happens in the production build.

## AI-readable site summary

[`public/llms.txt`](public/llms.txt) contains a concise summary of the portfolio, experience, and technical expertise. Create React App copies it to `/llms.txt` in the production output during the build.

## Announcement 🔊

- If you are seeing this, you might be a developer—and you are welcome 🎉.
- You are entirely free to refer/copy from this website (except my name image/avatars 😅).
- Icons powered by [react-icons](https://react-icons.com).
- Animations powered by [react-transition-group](https://reactcommunity.org/react-transition-group/).
- Inspired by [craftz.dog](https://github.com/craftzdog/craftzdog-homepage)

**Yours Sincerely,**<br/>
**Mehul Singh Teya**
