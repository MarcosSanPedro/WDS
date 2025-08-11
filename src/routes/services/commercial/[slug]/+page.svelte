<script lang="ts">
	import { Check, ChevronDown, ChevronUp, Droplet, Thermometer, Users } from 'lucide-svelte';
	import { services } from '../../cms';
	import { page } from '$app/state';
	import { slide } from 'svelte/transition';
	import Process from '../../../../components/Process.svelte';
	import { _services } from './+page';

	let activeTab = $state<'modern' | 'traditional' | 'contemporary' | string>('modern');
	let openFaq = $state<number | null>(null);

	let data = _services[page.params.slug as keyof typeof services];

	

	console.log(data);

	const materials = {
		cabinetry: {
			title: 'Premium Cabinetry',
			options: ['Walnut Wood', 'Maple', 'Cherry', 'White Shaker', 'Modern Flat Panel'],
			description:
				'Custom-built cabinets crafted from the finest materials with precision engineering.'
		},
		countertops: {
			title: 'Luxury Countertops',
			options: ['Quartz', 'Granite', 'Marble', 'Butcher Block', 'Concrete'],
			description: 'Durable and beautiful surfaces that combine form and function.'
		},
		flooring: {
			title: 'Premium Flooring',
			options: ['Hardwood', 'Luxury Vinyl', 'Tile', 'Natural Stone', 'Bamboo'],
			description: 'High-quality flooring options that stand up to kitchen demands.'
		}
	};

	type MaterialKey = keyof typeof materials;
	let selectedMaterial = $state<MaterialKey>('cabinetry');
</script>

<svelte:head>
	<title>Kitchen Renovations in Miami | Free Estimate</title>
	<meta
		name="description"
		content="Transform your kitchen with custom cabinetry, premium countertops, and modern appliances. Miami kitchen renovation specialists."
	/>
</svelte:head>

<main class="pt-16">
	<!-- Hero Section -->
	<section class="from-navy to-navy-light relative bg-gradient-to-br py-24 text-white">
		<div class="absolute inset-0 bg-[#0b2549]"></div>
		<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
				<div>
					<h1 class="mb-6 text-4xl font-bold whitespace-nowrap md:text-5xl">
						{data.title}
						<span class="block pt-2 whitespace-normal text-[#F6AD55]">{data.goldTittle}</span
						>
					</h1>
					<p class="mb-8 text-xl text-gray-200">
						{data.subTittle}
					</p>
					<a href="/contact"
						class="text-navy hover:bg-[#F6AD55]-light rounded-lg bg-[#F6AD55] px-8 py-4 text-lg font-semibold text-[#1A365D] transition-all duration-300 hover:scale-105"
					>
						Request Your Free Quote
					</a>
				</div>
				<div class="relative">
					<img
						src="https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&w=800"
						alt="Luxury bathroom renovation by World Detail Specialist"
						class="rounded-lg shadow-2xl"
					/>
				</div>
			</div>
		</div>
	</section>

	<section class="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold text-[#1A365D]">Latest Bathroom Design Trends</h2>
				<p class="mx-auto max-w-3xl text-xl text-gray-600">
					Discover the latest innovations in bathroom design that combine luxury with functionality.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				{#each data.trends as trend, index (index)}
					{@const Icon = trend.icon}

					<div
						class="rounded-xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
					>
						<div
							class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-slate-50 to-blue-50"
						>
							<Icon
								class="h-8 w-8 text-[#F6AD55]
				  "
							/>
						</div>
						<h3 class="text-navy mb-4 text-xl font-bold">{trend.title}</h3>
						<p class="text-gray-600">{trend.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- matiral selection section -->
	<section class="py-20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<h2 class="text-navy mb-4 text-4xl font-bold">Premium Material Options</h2>
				<p class="mx-auto max-w-3xl text-xl text-gray-600">
					Choose from our curated selection of high-quality materials for every element of your
					kitchen.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
				<!-- Material Selector & Details -->
				<div>
					<div class="mb-8 flex space-x-4">
						{#each Object.keys(materials) as key}
							<button
								class={`rounded-lg px-6 py-3 font-semibold transition-all duration-300 ${
									selectedMaterial === key
										? 'text-navy bg-[#F6AD55]'
										: 'text-navy bg-gradient-to-br from-slate-50 to-blue-50 hover:to-slate-300'
								}`}
								onclick={() => (selectedMaterial = key as MaterialKey)}
							>
								{materials[key as MaterialKey].title}
							</button>
						{/each}
					</div>

					<div class="rounded-xl bg-white p-8 shadow-lg">
						<h3 class="text-navy mb-4 text-2xl font-bold">
							{materials[selectedMaterial].title}
						</h3>
						<p class="mb-6 text-gray-600">
							{materials[selectedMaterial].description}
						</p>
						<div class="space-y-3">
							{#each materials[selectedMaterial].options as option}
								<div class="flex items-center space-x-3">
									<Check class="h-5 w-5 text-[#F6AD55]" />
									<span class="text-navy">{option}</span>
								</div>
							{/each}
						</div>
					</div>
				</div>

				<!-- Visual & CTA -->
				<div class="rounded-xl bg-gradient-to-br from-slate-50 to-blue-50 p-8">
					<img
						src="https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="Kitchen material showcase"
						class="mb-6 h-80 w-full rounded-lg object-cover"
					/>
					<div class="text-center">
						<p class="text-navy mb-2 font-semibold">Schedule a Material Consultation</p>
						<p class="mb-4 text-gray-600">See and feel our premium materials in person</p>
						<a
							href="/contact"
							class="text-navy rounded-lg bg-[#F6AD55] px-6 py-3 font-semibold transition-colors hover:bg-[#F6AD55]"
						>
							Book Consultation
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Overview Section -->
	<section class="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
		<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
			<h2 class="mb-8 text-3xl font-bold text-[#1A365D] md:text-4xl">
				{data.overview.heading}
			</h2>
			<p class="text-xl leading-relaxed text-[#718096]">
				{data.overview.paragraph}
			</p>
		</div>
	</section>

	<Process />

	<section class="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<h2 class="text-navy mb-4 text-4xl font-bold">{data.featuresTittle}</h2>
				<p class="mx-auto max-w-3xl text-xl text-gray-600">
					{data.featuresSubtittle}
				</p>
			</div>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
				{#each data.features as feature, index (index)}
					{@const Icon = feature.icon}
					<div class="rounded-xl bg-white p-6 text-center shadow-lg">
						<div
							class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F6AD55]"
						>
							<Icon class="h-12 w-14  rounded-full bg-[#F6AD55]  p-2 text-[#1A365D]" />
						</div>
						<h3 class="text-navy mb-3 text-lg font-bold">{feature.title}</h3>
						<p class="text-sm text-gray-600">{feature.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- FAQs -->
	<section class="bg-white py-20">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<h2 class="mb-12 text-center text-3xl font-bold text-[#1A365D] md:text-4xl">
				Frequently Asked Questions
			</h2>

			<div class="space-y-4">
				{#each data.faqs as faq, index}
					<div class="overflow-hidden rounded-lg bg-[#F7FAFC] shadow-sm">
						<button
							onclick={(event) => {
								event.preventDefault();
								openFaq = openFaq === index ? null : index;
							}}
							class="flex w-full items-center justify-between px-6 py-4 text-left transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
							aria-expanded={openFaq === index}
							aria-controls={`faq-answer-${index}`}
						>
							<span class="text-lg font-semibold text-[#1A365D]">{faq.question}</span>
							{#if openFaq === index}
								<ChevronUp class="h-6 w-6 text-[#F6AD55]" />
							{:else}
								<ChevronDown class="h-6 w-6 text-[#F6AD55]" />
							{/if}
						</button>
						{#if openFaq === index}
							<div
								id={`faq-answer-${index}`}
								class="px-6 pb-4"
								transition:slide={{ duration: 300 }}
							>
								<p class="leading-relaxed text-[#718096]">{faq.answer}</p>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA Banner -->
	<section class="bg-[#1A365D] py-20 text-white">
		<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
			<h2 class="mb-6 text-3xl font-bold md:text-4xl">{data.cta.heading}</h2>
			<p class="mb-8 text-xl text-white/90">
				{data.cta.subheading}
			</p>
			<a
				href="/contact"
				class="inline-block rounded-lg bg-[#F6AD55] px-8 py-4 text-lg font-semibold text-[#1A365D] transition-all duration-200 hover:scale-105 hover:bg-[#F6AD55]/90"
			>
				{data.cta.button}
			</a>
		</div>
	</section>
</main>
