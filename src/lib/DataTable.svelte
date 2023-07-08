<script>
    import { Paginator, modalStore } from '@skeletonlabs/skeleton';

    export let source;

    let page = {
        offset: 0,
        limit: 5,
        size: source.length,
        amounts: [5,10,25,50]
    };

    function clickHandler(entry) {
        console.log(entry);
        const modal = {
            type: 'alert',
            // Data
            title: 'Detailed view',
            body: entry,
        };
        modalStore.trigger(modal);

    }

    $: paginatedSource = source.slice(page.offset * page.limit, page.offset * page.limit + page.limit)

</script>


<table>
    <tr>
        <th>Date</th>
        <th>Author</th>
        <th>Translator</th>
        <th>Title</th>
        <th>Publisher(s)</th>
        <th>City</th>
        <th>Source Language</th>
        <th>Target Language</th>
    </tr>
    {#each paginatedSource as object}
        <tr on:click={clickHandler(object)}>
            <td>{object['Date'].getFullYear()}</td>
            <td>{object['author']}</td>
            <td>{object['Translator']}</td>
            <td>{object['Title']}</td>
            <td>{object['Publisher(s)']}</td>
            <td>{object['City']}</td>
            <td>{object['Source Language']}</td>
            <td>{object['(Target) Language']}</td>
        </tr>
    {/each}
</table>
<Paginator bind:settings={page} showFirstLastButtons = {false} showPreviousNextButtons = {true}/>
