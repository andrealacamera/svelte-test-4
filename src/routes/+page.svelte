<script lang="ts">
  import {t} from 'svelte-i18n'
  import Accordion from '$lib/components/Accordion.svelte';
  let count: number = 0
</script>
<svelte:head>
  <title>{$t('home.head')}</title>
</svelte:head>
<h1 class="text-4xl text-indigo-600">{$t('home.title')}</h1>

<section class="my-16 border border-indigo-900 rounded-xl p-2">
  <span class='py-2 px-4'> {$t('home.beers')}</span>
  <button class="border bg-indigo-950 text-indigo-100 px-4 py-2 rounded" on:click={() => count++}>+</button>
  <span class='py-2 px-4'> {count}</span>
  <button class="border bg-indigo-950 text-indigo-100 px-4 py-2 rounded" on:click={() => count>0?count--:0}>-</button>
  <p class="bg-indigo-300 p-2 my-2">{$t('home.text-beers', {values: {n:count}})}</p>
</section>

<Accordion>
  <span slot="title">{$t('home.acc-title-1')}</span>
  <p slot="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla commodi consequuntur hic sint autem repellendus molestias iusto culpa dignissimos quod perferendis molestiae, unde cumque officia. Saepe sapiente autem amet sunt possimus at quo pariatur itaque, maxime harum consequatur, inventore quidem, optio delectus quam tempore hic architecto animi suscipit esse alias?</p>
</Accordion>


<Accordion open={true}>
  <span slot="title">{$t('home.acc-title-2')}</span>
  <p slot="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, itaque.</p>
</Accordion>

<Accordion>
  <span slot="title">{$t('home.acc-title-3')}</span>
  <div slot="content">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt eos odio placeat quidem accusantium earum blanditiis dolores consectetur illo exercitationem.</p>
    <ul class="list-disc list-inside">
      <li>{$t('home.acc-item-1')}</li>
      <li>{$t('home.acc-item-2')}</li>
      <li>{$t('home.acc-item-3')}</li>
      <li>{$t('home.acc-item-4')}</li>
    </ul>
  </div>
</Accordion>