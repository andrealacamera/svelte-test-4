<script lang="ts">
  import Icon from '@iconify/svelte';
  import {slide} from 'svelte/transition'
  export let open: boolean = false

  const toggleOpen = () => {
    open = !open
  }
</script>


<div class="w-full flex flex-col border border-indigo-400 rounded-sm my-8 p-2">
  <section class="flex flex-row justify-between w-full">
    <slot name="title" class={`${open ? 'font-bold' : 'font-normal'}`}></slot>
    <button on:click={toggleOpen} class="" >
      {#if open}
      <Icon icon="bi:chevron-up" class="w-4 h-4" />
      {:else}
      <Icon icon="bi:chevron-down" class="w-4 h-4" />
      {/if}
    </button>
  </section>
  {#if open}
    <section transition:slide>
      <slot name="content"></slot>
    </section>
  {/if}

</div>