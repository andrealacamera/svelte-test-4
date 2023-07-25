<script lang="ts">
  import Icon from '@iconify/svelte';
  import { fly } from 'svelte/transition';



  let openMenu: boolean = true

  const toggleMenu = ():void => {
    openMenu = !openMenu
  }
</script>


<header class="flex justify-between p-8">
  <div>
    <img src = "" alt="SVELTE-TEST-4"/> {openMenu}
  </div>
  <nav class="hidden md:flex flex-grow justify-center">
    <ul class="flex flex-row gap-4">
      <li>
        Home
      </li>
      <li>
        Page
      </li>
    </ul>
  </nav>
  <button on:click={toggleMenu} class="inline-flex md:hidden">
    {#if !openMenu}
      <Icon icon="bi:list" class="w-8 h-8" />
    {/if}
  </button>
  {#if openMenu}
  <div transition:fly={{duration: 500, x:"200" }} class="absolute left-0 top-0 w-screen h-screen backdrop-blur flex flex-row justify-end">
    <div class="bg-indigo-900 text-indigo-100 w-full md:w-1/3 p-8">
      <section class="flex justify-between w-full">
        <h1>SVELTE-TEST-4</h1>
        <button on:click={toggleMenu} class="">
          <Icon icon="bi:x" class="w-8 h-8"/>
        </button>
      </section>
      <nav class="mt-8">
        <ul class="flex flex-col gap-4">
          <li>
            Home
          </li>
          <li>
            Page
          </li>
        </ul>
      </nav>
    </div>
  
  </div>
  {/if}
</header>