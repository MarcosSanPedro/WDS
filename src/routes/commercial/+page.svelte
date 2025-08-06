<script lang="ts">
	import { Home, Building, Wrench, Hammer, PaintBucket, Lightbulb } from 'lucide-svelte';

	const services = [
		{
			icon: Home,
			title: 'Kitchen Renovations',
			description: 'Breathe new life into the heart of your home with custom cabinetry, smart storage & luxury finishes.',
			link: 'kitchen-renovations',
			image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
		},
		{
			icon: Building,
			title: 'Bathroom Remodeling',
			description: 'Create a spa-like retreat with stylish fixtures and flawless waterproofing.',
			link: '/bathroom-remodeling',
			image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
		},
		{
			icon: Wrench,
			title: 'Whole Home Renovations',
			description: 'Complete home transformations that enhance both functionality and aesthetic appeal throughout your space.',
			link: '/whole-home-renovations',
			image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
		},
		{
			icon: Hammer,
			title: 'Commercial Construction',
			description: 'Professional commercial spaces that reflect your brand and optimize workflow for maximum efficiency.',
			link: '/commercial-construction',
			image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
		},
		{
			icon: PaintBucket,
			title: 'Custom Millwork',
			description: 'Handcrafted millwork and built-ins that add character and functionality to any space.',
			link: '/custom-millwork',
			image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
		},
		{
			icon: Lightbulb,
			title: 'Design Consultation',
			description: 'Expert design guidance to help you visualize and plan your perfect renovation project.',
			link: '/design-consultation',
			image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
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
				{#each services as service, index}
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
