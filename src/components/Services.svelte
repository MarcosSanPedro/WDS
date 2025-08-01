<script lang="ts">
	import { Home, Building, Wrench, Hammer, PaintBucket, Lightbulb } from 'lucide-svelte';
	import * as m from '$lib/paraglide/messages';

	const services = [
		{
			icon: Home,
			title: m['services.kitchen'](),
			description: 'Transform your kitchen into a culinary masterpiece with custom cabinetry, premium countertops, and modern appliances.',
			features: ['Custom Cabinetry', 'Premium Countertops', 'Modern Appliances']
		},
		{
			icon: Building,
			title: m['services.bathroom'](),
			description: 'Create your personal spa retreat with luxury fixtures, elegant tilework, and sophisticated design.',
			features: ['Luxury Fixtures', 'Custom Tilework', 'Spa-like Design']
		},
		{
			icon: Wrench,
			title: m['services.whole_home'](),
			description: 'Complete home transformations that enhance both functionality and aesthetic appeal throughout your space.',
			features: ['Complete Makeovers', 'Structural Changes', 'Interior Design']
		},
		{
			icon: Hammer,
			title: m['services.commercial'](),
			description: 'Professional commercial spaces that reflect your brand and optimize workflow for maximum efficiency.',
			features: ['Office Buildouts', 'Retail Spaces', 'Restaurants']
		},
		{
			icon: PaintBucket,
			title: m['services.millwork.title'](),
			description: m['services.millwork.description'](),
			features: [m['services.millwork.features.storage'](), m['services.millwork.features.molding'](), m['services.millwork.features.trim']()]
		},
		{
			icon: Lightbulb,
			title: m['services.design.title'](),
			description: m['services.design.description'](),
			features: [m['services.design.features.renderings'](), m['services.design.features.materials'](), m['services.design.features.planning']()]
		}
	];
</script>

<section id="services" class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-[#1A365D] mb-4">
				{m['services.title']()}
			</h2>
			<p class="text-xl text-[#718096] max-w-3xl mx-auto">
				{m['services.subtitle']()}
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each services as service, index}
				<div
					class="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group"
				>
					<div class="text-[#F6AD55] mb-6 group-hover:scale-110 transition-transform duration-300">
						<svelte:component this={service.icon} class="w-12 h-12" />
					</div>
					<h3 class="text-2xl font-bold text-[#1A365D] mb-4">
						{service.title}
					</h3>
					<p class="text-[#718096] mb-6 leading-relaxed">
						{service.description}
					</p>
					<ul class="space-y-2 mb-6">
						{#each service.features as feature}
							<li class="flex items-center text-[#718096]">
								<div class="w-2 h-2 bg-[#F6AD55] rounded-full mr-3"></div>
								{feature}
							</li>
						{/each}
					</ul>
					<button class="text-[#F6AD55] font-semibold hover:text-[#1A365D] transition-colors duration-200 flex items-center">
						{m['services.learn_more']()} →
					</button>
				</div>
			{/each}
		</div>
	</div>
</section>
