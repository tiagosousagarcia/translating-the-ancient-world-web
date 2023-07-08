<script>
    import { onMount } from 'svelte';
    import { slide } from 'svelte/transition';
    export let listNames;
    export let filterName;

    let maxVisible = 5;
    let showLess = false;

    let expanded = false;

    function showMore() {
        maxVisible = listNames.length;
        showLess = true;
    }
    
    function showLessItems() {
        maxVisible = 5;
        showLess = false;
    }

    function expand() {
        expanded = !expanded;
    }

    onMount( () => {
        if (listNames.length < 5) {
            maxVisible = listNames.length
        } 
    })

</script>

<div>
    <button class="btn" on:click={expand} on:keypress>
        <h3 class="h3">{filterName} {!expanded ? '+' : '-'}</h3>
    </button>
        {#if expanded}
            <div class="list" transition:slide>
                {#each listNames.sort().slice(0, maxVisible) as name}
                    <label for="{name}" class="flex space-x-2" transition:slide>
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
        {/if}
</div>