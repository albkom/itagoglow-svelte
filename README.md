# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

This repository contains a SvelteKit project designed to test and document the features of the [itagoglow.css](https://github.com/yourusername/itagoglow.css) library. Explore interactive examples, usage guides, and integration tips for adding glowing CSS effects to your Svelte applications.

## Features

- Live demos of itagoglow.css components and utilities
- Step-by-step integration instructions for SvelteKit
- Customization and theming examples
- Responsive and accessible design patterns

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

### SSG
> https://khromov.se/the-missing-guide-to-understanding-adapter-static-in-sveltekit/