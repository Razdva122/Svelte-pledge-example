# Svelte Pledges Block

This is a project is block of pledges from [Profi Avtocod](https://profi.avtocod.ru/) rewrited on [Svelte](https://svelte.dev).

## Demo

Demonstration: [GitHubPages](https://razdva122.github.io/Svelte-pledge-example/)

Presentation: [Slides.com](https://slides.com/tylerlolololol/svelte)

## Information

Pledges Block it's **isolated web-component**.
To use component in your project you should import `bundle.css` and `bundle.js`.
```html
<link rel='stylesheet' href='build/bundle.css'>

<script defer src='build/bundle.js'></script>
```

After it you can use web-component in your project
```html
<pledges-block></pledges-block>
```

Data for block provided via attribute `pledges`
Interface can be found in `@/src/main.ts`

## Clone project

```bash
git clone https://github.com/Razdva122/Svelte-pledge-example
```

## Get started

Install the dependencies...

```bash
cd svelte-pledge-example
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.


## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).
