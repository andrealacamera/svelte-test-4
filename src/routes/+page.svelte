<script lang="ts">
  import {onMount} from 'svelte';
  import {t} from 'svelte-i18n'
  import Accordion from '$lib/components/Accordion.svelte';
  import Carousel from '$lib/components/Carousel.svelte';

  import anime from 'animejs/lib/anime.js';

  let count: number = 0
  $: beers = Array(count).fill("🍺")

  
  const data_carousel: Array<data_carousel> = [
    {
      "id": 0,
      "title": "lab.title",
      "text": "lab.description",
      "button": "common.read_more",
      "img": "/img/alisa-anton-JhxGkGgd3Sw-unsplash.jpg",
      "url": "/"
    },
    {
      "id": 1,
      "title": "pbd.title",
      "text": "pbd.description",
      "button": "common.read_more",
      "img": "/img/johannes-plenio-RwHv7LgeC7s-unsplash.jpg",
      "url": "/"
    },
    {
      "id": 2,
      "title": "rpg.title",
      "text": "rpg.description",
      "button": "common.generate",
      "img": "/img/lukasz-szmigiel-ps2daRcXYes-unsplash.jpg",
      "url": "/"
    },
    {
      "id": 3,
      "title": "other.title",
      "text": "other.description",
      "button": "common.read_more",
      "img": "/img/timothy-eberly-yuiJO6bvHi4-unsplash.jpg",
      "url": "/"
    } 
  ];


  onMount( () => {
    let timeline = anime.timeline();
    timeline.add({
      targets: '#title .letter',
      opacity: [1,0,1],
      easing: "easeInQuad",
      delay: (el, i) => 40 * i
    })

  }) 
</script>

<svelte:head>
  <title>{$t('home.head')}</title>
</svelte:head>


<h1 class="text-4xl text-indigo-900 dark:text-indigo-100" id="title">
  {#each $t('home.title') as l}
    <span class="letter">{l}</span>
  {/each}
</h1>

<h2>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis totam architecto sequi commodi, aliquid dolorem magni veritatis harum impedit labore, soluta temporibus natus? Sit rem maiores beatae, corrupti officiis veritatis!
</h2>
<section class="my-16 border border-indigo-900 dark:border-indigo-100 rounded-xl p-2">
  <span class='py-2 px-4'> {$t('home.beers')}</span>
  <button class="border bg-indigo-900 text-indigo-100 dark:bg-indigo-100 dark:text-indigo-900 px-4 py-2 rounded" on:click={() => count<10?count++:10}>+</button>
  <button class="border bg-indigo-900 text-indigo-100 dark:bg-indigo-100 dark:text-indigo-900 px-4 py-2 rounded" on:click={() => count>0?count--:0}>-</button>
  <div class="w-full">
    {#each beers as b}
      <span class="px-1">{b}</span>    
    {/each}
  </div>
  <p class="bg-indigo-300 dark:bg-indigo-700 p-2 my-2">{$t('home.text-beers', {values: {n:count}})}</p>
  
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


<Carousel data={data_carousel} />