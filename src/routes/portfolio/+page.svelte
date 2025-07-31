<script lang="ts">
	let activeFilter = $state('all');
	let visibleProjects = $state(12);

	const projects = [
		{
			id: 'coral-gables-kitchen',
			title: 'Coral Gables Chef\'s Kitchen',
			category: 'kitchen',
			style: 'modern',
			budget: '75k-100k',
			year: '2024',
			description: '8-week gut remodel with quartz waterfall island & bespoke walnut cabinetry.',
			image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			beforeImage: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
		},
		{
			id: 'miami-beach-bathroom',
			title: 'Miami Beach Spa Bathroom',
			category: 'bathroom',
			style: 'luxury',
			budget: '50k-75k',
			year: '2024',
			description: 'Luxury spa retreat with marble finishes and rainfall shower.',
			image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			beforeImage: 'https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
		},
		{
			id: 'brickell-office',
			title: 'Brickell Corporate Office',
			category: 'commercial',
			style: 'contemporary',
			budget: '100k+',
			year: '2024',
			description: 'Modern office buildout with open floor plan and custom millwork.',
			image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			beforeImage: 'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
		},
		{
			id: 'aventura-home',
			title: 'Aventura Whole Home',
			category: 'whole-home',
			style: 'contemporary',
			budget: '100k+',
			year: '2023',
			description: 'Complete home transformation with open concept living.',
			image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			beforeImage: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
		},
		{
			id: 'south-beach-kitchen',
			title: 'South Beach Modern Kitchen',
			category: 'kitchen',
			style: 'modern',
			budget: '50k-75k',
			year: '2023',
			description: 'Sleek modern design with integrated appliances.',
			image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			beforeImage: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
		},
		{
			id: 'pinecrest-bathroom',
			title: 'Pinecrest Master Bath',
			category: 'bathroom',
			style: 'traditional',
			budget: '25k-50k',
			year: '2023',
			description: 'Classic elegance with modern functionality.',
			image: 'https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			beforeImage: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
		}
	];

	const filters = [
		{ id: 'all', label: 'All Projects', count: projects.length },
		{ id: 'kitchen', label: 'Kitchens', count: projects.filter(p => p.category === 'kitchen').length },
		{ id: 'bathroom', label: 'Bathrooms', count: projects.filter(p => p.category === 'bathroom').length },
		{ id: 'whole-home', label: 'Whole Home', count: projects.filter(p => p.category === 'whole-home').length },
		{ id: 'commercial', label: 'Commercial', count: projects.filter(p => p.category === 'commercial').length }
	];

	let filteredProjects = $derived(activeFilter === 'all' 
		? projects 
		: projects.filter(project => project.category === activeFilter));

	let displayedProjects = $derived(filteredProjects.slice(0, visibleProjects));

	function setFilter(filterId: string) {
		activeFilter = filterId;
		visibleProjects = 12;
	}

	function loadMore() {
		visibleProjects += 12;
	}
</script>

<svelte:head>
	<title>Renovation Portfolio | World Detail Specialist</title>
	<meta name="description" content="Browse our portfolio of stunning renovation projects. Kitchen remodels, bathroom transformations, and whole home renovations in Miami." />
</svelte:head>

<main class="pt-16">
	<!-- Hero Section -->
	<section class="py-20 bg-[#1A365D] text-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h1 class="text-4xl md:text-6xl font-bold mb-6">
				Our Portfolio
			</h1>
			<p class="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
				Browse by project type, style or budget to spark ideas for your own space.
			</p>
		</div>
	</section>

	<!-- Filters -->
	<section class="py-12 bg-white border-b border-gray-200">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex flex-wrap justify-center gap-4">
				{#each filters as filter}
					<button
						onclick={() => setFilter(filter.id)}
						class="px-6 py-3 rounded-lg font-semibold transition-all duration-200 {activeFilter === filter.id
							? 'bg-[#F6AD55] text-[#1A365D]'
							: 'bg-[#F7FAFC] text-[#718096] hover:bg-[#F6AD55] hover:text-[#1A365D]'}"
					>
						{filter.label} ({filter.count})
					</button>
				{/each}
			</div>
		</div>
	</section>

	<!-- Projects Grid -->
	<section class="py-20 bg-[#F7FAFC]">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each displayedProjects as project}
					<div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
						<div class="relative aspect-video overflow-hidden">
							<img
								src={project.image}
								alt={project.title}
								class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
							/>
							<div class="absolute top-4 right-4 bg-[#F6AD55] text-[#1A365D] px-3 py-1 rounded-lg font-semibold text-sm">
								{project.year}
							</div>
						</div>
						<div class="p-6">
							<div class="flex items-center justify-between mb-2">
								<span class="text-[#F6AD55] font-semibold text-sm uppercase tracking-wide">
									{project.category.replace('-', ' ')}
								</span>
								<span class="text-[#718096] text-sm">
									${project.budget.replace('k', 'K')}
								</span>
							</div>
							<h3 class="text-xl font-bold text-[#1A365D] mb-3">
								{project.title}
							</h3>
							<p class="text-[#718096] mb-4 leading-relaxed">
								{project.description}
							</p>
							<a
								href="/portfolio/{project.id}"
								class="inline-flex items-center text-[#F6AD55] font-semibold hover:text-[#1A365D] transition-colors duration-200"
							>
								View Case Study →
							</a>
						</div>
					</div>
				{/each}
			</div>

			<!-- Load More Button -->
			{#if visibleProjects < filteredProjects.length}
				<div class="text-center mt-12">
					<button
						onclick={loadMore}
						class="bg-[#1A365D] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1A365D]/90 transition-all duration-200 hover:scale-105"
					>
						Load More Projects
					</button>
				</div>
			{/if}
		</div>
	</section>

	<!-- CTA Section -->
	<section class="py-20 bg-[#1A365D] text-white">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h2 class="text-3xl md:text-4xl font-bold mb-6">
				Ready to Create Your Own Success Story?
			</h2>
			<p class="text-xl text-white/90 mb-8">
				Let's discuss how we can transform your space into something extraordinary.
			</p>
			<a
				href="/contact"
				class="bg-[#F6AD55] text-[#1A365D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F6AD55]/90 transition-all duration-200 hover:scale-105 inline-block"
			>
				Start Your Project
			</a>
		</div>
	</section>
</main>
