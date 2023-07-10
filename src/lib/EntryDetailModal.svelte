<script>
    import { replaceSpacesWithHyphen } from "../utils/stringManipulationUtils";

    export let entryData;
    
    let headers = {
        'id': 'ID',
        'USTC NO': 'USTC Number',
        'author': 'Author',
        'Translator': 'Translator',
        'Intermediary Translators': 'Intermediary Translators',
        'Other Authors': 'Other Authors',
        'Normalised Title': 'Normalised Title',
        'Title': 'Title',
        'Imprint': 'Imprint',
        'Publisher(s)': 'Publisher(s)',
        'Date': 'Date',
        'City': 'City',
        'Source Language': 'Source Language',
        'Intermediary Language': 'Intermediary Language',
        '(Target) Language': 'Target Language',
        'format': 'Format',
        'signatures': 'Signatures',
        'Number of volumes': 'Number of Volumes',
        'Contents': 'Contents',
        'Complete?': 'Complete work',
        'Part of larger work?': 'Part of larger work',
        'Paratexts (especially noteworthy!)': 'Paratexts',
        'Notes': 'Notes',
        'Link': 'Link',
        'Digital Copy': 'Digital Copy',
        'Additional Notes': 'Additional Notes',
        'School Edition?': 'Is this a school edition?',
        'Epitome': 'Epitome'
    }

    let doubleSpan = ['Imprint', 'Title']
</script>

<div class = "card max-h-96 sm:max-h-screen py-8 px-16 mt-16 overflow-auto">
    <div class = "px-4 sm:px-0"><h3 class="text-base font-semibold leading-7 text-gray-900">Detailed view</h3></div>
    <div class = 'mt-6'>
        <dl class="grid grid-cols-1 sm:grid-cols-2">
            {#each Object.keys(headers) as header}
                {#if header != 'Link'}
                    <div class="{replaceSpacesWithHyphen(headers[header])}-header border-t border-gray-100 px-4 py-6 {doubleSpan.includes(header) ? 'sm:col-span-2' :  'sm:col-span-1'} sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">{headers[header]}</dt>
                        <dd class = "mt-1 text-sm leading-6 text-gray-700 sm:mt-2 {header.includes('Title') ? 'italic' : ''}">
                            {#if header === 'USTC NO' && entryData[header] && entryData['Link']}
                                <a href = {entryData['Link']}>{entryData[header]}</a>
                            {:else if header === 'Date' && entryData[header]}
                                {entryData[header].getFullYear()};
                            {:else}
                                {entryData[header] ? entryData[header] : 'N/A'}
                            {/if}
                        </dd>
                    </div>
                {/if}
            {/each}
        </dl>
    </div>
</div>