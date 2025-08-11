<script lang="ts">
  import {
    Award,
    Users,
    Target,
    Heart,
    Lightbulb,
    Shield,
    Star,
    CheckCircle,
    MapPin,
    Trophy,
    Building,
    ChevronUp,
    ChevronDown
  } from 'lucide-svelte';

  // Runes state (Svelte 5)
  let openBenefit = $state<number | null>(null);

  // Helper type for icons (Svelte components)
  type IconCmp = typeof Lightbulb;

  const values: Array<{
    icon: IconCmp;
    title: string;
    description: string;
  }> = [
    {
      icon: Lightbulb,
      title: 'Craftsmanship',
      description:
        'Every detail matters, from material selection to final finishes. As a top Miami construction company, we ensure that our craftsmanship stands out in every kitchen remodel, bathroom renovation, and commercial build, using premium materials sourced locally in South Florida to guarantee longevity and aesthetic appeal. Our skilled artisans bring decades of experience to each project, ensuring that every corner, joint, and surface meets our exacting standards.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description:
        'Transparent pricing, honest timelines, and reliable delivery. We believe in building trust through clear communication, which is why our clients rave about our straightforward approach to Miami remodeling projects, avoiding hidden fees and delivering on promises every time. Our commitment to integrity extends to every aspect of our business, from initial consultations to final walkthroughs, ensuring complete transparency throughout your construction journey.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description:
        "Embracing cutting-edge techniques and sustainable practices. From 3D visualization tools to eco-friendly construction methods, we're at the forefront of innovation in South Florida remodeling, helping clients achieve energy-efficient homes and modern commercial spaces. Our investment in the latest technology and sustainable building practices positions us as leaders in the evolving construction industry."
    },
    {
      icon: Heart,
      title: 'Client-Centricity',
      description:
        "Your vision is our blueprint; we listen, adapt, and deliver. Our client-focused strategy ensures personalized solutions for every project, whether it's a luxury home renovation in Miami or a commercial development in Broward County. We believe that successful construction projects begin with understanding our clients' unique needs, lifestyle, and aspirations, then translating those into tangible, beautiful results."
    }
  ];

  const benefits = [
    {
      title: 'Local Expertise in Miami and South Florida',
      description:
        "As a native Miami construction company, we understand the unique challenges of building in a tropical climate, from hurricane-resistant designs to humidity-proof materials, ensuring your remodeling project withstands the elements. Our deep knowledge of local building codes, permit processes, and environmental considerations gives us a distinct advantage in delivering successful projects throughout South Florida."
    },
    {
      title: 'Comprehensive Services',
      description:
        "From initial consultation to final walkthrough, we offer end-to-end solutions for residential remodeling, commercial construction, and custom developments, making us the go-to choice for Miami kitchen remodeling and bathroom renovations in Broward County. Our integrated approach eliminates the need for multiple contractors, streamlining your project timeline and ensuring consistent quality throughout."
    },
    {
      title: 'Proven Track Record',
      description:
        'With hundreds of successful projects, our portfolio demonstrates expertise in luxury home renovations, office builds, and multi-family developments across South Florida, backed by industry awards and client satisfaction. Our track record speaks to our ability to handle projects of any scale and complexity, from intimate bathroom remodels to large-scale commercial developments.'
    },
    {
      title: 'Sustainable Practices',
      description:
        "Committed to eco-friendly construction, we use green materials and energy-efficient techniques to reduce environmental impact, appealing to clients seeking sustainable remodeling Miami or green building South Florida. Our sustainability initiatives not only benefit the environment but also provide long-term cost savings through improved energy efficiency and durability."
    },
    {
      title: 'Cutting-Edge Technology',
      description:
        'Utilizing 3D modeling, laser measurements, and project management software, we streamline processes for faster, more accurate results in every Miami remodeling project. Our technology-driven approach minimizes errors, reduces waste, and provides clients with clear visualizations of their projects before construction begins.'
    },
    {
      title: 'Customized Solutions',
      description:
        "Tailored designs that reflect your style and needs, whether modern minimalist kitchens or traditional bathroom remodels, setting us apart as innovative leaders in Florida construction. We don't believe in one-size-fits-all solutions; instead, we craft unique designs that perfectly match your vision, lifestyle, and budget requirements."
    },
    {
      title: 'Competitive Pricing with Value',
      description:
        "Transparent, value-driven pricing ensures you get premium quality without overspending, ideal for budget-conscious homeowners and businesses in Miami. Our pricing structure is designed to provide maximum value, combining competitive rates with superior quality and service that delivers lasting results."
    },
    {
      title: 'Community-Focused Approach',
      description:
        "Deeply rooted in South Florida, we support local suppliers and initiatives, fostering long-term relationships and contributing to the region's growth. Our commitment to the community extends beyond individual projects to supporting local businesses, creating jobs, and contributing to the economic vitality of South Florida."
    }
  ];

  const timeline: Array<{
    year: string;
    event: string;
    description: string;
    icon: IconCmp;
    color: string; // tailwind bg-*
  }> = [
    {
      year: '2010',
      event: 'Founded World Detail Specialist in Miami',
      description: 'Started with a vision to deliver unparalleled attention to detail',
      icon: Building,
      color: 'bg-blue-500'
    },
    {
      year: '2013',
      event: 'Expanded to Commercial Construction',
      description: 'Began serving commercial clients throughout South Florida',
      icon: Building,
      color: 'bg-green-500'
    },
    {
      year: '2016',
      event: 'Opened Broward County Office',
      description: 'Extended services to Fort Lauderdale and surrounding areas',
      icon: MapPin,
      color: 'bg-purple-500'
    },
    {
      year: '2019',
      event: 'Achieved 250+ Completed Projects',
      description: 'Milestone celebrating our growing portfolio of success',
      icon: Trophy,
      color: 'bg-yellow-500'
    },
    {
      year: '2022',
      event: 'Launched Sustainable Building Initiative',
      description: 'Committed to eco-friendly construction practices',
      icon: Lightbulb,
      color: 'bg-emerald-500'
    },
    {
      year: '2024',
      event: 'Celebrating 500+ Transformations',
      description: "Continuing our mission toward our moon-shot vision",
      icon: Star,
      color: 'bg-[#F6AD55]'
    }
  ];

  const expertise = [
    {
      title: 'Residential Remodeling',
      description:
        'Specializing in kitchen and bathroom renovations in Miami, we transform homes with custom cabinetry, high-end fixtures, and smart home integrations, ensuring functionality and luxury for South Florida lifestyles. Our residential expertise encompasses everything from minor updates to complete home transformations, always focusing on enhancing both aesthetic appeal and practical functionality.',
      image:
        'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      title: 'Commercial Construction',
      description:
        'From retail spaces in Miami Beach to office builds in Fort Lauderdale, our commercial projects focus on durability, aesthetics, and compliance with local regulations, delivering spaces that enhance business operations. We understand that commercial spaces must balance form and function while meeting strict regulatory requirements and tight deadlines.',
      image:
        'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      title: 'Custom Developments',
      description:
        "Pushing innovation with sustainable designs and future-proof features, we're prepared for ambitious projects, aligning with our vision of extraterrestrial construction. Our custom development services combine cutting-edge design with practical construction expertise to create unique spaces that push the boundaries of conventional building.",
      image:
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      title: 'Material and Technique Mastery',
      description:
        "Expertise in selecting premium, weather-resistant materials for Florida's climate, combined with advanced techniques like modular construction for efficiency. Our deep understanding of materials science and construction techniques ensures that every project is built to last in South Florida's challenging environment.",
      image:
        'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  const credentials = [
    { name: 'General Contractor License', description: 'Fully licensed to perform construction work throughout Florida' },
    { name: 'NARI Certified Remodeler', description: 'National Association of the Remodeling Industry certification' },
    { name: 'EPA Lead-Safe Certification', description: 'Certified for safe lead paint removal and renovation' },
    { name: 'OSHA Safety Certifications', description: 'Comprehensive workplace safety training and compliance' },
    { name: 'NARI Contractor of the Year', description: 'Recognized for excellence in remodeling and construction' },
    { name: 'Houzz Best of Service', description: 'Top-rated contractor on the leading home design platform' },
    { name: 'Miami Home & Design Featured', description: 'Featured in premier South Florida design publication' },
    { name: 'Better Business Bureau A+', description: 'Highest rating for business ethics and customer service' }
  ];
</script>

<main class="pt-16">
  <!-- Hero -->
  <section class="py-20 bg-[#1A365D] text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-6">About World Detail Specialist</h1>
      <p class="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
        Miami's premier construction and remodeling experts, building dreams with precision and passion.
      </p>
    </div>
  </section>

  <!-- Our Story -->
  <section id="our-story" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-[#1A365D] mb-6">Our Story</h2>
        <div class="w-24 h-1 bg-[#F6AD55] mx-auto mb-8"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <p class="text-lg text-[#718096] leading-relaxed mb-6">
            Founded in the vibrant heart of Miami, Florida, World Detail Specialist emerged as a beacon of excellence in the competitive construction and remodeling industry. Our journey began with a singular mission: to deliver unparalleled attention to detail in every project, transforming ordinary spaces into extraordinary environments.
          </p>
          <p class="text-lg text-[#718096] leading-relaxed mb-6">
            As a leading Miami construction company, we specialize in high-end residential remodeling, commercial construction, and innovative development solutions across South Florida. From our humble beginnings tackling kitchen renovations in Miami Beach to securing major commercial contracts in Broward County, we've grown by adhering to core principles of quality, integrity, and innovation.
          </p>
          <p class="text-lg text-[#718096] leading-relaxed">
            Our founder, with over two decades of experience in South Florida remodeling, envisioned a company that not only meets client expectations but exceeds them through cutting-edge techniques and sustainable practices. Today, as a premier Miami remodeling company, we handle everything from bathroom remodels in Coral Gables to full-scale home renovations in Palm Beach.
          </p>
        </div>
        <div class="aspect-video rounded-lg overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
            alt="World Detail Specialist construction project"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Timeline -->
      <div class="mt-16">
        <h3 class="text-2xl font-bold text-[#1A365D] mb-8 text-center">Our Journey</h3>
        <div class="relative max-w-4xl mx-auto">
          <!-- Desktop -->
          <div class="hidden md:block">
            <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#F6AD55] to-[#1A365D]"></div>
            <div class="space-y-16">
              {#each timeline as item, index (index)}
                {@const Icon = item.icon}
                <div class={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <!-- dot -->
                  <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-[#F6AD55] rounded-full z-10"></div>

                  <!-- card -->
                  <div class={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-[#F6AD55]">
                      <div class="flex items-center mb-3">
                        <div class={`${item.color} p-2 rounded-lg mr-3`}>
                          <div class="text-white">
                            <Icon class="w-6 h-6" />
                          </div>
                        </div>
                        <div class="text-2xl font-bold text-[#F6AD55]">{item.year}</div>
                      </div>
                      <h4 class="text-lg font-bold text-[#1A365D] mb-2">{item.event}</h4>
                      <p class="text-[#718096] text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </div>

          <!-- Mobile -->
          <div class="md:hidden space-y-6">
            {#each timeline as item, index (index)}
              {@const Icon = item.icon}
              <div class="relative pl-8">
                <div class="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#F6AD55] to-[#1A365D]"></div>
                <div class="absolute left-0 top-2 w-3 h-3 bg-[#F6AD55] rounded-full transform -translate-x-1"></div>

                <div class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
                  <div class="flex items-center mb-2">
                    <div class={`${item.color} p-1.5 rounded-md mr-2`}>
                      <div class="text-white">
                        <Icon class="w-4 h-4" />
                      </div>
                    </div>
                    <div class="text-lg font-bold text-[#F6AD55]">{item.year}</div>
                  </div>
                  <h4 class="font-bold text-[#1A365D] mb-1 text-sm">{item.event}</h4>
                  <p class="text-[#718096] text-xs">{item.description}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <p class="text-xl text-[#718096] mb-6">
          Looking ahead, our ambitious vision extends beyond Earth—we're not stopping until we've built the first house on the moon, symbolizing our dedication to pushing the boundaries of what's possible in construction and development.
        </p>
        <p class="text-lg text-[#718096]">
          Whether you're searching for a Miami kitchen remodeling contractor or a partner for commercial construction in South Florida, World Detail Specialist is here to turn your dreams into reality with precision and passion.
        </p>
      </div>
    </div>
  </section>

  <!-- Our Values -->
  <section class="py-20 bg-[#F7FAFC]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-[#1A365D] mb-6">Our Values</h2>
        <div class="w-24 h-1 bg-[#F6AD55] mx-auto mb-8"></div>
        <p class="text-xl text-[#718096] max-w-3xl mx-auto">
          These core principles guide every decision we make and every project we undertake.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each values as value, index (index)}
          {@const Icon = value.icon}
          <div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
            <div class="text-[#F6AD55] mb-6 group-hover:scale-110 transition-transform duration-300">
              <div class="w-16 h-16 bg-[#F6AD55] rounded-full flex items-center justify-center">
                <div class="text-[#1A365D]">
                  <Icon class="w-8 h-8" />
                </div>
              </div>
            </div>
            <h3 class="text-2xl font-bold text-[#1A365D] mb-4">{value.title}</h3>
            <p class="text-[#718096] leading-relaxed">{value.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Why Choose Us -->
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-[#1A365D] mb-6">Why Choose Us</h2>
        <div class="w-24 h-1 bg-[#F6AD55] mx-auto mb-8"></div>
        <p class="text-xl text-[#718096] max-w-3xl mx-auto">
          Discover what sets World Detail Specialist apart as Miami's premier construction and remodeling company.
        </p>
      </div>

      <div class="space-y-4">
        {#each benefits as benefit, index (index)}
          <div class="bg-[#F7FAFC] rounded-lg shadow-md overflow-hidden">
            <button
              class="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
              onclick={() => (openBenefit = openBenefit === index ? null : index)}
            >
              <div class="flex items-center">
                <div class="w-8 h-8 bg-[#F6AD55] rounded-full flex items-center justify-center mr-4">
                  <CheckCircle class="w-5 h-5 text-[#1A365D]" />
                </div>
                <h3 class="text-xl font-bold text-[#1A365D]">{benefit.title}</h3>
              </div>
              {#if openBenefit === index}
                <ChevronUp />
              {:else}
                <ChevronDown />
              {/if}
            </button>
            {#if openBenefit === index}
              <div class="px-6 pb-6">
                <p class="text-[#718096] leading-relaxed ml-12">{benefit.description}</p>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Our Expertise -->
  <section class="py-20 bg-[#F7FAFC]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-[#1A365D] mb-6">Our Expertise</h2>
        <div class="w-24 h-1 bg-[#F6AD55] mx-auto mb-8"></div>
        <p class="text-xl text-[#718096] max-w-3xl mx-auto">
          Dive deep into our specialized services and experience that establish us as South Florida's construction authority.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each expertise as service, index (index)}
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div class="aspect-video overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-[#1A365D] mb-4">{service.title}</h3>
              <p class="text-[#718096] leading-relaxed">{service.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Credentials & Achievements -->
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-[#1A365D] mb-6">Credentials & Achievements</h2>
        <div class="w-24 h-1 bg-[#F6AD55] mx-auto mb-8"></div>
        <p class="text-xl text-[#718096] max-w-3xl mx-auto">
          Our certifications, awards, and media features demonstrate our commitment to excellence and industry leadership.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each credentials as credential, index (index)}
          <div class="bg-[#F7FAFC] rounded-lg p-6 text-center hover:bg-[#F6AD55] hover:text-[#1A365D] transition-all duration-200 group">
            <Award class="w-12 h-12 mx-auto mb-4 text-[#F6AD55] group-hover:text-[#1A365D]" />
            <h3 class="font-bold text-[#1A365D] group-hover:text-[#1A365D] mb-2">{credential.name}</h3>
            <p class="text-sm text-[#718096] group-hover:text-[#1A365D]">{credential.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Community Involvement -->
  <section class="py-20 bg-[#F7FAFC]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-[#1A365D] mb-6">Community Involvement</h2>
        <div class="w-24 h-1 bg-[#F6AD55] mx-auto mb-8"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p class="text-lg text-[#718096] leading-relaxed mb-6">
            At World Detail Specialist, we're deeply committed to the Miami and South Florida community that has supported our growth as a leading construction company. We actively participate in local initiatives, such as partnering with Habitat for Humanity for affordable housing projects in Miami-Dade County, sponsoring home design expos in Broward, and contributing to environmental cleanups in Palm Beach.
          </p>
          <p class="text-lg text-[#718096] leading-relaxed mb-6">
            Our involvement extends to educational programs, where we offer workshops on sustainable remodeling techniques for aspiring builders in Florida. By supporting local suppliers and employing South Florida talent, we boost the economy while ensuring our projects reflect the region's vibrant culture.
          </p>
          <p class="text-lg text-[#718096] leading-relaxed">
            Whether it's renovating community centers or volunteering for disaster recovery after hurricanes, our community-focused efforts underscore our role as more than just a remodeling company—we're invested partners in building a stronger Miami.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-4">
          {#each [
            'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
            'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
            'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
            'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
          ] as image, index (index)}
            <div class="aspect-square rounded-lg overflow-hidden shadow-lg">
              <img
                src={image}
                alt={`Community involvement ${index + 1}`}
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="py-20 bg-[#1A365D] text-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Work with Miami's Premier Construction Team?</h2>
      <p class="text-xl text-white/90 mb-8">
        Let's discuss how our expertise, values, and commitment to excellence can bring your vision to life.
      </p>
      <a
        href="/contact"
        class="bg-[#F6AD55] text-[#1A365D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F6AD55]/90 transition-all duration-200 hover:scale-105 inline-block"
      >
        Start Your Project Today
      </a>
    </div>
  </section>
</main>
