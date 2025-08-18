<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { Menu, X } from 'lucide-svelte';
	import * as m from '$lib/paraglide/messages';
	import {
		mobileMenuOpen,
		isScrolled,
		toggleMobileMenu,
		closeMobileMenu,
		updateScrollState
	} from '$lib/stores/ui';

	// Transitions & easing
	import { fade, fly, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	type LinkItem = { label: () => string; href: string; cta?: boolean };

	const mobileLinks: LinkItem[] = [
		{ label: m['nav.home'], href: '/' },
		{ label: m['nav.services'], href: '/services' },
		// { label: m['nav.portfolio'], href: '/portfolio' },
		{ label: m['nav.about'], href: '/about' },
		{ label: m['nav.contact'], href: '/contact', cta: true }
	];

	let isHomePage = true;

	onMount(() => {
		const handleScroll = () => updateScrollState();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	// Close mobile menu when route changes
	$: if ($page.url.pathname) {
		closeMobileMenu();
	}

	// Check if we're on the home page
	$: isHomePage = $page.url.pathname === '/';

	function handleNavigation(href: string) {
		closeMobileMenu();
		goto(href);
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

			<!-- Desktop Menu -->
			<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-8">
					<a href="/" class="text-white transition-colors duration-200 hover:text-secondary">
						{m['nav.home']()}
					</a>
					<a
						href="/services"
						class="text-white transition-colors duration-200 hover:text-secondary"
					>
						{m['nav.services']()}
					</a>
					<!-- <a 
						href='/portfolio')
						class="text-white hover:text-secondary transition-colors duration-200"
					>
						{m['nav.portfolio']()}
					</a> -->
					<a href="/about" class="text-white transition-colors duration-200 hover:text-secondary">
						{m['nav.about']()}
					</a>
					<a
						href="/contact"
						class="rounded-lg bg-secondary px-6 py-2 font-semibold text-[#1A365D] transition-all duration-200 hover:scale-105 hover:bg-secondary/90"
					>
						{m['nav.contact']()}
					</a>
				</div>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button
					onclick={toggleMobileMenu}
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

	<!-- Mobile Menu (animated) -->
	{#if $mobileMenuOpen}
		<!-- Overlay (tap to close) -->
		<div
			class="fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px]"
			in:fade={{ duration: 120 }}
			out:fade={{ duration: 120 }}
			onclick={closeMobileMenu}
			aria-hidden="true"
		></div>

		<!-- Wrapper handles FADE -->
		<div
			class="fixed top-16 right-0 left-0 z-50 md:hidden"
			in:fade={{ duration: 160 }}
			out:fade={{ duration: 100 }}
			role="dialog"
			aria-modal="true"
		>
			<!-- Panel handles SCALE (no duplicate in: on same element) -->
			<div
				class="origin-top border-t border-secondary/20 bg-[#1A365D]"
				in:scale={{ start: 0.98, duration: 160, easing: quintOut }}
				out:scale={{ duration: 120, easing: quintOut }}
			>
				<div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
					{#each mobileLinks as link, i}
						<a
							href={link.href}
							class={`block w-full px-3 py-2 text-left transition-colors duration-200
								${
									link.cta
										? 'mx-1 my-2 rounded-lg bg-secondary text-center font-semibold text-[#1A365D]'
										: 'text-white hover:text-secondary'
								}`}
							in:fly={{ y: -8, opacity: 0, duration: 220, delay: i * 60, easing: quintOut }}
							out:fly={{ y: -8, opacity: 0, duration: 120 }}
						>
							{link.label()}
						</a>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</nav>

<style>
	/* Optional: focus ring for a11y */
	button:focus-visible {
		outline: 2px solid rgba(255, 255, 255, 0.7);
		outline-offset: 2px;
	}
</style>
