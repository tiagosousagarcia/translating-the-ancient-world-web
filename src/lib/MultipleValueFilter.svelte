<script>
    import { onMount } from 'svelte';
    export let listNames;
    export let filterName;

    let maxVisible = 5;
    let showLess = false;

    function showMore() {
        maxVisible = listNames.length;
        showLess = true;
    }
    
    function showLessItems() {
        maxVisible = 5;
        showLess = false;
    }

    onMount( () => {
        if (listNames.length < 5) {
            maxVisible = listNames.length
        } 
    })

</script>

<div>
    <h3>{filterName}</h3>
        {#each listNames.sort().slice(0, maxVisible) as name}
            <label for="{name}" class="flex space-x-2">
                <input type="checkbox" id={name} name = {name} class='checkbox'>
                <p>{name}</p>
            </label>
        {/each}
        {#if maxVisible < listNames.length}
            <button on:click={showMore} on:keypress class="btn-sm variant-filled">More...</button>
        {/if}
        {#if showLess}
            <button class="btn-sm variant-filled" on:click={showLessItems} on:keypress>Less...</button>
        {/if}
</div>