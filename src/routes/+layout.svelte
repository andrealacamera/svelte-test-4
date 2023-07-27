<script lang="ts">
  import "../app.css"
  import Header from '$lib/components/Header.svelte'
</script>

<div class="max-w-[1280px] bg-indigo-100 m-auto min-h-screen p-4 md:p-8">
  
  <Header />
  <main>
    <slot />
  </main>
  
</div>