<script lang="ts">
  import Icon from '@iconify/svelte';
  import { fly } from 'svelte/transition';
  import {t, locale, locales} from 'svelte-i18n'



  let openMenu: boolean = false

  const toggleMenu = ():void => {
    openMenu = !openMenu
  }

  const toggleLocale = ():void => {
    if ($locale === 'it') {
      locale.set('en')
    } else {
      locale.set('it')
    }
  }
</script>


<header class="flex justify-between">
  <div>
    <img src = "" alt="SVELTE-TEST-4"/> {openMenu} {$locale}
  </div>
  <nav class="hidden md:flex flex-grow justify-center gap-4">
    <ul class="flex flex-row gap-4">
      <li class="cursor-pointer">
        <a href="/">{$t('menu.home')}</a>
      </li>
      <li class="cursor-pointer">
        <a href="/">{$t('menu.page')}</a>
      </li>
    </ul>
    <div>
      <button class="" on:click={toggleLocale} >
        {$t('common.l_short')}
      </button>
    </div>
  </nav>
  <button on:click={toggleMenu} class="inline-flex md:hidden">
    {#if !openMenu}
      <Icon icon="bi:list" class="w-8 h-8" />
    {/if}
  </button>
  {#if openMenu}
  <div transition:fly={{duration: 500, x:"100" }} class="absolute left-0 top-0 w-full h-screen backdrop-blur flex flex-row justify-end">
    <div class="bg-indigo-900 text-indigo-100 w-full md:w-1/3 p-4 md:p-8">
      <section class="flex justify-between items-center w-full">
        <h1>SVELTE-TEST-4</h1>
        <button on:click={toggleMenu} class="">
          <Icon icon="bi:x" class="w-8 h-8"/>
        </button>
      </section>
      <nav class="mt-8 flex flex-col gap-4">
        <ul class="flex flex-col gap-4">
          <li class="cursor-pointer">
            <a href="/">{$t('menu.home')}</a>
          </li>
          <li class="cursor-pointer">
            <a href="/">{$t('menu.page')}</a>
          </li>
        </ul>
        <div>
          <button class="" on:click={toggleLocale} >
            {$t('common.l_long')}
          </button>
        </div>
    
      </nav>
    </div>
  
  </div>
  {/if}
</header>