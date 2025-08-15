<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { Menu, X } from 'lucide-svelte';
	import * as m from '$lib/paraglide/messages';
	import { mobileMenuOpen, isScrolled, toggleMobileMenu, closeMobileMenu, updateScrollState } from '$lib/stores/ui';

	// Transitions & easing
	import { fade, fly, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	type LinkItem = { label: () => string; href: string; cta?: boolean };

	const mobileLinks: LinkItem[] = [
		{ label: m['nav.home'], href: '/' },
		{ label: m['nav.services'], href: '/services' },
		{ label: m['nav.portfolio'], href: '/portfolio' },
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

<nav class="fixed w-full z-50 transition-all duration-300 {$isScrolled || !isHomePage ? 'bg-[#1A365D]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<div class="flex-shrink-0">
				<button 
					onclick={() => handleNavigation('/')} 
					class="text-2xl font-bold text-white hover:text-secondary transition-colors"
				>
					{m['company.short_name']()}
				</button>
			</div>
			
			<!-- Desktop Menu -->
			<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-8">
					<button 
						onclick={() => handleNavigation('/')} 
						class="text-white hover:text-secondary transition-colors duration-200"
					>
						{m['nav.home']()}
					</button>
					<button 
						onclick={() => handleNavigation('/services')} 
						class="text-white hover:text-secondary transition-colors duration-200"
					>
						{m['nav.services']()}
					</button>
					<!-- <button 
						onclick={() => handleNavigation('/portfolio')} 
						class="text-white hover:text-secondary transition-colors duration-200"
					>
						{m['nav.portfolio']()}
					</button> -->
					<button 
						onclick={() => handleNavigation('/about')} 
						class="text-white hover:text-secondary transition-colors duration-200"
					>
						{m['nav.about']()}
					</button>
					<button 
						onclick={() => handleNavigation('/contact')} 
						class="bg-secondary text-[#1A365D] px-6 py-2 rounded-lg font-semibold hover:bg-secondary/90 transition-all duration-200 hover:scale-105"
					>
						{m['nav.contact']()}
					</button>
				</div>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button
					onclick={toggleMobileMenu}
					class="text-white hover:text-secondary transition-transform duration-150 active:scale-95"
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
			class="fixed top-16 left-0 right-0 md:hidden z-50"
			in:fade={{ duration: 160 }}
			out:fade={{ duration: 100 }}
			role="dialog"
			aria-modal="true"
		>
			<!-- Panel handles SCALE (no duplicate in: on same element) -->
			<div
				class="bg-[#1A365D] border-t border-secondary/20 origin-top"
				in:scale={{ start: 0.98, duration: 160, easing: quintOut }}
				out:scale={{ duration: 120, easing: quintOut }}
			>
				<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					{#each mobileLinks as link, i}
						<button
							onclick={() => handleNavigation(link.href)}
							class={`block w-full text-left px-3 py-2 transition-colors duration-200
								${link.cta
									? 'mx-1 my-2 bg-secondary text-[#1A365D] rounded-lg font-semibold text-center'
									: 'text-white hover:text-secondary'
								}`}
							in:fly={{ y: -8, opacity: 0, duration: 220, delay: i * 60, easing: quintOut }}
							out:fly={{ y: -8, opacity: 0, duration: 120 }}
						>
							{link.label()}
						</button>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</nav>

<style>
	/* Optional: focus ring for a11y */
	button:focus-visible {
		outline: 2px solid rgba(255,255,255,0.7);
		outline-offset: 2px;
	}
</style>
