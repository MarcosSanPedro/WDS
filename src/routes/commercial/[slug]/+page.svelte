<script lang="ts">
	import {
		Check,
		ChevronDown,
		ChevronUp,
		Droplet,
		Play,
		Star,
		Thermometer,
		Users
	} from 'lucide-svelte';
	import * as m from '$lib/paraglide/messages';
	import { services } from '../cms';
	import { page } from '$app/state';
	import { slide } from 'svelte/transition';

	let activeTab = $state<'modern' | 'traditional' | 'contemporary' | string>('modern');
	let openFaq = $state<number | null>(null);

	let data = services[page.params.slug as keyof typeof services];
	const trends = [
		{
			title: 'Rainfall Showers',
			description:
				'Luxurious shower experiences with multiple spray patterns and water-saving technology.',
			icon: Droplet
		},
		{
			title: 'Heated Floors',
			description: 'Radiant floor heating for comfort and luxury in any weather.',
			icon: Thermometer
		},
		{
			title: 'Floating Vanities',
			description: 'Modern, space-saving designs that create an airy, contemporary feel.',
			icon: Users
		}
	];

	const features = [
		{
			title: 'Walk-in Showers',
			description: 'Barrier-free entry with non-slip surfaces and built-in seating options.'
		},
		{
			title: 'Grab Bars',
			description: 'Stylish, sturdy support bars that blend seamlessly with your design.'
		},
		{
			title: 'Comfort Height Fixtures',
			description: 'Toilets and vanities at optimal heights for easier use.'
		},
		{
			title: 'Wide Doorways',
			description: 'Accessible entry points that accommodate all mobility needs.'
		}
	];

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
						Bathroom Remodeling
						<span class="block pt-2 whitespace-normal text-[#F6AD55]">Create Your Personal Spa</span
						>
					</h1>
					<p class="mb-8 text-xl text-gray-200">
						Create your dream bathroom with our innovative remodeling solutions. From luxurious spa
						retreats to functional family bathrooms, we design spaces that inspire relaxation.
					</p>
					<button
						class="text-navy hover:bg-[#F6AD55]-light rounded-lg bg-[#F6AD55] px-8 py-4 text-lg font-semibold text-[#1A365D] transition-all duration-300 hover:scale-105"
					>
						Request Your Free Bathroom Quote
					</button>
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
				{#each trends as trend, index (index)}
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
										? 'bg-[#F6AD55] text-navy'
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
									<Check class="text-[#F6AD55] h-5 w-5" />
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
							class="bg-[#F6AD55] text-navy hover:bg-[#F6AD55] rounded-lg px-6 py-3 font-semibold transition-colors"
						>
							Book Consultation
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Overview Section -->
	<section class="bg-white py-20">
		<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
			<h2 class="mb-8 text-3xl font-bold text-[#1A365D] md:text-4xl">
				{data.overview.heading}
			</h2>
			<p class="text-xl leading-relaxed text-[#718096]">
				{data.overview.paragraph}
			</p>
		</div>
	</section>

	<!-- Process Section -->
	<section class="bg-[#F7FAFC] py-20">
		<div class="  px-4 sm:px-6 lg:px-8">
			<h2 class="mb-12 text-center text-3xl font-bold text-[#1A365D] md:text-4xl">
				Our Kitchen Renovation Process
			</h2>

			<div class="space-y-4 md:flex justify-center gap-10 ">
				{#each [{ title: 'Initial Consultation', desc: 'We discuss your vision, needs, and budget in detail' }, { title: '3D Design Rendering', desc: 'See your new kitchen before construction begins' }, { title: 'Material Selection', desc: 'Choose from premium cabinets, countertops, and fixtures' }, { title: 'Construction Phase', desc: 'Expert craftsmen bring your design to life' }, { title: 'Final Reveal', desc: 'Walk through your completed dream kitchen' }] as step, index}
					<div class="rounded-lg border-l-4 border-[#F6AD55] bg-white p-6 shadow-md md:w-80 md:p-4">
						<div class="flex items-center">
							<div
								class="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#F6AD55] font-bold text-[#1A365D]"
							>
								{index + 1}
							</div>
							<div>
								<h3 class="text-xl font-bold text-[#1A365D]">{step.title}</h3>
								<p class="mt-1 text-[#718096]">{step.desc}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Style Gallery -->
	<section class="bg-white py-20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<h2 class="mb-4 text-center text-3xl font-bold text-[#1A365D] md:text-4xl">
				Choose a Style That Fits Your Life
			</h2>
			<p class="mb-12 text-center text-xl text-[#718096]">
				Explore different design aesthetics to find your perfect match.
			</p>

			<div class="mb-8 flex justify-center">
				<div class="flex space-x-2 rounded-lg bg-[#F7FAFC] p-2">
					{#each Object.keys(data.styles) as style}
						<button
							onclick={() => (activeTab = style as 'modern' | 'traditional' | 'contemporary')}
							class="rounded-lg px-6 py-3 font-semibold capitalize transition-all duration-200 {activeTab ===
							style
								? 'bg-[#F6AD55] text-[#1A365D]'
								: 'text-[#718096] hover:text-[#1A365D]'}"
						>
							{style}
						</button>
					{/each}
				</div>
			</div>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
				{#each data.styles[activeTab] as image, index}
					<div class="aspect-video overflow-hidden rounded-lg shadow-lg">
						<img
							src={image}
							alt="{activeTab} kitchen style {index + 1}"
							class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
						/>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<h2 class="text-navy mb-4 text-4xl font-bold">Universal Design & Accessibility</h2>
				<p class="mx-auto max-w-3xl text-xl text-gray-600">
					Create beautiful, accessible bathrooms that work for everyone.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
				{#each features as feature, index (index)}
					{@const Icon = Check}
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
