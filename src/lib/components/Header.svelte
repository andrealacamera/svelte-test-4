<script lang="ts">

  import {beforeUpdate} from 'svelte';

  import Icon from '@iconify/svelte';
  import { fly } from 'svelte/transition';
  import {t, locale} from 'svelte-i18n'

  let openMenu: boolean = false
  let openTheme: boolean = false
  let darkTheme: -1 | 0 | 1 // -1 = not set; 0 = ligth theme; 1 = dark theme

  const toggleMenu = ():void => {
    openMenu = !openMenu
  }

  const changeTheme = (th: -1 | 0 | 1) => {
    darkTheme = th;
    if (th === 0) {
      localStorage.theme = 'light'
    } else if (th === 1) {
      localStorage.theme = 'dark'
    } else {
      localStorage.removeItem('theme')
    }
    openTheme = false;
    window.location.reload();
  }

  const toggleLocale = ():void => {
    let loc: string;
    if ($locale === 'it') {
      loc = 'en'
    } else {
      loc = 'it'
    }
    $locale = loc
    localStorage.setItem("__myLanguage", loc)
  }

  beforeUpdate( () => {
    if ('theme' in localStorage) {
      if (localStorage.theme === 'dark') {
        darkTheme = 1
      } else {
        darkTheme = 0
      }
    } else {
      darkTheme = -1
    } 
  })
</script>


<header class="flex justify-between">
  <div>
    <img src = "" alt="SVELTE-TEST-4"/> {openMenu} {$locale}
  </div>
  <nav class="hidden md:flex flex-grow justify-center items-center gap-4">
    <ul class="flex flex-row gap-4">
      <li class="cursor-pointer">
        <a href="/">{$t('menu.home')}</a>
      </li>
      <li class="cursor-pointer">
        <a href="/">{$t('menu.page')}</a>
      </li>
      <li>
        <button class="" on:click={toggleLocale} >
          {$t('common.l_short')}
        </button>
      </li>
    </ul>
    <div class="relative">
      <button class="w-6 h-6" on:click={() => {openTheme = !openTheme}}>
        {#if darkTheme === 0 }
        <Icon icon="bi:sun-fill" class="text-indigo-900 dark:text-indigo-100 w-6 h-6" />
        {:else if darkTheme === 1 }
        <Icon icon="bi:moon-fill" class="text-indigo-900 dark:text-indigo-100 w-6 h-6" />
        {:else}
        <Icon icon="bi:gear-wide-connected" class="text-indigo-900 dark:text-indigo-100 w-6 h-6" />
        {/if}
      </button>
      {#if openTheme}
      <div class="absolute top-12 left-0 border border-indigo-900 dark:border-indigo-100 rounded-xl py-1 z-10 bg-indigo-100 dark:bg-indigo-900 text-indigo-900 dark:text-indigo-100">
        <div class="flex flex-col gap-2  w-full ">
          <button class="flex flex-row gap-4 items-center hover:bg-indigo-200 dark:hover:bg-indigo-700 px-4 py-2 rounded" on:click={ () => {changeTheme(0)}}>
            <Icon icon="bi:sun-fill" class="w-6 h-6" />
            Light
          </button>
          <button class="flex flex-row gap-4 items-center hover:bg-indigo-200 dark:hover:bg-indigo-700 px-4 py-2 rounded" on:click={ () => {changeTheme(1)}}>
            <Icon icon="bi:moon-fill" class="w-6 h-6" />
            Dark
          </button>
          <button class="flex flex-row gap-4 items-center hover:bg-indigo-200 dark:hover:bg-indigo-700 px-4 py-2 rounded" on:click={ () => {changeTheme(-1)}}>
            <Icon icon="bi:gear-wide-connected" class="w-6 h-6" />
            System
          </button>
        </div>
        
      </div>
      {/if}
    </div>
  </nav>
  <button on:click={toggleMenu} class="inline-flex md:hidden">
    {#if !openMenu}
      <Icon icon="bi:list" class="w-8 h-8" />
    {/if}
  </button>
  {#if openMenu}
  <div transition:fly={{duration: 500, x:"100" }} class="fixed left-0 top-0 w-full h-full min-h-screen backdrop-blur flex flex-row justify-end z-10">
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