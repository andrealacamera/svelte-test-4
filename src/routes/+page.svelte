<script lang="ts">
  import {t} from 'svelte-i18n'
  let count: number = 0
</script>
<svelte:head>
  <title>{$t('home.head')}</title>
</svelte:head>
<h1 class="text-4xl text-indigo-600">{$t('home.title')}</h1>
<button on:click={() => count++}>+</button><span>{count}</span>
<button on:click={() => count--}>-</button>

<p>{$t('home.text', {values: {n:count}})}</p>