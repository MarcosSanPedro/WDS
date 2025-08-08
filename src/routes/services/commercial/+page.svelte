<script lang="ts">
	import { Home, Building, Wrench, Hammer, PaintBucket, Lightbulb, Plus, Layers, Sun } from 'lucide-svelte';

	const services = [
	{
		icon: Home,
		title: 'Kitchen Remodels',
		description: 'Create your dream kitchen blending style, function & finishes that perfectly match your lifestyle.',
		link: '/services/commercial/kitchen-renovations',
		image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
	},
	{
		icon: Building,
		title: 'Bathroom Renovations',
		description: 'Upgrade your bathroom into a relaxing retreat with elegant fixtures & thoughtful layouts.',
		link: '/services/commercial/bathroom-renovations',
		image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
	},
	{
		icon: Plus,
		title: 'Home Additions',
		description: 'Seamlessly expand your living space with beautifully integrated new rooms & features.',
		link: '/services/commercial/home-additions',
		image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
	},
	{
		icon: Layers,
		title: 'Basement Finishing',
		description: 'Transform your basement into a functional living space for entertainment or guests.',
		link: '/services/commercial/basement-finishing',
		image: 'https://images.pexels.com/photos/373548/pexels-photo-373548.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
	},
	{
		icon: Sun,
		title: 'Deck & Patio Construction',
		description: 'Build durable, inviting outdoor spaces perfect for relaxation & entertaining guests.',
		link: '/services/commercial/deck-patio-construction',
		image: 'https://images.pexels.com/photos/238385/pexels-photo-238385.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
	},
	{
		icon: Wrench,
		title: 'Whole-Home Renovations',
		description: 'Complete transformations that enhance both the beauty & function of your entire home.',
		link: '/services/commercial/whole-home-renovations',
		image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
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
