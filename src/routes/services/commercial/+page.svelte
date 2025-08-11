<script lang="ts">
	import {  Briefcase, Store, Factory, Wrench, Utensils, Building2 } from 'lucide-svelte';

	const services = [
	{
		icon: Briefcase,
		title: 'Office Renovations',
		description:
			'Transform workspaces into modern, efficient, and inspiring environments that boost productivity and reflect your brand identity.',
		link: '/services/commercial/office-renovations',
		image:
			'https://images.pexels.com/photos/3182778/pexels-photo-3182778.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
	},
	{
		icon: Store,
		title: 'Retail Construction',
		description:
			'Design and build engaging retail spaces that attract customers, enhance shopping experiences, and maximize sales potential.',
		link: '/services/commercial/retail-construction',
		image:
			'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
	},
	{
		icon: Factory,
		title: 'Industrial Upgrades',
		description:
			'Modernize your facility with structural, electrical, and safety upgrades to improve efficiency, compliance, and productivity.',
		link: '/services/commercial/industrial-upgrades',
		image:
			'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
	},
	{
		icon: Wrench,
		title: 'Commercial Maintenance',
		description:
			'Keep your property in peak condition with scheduled maintenance, quick repairs, and proactive building care.',
		link: '/services/commercial/commercial-maintenance',
		image:
			'https://images.pexels.com/photos/448407/pexels-photo-448407.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
	},
	{
		icon: Utensils,
		title: 'Restaurant & Hospitality Renovations',
		description:
			'Create inviting, high-performing spaces for dining and hospitality that elevate guest experiences and brand reputation.',
		link: '/services/commercial/restaurant-hospitality-renovations',
		image:
			'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
	},
	{
		icon: Building2,
		title: 'Commercial Building Additions',
		description:
			'Expand your property with seamless additions that blend perfectly with your existing architecture and meet future needs.',
		link: '/services/commercial/commercial-building-additions',
		image:
			'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
	}
];

</script>

<svelte:head>
	<title>Remodeling & Construction Services | World Detail Specialist</title>
	<meta name="description" content="Professional remodeling services in Miami. Kitchen renovations, bathroom remodeling, whole home renovations, and commercial construction." />
</svelte:head>

<main class="pt-16">
	<!-- Hero Section -->
	<section class="py-20 bg-[#1A365D] text-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h1 class="text-4xl md:text-6xl font-bold mb-6">
				Transform Any Space
			</h1>
			<p class="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
				Explore our full range of residential and commercial services below.
			</p>
		</div>
	</section>

	<!-- Services Grid -->
	<section class="py-20 bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each services as service}
					<div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
						<div class="aspect-video overflow-hidden">
							<img
								src={service.image}
								alt={service.title}
								class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
							/>
						</div>
						<div class="p-8">
							<div class="text-[#F6AD55] mb-4 group-hover:scale-110 transition-transform duration-300">
								<svelte:component this={service.icon} class="w-12 h-12" />
							</div>
							<h3 class="text-2xl font-bold text-[#1A365D] mb-4">
								{service.title}
							</h3>
							<p class="text-[#718096] mb-6 leading-relaxed">
								{service.description}
							</p>
							<a
								href={service.link}
								class="inline-flex items-center text-[#F6AD55] font-semibold hover:text-[#1A365D] transition-colors duration-200"
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
	<section class="py-20 bg-[#F7FAFC]">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h2 class="text-3xl md:text-4xl font-bold text-[#1A365D] mb-6">
				Ready to Start Your Project?
			</h2>
			<p class="text-xl text-[#718096] mb-8">
				Get a free consultation and estimate for your renovation project.
			</p>
			<a
				href="/contact"
				class="bg-[#F6AD55] text-[#1A365D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F6AD55]/90 transition-all duration-200 hover:scale-105 inline-block"
			>
				Get Free Estimate
			</a>
		</div>
	</section>
</main>
