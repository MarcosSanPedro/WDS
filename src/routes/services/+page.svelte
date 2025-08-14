<script lang="ts">
	import {
		Check,
		ChevronDown,
		ChevronUp,
		Droplet,
		Play,
		Star,
		Thermometer,
		Users
	} from 'lucide-svelte';
	import * as m from '$lib/paraglide/messages';
	import { _services } from './residential/[slug]/+page';
	import ServicesCards from '../../components/ServicesCards.svelte';
	import Contact from '../../components/Contact.svelte';
	import { Award, MapPin, Shield, Heart, Leaf, Wrench } from 'lucide-svelte';


	const reasons = [
    {
      icon: Award,
      title: "Unmatched Expertise",
      description: "Years of experience in commercial, residential, and custom projects with deep knowledge and skill."
    },
    {
      icon: Users,
      title: "Tailored Solutions",
      description: "Every project is customized to meet your specific needs, vision, budget, and timeline."
    },
    {
      icon: MapPin,
      title: "Local Knowledge",
      description: "Deep understanding of local building codes, regulations, and market trends."
    },
    {
      icon: Shield,
      title: "Commitment to Quality",
      description: "High-quality materials and proven construction techniques for durable, beautiful results."
    },
    {
      icon: Heart,
      title: "Customer-Centric Approach",
      description: "Your satisfaction is our priority with transparent communication and ongoing support."
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Eco-friendly materials and energy-efficient designs to reduce environmental impact."
    },
    {
      icon: Wrench,
      title: "Comprehensive Services",
      description: "Complete project management from design and planning to construction and finishing."
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
			Construction & Renovation
			<span class="block pt-2 whitespace-normal text-[#F6AD55]">
			  Transform Your Space
			</span>
		  </h1>
		  <p class="mb-8 text-xl text-gray-200">
			Your trusted partner for commercial construction, residential renovations, and custom builds. 
			We deliver exceptional results with quality craftsmanship and unmatched dedication to your vision.
		  </p>
		  <a href="/contact"
			class="rounded-lg bg-[#F6AD55] px-8 py-4 text-lg font-semibold text-[#1A365D] transition-all duration-300 hover:scale-105 hover:bg-[#E69A3F]"
		  >
			Contact Us
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
		  Our Construction & Renovation
		  <span class="block text-blue-900">Services</span>
		</h2>
		<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
		  With years of expertise and a commitment to quality, we deliver exceptional results 
		  tailored to your vision across three core service areas.
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
            Why Choose
            <span class="block text-blue-900">World Detail Specialist?</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We stand out for our dedication to excellence and comprehensive approach to every project. 
            Here's what makes us the preferred choice for construction and renovation.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
			{#each reasons as reason}
            <div 
              class="group text-center p-6 rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div class="inline-flex p-4 bg-gradient-to-br from-[#F6AD55] to-[#F6AD95] rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
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

