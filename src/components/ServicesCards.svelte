<script lang='ts'>
	import * as m from "$lib/paraglide/messages";
	import { Building, Home ,Sparkles } from "@lucide/svelte";


	const services = [
    {
      icon: Building,
      title: m["servicesCards.s_commercial_title"](),
      description: m["servicesCards.s_commercial_description"](),
      features: [
        m["servicesCards.s_commercial_features_1"](),
        m["servicesCards.s_commercial_features_2"](),
        m["servicesCards.s_commercial_features_3"](),
        m["servicesCards.s_commercial_features_4"](),
        m["servicesCards.s_commercial_features_5"](),
        m["servicesCards.s_commercial_features_6"]()
      ],
      ctaText: m["servicesCards.s_commercial_cta"](),
      gradient: "bg-gradient-to-br from-blue-600 to-blue-800",
      heref: "/services/commercial"
    },
    {
      icon: Home,
      title: m["servicesCards.s_residential_title"](),
      description: m["servicesCards.s_residential_description"](),
      features: [
        m["servicesCards.s_residential_features_1"](),
        m["servicesCards.s_residential_features_2"](),
        m["servicesCards.s_residential_features_3"](),
        m["servicesCards.s_residential_features_4"](),
        m["servicesCards.s_residential_features_5"](),
        m["servicesCards.s_residential_features_6"]()
      ],
      ctaText: m["servicesCards.s_residential_cta"](),
      gradient: "bg-gradient-to-br from-green-600 to-green-800",
      heref: "/services/residential"
    },
    {
      icon: Sparkles,
      title: m["servicesCards.s_custom_title"](),
      description: m["servicesCards.s_custom_description"](),
      features: [
        m["servicesCards.s_custom_features_1"](),
        m["servicesCards.s_custom_features_2"](),
        m["servicesCards.s_custom_features_3"](),
        m["servicesCards.s_custom_features_4"](),
        m["servicesCards.s_custom_features_5"](),
        m["servicesCards.s_custom_features_6"]()
      ],
      ctaText: m["servicesCards.s_custom_cta"](),
      gradient: "bg-gradient-to-br from-purple-600 to-purple-800",
      heref: "/services/custom"
    }
  ];
</script>




	<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
	{#each services as service}
	{@const Icon = service.icon}
	  <div class="group relative bg-white rounded-3xl hover:shadow-lg  overflow-hidden w-full ">
		
		<!-- Background Hover Accent -->
		<div class={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${service.gradient}`}></div>
  
		<div class="relative p-8 z-10">
		  
		  <!-- Icon Container -->
		  <div class={`inline-flex p-4 rounded-2xl mb-6 transition-transform duration-300`}>
			<div class={`inline-flex p-4 rounded-2xl ${service.gradient} text-white mb-6 transition-transform duration-300`}>
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
				<div class="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
				<span class="text-gray-700">{feature}</span>
			  </li>
			{/each}
		  </ul>
  
		  <!-- CTA Button -->
		  <a href={service.heref} class="w-full py-3 block text-center bg-secondary  text-black rounded-xl font-semibold transition-all duration-300  hover:shadow-lg hover:scale-105 ">
			{service.ctaText}
		  </a>
		</div>
	  </div>
	{/each}
  </div>
  