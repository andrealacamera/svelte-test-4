<script lang="ts">
  import "../app.css"
  import Header from '$lib/components/Header.svelte'
  import Footer from "$lib/components/Footer.svelte";
  import BackToTop from "$lib/components/BackToTop.svelte";
  import CookieBanner from "$lib/components/CookieBanner.svelte";
</script>
<div class="max-w-[1280px] bg-indigo-100 text-indigo-900 dark:bg-indigo-900 dark:text-indigo-100 m-auto min-h-screen p-4 md:p-8">  
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
  <BackToTop />
  <CookieBanner />
</div>