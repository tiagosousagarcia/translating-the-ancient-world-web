<script>
    export let data

    console.log(data.dataset)
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each data.dataset as entry }
<p>{entry.id}-{entry['Normalised Title']}-{entry.Date.getFullYear()}</p>    
{/each}