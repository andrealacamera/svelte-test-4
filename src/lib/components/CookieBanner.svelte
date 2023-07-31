<script lang="ts">
  import { beforeUpdate } from "svelte";

  let showBanner: boolean = false;

  const COOKIE = '__myCookie';
  const DURATION = 60*60*24*30;

  const handleCookie = () => {
    document.cookie=`${COOKIE}=1; max-age=${DURATION}; samesite=strict;`;
    showBanner = false
    window.location.reload();
  }

  beforeUpdate( () => {  
    showBanner = document.cookie.split(';').some((item) => item.includes(`${COOKIE}=1`)) ? false : true;
    console.log(document.cookie, showBanner)
  })
</script>

{#if showBanner}
<div class="w-full fixed bottom-0 left-0 bg-indigo-900 text-indigo-100 z-50 p-2">
  <div class="flex flex-col justify-center items-center">
    <h1 class="text-2xl">COOKIE POLICY</h1>
    <p class="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus veniam est deserunt quae iusto? Earum ea qui labore itaque voluptate laudantium voluptates asperiores sit impedit repellendus blanditiis vitae doloribus, officiis facilis consequuntur, dolorem eum! Repudiandae nesciunt accusamus quia natus nobis voluptatibus ratione. Non ducimus modi repellat repellendus quasi atque perferendis!</p>
    <button on:click={handleCookie} class="border border-indigo-100 py-2 px-4 rounded-lg">OK</button>
  </div>
</div>
{/if}