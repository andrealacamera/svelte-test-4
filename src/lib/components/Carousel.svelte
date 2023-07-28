<script lang="ts">
export let data: Array<data_carousel> 
export let duration: number = 5000;

</script>


<div>
{#each data as d}
<p>{d.id} | {d.title} | {d.text} | {d.button} | {d.url} | {d.img} </p>
{/each}

{duration}
</div>