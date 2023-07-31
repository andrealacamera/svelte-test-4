<script>
  import { page } from '$app/stores';
</script>

<div class="flex flex-col items-center justify-center w-full h-72">
  <h1 class="text-4xl">{$page.status}: {$page?.error?.message}</h1>
  <p class="my-8">Back to <a href="/" class="font-bold cursor-pointer">homepage</a></p>
</div>