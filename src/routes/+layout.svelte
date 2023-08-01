<script lang="ts">
  import "../app.css"
  import Header from '$lib/components/Header.svelte'
  import Footer from "$lib/components/Footer.svelte";
  import BackToTop from "$lib/components/BackToTop.svelte";
  import CookieBanner from "$lib/components/CookieBanner.svelte";
</script>
<svelte:head>
  <script>
    function changeTheme(e) {
      window.location.reload();
    }

    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
    
    const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");
    const lightModePreference= window.matchMedia("(prefers-color-scheme: light)");

    darkModePreference.addEventListener("change", (e) => {
      if (e.matches && !('theme' in localStorage)) {
        changeTheme(1);
      }
    });
    lightModePreference.addEventListener("change", (e) => {
      if (e.matches && !('theme' in localStorage)) {
        changeTheme(0);
      }
    }
    );

  </script>
</svelte:head>
<div class="max-w-[1280px] bg-indigo-100 text-indigo-900 dark:bg-indigo-900 dark:text-indigo-100 m-auto min-h-screen p-4 md:p-8">  
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
  <BackToTop />
  <CookieBanner />
</div>