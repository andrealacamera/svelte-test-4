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

  1. Open `app.css` and ~~add on the top of the code the `@import url('https://fonts.googleapis.com/css2?family=Exo+2&display=swap');` command suggested by Google Font page.~~  add to the bottom (adjust path to downloaded file):
  ```css
  @font-face {
    font-family: "Exo 2";
    src: url("/fonts/Exo2-VariableFont_wght.ttf");
  }
  ```
  2. Modify the `tailwind.config.js` extending the `fontFamily` (escape the white space with extra quotes): 
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

## 2 - Carousel

Carousel is a component based on my previous version (made in React). Several modifications have been made:
- added Svelte transition (better than previous based on tailwind classes)
- added []`{#key currentSlide}`](https://svelte.dev/docs/logic-blocks#key) within the `{#each}` block. Without it, transition will not work 🤔  
- by clicking on either direction buttons or small circles placed below the slide, the `setInterval` is reset. After that the _normal_ count continues.
- Fade in: fly | Fade out: fade. (TBD: add prop to choose transistions?)

## 3 - Back-To-Top 

Based on [`<svelte:window>`](https://svelte.dev/docs/special-elements#svelte-window) special element, binding the scrollY value to the `y` variable. The component is visible if `y > 50`(px). Transition with `fly`. JS function to scroll (`smooth` behaviour is nice!):
```js
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
```  

## 4 - Cookie policy

A banner that appears if no cookie has been previously set. When click ok button, a cookie is saved on the browser. (TBD: Replace the text with anything better!)

> Disclaimer. Do not use for any privacy law or other legal things! This is just an example for the management of cookies (more precisely: technical cookies).

## Created 2023-07-25 | Modified 2023-07-29

## References:

## Photos credits: 
- Photo by <a href="https://unsplash.com/@timothyeberly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Timothy Eberly</a> on <a href="https://unsplash.com/wallpapers/nature/autumn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
- Photo by <a href="https://unsplash.com/@jplenio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Johannes Plenio</a> on <a href="https://unsplash.com/wallpapers/nature/autumn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
- Photo by <a href="https://unsplash.com/@alisaanton?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alisa Anton</a> on <a href="https://unsplash.com/wallpapers/nature/autumn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
- Photo by <a href="https://unsplash.com/@szmigieldesign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lukasz Szmigiel</a> on <a href="https://unsplash.com/wallpapers/nature/autumn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  