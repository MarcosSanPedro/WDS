<script lang="ts">
	import { Users, PenTool, Hammer, CheckCircle, Home, Star } from 'lucide-svelte';

	const steps = [
		{
			icon: Users,
			title: 'Initial Consultation',
			description: 'We meet with you to understand your vision, needs, and budget requirements.'
		},
		{
			icon: PenTool,
			title: 'Design & Planning',
			description: 'Our team creates detailed plans and 3D renderings for your approval.'
		},
		{
			icon: CheckCircle,
			title: 'Permits & Approvals',
			description: 'We handle all necessary permits and regulatory approvals for your project.'
		},
		{
			icon: Hammer,
			title: 'Construction Phase',
			description: 'Skilled craftsmen bring your vision to life with meticulous attention to detail.'
		},
		{
			icon: Home,
			title: 'Quality Inspection',
			description: 'Comprehensive quality checks ensure everything meets our high standards.'
		},
		{
			icon: Star,
			title: 'Project Completion',
			description: 'Final walkthrough and handover of your beautifully transformed space.'
		}
	];
</script>

<section class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-[#1A365D] mb-4">
				Our Process
			</h2>
			<p class="text-xl text-[#718096] max-w-3xl mx-auto">
				From initial consultation to final completion, our systematic approach ensures your project runs smoothly and exceeds expectations.
			</p>
		</div>

		<div class="relative">
			<!-- Process Timeline -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each steps as step, index}
					<div class="relative">
						<div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-[#F6AD55]">
							<div class="flex items-center mb-4">
								<div class="bg-[#F6AD55] text-[#1A365D] p-3 rounded-full mr-4">
									<svelte:component this={step.icon} class="w-8 h-8" />
								</div>
								<div class="bg-[#1A365D] text-white text-sm font-bold px-3 py-1 rounded-full">
									Step {index + 1}
								</div>
							</div>
							<h3 class="text-xl font-bold text-[#1A365D] mb-3">
								{step.title}
							</h3>
							<p class="text-[#718096] leading-relaxed">
								{step.description}
							</p>
						</div>
						
						<!-- Connecting Line (for larger screens) -->
						{#if index < steps.length - 1}
							<div class="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#F6AD55]/30 transform -translate-y-1/2 z-10"></div>
						{/if}
					</div>
				{/each}
			</div>
		</div>

		<div class="text-center mt-12">
			<a href="/contact" class="bg-[#1A365D] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1A365D]/90 transition-all duration-200 hover:scale-105">
				Start Your Project Today
			</a>
		</div>
	</div>
</section>
