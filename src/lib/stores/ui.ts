import { writable } from 'svelte/store';

// UI state management
export const mobileMenuOpen = writable(false);
export const isScrolled = writable(false);
export const isLoading = writable(false);

// Navigation helpers
export function toggleMobileMenu() {
	mobileMenuOpen.update(open => !open);
}

export function closeMobileMenu() {
	mobileMenuOpen.set(false);
}

// Scroll state management
export function updateScrollState() {
	if (typeof window !== 'undefined') {
		isScrolled.set(window.scrollY > 50);
	}
}
