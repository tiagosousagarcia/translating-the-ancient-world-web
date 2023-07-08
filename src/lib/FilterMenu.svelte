<script>
    import DateFilter from "./DateFilter.svelte";
    import MultipleValueFilter from "./MultipleValueFilter.svelte";

    export let data;
</script>

<h2>Filters</h2>
<div class="filters">
    <DateFilter yearsMin = {data.years.min} yearsMax ={data.years.max}/>
    <MultipleValueFilter listNames = {data.authors} filterName = 'Authors'/>
    <MultipleValueFilter listNames = {data.translators} filterName = 'Translators'/>
    <MultipleValueFilter listNames = {data.intermediaryTranslators} filterName = 'Intermediary Translators'/>
    <MultipleValueFilter listNames = {data.otherAuthors} filterName = 'Other authors'/>
    <MultipleValueFilter listNames = {data.normalisedTitles} filterName = 'Normalised Titles'/>
    <MultipleValueFilter listNames = {data.titles} filterName = 'Titles'/>
    <MultipleValueFilter listNames = {data.listPublishers} filterName = 'Publishers'/>
    <MultipleValueFilter listNames = {data.listCities} filterName = 'Cities'/>
    <MultipleValueFilter listNames = {data.listSourceLanguages} filterName = 'Source Language'/>
    <MultipleValueFilter listNames = {data.listIntermediaryLangauges} filterName = 'Intermediary Languages'/>
    <MultipleValueFilter listNames = {data.listTargetLanguages} filterName = 'Target Language'/>
    <MultipleValueFilter listNames = {data.listFormats} filterName = 'Format'/>
</div>