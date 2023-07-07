<script>
	import { onMount } from 'svelte';

    export let data

    let yearsMin = data.years.min;
    let yearsMax = data.years.max;

    let filteredDataset = data.dataset;

    let desiredAuthors = {};
    
    function filterDataset() {
        filteredDataset = data.dataset.filter((entry) => {
            let returnEntry = true
            if (entry['Date'].getFullYear() < yearsMin || entry['Date'].getFullYear() > yearsMax) {
                returnEntry = false;
            }

            if (!desiredAuthors[entry['author']]) {
                returnEntry = false;
            }
            
            if (returnEntry) {
                return entry;
            }
        })
    }

    onMount( async () => {
        for (let author of data.authors) {
            desiredAuthors[author] = true;
        }

        console.log(desiredAuthors);
    })

</script>

<p><strong>{filteredDataset.length}</strong> entries</p>
{#each data.authors as author}
    <input type=checkbox id={author} name={author} bind:checked={desiredAuthors[author]}>
    <label for={author}>{author}</label>
{/each}
<button on:click={filterDataset}>Filter</button>
{#each filteredDataset as entry }
<p>{entry.Date.getFullYear()}-{entry.author}-{entry.Translator}-{entry.Title}-{entry.City}</p>    
{/each}