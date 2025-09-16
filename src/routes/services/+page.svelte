<script lang="ts">
	import {
		// Check,
		// ChevronDown,
		// ChevronUp,
		// Droplet,
		// Play,
		// Star,
		// Thermometer,
		Users
	} from '@lucide/svelte';
	// import * as m from '$lib/paraglide/messages';
	// import { _services } from './residential/[slug]/+page';
	import ServicesCards from '../../components/ServicesCards.svelte';
	import Contact from '../../components/Contact.svelte';
	import { Award, MapPin, Shield, Heart, Leaf, Wrench } from '@lucide/svelte';
  import * as m from '$lib/paraglide/messages';


	const reasons = [
    {
      icon: Award,
      title: m['services_page.reasons.unmatched_expertise.title'](),
      description: m['services_page.reasons.unmatched_expertise.description']()
    },
    {
      icon: Users,
      title: m['services_page.reasons.tailored_solutions.title'](),
      description: m['services_page.reasons.tailored_solutions.description']()
    },
    {
      icon: MapPin,
      title: m['services_page.reasons.local_knowledge.title'](),
      description: m['services_page.reasons.local_knowledge.description']()
    },
    {
      icon: Shield,
      title: m['services_page.reasons.commitment_to_quality.title'](),
      description: m['services_page.reasons.commitment_to_quality.description']()
    },
    {
      icon: Heart,
      title: m['services_page.reasons.customer_centric_approach.title'](),
      description: m['services_page.reasons.customer_centric_approach.description']()
    },
    {
      icon: Leaf,
      title: m['services_page.reasons.sustainable_practices.title'](),
      description: m['services_page.reasons.sustainable_practices.description']()
    },
    {
      icon: Wrench,
      title: m['services_page.reasons.comprehensive_services.title'](),
      description: m['services_page.reasons.comprehensive_services.description']()
    }
  ];

</script>

<svelte:head>
	<title>Kitchen Renovations in Miami | Free Estimate</title>
	<meta
		name="description"
		content="Transform your kitchen with custom cabinetry, premium countertops, and modern appliances. Miami kitchen renovation specialists."
	/>
</svelte:head>


<!-- Hero Section -->
<section class="relative bg-gradient-to-br from-[#1A365D] to-[#2D5A87] py-24 text-white">
	<div class="absolute inset-0 bg-[#1A365D]"></div>
	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
	  <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
		<div>
		  <h1 class="mb-6 text-4xl font-bold md:text-5xl">
			{m['services_page.hero.heading']()}
			<span class="block pt-2 whitespace-normal text-secondary">
			  {m['services_page.hero.subheading']()}
			</span>
		  </h1>
		  <p class="mb-8 text-xl text-gray-200">
			{m['services_page.hero.description']()}
		  </p>
		  <a href="/contact"
			class="rounded-lg bg-secondary px-8 py-4 text-lg font-semibold text-[#1A365D] transition-all duration-300 hover:scale-105 hover:bg-[#E69A3F]"
		  >
			{m['contact.title']()}
		  </a>
		</div>
		<div class="relative">
		  <img
			src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
			alt="Professional construction and renovation services by World Detail Specialist"
			class="rounded-lg shadow-2xl"
		  />
		</div>
	  </div>
	</div>
  </section>

<section id="services" class="py-20 bg-gray-50">
	<div class="container mx-auto px-6">
	  <div class="text-center mb-16">
		<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
		  {m['services_page.hero.secondary_header']()}
		  <span class="block text-blue-900">{m['services_page.hero.span']()}</span>
		</h2>
		<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
		  {m['services_page.hero.secondary_description']()}
		</p>
	  </div>

	  
		
		  <div class="h-full">
			<ServicesCards/>
		  </div>
	  </div>
	
  </section>

  

    <section id="why-choose-us" class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {m['services_page.why_choose_us.title']()}
            <span class="block text-blue-900">World Detail Specialist?</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {m['services_page.why_choose_us.description']()}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
			{#each reasons as reason}
            <div 
              class="group text-center p-6 rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div class="inline-flex p-4 bg-gradient-to-br from-secondary to-[#F6AD95] rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <reason.icon class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                {reason.title}
              </h3>
              <p class="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
			{/each}
        </div>
      </div>
    </section>

  <Contact/>

