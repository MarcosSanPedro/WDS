<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { Menu, X, ChevronDown, ChevronRight } from '@lucide/svelte';
	import * as m from '$lib/paraglide/messages';
	import {
		mobileMenuOpen,
		isScrolled,
		toggleMobileMenu,
		closeMobileMenu,
		updateScrollState
	} from '$lib/stores/ui';

	import { fade, fly, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	type LabelFn = () => string;
	type PrimaryLink = { label: LabelFn; href: string; cta?: boolean };
	type MegaLink = { label: LabelFn; href: string };
	type MegaCategory = {
		id: string;
		title: LabelFn;
		items: MegaLink[];
		accent: string;
		link?: { label: LabelFn; href: string };
	};

	const siteLinks: PrimaryLink[] = [
		{ label: m['nav.home'], href: '/' },
		{ label: m['nav.about'], href: '/about' }
	];

	const contactLink: PrimaryLink = { label: m['nav.contact'], href: '/contact', cta: true };

	const residentialServices: MegaLink[] = [
		{ label: m['services_overview.services.kitchen_remodels.title'], href: '/services/residential/kitchen-renovations' },
		{ label: m['services_overview.services.bathroom_renovations.title'], href: '/services/residential/bathroom-renovations' },
		{ label: m['services_overview.services.home_additions.title'], href: '/services/residential/home-additions' },
		{ label: m['services_overview.services.basement_finishing.title'], href: '/services/residential/basement-finishing' },
		{ label: m['services_overview.services.deck_patio.title'], href: '/services/residential/deck-patio-construction' },
		{ label: m['services_overview.services.whole_home.title'], href: '/services/residential/whole-home-renovations' }
	];

	const commercialServices: MegaLink[] = [
		{ label: m['residential_services.office_renovations.title'], href: '/services/commercial/office-renovations' },
		{ label: m['residential_services.retail_construction.title'], href: '/services/commercial/retail-construction' },
		{ label: m['residential_services.industrial_upgrades.title'], href: '/services/commercial/industrial-upgrades' },
		{ label: m['residential_services.commercial_maintenance.title'], href: '/services/commercial/commercial-maintenance' },
		{ label: m['residential_services.restaurant_hospitality_renovations.title'], href: '/services/commercial/restaurant-hospitality-renovations' },
		{ label: m['residential_services.commercial_building_additions.title'], href: '/services/commercial/commercial-building-additions' }
	];

	const customServices: MegaLink[] = [
		{ label: m['services_overview.custom_services.custom_home_builds.title'], href: '/services/custom/custom-home-builds' },
		{ label: m['services_overview.custom_services.unique_architectural_features.title'], href: '/services/custom/unique-architectural-features' },
		{ label: m['services_overview.custom_services.specialty_renovations.title'], href: '/services/custom/specialty-renovations' },
		{ label: m['services_overview.custom_services.custom_outdoor_structures.title'], href: '/services/custom/custom-outdoor-structures' },
		{ label: m['services_overview.custom_services.historical_restorations.title'], href: '/services/custom/historical-restorations' },
		{ label: m['services_overview.custom_services.custom_commercial_builds.title'], href: '/services/custom/custom-commercial-builds' }
	];

	const serviceCategories: MegaCategory[] = [
		{
			id: 'residential',
			title: m['servicesCards.s_residential_title'],
			items: residentialServices,
			accent: 'from-emerald-400/60 via-emerald-500/25 to-transparent',
			link: { label: m['servicesCards.s_residential_cta'], href: '/services/residential' }
		},
		{
			id: 'commercial',
			title: m['servicesCards.s_commercial_title'],
			items: commercialServices,
			accent: 'from-blue-400/60 via-blue-500/20 to-transparent',
			link: { label: m['servicesCards.s_commercial_cta'], href: '/services/commercial' }
		},
		{
			id: 'custom',
			title: m['servicesCards.s_custom_title'],
			items: customServices,
			accent: 'from-purple-400/60 via-purple-500/25 to-transparent',
			link: { label: m['servicesCards.s_custom_cta'], href: '/services/custom' }
		}
	];

	const quickLinksCategory: MegaCategory = {
		id: 'quick-links',
		title: m['footer.quick_links'],
		items: [
			{ label: m['nav.home'], href: '/' },
			{ label: m['nav.services'], href: '/services' },
			{ label: m['servicesCards.s_residential_title'], href: '/services/residential' },
			{ label: m['servicesCards.s_commercial_title'], href: '/services/commercial' },
			{ label: m['servicesCards.s_custom_title'], href: '/services/custom' },
			{ label: m['nav.about'], href: '/about' }
		],
		accent: 'from-secondary/70 via-secondary/30 to-transparent',
		link: { label: m['nav.contact'], href: '/contact' }
	};

	const megaCategories = [...serviceCategories, quickLinksCategory];

	type MobileSection =
		| ({ id: string; type: 'link' } & PrimaryLink)
		| {
				id: string;
				type: 'dropdown';
				label: LabelFn;
				items: MegaLink[];
				link?: { label: LabelFn; href: string };
		  };

	const dropdownSections: MobileSection[] = serviceCategories.map((category) => ({
		id: category.id,
		type: 'dropdown',
		label: category.title,
		items: category.items,
		link: category.link
	}));

	const mobileSections: MobileSection[] = [
		{ id: 'home', type: 'link', label: m['nav.home'], href: '/' },
		{ id: 'services-overview', type: 'link', label: m['nav.services'], href: '/services' },
		...dropdownSections,
		{ id: 'about', type: 'link', label: m['nav.about'], href: '/about' },
		{ id: 'contact', type: 'link', label: m['nav.contact'], href: '/contact', cta: true }
	];

	let isHomePage = true;
	let servicesMegaOpen = false;
	let megaContainer: HTMLDivElement;
	let openMobileDropdown = '';
	let megaCloseTimeout: ReturnType<typeof setTimeout> | null = null;

	onMount(() => {
		const handleScroll = () => updateScrollState();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	$: if ($page.url.pathname) {
		closeMobileMenu();
	}

	$: isHomePage = $page.url.pathname === '/';

	$: if (!$mobileMenuOpen) {
		openMobileDropdown = '';
	}

	function handleNavigation(href: string) {
		closeMobileMenu();
		goto(href);
	}

	function toggleMobileDropdown(id: string) {
		openMobileDropdown = openMobileDropdown === id ? '' : id;
	}

	function handleMegaFocusOut(event: FocusEvent) {
		const next = event.relatedTarget as HTMLElement | null;
		if (!next || !megaContainer?.contains(next)) {
			servicesMegaOpen = false;
		}
	}

	function handleMegaKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			servicesMegaOpen = false;
		}
	}

	function openMega() {
		if (megaCloseTimeout) {
			clearTimeout(megaCloseTimeout);
			megaCloseTimeout = null;
		}
		servicesMegaOpen = true;
	}

	function scheduleMegaClose() {
		if (megaCloseTimeout) {
			clearTimeout(megaCloseTimeout);
		}
		megaCloseTimeout = setTimeout(() => {
			servicesMegaOpen = false;
		}, 120);
	}
</script>

<nav
	class="fixed z-50 w-full transition-all duration-300 {$isScrolled || !isHomePage
		? 'bg-[#1A365D]/95 shadow-lg backdrop-blur-sm'
		: 'bg-transparent'}"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex-shrink-0">
				<a href="/" class="text-2xl font-bold text-white transition-colors hover:text-secondary">
					{m['company.short_name']()}
				</a>
			</div>

			<div class="hidden md:flex md:items-center md:space-x-8">
				{#each siteLinks as link}
					<a
						href={link.href}
						class="text-white transition-colors duration-200 hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
					>
						{link.label()}
					</a>
				{/each}

				<div
					class="relative"
					bind:this={megaContainer}
					role="none"
					on:focusout={handleMegaFocusOut}
					on:keydown={handleMegaKeydown}
				>
					<button
						type="button"
						class="flex items-center gap-1 rounded-lg px-2 py-1 text-white transition-colors duration-200 hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
						on:mouseenter={openMega}
						on:mouseleave={scheduleMegaClose}
						on:focusin={openMega}
						on:click={() => (servicesMegaOpen = !servicesMegaOpen)}
						aria-haspopup="true"
						aria-expanded={servicesMegaOpen}
						aria-controls="services-mega-menu"
					>
						<span>{m['nav.services']()}</span>
						<ChevronDown
							class={`h-4 w-4 transition-transform duration-200 ${servicesMegaOpen ? 'rotate-180 text-secondary' : ''}`}
						/>
					</button>

					{#if servicesMegaOpen}
						<div
							id="services-mega-menu"
							class="absolute left-1/2 top-full z-40 w-screen max-w-6xl -translate-x-1/2 translate-y-3 px-4"
							on:mouseenter={openMega}
							on:mouseleave={scheduleMegaClose}
							role="presentation"
						>
							<div class="overflow-hidden rounded-3xl border border-white/10 bg-[#0F2342]/95 p-8 shadow-2xl backdrop-blur-xl">
								<div class="flex items-center justify-between gap-3 border-b border-white/10 pb-4 text-sm text-blue-100">
									<span class="font-semibold uppercase tracking-[0.18em] text-blue-100/80">
										{m['nav.services']()}
									</span>
									<a
										href="/services"
										class="inline-flex items-center gap-1 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-secondary hover:text-[#1A365D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
									>
										<span>{m['nav.services']()}</span>
										<ChevronRight class="h-3.5 w-3.5" />
									</a>
								</div>

								<div class="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
									{#each megaCategories as category (category.id)}
										<div class="group flex h-full flex-col gap-4 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-secondary/60">
											<div class="relative overflow-hidden rounded-xl bg-gradient-to-br {category.accent} p-4">
												<p class="text-xs font-semibold uppercase tracking-widest text-[#0A1D36]/70">
													{category.title()}
												</p>
											</div>

											<div class="space-y-2">
												{#each category.items as item (item.href)}
													<a
														href={item.href}
														class="group/link flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
													>
														<span class="relative flex-1">
															{item.label()}
															<span class="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-secondary transition duration-200 group-hover/link:scale-x-100 group-focus-visible/link:scale-x-100"></span>
														</span>
														<ChevronRight class="h-4 w-4 text-secondary opacity-0 transition group-hover/link:opacity-100 group-focus-visible/link:opacity-100" />
													</a>
												{/each}
											</div>

											{#if category.link}
												<a
													href={category.link.href}
													class="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-secondary/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#1A365D] transition hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
												>
													<span>{category.link.label()}</span>
													<ChevronRight class="h-3.5 w-3.5" />
												</a>
											{/if}
										</div>
									{/each}
								</div>
							</div>
						</div>
					{/if}
				</div>

				<a
					href={contactLink.href}
					class="rounded-lg bg-secondary px-6 py-2 font-semibold text-[#1A365D] transition-all duration-200 hover:scale-105 hover:bg-secondary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
				>
					{contactLink.label()}
				</a>
			</div>

			<div class="md:hidden">
				<button
					on:click={toggleMobileMenu}
					class="text-white transition-transform duration-150 hover:text-secondary active:scale-95"
					aria-label="Toggle menu"
				>
					{#if $mobileMenuOpen}
						<X size={24} />
					{:else}
						<Menu size={24} />
					{/if}
				</button>
			</div>
		</div>
	</div>

	{#if $mobileMenuOpen}
		<div
			class="fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px]"
			in:fade={{ duration: 120 }}
			out:fade={{ duration: 120 }}
			on:click={closeMobileMenu}
			aria-hidden="true"
		></div>

		<div
			class="fixed top-16 right-0 left-0 z-50 md:hidden"
			in:fade={{ duration: 160 }}
			out:fade={{ duration: 100 }}
			role="dialog"
			aria-modal="true"
		>
			<div
				class="origin-top border-t border-secondary/20 bg-[#1A365D]"
				in:scale={{ start: 0.98, duration: 160, easing: quintOut }}
				out:scale={{ duration: 120, easing: quintOut }}
			>
				<div class="max-h-[calc(100vh-4.5rem)] space-y-3 overflow-y-auto px-2 pt-2 pb-6 sm:px-3">
					{#each mobileSections as section, i (section.id)}
						{#if section.type === 'link'}
							<a
								href={section.href}
								class={`block w-full rounded-lg px-3 py-3 text-left text-base transition-colors duration-200 ${
									section.cta
										? 'bg-secondary text-center font-semibold text-[#1A365D] hover:scale-105 hover:bg-secondary/90 transform'
										: 'text-white hover:text-secondary'
								}`}
								on:click|preventDefault={() => handleNavigation(section.href)}
								in:fly={{ y: -8, opacity: 0, duration: 220, delay: i * 50, easing: quintOut }}
								out:fly={{ y: -8, opacity: 0, duration: 120 }}
							>
								{section.label()}
							</a>
						{:else}
							<div
								class="rounded-xl border border-white/10 bg-white/5"
								in:fly={{ y: -8, opacity: 0, duration: 220, delay: i * 50, easing: quintOut }}
								out:fly={{ y: -8, opacity: 0, duration: 120 }}
							>
								<button
									type="button"
									class="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
									on:click={() => toggleMobileDropdown(section.id)}
								>
									<span class="text-base font-semibold text-white">{section.label()}</span>
									<ChevronDown
										class={`h-5 w-5 text-secondary transition-transform ${openMobileDropdown === section.id ? 'rotate-180' : ''}`}
									/>
								</button>
								{#if openMobileDropdown === section.id}
									<div class="space-y-1 border-t border-white/10 bg-[#10294B] px-3 py-3">
										{#each section.items as item}
											<a
												href={item.href}
												class="block rounded-lg px-3 py-2 text-sm text-white/90 transition hover:bg-white/10"
												on:click|preventDefault={() => handleNavigation(item.href)}
											>
												{item.label()}
											</a>
										{/each}
										{#if section.link}
											<a
												href={section.link.href}
												class="mt-2 block rounded-lg bg-secondary/90 px-3 py-2 text-center text-sm font-semibold text-[#1A365D] transition hover:bg-secondary"
												on:click|preventDefault={() => section.link && handleNavigation(section.link.href)}
											>
												{section.link.label()}
											</a>
										{/if}
									</div>
								{/if}
							</div>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	{/if}
</nav>

<style>
	button:focus-visible {
		outline: 2px solid rgba(255, 255, 255, 0.7);
		outline-offset: 2px;
	}
</style>
