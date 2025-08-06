<script lang="ts" module>
	import { Home, Building, Wrench, Hammer, PaintBucket, Lightbulb } from 'lucide-svelte';
	export { ServiceCard };
	
	const services = [
		{
			icon: Home,
			title: m['services.kitchen'](),
			description:
				'Transform your kitchen into a culinary masterpiece with custom cabinetry, premium countertops, and modern appliances.',
			features: ['Custom Cabinetry', 'Premium Countertops', 'Modern Appliances']
		},
		{
			icon: Building,
			title: m['services.bathroom'](),
			description:
				'Create your personal spa retreat with luxury fixtures, elegant tilework, and sophisticated design.',
			features: ['Luxury Fixtures', 'Custom Tilework', 'Spa-like Design']
		},
		{
			icon: Wrench,
			title: m['services.whole_home'](),
			description:
				'Complete home transformations that enhance both functionality and aesthetic appeal throughout your space.',
			features: ['Complete Makeovers', 'Structural Changes', 'Interior Design']
		},
		{
			icon: Hammer,
			title: m['services.commercial'](),
			description:
				'Professional commercial spaces that reflect your brand and optimize workflow for maximum efficiency.',
			features: ['Office Buildouts', 'Retail Spaces', 'Restaurants']
		},
		{
			icon: PaintBucket,
			title: m['services.millwork.title'](),
			description: m['services.millwork.description'](),
			features: [
				m['services.millwork.features.storage'](),
				m['services.millwork.features.molding'](),
				m['services.millwork.features.trim']()
			]
		},
		{
			icon: Lightbulb,
			title: m['services.design.title'](),
			description: m['services.design.description'](),
			features: [
				m['services.design.features.renderings'](),
				m['services.design.features.materials'](),
				m['services.design.features.planning']()
			]
		}
	];
</script>

<script lang="ts">
	import * as m from '$lib/paraglide/messages';
</script>

{#snippet ServiceCard(service: (typeof services)[0])}
	{@const Icon = service.icon}

	<div
		class="group rounded-lg border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
	>
		<div class="mb-6 text-[#F6AD55] transition-transform duration-300 group-hover:scale-110">
			<Icon class="h-12 w-12" />
		</div>
		<h3 class="mb-4 text-2xl font-bold text-[#1A365D]">
			{service.title}
		</h3>
		<p class="mb-6 leading-relaxed text-[#718096]">
			{service.description}
		</p>
		<ul class="mb-6 space-y-2">
			{#each service.features as feature}
				<li class="flex items-center text-[#718096]">
					<div class="mr-3 h-2 w-2 rounded-full bg-[#F6AD55]"></div>
					{feature}
				</li>
			{/each}
		</ul>
		<button
			class="flex items-center font-semibold text-[#F6AD55] transition-colors duration-200 hover:text-[#1A365D]"
		>
			{m['services.learn_more']()} →
		</button>
	</div>
{/snippet}

<section id="services" class="bg-white py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-[#1A365D] md:text-5xl">
				{m['services.title']()}
			</h2>
			<p class="mx-auto max-w-3xl text-xl text-[#718096]">
				{m['services.subtitle']()}
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each services as service}
				{@render ServiceCard(service)}
			{/each}
		</div>
	</div>
</section>
