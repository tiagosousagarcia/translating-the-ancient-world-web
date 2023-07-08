<script>
	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';
	
	import { AppShell, Modal } from '@skeletonlabs/skeleton';
	import FilterMenu from '$lib/FilterMenu.svelte';

	export let data;
</script>

<Modal />
<AppShell>
	<svelte:fragment slot="header"><h1 class="h1">Translating the Ancient World</h1></svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<FilterMenu data = {data} />
	</svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<!-- (footer) -->
</AppShell>