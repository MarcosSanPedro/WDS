<script lang="ts">
	import { Check, ChevronDown, ChevronUp } from 'lucide-svelte';
	import { page } from '$app/state';
	import { slide } from 'svelte/transition';
	import Process from './Process.svelte';
	import type { Services } from '$lib/types';

    let { _services } = $props<{ _services: Record<string, Services> }>();

	let openFaq = $state<number | null>(null);

	let data = _services[page.params.slug as keyof typeof _services];

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


	type FinishKey = 'natural' | 'honey' | 'green' | 'yellow' | 'black' | 'red' | 'orange'| 'purple';

	type Finish = {
		name: string;
		preview: string; // hex
		image: string;   // image URL
	};

	const finishes = {
		natural: {
			name: 'Natural Clear',
			preview: '#D2B48C',
			image: '/colorSelectorImg/beige.jpg'
		},
		honey: {
			name: 'Honey Stain',
			preview: '#CD853F',
			image: '/colorSelectorImg/honey.jpg'
		},
		green: {
			name: 'Green',
			preview: '#218542',
			image: '/colorSelectorImg/green.jpg'
		},
		yellow: {
			name: 'Light Yellow',
			preview: '#ebeb5b',
			image: '/colorSelectorImg/light-yellow.jpg'
		},

		black: {
			name: 'Black Stain',
			preview: '#2F2F2F',
			image: '/colorSelectorImg/stain-black.jpg'
		},
		red: {
			name: 'Light Red',
			preview: '#f15b5b',
			image: '/colorSelectorImg/light-red.jpg'
		},
		orange: {
			name: 'Orange Paint',
			preview: '#ea6a15',
			image: '/colorSelectorImg/orange.jpg'
		},
		purple: {
			name: 'Purple Paint',
			preview: '#8E44AD',
			image: '/colorSelectorImg/purple.jpg'
		}
	}

	let selectedFinish = $state<FinishKey>('natural');

	const finishList = Object.entries(finishes) as [FinishKey, Finish][];

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
	<section class=" bg-[#ea6a15] from-navy to-navy-light relative bg-gradient-to-br py-24 text-white">
		<div class="absolute inset-0 bg-[#0b2549]"></div>
		<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
				<div>
					<h1 class="mb-6 text-4xl font-bold whitespace-nowrap md:text-5xl">
						{data.title}
						<span class="block pt-2 whitespace-normal text-secondary">{data.goldTittle}</span
						>
					</h1>
					<p class="mb-8 text-xl text-gray-200">
						{data.subTittle}
					</p>
					<a href="/contact"
						class="text-navy hover:bg-secondary-light rounded-lg bg-secondary px-8 py-4 text-lg font-semibold text-[#1A365D] transition-all duration-300 hover:scale-105"
					>
						Request Your Free Quote
					</a>
				</div>
				<div class="relative">
					<img
						src={data.meta.heroImage}
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
								class="h-8 w-8 text-secondary
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
										? 'text-navy bg-secondary'
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
									<Check class="h-5 w-5 text-secondary" />
									<span class="text-navy">{option}</span>
								</div>
							{/each}
						</div>
					</div>
				</div>

				<!-- Visual & CTA -->
				<div class="rounded-xl bg-gradient-to-br from-slate-50 to-blue-50">
					<!-- Large preview that swaps with selection -->
					<figure class="mb-6">
						<img
							src={finishes[selectedFinish].image}
							alt={`Sample: ${finishes[selectedFinish].name}`}
							class="h-80 w-full rounded-t-lg object-cover shadow"
							loading="eager"
						/>
						<figcaption class="mt-3 flex items-center justify-between text-sm text-gray-600 px-9">
							<span class="font-semibold text-navy">{finishes[selectedFinish].name}</span>
							<span class="inline-flex items-center gap-2"></span>
							
								<code class="text-gray-500">{finishes[selectedFinish].preview}</code>
						</figcaption>
					</figure>
				
					<!-- Swatches: no text on the chips -->
					<div class="rounded-xl bg-white p-6 shadow-lg">
						<h4 class="text-navy mb-4 text-lg font-bold">Finish Samples</h4>
				
						<div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
							{#each finishList as [key, finish] (key)}
								<button
									onclick={() => (selectedFinish = key)}
									class={`relative h-12 w-12 rounded-md border-2 transition
										${selectedFinish === key
											? 'border-secondary ring-2 ring-secondary/40'
											: 'border-gray-200 hover:border-gray-300'}`}
									style:background-color={finish.preview}
									aria-label={finish.name}
									aria-pressed={selectedFinish === key}
									title={finish.name}
								>
									<!-- focus ring for keyboard users -->
									</button>
							{/each}
						</div>
				
						<!-- Helper line; no labels on swatches -->
						<p class="mt-4 text-xs text-gray-500">
							Tip: Click a swatch to preview the matching sample photo above.
						</p>
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
							class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary"
						>
							<Icon class="h-12 w-14  rounded-full bg-secondary  p-2 text-[#1A365D]" />
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
								<ChevronUp class="h-6 w-6 text-secondary" />
							{:else}
								<ChevronDown class="h-6 w-6 text-secondary" />
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
				class="inline-block rounded-lg bg-secondary px-8 py-4 text-lg font-semibold text-[#1A365D] transition-all duration-200 hover:scale-105 hover:bg-secondary/90"
			>
				{data.cta.button}
			</a>
		</div>
	</section>
</main>
