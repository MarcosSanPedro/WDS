<script lang="ts" module>
	import * as m from '$lib/paraglide/messages';
	const services = [
		{
			icon: Home,
			title: m['services_overview.services.kitchen_remodels.title'](),
			description: m['services_overview.services.kitchen_remodels.description'](),
			link: '/services/residential/kitchen-renovations',
			image: '/residential/kitchen.webp'
		},
		{
			icon: Building,
			title: m['services_overview.services.bathroom_renovations.title'](),
			description: m['services_overview.services.bathroom_renovations.description'](),
			link: '/services/residential/bathroom-renovations',
			image: '/residential/bath.webp'
		},
		{
			icon: Plus,
			title: m['services_overview.services.home_additions.title'](),
			description: m['services_overview.services.home_additions.description'](),
			link: '/services/residential/home-additions',
			image: '/residential/homeAddition.jpeg'
		},
		{
			icon: Layers,
			title: m['services_overview.services.basement_finishing.title'](),
			description: m['services_overview.services.basement_finishing.description'](),
			link: '/services/residential/basement-finishing',
			image: '/residential/basement.webp'
		},
		{
			icon: Sun,
			title: m['services_overview.services.deck_patio.title'](),
			description: m['services_overview.services.deck_patio.description'](),
			link: '/services/residential/deck-patio-construction',
			image: '/residential/patio.jpeg'
		},
		{
			icon: Wrench,
			title: m['services_overview.services.whole_home.title'](),
			description: m['services_overview.services.whole_home.description'](),
			link: '/services/residential/whole-home-renovations',
			image: '/residential/wholeHome.jpeg'
		}
	];
	export { CtaSection };
</script>

<script lang="ts">
	import { Home, Building, Wrench, Plus, Layers, Sun } from '@lucide/svelte';
</script>

<svelte:head>
	<title>{m['services_overview.seo.title']()}</title>
	<meta name="description" content={m['services_overview.seo.description']()} />
</svelte:head>
{#snippet CtaSection(heading: string, subheading: string, button: string)}
	<!-- CTA Section -->
	<section class="bg-[#F7FAFC] py-20">
		<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
			<h2 class="mb-6 text-3xl font-bold text-[#1A365D] md:text-4xl">
				{heading}
			</h2>
			<p class="mb-8 text-xl text-[#718096]">
				{subheading}
			</p>
			<a
				href="/contact"
				class="inline-block rounded-lg bg-secondary px-8 py-4 text-lg font-semibold text-[#1A365D] transition-all duration-200 hover:scale-105 hover:bg-secondary/90"
			>
				{button}
			</a>
		</div>
	</section>
{/snippet}

<main class="pt-16">
	<!-- Hero Section -->
	<section class="bg-[#1A365D] py-20 text-white">
		<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
			<h1 class="mb-6 text-4xl font-bold md:text-6xl">
				{m['services_overview.hero.heading']()}
			</h1>
			<p class="mx-auto max-w-3xl text-xl text-white/90 md:text-2xl">
				{m['services_overview.hero.subheading']()}
			</p>
		</div>
	</section>

	<!-- Services Grid -->
	<section class="bg-white py-20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each services as service}
					<div
						class="group overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
					>
						<div class="aspect-video overflow-hidden">
							<img
								src={service.image}
								alt={service.title}
								class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
							/>
						</div>
						<div class="p-8">
							<div
								class="mb-4 text-secondary transition-transform duration-300 group-hover:scale-110"
							>
								<svelte:component this={service.icon} class="h-12 w-12" />
							</div>
							<h3 class="mb-4 text-2xl font-bold text-[#1A365D]">
								{service.title}
							</h3>
							<p class="mb-6 leading-relaxed text-[#718096]">
								{service.description}
							</p>
							<a
								href={service.link}
								class="inline-flex items-center font-semibold text-secondary transition-colors duration-200 hover:text-[#1A365D]"
							>
								{m['services_overview.card.learn_more']()}
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	{@render CtaSection(
		m['services_overview.cta.heading'](),
		m['services_overview.cta.subheading'](),
		m['services_overview.cta.button']()
	)}
</main>
