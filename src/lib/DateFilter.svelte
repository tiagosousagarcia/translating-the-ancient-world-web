<script>
    import { slide } from 'svelte/transition'
    export let yearsMin
    export let yearsMax

    let expanded = false;

    function expand() {
        expanded = !expanded;
    }
</script>

<div>
    <button class="btn" on:click={expand} on:keypress>
        <h3>Date {!expanded ? '+' : '-'}</h3>
    </button>
    {#if expanded}
        <div class="date-input" transition:slide><input type="text" bind:value="{yearsMin}"> - <input type="text" bind:value="{yearsMax}"></div>
    {/if}
</div>
