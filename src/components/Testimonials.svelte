<script lang="ts">
	import { Star, ChevronLeft, ChevronRight } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let currentTestimonial = $state(0);
	let intervalId: number;

	const testimonials = [
		{
			name: 'Sarah Johnson',
			location: 'Miami, FL',
			project: 'Kitchen Renovation',
			rating: 5,
			text: 'WDS transformed our outdated kitchen into a modern masterpiece. Their attention to detail and professionalism exceeded our expectations. The project was completed on time and within budget.',
		},
		{
			name: 'Michael Rodriguez',
			location: 'Fort Lauderdale, FL',
			project: 'Whole Home Renovation',
			rating: 5,
			text: 'From concept to completion, the WDS team delivered exceptional results. Our home feels brand new, and the quality of workmanship is outstanding. Highly recommend their services.',
		},
		{
			name: 'Jennifer Davis',
			location: 'Boca Raton, FL',
			project: 'Bathroom Remodeling',
			rating: 5,
			text: 'Our master bathroom renovation was flawless. WDS created a spa-like retreat that we enjoy every day. Their team was professional, clean, and respectful throughout the process.',
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

<section class="py-20 bg-[#F7FAFC]">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-[#1A365D] mb-4">
				What Our Clients Say
			</h2>
			<p class="text-xl text-[#718096] max-w-3xl mx-auto">
				Don't just take our word for it. Hear from satisfied clients who have experienced the WDS difference.
			</p>
		</div>

		<div class="relative max-w-4xl mx-auto">
			<div class="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
				<div class="flex flex-col md:flex-row items-center gap-8">
					<div class="flex-shrink-0">
						
					</div>
					
					<div class="flex-1 text-center md:text-left">
						<div class="flex justify-center md:justify-start mb-4">
							{#each Array(testimonials[currentTestimonial].rating) as _}
								<Star class="w-6 h-6 text-[#F6AD55] fill-current" />
							{/each}
						</div>
						
						<blockquote class="text-lg md:text-xl text-[#1A365D] mb-6 leading-relaxed font-medium italic">
							"{testimonials[currentTestimonial].text}"
						</blockquote>
						
						<div>
							<div class="font-bold text-[#1A365D] text-lg">
								{testimonials[currentTestimonial].name}
							</div>
							<div class="text-[#718096] mb-1">
								{testimonials[currentTestimonial].location}
							</div>
							<div class="text-[#F6AD55] font-semibold">
								{testimonials[currentTestimonial].project}
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Navigation -->
			<div class="flex justify-center items-center mt-8 gap-4">
			<button
				onclick={prevTestimonial}
				class="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-[#F6AD55] hover:text-white"
			>
					<ChevronLeft size={20} />
				</button>
				
				<div class="flex space-x-2">
					{#each testimonials as _, index}
						<button
							onclick={() => currentTestimonial = index}
							class="w-3 h-3 rounded-full transition-all duration-200 {index === currentTestimonial ? 'bg-[#F6AD55]' : 'bg-gray-300'}"
							aria-label="Go to testimonial {index + 1}"
						></button>
					{/each}
				</div>

				<button
					onclick={nextTestimonial}
					class="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-[#F6AD55] hover:text-white"
				>
					<ChevronRight size={20} />
				</button>
			</div>
		</div>
	</div>
</section>
