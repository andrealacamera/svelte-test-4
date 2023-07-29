<script lang="ts">
  import {fly} from 'svelte/transition';
  import Icon from '@iconify/svelte';

  let y: number;
  $: visible = y > 50;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
</script>

<svelte:window bind:scrollY={y}></svelte:window>

{#if visible}
<div class="fixed bottom-2 right-2" transition:fly={{x:'100%'}}>
  <button on:click={scrollToTop} class="p-4 rounded-xl bg-indigo-900 text-indigo-200 hover:text-indigo-50">
    <Icon icon="bi:chevron-double-up" class="w-6 h-6" />
  </button>
</div>
{/if}