<script lang="ts">
	import { Briefcase, Store, Factory, Wrench, Utensils, Building2 } from '@lucide/svelte';

	const services = [
		{
			icon: Briefcase,
			title: 'Office Renovations',
			description:
				'Transform workspaces into modern, efficient, and inspiring environments that boost productivity and reflect your brand identity.',
			link: '/services/commercial/office-renovations',
			image: '/commercial/office.jpg'
		},
		{
			icon: Store,
			title: 'Retail Construction',
			description:
				'Design and build engaging retail spaces that attract customers, enhance shopping experiences, and maximize sales potential.',
			link: '/services/commercial/retail-construction',
			image: '/commercial/retail.jpg'
		},
		{
			icon: Factory,
			title: 'Industrial Upgrades',
			description:
				'Modernize your facility with structural, electrical, and safety upgrades to improve efficiency, compliance, and productivity.',
			link: '/services/commercial/industrial-upgrades',
			image: '/commercial/industrial.jpg'
		},
		{
			icon: Wrench,
			title: 'Commercial Maintenance',
			description:
				'Keep your property in peak condition with scheduled maintenance, quick repairs, and proactive building care.',
			link: '/services/commercial/commercial-maintenance',
			image: '/commercial/commercialMaintenance.jpg'
		},
		{
			icon: Utensils,
			title: 'Restaurant & Hospitality Renovations',
			description:
				'Create inviting, high-performing spaces for dining and hospitality that elevate guest experiences and brand reputation.',
			link: '/services/commercial/restaurant-hospitality-renovations',
			image: '/commercial/restaurant.jpg'
		},
		{
			icon: Building2,
			title: 'Commercial Building Additions',
			description:
				'Expand your property with seamless additions that blend perfectly with your existing architecture and meet future needs.',
			link: '/services/commercial/commercial-building-additions',
			image: '/commercial/building.jpg'
		}
	];
</script>

<svelte:head>
	<title>Remodeling & Construction Services | World Detail Specialist</title>
	<meta
		name="description"
		content="Professional remodeling services in Miami. Kitchen renovations, bathroom remodeling, whole home renovations, and commercial construction."
	/>
</svelte:head>

<main class="pt-16">
	<!-- Hero Section -->
	<section class="bg-[#1A365D] py-20 text-white">
		<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
			<h1 class="mb-6 text-4xl font-bold md:text-6xl">Transform Any Space</h1>
			<p class="mx-auto max-w-3xl text-xl text-white/90 md:text-2xl">
				Explore our full range of residential and commercial services below.
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
								Learn More →
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="bg-[#F7FAFC] py-20">
		<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
			<h2 class="mb-6 text-3xl font-bold text-[#1A365D] md:text-4xl">
				Ready to Start Your Project?
			</h2>
			<p class="mb-8 text-xl text-[#718096]">
				Get a free consultation and estimate for your renovation project.
			</p>
			<a
				href="/contact"
				class="inline-block rounded-lg bg-secondary px-8 py-4 text-lg font-semibold text-[#1A365D] transition-all duration-200 hover:scale-105 hover:bg-secondary/90"
			>
				Get Free Estimate
			</a>
		</div>
	</section>
</main>
