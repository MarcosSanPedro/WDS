<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { Home, Building, Layers, Sun, PenTool, Landmark } from '@lucide/svelte';
	import { CtaSection } from '../residential/+page.svelte';

	const services = [
		{
			icon: Home,
			title: m['services_overview.custom_services.custom_home_builds.title'](),
			description: m['services_overview.custom_services.custom_home_builds.description'](),
			link: '/services/custom/specialty-renovations',
			image: '/custom/home-builds.jpg'
		},
		{
			icon: Landmark,
			title: m['services_overview.custom_services.unique_architectural_features.title'](),
			description:
				m['services_overview.custom_services.unique_architectural_features.description'](),
			link: '/services/custom/unique-architectural-features',
			image: '/custom/architectural.jpg'
		},
		{
			icon: PenTool,
			title: m['services_overview.custom_services.specialty_renovations.title'](),
			description: m['services_overview.custom_services.specialty_renovations.description'](),
			link: '/services/custom/specialty-renovations',
			image: '/custom/specialty.jpeg'
		},
		{
			icon: Sun,
			title: m['services_overview.custom_services.custom_outdoor_structures.title'](),
			description: m['services_overview.custom_services.custom_outdoor_structures.description'](),
			link: '/services/custom/custom-outdoor-structures',
			image: '/custom/outdoors.jpg'
		},
		{
			icon: Layers,
			title: m['services_overview.custom_services.historical_restorations.title'](),
			description: m['services_overview.custom_services.historical_restorations.description'](),
			link: '/services/custom/historical-restorations',
			image: '/custom/historical.jpg'
		},
		{
			icon: Building,
			title: m['services_overview.custom_services.custom_commercial_builds.title'](),
			description: m['services_overview.custom_services.custom_commercial_builds.description'](),
			link: '/services/custom/custom-commercial-builds',
			image: '/custom/commercial-builds.jpg'
		}
	];
</script>

<svelte:head>
	<title>{m['services_overview.seo.title']()}</title>
	<meta name="description" content={m['services_overview.seo_custom.description']()} />
</svelte:head>

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

	<!-- CTA Section -->
	{@render CtaSection(
		m['services_overview.cta.heading'](),
		m['services_overview.cta.subheading'](),
		m['services_overview.cta.button']()
	)}
</main>
