<script lang="ts">
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { t } from 'svelte-i18n';

  export let data: Array<data_carousel> 
  export let duration: number = 5000;


  let currentSlide: number = 0;
  let ffwd: boolean = true;
  let tt: number = 0;
  // $: updateAnimation(currentSlide, false);

  const nextSlide = (reset: boolean = true) => {
    currentSlide = currentSlide < data.length-1 ? currentSlide+1 : 0
    ffwd = true
    if (reset) {
      updateAnimation()
    }    
  }

  const prevSlide = () => {
    currentSlide = currentSlide > 0 ? currentSlide-1 : data.length-1
    ffwd = false
    updateAnimation()
  }

  const setSlide = (id:number) => {
    if (currentSlide < id ) {
      ffwd = true
    } else {
      ffwd = false
    }
    currentSlide = id
    updateAnimation()
  }

  const updateAnimation = () => {
    clearInterval(tt);
    tt = setInterval( () => {
      nextSlide(false);
    }, duration)
    // console.log(currentSlide, tt)
  }

  onMount( () => {
    tt = setInterval( () => {
      nextSlide(false);
    }, duration);

    return () => {
      clearInterval(tt);
    }
  })
</script>


<div class="flex flex-row justify-between items-center">
  <button class="hidden md:flex opacity-50 p-2 cursor-pointer hover:opacity-100 text-indigo-700" on:click={prevSlide}>
    <Icon icon="bi:chevron-left" class="w-8 h-8" />
  </button>
  <div class="w-full h-72 overflow-hidden relative" id="slides">
    {#each data as d (d.id)}
    {#key currentSlide}
    <!-- <p>{d.id} | {d.title} | {d.text} | {d.button} | {d.url} | {d.img} </p> -->
    <div id={`slide${d.id}`} class={`absolute top-0 left-0 h-full w-full ${currentSlide === d.id ? 'inline' : `hidden`}`} in:fly={{x: `${ffwd ? '100%' : '-100%'}`, duration: 750, easing: quintOut}} out:fade>
      <div class="w-full h-full rounded-lg bg-cover bg-center" style={`background-image: url(${d.img})`}></div>
      <div class='absolute inset-0 mx-8 my-4 p-2 bg-zinc-100/70 rounded-md text-indigo-900 backdrop-blur-sm flex flex-col items-center justify-around '>
        <h2 class='text-2xl'>
          {$t(d.title)}
        </h2>
        <p class="line-clamp-3 text-center">
          {$t(d.text)}
        </p>
        <a href={d.url} class=''>
          {$t(d.button)} 
        </a>
      </div>
    </div>
    {/key}
    {/each}
  </div>
  <button class="hidden md:flex opacity-50 p-2 cursor-pointer hover:opacity-100 text-indigo-700" on:click={() => nextSlide()}>
    <Icon icon="bi:chevron-right" class="w-8 h-8" />
  </button>
</div>
<div class="flex justify-center items-center gap-2 mt-4 z-1 mb-2">
  {#each data as d}
    <button class={`w-2 h-2 rounded-full ${currentSlide === d.id ? 'bg-indigo-700' : 'bg-indigo-200'}`} on:click={() => setSlide(d.id)}></button>
  {/each}
</div>
