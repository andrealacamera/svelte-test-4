# SVELTE-TEST-4

Intro... (TBD)
## Basic Setup:
```zsh
npm create svelte@latest svelte-test-4
``` 
(with these choices: Skeleton project (Svelte-kit)> TypeScript syntax > no additional options)

## Libraries / Add-ons:
- [TailwindCSS](https://tailwindcss.com/docs/guides/sveltekit) 

  Follow the instructions on the page!

- [Google Font: Exo 2](https://fonts.google.com/specimen/Exo+2?query=exo+2)

  1. Open `app.css` and add on the top of the code the `@import url('https://fonts.googleapis.com/css2?family=Exo+2&display=swap');` command suggested by Google Font page.
  2. Modify the `tailwind.config.js` extending the `fontFamily`: 
  ```js
  extend: {
      fontFamily: {
        sans: ["'Exo 2'", ...defaultTheme.fontFamily.sans]
      }
    },  
  ```
- [svelte-i18n](https://www.npmjs.com/package/svelte-i18n). See [`svelte-test-3`](https://github.com/andrealacamera/svelte-test-3), "test2" branch, for an example. 

  1. Install with `npm i svelte-i18n`
  2. Add `$lib/i18n/locales/en.json` and other language(s) 
  3. Add `$lib/i18n/index.ts` with async loading locales (see the file)
  4. Add `/src/routes/+layout.ts` with initialization
  5. Use `$format`, `$_`, or `$t` in pages. See [message syntax](https://formatjs.io/docs/core-concepts/icu-syntax).

- [Iconify](https://iconify.design/) 

## 1 - Accordion

Accordion is a component based on [this](https://svelte.dev/repl/c109f83f3c114cb7829f04fe2440ef94?version=4.1.1) example. In order to apply Tailwind classes to the component, some modifications in the style have been made.


## Created 2023-07-25 | Modified 2023-07-27

## References:
