# SVELTE-TEST-4

Intro... (TBD)
## Basic Setup:
```zsh
npm create svelte@latest svelte-test-4
``` 
(with these choices: Skeleton project (Svelte-kit)> TypeScript syntax > no additional options)

## Added:
- [TailwindCSS](https://tailwindcss.com/docs/guides/sveltekit) 

  Follow the instructions on the page!

- [Google Font: Exo 2](https://fonts.google.com/share?selection.family=Exo%2B2)

  1. Open `app.css` and add on the top of the code the `@import url('https://fonts.googleapis.com/css2?family=Exo+2&display=swap');` command suggested by Google Font page.
  2. Modify the `tailwind.config.js` extending the `fontFamily`: 
  ```js
  extend: {
      fontFamily: {
        sans: ["'Exo 2'", ...defaultTheme.fontFamily.sans]
      }
    },  
  ```


## Created 2023-07-25 | Modified 2023-07-25

## References:
