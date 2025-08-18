<script lang="ts" module>
  import { ArrowRight, Phone } from '@lucide/svelte';

  export { CTAs }
</script>

<script lang="ts">
	import * as m from '$lib/paraglide/messages';

	let typewriterText = $state('');
	const fullText = m['hero.title']();

	// Typewriter effect using $effect
	$effect(() => {
		let index = 0;
		const timer = setInterval(() => {
			if (index <= fullText.length) {
				typewriterText = fullText.slice(0, index);
				index++;
			} else {
				clearInterval(timer);
			}
		}, 80);

		// Teardown function to clear interval
		return () => clearInterval(timer);
	});
</script>

{#snippet CTAs(primary: string, secondary?: string)}
	<div class="flex flex-col justify-center gap-4 sm:flex-row">
		<a
			href="/contact"
			class="flex items-center justify-center gap-2 rounded-lg bg-secondary px-8 py-4 text-lg font-semibold text-[#1A365D] transition-all duration-300 hover:scale-105 hover:bg-secondary/90"
		>
			{primary}
			<ArrowRight size={20} />
		</a>
		{#if secondary}
			<a
				href="tel:+1234567890"
				class="flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#1A365D]"
			>
				<Phone size={20} />
				{secondary}
			</a>
		{/if}
	</div>
{/snippet}

<section id="home" class="relative flex h-screen items-center justify-center overflow-hidden">
	<!-- Background Image -->
	<div
		class="absolute inset-0 bg-cover bg-fixed bg-center"
		style="background-image: url('/hero-image.webp')"
	>
		<div class="absolute inset-0 bg-[#1A365D]/70"></div>
	</div>

	<!-- Content -->
	<div class="relative z-10 mx-auto max-w-4xl px-4 text-center">
		<h1 class="mb-6 text-5xl leading-tight font-bold text-white md:text-7xl lg:whitespace-nowrap">
			{typewriterText}<span class="animate-pulse">|</span>
		</h1>
		<p class="mx-auto mb-8 max-w-2xl text-xl text-white/90 md:text-2xl">
			{m['hero.subtitle']()}
		</p>
    {@render CTAs(m['hero.cta_primary'](), m['hero.cta_secondary']())}
	</div>

	<!-- Scroll Indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce text-white">
		<div class="flex h-10 w-6 justify-center rounded-full border-2 border-white">
			<div class="mt-2 h-3 w-1 animate-pulse rounded-full bg-white"></div>
		</div>
	</div>
</section>
