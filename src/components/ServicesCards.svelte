<script lang='ts'>
	import { m } from "$lib/paraglide/messages";
	import { services_design_description } from "$lib/paraglide/messages/en";
	import { Building, Hammer, Home, Icon, icons, Lightbulb, PaintBucket, Sparkles, Wrench } from "lucide-svelte";


	const services = [
    {
      icon: Building,
      title: "Commercial Construction",
      description: "Elevate your business with functional, modern, and visually appealing commercial spaces. From office upgrades to large-scale developments, we deliver projects that exceed industry standards.",
      features: [
        "Office buildings and renovations",
        "Retail and restaurant spaces",
        "Warehouse and industrial facilities",
        "Minimal downtime construction",
        "Budget-conscious project management",
        "Brand-aligned design solutions"
      ],
      ctaText: "Explore Commercial Services",
      gradient: "bg-gradient-to-br from-blue-600 to-blue-800",
	  heref: '/services/commercial'
    },
    {
      icon: Home,
      title: "Residential Construction & Renovation",
      description: "Transform your house into a dream home with personalized solutions that blend style, functionality, and comfort to suit your lifestyle perfectly.",
      features: [
        "Complete home renovations",
        "Kitchen and bathroom remodeling",
        "Room additions and expansions",
        "Interior design consultations",
        "Energy-efficient upgrades",
        "Outdoor living spaces"
      ],
      ctaText: "Explore Residential Services",
      gradient: "bg-gradient-to-br from-green-600 to-green-800",
	  heref: '/services/residential'

    },
    {
      icon: Sparkles,
      title: "Custom Construction",
      description: "Bring your unique vision to life with bespoke construction services. We specialize in one-of-a-kind projects that stand out with innovative design and meticulous craftsmanship.",
      features: [
        "Custom home builds",
        "Unique commercial features",
        "Specialized outdoor structures",
        "Architectural design collaboration",
        "Premium materials and finishes",
        "Personalized project management"
      ],
      ctaText: "Explore Custom Services",
      gradient: "bg-gradient-to-br from-purple-600 to-purple-800",
	  heref: '/services/custom-services'

    }
  ];
</script>




	<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
	{#each services as service}
	{@const Icon = service.icon}
	  <div class="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden w-full ">
		
		<!-- Background Hover Accent -->
		<div class={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${service.gradient}`}></div>
  
		<div class="relative p-8 z-10">
		  
		  <!-- Icon Container -->
		  <div class={`inline-flex p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
			<div class={`inline-flex p-4 rounded-2xl ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
				<Icon className="w-8 h-8 text-white" />
			  </div>
		  </div>
  
		  <!-- Title -->
		  <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors duration-300">
			{service.title}
		  </h3>
  
		  <!-- Description -->
		  <p class="text-gray-600 mb-6 leading-relaxed">
			{service.description}
		  </p>
  
		  <!-- Features -->
		  <ul class="space-y-3 mb-8">
			{#each service.features as feature}
			  <li class="flex items-start space-x-3">
				<div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
				<span class="text-gray-700">{feature}</span>
			  </li>
			{/each}
		  </ul>
  
		  <!-- CTA Button -->
		  <a href={service.heref} class="w-full py-3 block text-center bg-blue-900 text-white rounded-xl font-semibold transition-all duration-300 hover:bg-blue-800 hover:shadow-lg group-hover:scale-105">
			{service.ctaText}
		  </a>
		</div>
	  </div>
	{/each}
  </div>
  