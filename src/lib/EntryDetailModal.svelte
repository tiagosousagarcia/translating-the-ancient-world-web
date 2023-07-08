<script>
    export let entryData;
</script>

<div class = "card max-w-4xl">
    <div class = "card-header"><h3 class="h3">Detailed view</h3></div>
    <div class = 'p-4'>
        <p>{JSON.stringify(entryData)}</p>
    </div>
</div>