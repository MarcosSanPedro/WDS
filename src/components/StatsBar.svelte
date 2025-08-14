<script lang="ts">
	import * as m from '$lib/paraglide/messages';

	interface Counts {
		projects: number;
		years: number;
		clients: number;
		rating: number;
	}

	let sectionElement: HTMLElement;
	let isVisible = $state(false);
	let counts = $state<Counts>({
		projects: 0,
		years: 0,
		clients: 0,
		rating: 0
	});

	const finalCounts: Counts = {
		projects: 500,
		years: 15,
		clients: 350,
		rating: 4.9
	};

	// Set up intersection observer effect
	$effect(() => {
		if (!sectionElement) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					isVisible = true;
				}
			},
			{ threshold: 0.5 }
		);

		observer.observe(sectionElement);

		// Teardown function - runs before effect re-runs and when component is destroyed
		return () => {
			observer.disconnect();
		};
	});

	// Animation effect when visible
	$effect(() => {
		if (!isVisible) return;

		const duration = 2000;
		const steps = 50;
		const stepTime = duration / steps;

		const animate = (key: keyof Counts) => {
			let current = 0;
			const increment = finalCounts[key] / steps;

			const timer = setInterval(() => {
				current += increment;
				if (current >= finalCounts[key]) {
					current = finalCounts[key];
					clearInterval(timer);
				}

				counts[key] = key === 'rating' ? Number(current.toFixed(1)) : Math.floor(current);
			}, stepTime);

			return timer;
		};

		// Start all animations
		const timers = Object.keys(finalCounts).map((key) => animate(key as keyof Counts));

		// Teardown function - clears all timers when effect re-runs or component is destroyed
		return () => {
			timers.forEach((timer) => clearInterval(timer));
		};
	});
</script>

<section bind:this={sectionElement} class="bg-[#1A365D] py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
			<div class="text-white">
				<div class="mb-2 text-4xl font-bold text-secondary md:text-5xl">
					{counts.projects}+
				</div>
				<div class="text-lg">{m['stats.projects_completed']()}</div>
			</div>
			<div class="text-white">
				<div class="mb-2 text-4xl font-bold text-secondary md:text-5xl">
					{counts.years}+
				</div>
				<div class="text-lg">{m['stats.years_experience']()}</div>
			</div>
			<div class="text-white">
				<div class="mb-2 text-4xl font-bold text-secondary md:text-5xl">
					{counts.clients}+
				</div>
				<div class="text-lg">{m['stats.happy_clients']()}</div>
			</div>
			<div class="text-white">
				<div class="mb-2 text-4xl font-bold text-secondary md:text-5xl">
					{counts.rating}★
				</div>
				<div class="text-lg">{m['stats.average_rating']()}</div>
			</div>
		</div>
	</div>
</section>
