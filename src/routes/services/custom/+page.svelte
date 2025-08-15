<script lang="ts">
	import { Home, Building, Wrench, Hammer, PaintBucket, Lightbulb, Plus, Layers, Sun, Paintbrush, PenTool, Landmark } from 'lucide-svelte';

	const services = [
	{
		icon: Home,
		title: 'Custom Home Builds',
		description: 'Create your dream home from the ground up with designs tailored to your exact specifications.',
		link: '/services/custom/specialty-renovations',
		image: '/custom/home-builds.jpg'
	},
	{
		icon: Landmark,
		title: 'Unique Architectural Features',
		description: 'Add distinctive design elements like custom staircases and intricate facades to make your property stand out.',
		link: '/services/custom/unique-architectural-features',
		image: '/custom/architectural.jpg'
	},
	{
		icon: PenTool,
		title: 'Specialty Renovations',
		description: 'Transform unconventional spaces like home theaters, wine cellars, or art studios into functional masterpieces.',
		link: '/services/custom/specialty-renovations',
		image: '/custom/specialty.jpeg'
	},
	{
		icon: Sun,
		title: 'Custom Outdoor Structures',
		description: 'Enhance your property with custom pergolas, gazebos, or outdoor kitchens designed for comfort and style.',
		link: '/services/custom/custom-outdoor-structures',
		image: '/custom/outdoors.jpg'
	},
	{
		icon: Layers,
		title: 'Historical Restorations',
		description: 'Preserve the charm of historic properties while discreetly integrating modern amenities.',
		link: '/services/custom/historical-restorations',
		image: '/custom/historical.jpg'
	},
	{
		icon: Building,
		title: 'Custom Commercial Builds',
		description: 'Stand out with a custom-designed commercial space tailored to your brand and operations.',
		link: '/services/custom/custom-commercial-builds',
		image: '/custom/commercial-builds.jpg'
	},
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
							<div class="text-secondary mb-4 group-hover:scale-110 transition-transform duration-300">
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
								class="inline-flex items-center text-secondary font-semibold hover:text-[#1A365D] transition-colors duration-200"
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
				class="bg-secondary text-[#1A365D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-all duration-200 hover:scale-105 inline-block"
			>
				Get Free Estimate
			</a>
		</div>
	</section>
</main>
