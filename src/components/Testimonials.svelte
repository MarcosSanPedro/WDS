<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { Star, ChevronLeft, ChevronRight } from '@lucide/svelte';
	import { onMount } from 'svelte';

	let currentTestimonial = $state(0);
	let intervalId: number;

	type Testimonial = {
		name: string;
		location: string;
		project: string;
		rating: number;
		text: string;
	};

	const testimonials: Testimonial[] = [
		{
			name: m['testimonials.t_sarah_name'](),
			location: m['testimonials.t_sarah_location'](),
			project: m['testimonials.t_sarah_project'](),
			rating: 5,
			text: m['testimonials.t_sarah_text']()
		},
		{
			name: m['testimonials.t_michael_name'](),
			location: m['testimonials.t_michael_location'](),
			project: m['testimonials.t_michael_project'](),
			rating: 5,
			text: m['testimonials.t_michael_text']()
		},
		{
			name: m['testimonials.t_jennifer_name'](),
			location: m['testimonials.t_jennifer_location'](),
			project: m['testimonials.t_jennifer_project'](),
			rating: 5,
			text: m['testimonials.t_jennifer_text']()
		}
	];

	onMount(() => {
		intervalId = setInterval(() => {
			currentTestimonial = (currentTestimonial + 1) % testimonials.length;
		}, 5000);

		return () => clearInterval(intervalId);
	});

	function nextTestimonial() {
		currentTestimonial = (currentTestimonial + 1) % testimonials.length;
	}

	function prevTestimonial() {
		currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
	}
</script>

<section class="bg-[#F7FAFC] py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-[#1A365D] md:text-5xl">{m["testimonials.heading"]()}</h2>
			<p class="mx-auto max-w-3xl text-xl text-[#718096]">
				{m["testimonials.subheading"]()}
			</p>
		</div>

		<div class="relative mx-auto max-w-4xl">
			<div class="rounded-2xl bg-white p-8 shadow-2xl md:p-12">
				<div class="flex flex-col items-center gap-8 md:flex-row">
					<div class="flex-shrink-0"></div>

					<div class="flex-1 text-center md:text-left">
						<div class="mb-4 flex justify-center md:justify-start">
							{#each Array(testimonials[currentTestimonial].rating) as _}
								<Star class="h-6 w-6 fill-current text-secondary" />
							{/each}
						</div>

						<blockquote
							class="mb-6 text-lg leading-relaxed font-medium text-[#1A365D] italic md:text-xl"
						>
							"{testimonials[currentTestimonial].text}"
						</blockquote>

						<div>
							<div class="text-lg font-bold text-[#1A365D]">
								{testimonials[currentTestimonial].name}
							</div>
							<div class="mb-1 text-[#718096]">
								{testimonials[currentTestimonial].location}
							</div>
							<div class="font-semibold text-secondary">
								{testimonials[currentTestimonial].project}
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Navigation -->
			<div class="mt-8 flex items-center justify-center gap-4">
				<button
					onclick={prevTestimonial}
					class="rounded-full bg-white p-3 shadow-lg transition-all duration-200 hover:bg-secondary hover:text-white hover:shadow-xl"
				>
					<ChevronLeft size={20} />
				</button>

				<div class="flex space-x-2">
					{#each testimonials as _, index}
						<button
							onclick={() => (currentTestimonial = index)}
							class="h-3 w-3 rounded-full transition-all duration-200 {index === currentTestimonial
								? 'bg-secondary'
								: 'bg-gray-300'}"
							aria-label="Go to testimonial {index + 1}"
						></button>
					{/each}
				</div>

				<button
					onclick={nextTestimonial}
					class="rounded-full bg-white p-3 shadow-lg transition-all duration-200 hover:bg-secondary hover:text-white hover:shadow-xl"
				>
					<ChevronRight size={20} />
				</button>
			</div>
		</div>
	</div>
</section>
