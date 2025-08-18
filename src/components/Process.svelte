<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { Users, PenTool, Hammer, CheckCircle, Home, Star } from '@lucide/svelte';

	const steps = [
    {
      icon: Users,
      title: m['process.steps.consultation.title'](),
      description: m['process.steps.consultation.description']()
    },
    {
      icon: PenTool,
      title: m['process.steps.design.title'](),
      description: m['process.steps.design.description']()
    },
    {
      icon: CheckCircle,
      title: m['process.steps.permits.title'](),
      description: m['process.steps.permits.description']()
    },
    {
      icon: Hammer,
      title: m['process.steps.construction.title'](),
      description: m['process.steps.construction.description']()
    },
    {
      icon: Home,
      title: m['process.steps.inspection.title'](),
      description: m['process.steps.inspection.description']()
    },
    {
      icon: Star,
      title: m['process.steps.completion.title'](),
      description: m['process.steps.completion.description']()
    }
  ];
</script>

<section class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-[#1A365D] mb-4">
				{m['process.heading']()}
			</h2>
			<p class="text-xl text-[#718096] max-w-3xl mx-auto">
				{m['process.subheading']()}
			</p>
		</div>

		<div class="relative">
			<!-- Process Timeline -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each steps as step, index}
					<div class="relative">
						<div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-secondary">
							<div class="flex items-center mb-4">
								<div class="bg-secondary text-[#1A365D] p-3 rounded-full mr-4">
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
							<div class="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-secondary/30 transform -translate-y-1/2 z-10"></div>
						{/if}
					</div>
				{/each}
			</div>
		</div>

		<div class="text-center mt-12">
			<a href="/contact" class="bg-[#1A365D] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1A365D]/90 transition-all duration-200 hover:scale-105">
				{m['process.cta']()}
			</a>
		</div>
	</div>
</section>
