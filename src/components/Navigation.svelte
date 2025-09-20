<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { Menu, X, ChevronDown } from '@lucide/svelte';
	import * as m from '$lib/paraglide/messages';
	import {
		mobileMenuOpen,
		isScrolled,
		toggleMobileMenu,
		closeMobileMenu,
		updateScrollState
	} from '$lib/stores/ui';

	import { fade, fly } from 'svelte/transition';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
import { setLocale, localizeHref } from '$lib/paraglide/runtime';

	// Build service dropdown items from service maps
	import { _services as residentialServices } from '../routes/services/residential/[slug]/+page';
	import { _services as commercialServices } from '../routes/services/commercial/[slug]/+page';
	import { _services as customServices } from '../routes/services/custom/[slug]/+page';

	const residentialItems: ServiceLink[] = Object.values(residentialServices).map((svc) => ({
		label: () => svc.title,
		href: `/services/residential/${svc.slug}`
	}));

	const commercialItems: ServiceLink[] = Object.values(commercialServices).map((svc) => ({
		label: () => svc.title,
		href: `/services/commercial/${svc.slug}`
	}));

	const customItems: ServiceLink[] = Object.values(customServices).map((svc) => ({
		label: () => svc.title,
		href: `/services/custom/${svc.slug}`
	}));

	type LabelFn = () => string;
	type PrimaryLink = { label: LabelFn; href: string; cta?: boolean };
	type ServiceLink = { label: LabelFn; href: string };
	type ServiceCategory = {
		id: string;
		title: LabelFn;
		href: string;
		items: ServiceLink[];
		showCategoryLink?: boolean;
	};
	type DesktopNavItem =
	| ({ id: string; type: 'link' } & PrimaryLink)
	| {
		id: string;
		type: 'dropdown';
		label: LabelFn;
		href: string;
		items: ServiceLink[];
		showCategoryLink?: boolean;
	};
	type MobileSection =
	| ({ id: string; type: 'link' } & PrimaryLink)
	| {
		id: string;
		type: 'dropdown';
		label: LabelFn;
		href: string;
		items: ServiceLink[];
		showCategoryLink?: boolean;
	};

	const contactLink: PrimaryLink = { label: m['nav.contact'], href: '/contact', cta: true };

	const serviceCategories: ServiceCategory[] = [
	{
		id: 'residential',
		title: () => m['forms.project_details.options.residential'](),
		href: '/services/residential',
		items: residentialItems,
		showCategoryLink: true
	},
	{
		id: 'commercial',
		title: () => m['forms.project_details.options.commercial'](),
		href: '/services/commercial',
		items: commercialItems,
		showCategoryLink: true
	},
	{
		id: 'custom',
		title: m['forms.project_details.options.custom'],
		href: '/services/custom',
		items: customItems,
		showCategoryLink: true
	}
];

	const desktopNavItems: DesktopNavItem[] = [
		{ id: 'home', type: 'link', label: m['nav.home'], href: '/' },
		{ id: 'services-overview', type: 'link', label: m['nav.services'], href: '/services' },
		...serviceCategories.map((category) => ({
			id: category.id,
			type: 'dropdown' as const,
			label: category.title,
			href: category.href,
			items: category.items,
			showCategoryLink: category.showCategoryLink
		})),
		{ id: 'about', type: 'link', label: m['nav.about'], href: '/about' }
	];

	const mobileSections: MobileSection[] = [
		{ id: 'home', type: 'link', label: m['nav.home'], href: '/' },
		{ id: 'services-overview', type: 'link', label: m['nav.services'], href: '/services' },
		...serviceCategories.map((category) => ({
			id: category.id,
			type: 'dropdown' as const,
			label: category.title,
			href: category.href,
			items: category.items,
			showCategoryLink: category.showCategoryLink
		})),
		{ id: 'about', type: 'link', label: m['nav.about'], href: '/about' },
		{ id: 'contact', type: 'link', label: m['nav.contact'], href: '/contact', cta: true }
	];

	let isHomePage = true;
	let openDesktopDropdown = '';
	let openMobileDropdown = '';
	let desktopCloseTimeout: ReturnType<typeof setTimeout> | null = null;
	let didAutoOpenMobile = false;

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
		didAutoOpenMobile = false;
	}

	// Open first dropdown by default when mobile menu opens (once per open)
	$: if ($mobileMenuOpen && !openMobileDropdown && !didAutoOpenMobile) {
		const firstDropdown = mobileSections.find((s) => s.type === 'dropdown');
		if (firstDropdown) {
			openMobileDropdown = firstDropdown.id;
			didAutoOpenMobile = true;
		}
	}

	function handleNavigation(href: string) {
		closeMobileMenu();
		goto(href);
	}

	function toggleMobileDropdown(id: string) {
		openMobileDropdown = openMobileDropdown === id ? '' : id;
	}

	function openDesktopMenu(id: string) {
		if (desktopCloseTimeout) {
			clearTimeout(desktopCloseTimeout);
			desktopCloseTimeout = null;
		}
		openDesktopDropdown = id;
	}

	function toggleDesktopMenu(id: string) {
		if (openDesktopDropdown === id) {
			closeDesktopMenu();
		} else {
			openDesktopMenu(id);
		}
	}

	function scheduleDesktopClose() {
		if (desktopCloseTimeout) {
			clearTimeout(desktopCloseTimeout);
		}
		desktopCloseTimeout = setTimeout(() => {
			openDesktopDropdown = '';
		}, 120);
	}

	function closeDesktopMenu() {
		if (desktopCloseTimeout) {
			clearTimeout(desktopCloseTimeout);
			desktopCloseTimeout = null;
		}
		openDesktopDropdown = '';
	}

	function handleDesktopFocusOut(event: FocusEvent) {
		const container = event.currentTarget as HTMLElement;
		const next = event.relatedTarget as HTMLElement | null;
		if (!next || !container.contains(next)) {
			closeDesktopMenu();
		}
	}

	function handleDesktopKeydown(event: KeyboardEvent, id: string) {
		if (event.key === 'Escape') {
			event.preventDefault();
			closeDesktopMenu();
			(event.target as HTMLElement)?.blur();
		} else if (event.key === 'ArrowDown' && openDesktopDropdown !== id) {
			openDesktopMenu(id);
		}
	}

// Locale handling
let currentLocale: 'en' | 'es' = 'en';
$: currentLocale = $page.url.pathname.startsWith('/es') ? 'es' : 'en';

function switchLocale(locale: 'en' | 'es') {
	if (locale !== currentLocale) {
		setLocale(locale);
	}
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
				<a href={localizeHref('/')} class="text-2xl font-bold text-white transition-colors hover:text-secondary">
					{m['company.short_name']()}
				</a>
			</div>

			<div class="hidden md:flex md:items-center space-x-4 lg:space-x-6 xl:space-x-8">
				{#each desktopNavItems as item (item.id)}
					{#if item.type === 'link'}
						<a
							href={localizeHref(item.href)}
							class="rounded-lg px-2 py-1 text-white text-sm md:text-[15px] lg:text-base whitespace-nowrap transition-colors duration-200 hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
						>
							{item.label()}
						</a>
					{:else}
						<div  role="alert"
							class="relative"
							on:mouseenter={() => openDesktopMenu(item.id)}
							on:mouseleave={scheduleDesktopClose}
							aria-roledescription="dropdown"
						>
							<button
								type="button"
								class={`flex items-center gap-1 rounded-lg px-2 py-1 text-white text-sm md:text-[15px] lg:text-base whitespace-nowrap transition-colors duration-200 ${openDesktopDropdown === item.id ? 'text-secondary' : 'hover:text-secondary'}`}
								on:focusin={() => openDesktopMenu(item.id)}
								on:click={() => toggleDesktopMenu(item.id)}
								on:keydown={(event) => handleDesktopKeydown(event, item.id)}
								aria-haspopup="true"
								aria-expanded={openDesktopDropdown === item.id}
								aria-controls={`desktop-dropdown-${item.id}`}
							>
								<span>{item.label()} </span>
								<ChevronDown
									class={`h-4 w-4 transition-transform duration-200 ${openDesktopDropdown === item.id ? 'rotate-180 text-secondary' : ''}`} 
								/> 
							</button>

							{#if openDesktopDropdown === item.id}
								<div class="absolute left-1/2 top-full z-40 w-64 -translate-x-1/2 pt-3">
									<div
									role="alert"
										id={`desktop-dropdown-${item.id}`}
										class="flex w-full flex-col gap-2 rounded-2xl border border-white/10 bg-[#10294B]/95 p-3 shadow-xl backdrop-blur-sm"
										on:mouseenter={() => openDesktopMenu(item.id)}
										on:mouseleave={scheduleDesktopClose}
										on:focusout={handleDesktopFocusOut}
									>
										{#if item.showCategoryLink !== false}
									<a
										href={localizeHref(item.href)}
												class="block rounded-lg bg-[#1A365D] px-3 py-2 text-sm font-semibold text-secondary transition hover:bg-secondary/20 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
												on:click={closeDesktopMenu}
											>
												{item.label()} {m['random_text.construction']()}
											</a>
											{#if item.items.length}
											<div class="h-px bg-white/10"></div>
											{/if}
										{/if}
										{#each item.items as sub (sub.href)}
									<a
										href={localizeHref(sub.href)}
												class="block rounded-lg px-3 py-2 text-sm text-white/90 transition hover:bg-secondary/10 hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
												on:click={closeDesktopMenu}
											>
												{sub.label()}
											</a>
										{/each}
									</div>
								</div>
							{/if}
						</div>
					{/if}
				{/each}

				<!-- Desktop language switcher -->
				<div class="flex items-center gap-1">
					<button
						type="button"
						class={`rounded-lg px-2 py-1 text-xs md:text-[13px] font-semibold transition-colors duration-200 ${currentLocale === 'en' ? 'bg-secondary text-[#1A365D]' : 'text-white hover:text-secondary'}`}
						on:click={() => switchLocale('en')}
						aria-pressed={currentLocale === 'en'}
						aria-label="Switch to English"
					>
						EN
					</button>
					<button
						type="button"
						class={`rounded-lg px-2 py-1 text-xs md:text-[13px] font-semibold transition-colors duration-200 ${currentLocale === 'es' ? 'bg-secondary text-[#1A365D]' : 'text-white hover:text-secondary'}`}
						on:click={() => switchLocale('es')}
						aria-pressed={currentLocale === 'es'}
						aria-label="Cambiar a Español"
					>
						ES
					</button>
				</div>

				<a
					href={localizeHref(contactLink.href)}
					class="rounded-lg bg-secondary px-4 md:px-5 lg:px-6 py-2 text-sm md:text-[15px] font-semibold text-[#1A365D] transition-all duration-200 hover:scale-105 hover:bg-secondary/90 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-secondary"
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
						<X class="h-6 w-6" />
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
			class="fixed inset-0 z-50 md:hidden"
			in:fly={{ x: 40, duration: 200, easing: quintOut }}
			out:fly={{ x: 40, duration: 160, easing: quintOut }}
			role="dialog"
			aria-modal="true"
		>
			<div
				class="ml-auto flex h-[100vh] w-full flex-col px-4  overflow-hidden border-t border-secondary/20 bg-[#1A365D] shadow-xl"
			>
				<div class="flex items-center justify-between px-4 py-3">
					<span class="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">{m['nav.services']()}</span>
					<button
						type="button"
						on:click={closeMobileMenu}
						class="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
						aria-label="Close menu"
					>
						<X class="h-5 w-5" />
					</button>
				</div>

				<div class="flex-1 space-y-3 overflow-y-auto px-2 pb-6 sm:px-3">
					<!-- Mobile language switcher -->
					<div class="px-2">
						<div class="inline-flex gap-2">
							<button
								type="button"
								class={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-200 ${currentLocale === 'en' ? 'bg-secondary text-[#1A365D]' : 'text-white hover:text-secondary'}`}
								on:click={() => switchLocale('en')}
								aria-pressed={currentLocale === 'en'}
								aria-label="Switch to English"
							>
								EN
							</button>
							<button
								type="button"
								class={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-200 ${currentLocale === 'es' ? 'bg-secondary text-[#1A365D]' : 'text-white hover:text-secondary'}`}
								on:click={() => switchLocale('es')}
								aria-pressed={currentLocale === 'es'}
								aria-label="Cambiar a Español"
							>
								ES
							</button>
						</div>
					</div>

					{#each mobileSections as section, i (section.id)}
						{#if section.type === 'link'}
							<a
								href={section.href}
								class={`block w-36 rounded-lg px-3 py-3 text-left text-base transition-colors duration-200 ${
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
									{#if section.showCategoryLink !== false}
										<ChevronDown
											class={`h-5 w-5 text-secondary transition-transform ${openMobileDropdown === section.id ? 'rotate-180' : ''}`}
										/>
									{/if}
								</button>
									{#if openMobileDropdown === section.id}
											<div class="space-y-1 border-t border-white/10 bg-[#10294B] px-3 py-3" in:slide={{ duration: 200, easing: quintOut }} out:slide={{ duration: 150, easing: quintOut }}>
												{#if section.showCategoryLink !== false}
													<a
														href={section.href}
														class="block rounded-lg px-3 py-2 text-sm font-semibold text-secondary transition hover:bg-secondary/10 hover:text-white focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-secondary"
														in:fly={{ y: -6, opacity: 0, duration: 180, easing: quintOut }}
														out:fly={{ y: -6, opacity: 0, duration: 100 }}
									on:click|preventDefault={() => handleNavigation(localizeHref(section.href))}
										on:click|preventDefault={() => handleNavigation(localizeHref(section.href))}
													>
														{section.label()}
													</a>
													{#if section.items.length}
														<div class="h-px bg-white/10"></div>
													{/if}
												{/if}
												{#each section.items as item, j}
													<a
														href={item.href}
														class="block rounded-lg px-3 py-2 text-sm text-white/90 transition hover:bg-white/10"
														in:fly={{ y: -6, opacity: 0, duration: 180, delay: j * 35, easing: quintOut }}
														out:fly={{ y: -6, opacity: 0, duration: 100 }}
										on:click|preventDefault={() => handleNavigation(localizeHref(item.href))}
													>
														{item.label()}
													</a>
													{/each}
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
