<script>
	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';
	
	import { AppShell } from '@skeletonlabs/skeleton';
	import DateFilter from '../lib/DateFilter.svelte';
	import MultipleValueFilter from '../lib/MultipleValueFilter.svelte';

	export let data;
</script>


<AppShell>
	<svelte:fragment slot="header"><h1>Translating the Ancient World</h1></svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<h2>Filters</h2>
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

	</svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<!-- (footer) -->
</AppShell>

<slot />
