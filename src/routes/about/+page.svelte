<script lang="ts">
	import { Award, Target, Heart, Lightbulb, Shield } from 'lucide-svelte';

	const timeline = [
		{ year: '2010', event: 'Founded as a single-truck operation in Miami' },
		{ year: '2013', event: 'Expanded to commercial construction projects' },
		{ year: '2016', event: 'Opened second office in Fort Lauderdale' },
		{ year: '2019', event: 'Reached 250+ completed projects milestone' },
		{ year: '2022', event: 'Launched sustainable building initiative' },
		{ year: '2024', event: 'Celebrating 500+ successful transformations' }
	];

	const team = [
		{
			name: 'Luis Ramírez',
			title: 'Founder & CEO',
			bio: '20 years in luxury construction, LEED-certified, coffee aficionado.',
			image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
		},
		{
			name: 'Sarah Chen',
			title: 'Lead Designer',
			bio: 'Award-winning interior designer with a passion for sustainable materials.',
			image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
		},
		{
			name: 'Marcus Johnson',
			title: 'Project Manager',
			bio: 'Expert in commercial construction with 15+ years of experience.',
			image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
		},
		{
			name: 'Elena Rodriguez',
			title: 'Operations Director',
			bio: 'Ensures every project runs smoothly from start to finish.',
			image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
		}
	];

	const values = [
		{
			icon: Lightbulb,
			title: 'Innovation',
			description: 'Embracing cutting-edge techniques and sustainable practices in every project.'
		},
		{
			icon: Award,
			title: 'Quality',
			description: 'Uncompromising standards in craftsmanship and material selection.'
		},
		{
			icon: Shield,
			title: 'Transparency',
			description: 'Clear communication and honest pricing throughout your project.'
		},
		{
			icon: Heart,
			title: 'Community',
			description: 'Supporting local businesses and giving back to South Florida.'
		}
	];

	const awards = [
		'Best of Houzz 2024',
		'Miami Herald Top Contractor',
		'NARI Contractor of the Year',
		'BBB A+ Rating',
		'Angie\'s List Super Service',
		'Guild Quality Guildmaster',
		'LEED Certified Projects',
		'Energy Star Partner',
		'Miami-Dade Green Building',
		'Florida Green Building Coalition',
		'Sustainable Building Award',
		'Customer Choice Award'
	];
</script>

<svelte:head>
	<title>About World Detail Specialist | Miami Construction Company</title>
	<meta name="description" content="Learn about World Detail Specialist, Miami's premier construction company. Our story, team, and commitment to excellence in every project." />
</svelte:head>

<main class="pt-16">
	<!-- Hero Section -->
	<section class="py-20 bg-[#1A365D] text-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h1 class="text-4xl md:text-6xl font-bold mb-6">
				About World Detail Specialist
			</h1>
			<p class="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
				From a single-truck operation in 2010 to Miami's go-to contractor, our journey has always been about relentless detail—and a moon-shot vision.
			</p>
		</div>
	</section>

	<!-- Story Timeline -->
	<section class="py-20 bg-white">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
			<h2 class="text-3xl md:text-4xl font-bold text-[#1A365D] mb-12 text-center">
				Our Story
			</h2>
			
			<div class="relative">
				<!-- Timeline line -->
				<div class="absolute left-8 top-0 bottom-0 w-0.5 bg-[#F6AD55]"></div>
				
				<div class="space-y-12">
					{#each timeline as item, index}
						<div class="relative flex items-center">
							<div class="absolute left-6 w-4 h-4 bg-[#F6AD55] rounded-full border-4 border-white shadow-lg"></div>
							<div class="ml-16">
								<div class="text-2xl font-bold text-[#F6AD55] mb-2">
									{item.year}
								</div>
								<div class="text-lg text-[#718096]">
									{item.event}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Vision Statement -->
	<section class="py-20 bg-[#F7FAFC]">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<div class="mb-8">
				<div class="w-24 h-24 bg-[#F6AD55] rounded-full flex items-center justify-center mx-auto mb-6">
					<Target class="w-12 h-12 text-[#1A365D]" />
				</div>
				<h2 class="text-3xl md:text-4xl font-bold text-[#1A365D] mb-6">
					Our Vision
				</h2>
				<p class="text-2xl md:text-3xl font-bold text-[#F6AD55] mb-6">
					We won't stop until we build the first house on the moon.
				</p>
				<p class="text-xl text-[#718096] leading-relaxed">
					While that might sound ambitious, it represents our commitment to pushing boundaries, embracing innovation, and never settling for "good enough." Every project we complete here on Earth is a step toward that impossible dream.
				</p>
			</div>
		</div>
	</section>

	<!-- Team Grid -->
	<!-- <section class="py-20 bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h2 class="text-3xl md:text-4xl font-bold text-[#1A365D] mb-12 text-center">
				Meet Our Team
			</h2>
			
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{#each team as member, index}
					<div class="text-center group">
						<div class="relative mb-6 overflow-hidden rounded-lg">
							<img
								src={member.image}
								alt={member.name}
								class="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
							/>
							<div class="absolute inset-0 bg-[#1A365D]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
								<p class="text-white text-sm px-4 text-center">
									{member.bio}
								</p>
							</div>
						</div>
						<h3 class="text-xl font-bold text-[#1A365D] mb-2">
							{member.name}
						</h3>
						<p class="text-[#F6AD55] font-semibold">
							{member.title}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section> -->

	<!-- Values -->
	<section class="py-20 bg-[#F7FAFC]">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h2 class="text-3xl md:text-4xl font-bold text-[#1A365D] mb-12 text-center">
				Our Values
			</h2>
			
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{#each values as value, index}
					<div class="text-center">
						<div class="w-16 h-16 bg-[#F6AD55] rounded-full flex items-center justify-center mx-auto mb-6">
							<svelte:component this={value.icon} class="w-8 h-8 text-[#1A365D]" />
						</div>
						<h3 class="text-xl font-bold text-[#1A365D] mb-4">
							{value.title}
						</h3>
						<p class="text-[#718096] leading-relaxed">
							{value.description}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Awards Grid -->
	<section class="py-20 bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h2 class="text-3xl md:text-4xl font-bold text-[#1A365D] mb-12 text-center">
				Awards & Recognition
			</h2>
			
			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{#each awards as award, index}
					<div class="bg-[#F7FAFC] rounded-lg p-6 text-center hover:bg-[#F6AD55] hover:text-[#1A365D] transition-all duration-200 group">
						<Award class="w-8 h-8 mx-auto mb-3 text-[#F6AD55] group-hover:text-[#1A365D]" />
						<p class="font-semibold text-[#1A365D] group-hover:text-[#1A365D]">
							{award}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Behind the Scenes Video Banner -->
	<!-- <section class="py-20 bg-[#1A365D] text-white">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h2 class="text-3xl md:text-4xl font-bold mb-6">
				See Us in Action
			</h2>
			<p class="text-xl text-white/90 mb-8">
				Go behind the scenes and watch our team transform spaces with precision and care.
			</p>
			<div class="aspect-video bg-[#F6AD55]/20 rounded-lg flex items-center justify-center mb-8">
				<div class="text-center">
					<div class="w-20 h-20 bg-[#F6AD55] rounded-full flex items-center justify-center mx-auto mb-4">
						<div class="w-0 h-0 border-l-[12px] border-l-[#1A365D] border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
					</div>
					<p class="text-white/80">Behind the Scenes Video</p>
				</div>
			</div>
			<a
				href="/contact"
				class="bg-[#F6AD55] text-[#1A365D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F6AD55]/90 transition-all duration-200 hover:scale-105 inline-block"
			>
				Work With Our Team
			</a>
		</div>
	</section> -->
</main>
