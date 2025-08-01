<script lang="ts">
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	import * as m from '$lib/paraglide/messages';

	let currentProject = $state(0);

	const projects = [
		{
			title: 'Modern Miami Kitchen',
			category: m['services.kitchen'](),
			image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			beforeImage: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			description: 'Complete transformation featuring custom cabinetry, quartz countertops, and premium appliances.'
		},
		{
			title: 'Luxury Bathroom Suite',
			category: m['services.bathroom'](),
			image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			beforeImage: 'https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			description: 'Spa-inspired design with marble finishes, rainfall shower, and heated floors.'
		},
		{
			title: 'Contemporary Office Space',
			category: m['services.commercial'](),
			image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			beforeImage: 'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			description: 'Modern office buildout with open floor plan, custom millwork, and efficient lighting.'
		}
	];

	function nextProject() {
		currentProject = (currentProject + 1) % projects.length;
	}

	function prevProject() {
		currentProject = (currentProject - 1 + projects.length) % projects.length;
	}
</script>

<section id="portfolio" class="py-20 bg-[#F7FAFC]">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-[#1A365D] mb-4">
				{m['portfolio.title']()}
			</h2>
			<p class="text-xl text-[#718096] max-w-3xl mx-auto">
				Explore our portfolio of exceptional projects that showcase our commitment to quality and innovation.
			</p>
		</div>

		<div class="relative">
			<div class="flex items-center justify-center mb-8">
				<button
					onclick={prevProject}
					class="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-[#F6AD55] hover:text-white mr-4"
				>
					<ChevronLeft size={24} />
				</button>
				
				<div class="flex space-x-2">
					{#each projects as _, index}
						<button
							onclick={() => currentProject = index}
							class="w-3 h-3 rounded-full transition-all duration-200 {index === currentProject ? 'bg-[#F6AD55]' : 'bg-gray-300'}"
							aria-label="Go to project {index + 1}"
						></button>
					{/each}
				</div>

				<button
					onclick={nextProject}
					class="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-[#F6AD55] hover:text-white ml-4"
				>
					<ChevronRight size={24} />
				</button>
			</div>

			<div class="bg-white rounded-2xl shadow-2xl overflow-hidden">
				<div class="grid grid-cols-1 lg:grid-cols-2">
					<!-- Before/After Images -->
					<div class="relative">
						<div class="aspect-video relative overflow-hidden">
							<img
								src={projects[currentProject].beforeImage}
								alt="Before"
								class="absolute inset-0 w-full h-full object-cover"
							/>
							<div class="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-lg font-semibold">
								Before
							</div>
						</div>
						<div class="aspect-video relative overflow-hidden">
							<img
								src={projects[currentProject].image}
								alt="After"
								class="absolute inset-0 w-full h-full object-cover"
							/>
							<div class="absolute top-4 left-4 bg-[#48BB78] text-white px-3 py-1 rounded-lg font-semibold">
								After
							</div>
						</div>
					</div>

					<!-- Project Details -->
					<div class="p-8 lg:p-12 flex flex-col justify-center">
						<div class="text-[#F6AD55] font-semibold mb-2">
							{projects[currentProject].category}
						</div>
						<h3 class="text-3xl font-bold text-[#1A365D] mb-4">
							{projects[currentProject].title}
						</h3>
						<p class="text-[#718096] text-lg leading-relaxed mb-8">
							{projects[currentProject].description}
						</p>
						<button class="bg-[#F6AD55] text-[#1A365D] px-8 py-3 rounded-lg font-semibold hover:bg-[#F6AD55]/90 transition-all duration-200 hover:scale-105 self-start">
							{m['portfolio.view_project']()}
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
