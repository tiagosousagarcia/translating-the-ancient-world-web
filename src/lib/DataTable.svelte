<script>
    import { Paginator, Table, tableMapperValues } from '@skeletonlabs/skeleton';

    export let source;

    let page = {
        offset: 0,
        limit: 5,
        size: source.length,
        amounts: [5,10,25,50]
    };

    $: paginatedSource = source.slice(page.offset * page.limit, page.offset * page.limit + page.limit)

</script>


<Table source={{head: ['Date', 'author', 'Translator', 'Title', 'Publisher(s)', 'City', '(Target) Language'], body: tableMapperValues(paginatedSource, ['Date', 'author', 'Translator', 'Title', 'Publisher(s)', 'City', '(Target) Language'])}}/>
<Paginator bind:settings={page} showFirstLastButtons = {false} showPreviousNextButtons = {true}/>
