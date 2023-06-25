<script>
    export let data

    let yearsMin = data.years.min
    let yearsMax = data.years.max

    console.log(data.dataset)
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<input type="text" bind:value="{yearsMin}"> - <input type="text" bind:value="{yearsMax}">;
{#each data.dataset.filter(entry => entry.Date.getFullYear() >= yearsMin && entry.Date.getFullYear() <= yearsMax) as entry }
<p>{entry.Date.getFullYear()}-{entry.author}-{entry.Translator}-{entry.Title}-{entry.City}</p>    
{/each}