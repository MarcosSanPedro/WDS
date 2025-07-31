<script lang="ts">
	import '../app.css';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import Navigation from '$lib/components/layout/Navigation.svelte';
	import Footer from '../components/Footer.svelte';

	import { page } from '$app/state';
	let { children } = $props();
</script>

<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>

<Navigation />
<main>
	{@render children()}
</main>
<Footer />
