<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { Menu, X } from 'lucide-svelte';
	import * as m from '$lib/paraglide/messages';
	import { mobileMenuOpen, isScrolled, toggleMobileMenu, closeMobileMenu, updateScrollState } from '$lib/stores/ui';

	// Reactive scroll handling
	onMount(() => {
		const handleScroll = () => {
			updateScrollState();
		};

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
					class="text-2xl font-bold text-white hover:text-[#F6AD55] transition-colors"
				>
					{m['company.short_name']()}
				</button>
			</div>
			
			<!-- Desktop Menu -->
			<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-8">
					<button 
						onclick={() => handleNavigation('/')} 
						class="text-white hover:text-[#F6AD55] transition-colors duration-200"
					>
						{m['nav.home']()}
					</button>
					<button 
						onclick={() => handleNavigation('/services')} 
						class="text-white hover:text-[#F6AD55] transition-colors duration-200"
					>
						{m['nav.services']()}
					</button>
					<button 
						onclick={() => handleNavigation('/portfolio')} 
						class="text-white hover:text-[#F6AD55] transition-colors duration-200"
					>
						{m['nav.portfolio']()}
					</button>
					<button 
						onclick={() => handleNavigation('/about')} 
						class="text-white hover:text-[#F6AD55] transition-colors duration-200"
					>
						{m['nav.about']()}
					</button>
					<button 
						onclick={() => handleNavigation('/contact')} 
						class="bg-[#F6AD55] text-[#1A365D] px-6 py-2 rounded-lg font-semibold hover:bg-[#F6AD55]/90 transition-all duration-200 hover:scale-105"
					>
						{m['nav.contact']()}
					</button>
				</div>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button
					onclick={toggleMobileMenu}
					class="text-white hover:text-[#F6AD55] transition-colors duration-200"
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

	<!-- Mobile Menu -->
	{#if $mobileMenuOpen}
		<div class="md:hidden bg-[#1A365D] border-t border-[#F6AD55]/20">
			<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
				<button 
					onclick={() => handleNavigation('/')} 
					class="block w-full text-left px-3 py-2 text-white hover:text-[#F6AD55] transition-colors duration-200"
				>
					{m['nav.home']()}
				</button>
				<button 
					onclick={() => handleNavigation('/services')} 
					class="block w-full text-left px-3 py-2 text-white hover:text-[#F6AD55] transition-colors duration-200"
				>
					{m['nav.services']()}
				</button>
				<button 
					onclick={() => handleNavigation('/portfolio')} 
					class="block w-full text-left px-3 py-2 text-white hover:text-[#F6AD55] transition-colors duration-200"
				>
					{m['nav.portfolio']()}
				</button>
				<button 
					onclick={() => handleNavigation('/about')} 
					class="block w-full text-left px-3 py-2 text-white hover:text-[#F6AD55] transition-colors duration-200"
				>
					{m['nav.about']()}
				</button>
				<button 
					onclick={() => handleNavigation('/contact')} 
					class="block mx-3 my-2 px-3 py-2 bg-[#F6AD55] text-[#1A365D] rounded-lg font-semibold text-center w-auto"
				>
					{m['nav.contact']()}
				</button>
			</div>
		</div>
	{/if}
</nav>
