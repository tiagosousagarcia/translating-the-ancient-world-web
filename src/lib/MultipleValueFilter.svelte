<script>
    export let listNames;
    export let filterName;
</script>

<div>
    <h3>{filterName}</h3>
    {#each listNames as name}
        <label for="{name}" class="flex space-x-2">
            <input type="checkbox" id={name} name = {name} class='checkbox'>
            <p>{name}</p>
        </label>
    {/each}
</div>