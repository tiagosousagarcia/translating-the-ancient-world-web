<script>
	import DataTable from '$lib/DataTable.svelte';
    
    export let data

    let filteredDataset = data.dataset;

    console.log(filteredDataset);
</script>

<p><strong>{filteredDataset.length}</strong> entries</p>
<DataTable source = {filteredDataset}/>