<script lang="ts">
  import {
    Award,
    CheckCircle,
    ChevronDown,
    ChevronUp,
    Lightbulb,
    Shield,
    Target,
    Heart,
    Building,
    MapPin,
    Trophy,
    Star
  } from '@lucide/svelte';
  import * as m from '$lib/paraglide/messages';

  // Runes state (Svelte 5)
  let openBenefit = $state<number | null>(null);

  // Helper type for icons (Svelte components)
  type IconCmp = typeof Lightbulb;

  /** Values (icons come from code, text from Paraglide) */
  const values: Array<{ id: 'craftsmanship' | 'integrity' | 'innovation' | 'client_centricity'; icon: IconCmp }> = [
    { id: 'craftsmanship', icon: Lightbulb },
    { id: 'integrity', icon: Shield },
    { id: 'innovation', icon: Target },
    { id: 'client_centricity', icon: Heart }
  ];

  /** Timeline (visual metadata here; copy comes from Paraglide) */
  const timeline: Array<{ id: '2010' | '2013' | '2016' | '2019' | '2022' | '2024'; icon: IconCmp; color: string }> = [
    { id: '2010', icon: Building, color: 'bg-blue-500' },
    { id: '2013', icon: Building, color: 'bg-green-500' },
    { id: '2016', icon: MapPin, color: 'bg-purple-500' },
    { id: '2019', icon: Trophy, color: 'bg-yellow-500' },
    { id: '2022', icon: Lightbulb, color: 'bg-emerald-500' },
    { id: '2024', icon: Star, color: 'bg-secondary' }
  ];

  /** Why Choose Us keys (accordion) */
  const benefits: Array<
    | 'local_expertise'
    | 'comprehensive_services'
    | 'proven_track_record'
    | 'sustainable_practices'
    | 'cutting_edge_tech'
    | 'customized_solutions'
    | 'competitive_pricing'
    | 'community_focus'
  > = [
    'local_expertise',
    'comprehensive_services',
    'proven_track_record',
    'sustainable_practices',
    'cutting_edge_tech',
    'customized_solutions',
    'competitive_pricing',
    'community_focus'
  ];

  /** Expertise cards (images local, text from Paraglide) */
  const expertise: Array<{
    id: 'residential' | 'commercial' | 'custom_developments' | 'materials_techniques';
    image: string;
  }> = [
    {
      id: 'residential',
      image:
        'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 'commercial',
      image:
        'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 'custom_developments',
      image:
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 'materials_techniques',
      image:
        'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  /** Credentials list */
  const credentials: Array<
    | 'gc_license'
    | 'nari_remodeler'
    | 'epa_lead_safe'
    | 'osha'
    | 'nari_coty'
    | 'houzz_service'
    | 'miami_design_feature'
    | 'bbb_aplus'
  > = [
    'gc_license',
    'nari_remodeler',
    'epa_lead_safe',
    'osha',
    'nari_coty',
    'houzz_service',
    'miami_design_feature',
    'bbb_aplus'
  ];

  const communityGallery = [
    'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ];
</script>

<main class="pt-16">
  <!-- Hero -->
  <section class="py-20 bg-[#1A365D] text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-6">{m['about.hero.title']()}</h1>
      <p class="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
        {m['about.hero.subtitle']()}
      </p>
    </div>
  </section>

  <!-- Our Story -->
  <section id="our-story" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-[#1A365D] mb-6">{m['about.our_story.title']()}</h2>
        <div class="w-24 h-1 bg-secondary mx-auto mb-8"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <p class="text-lg text-[#718096] leading-relaxed mb-6">{m['about.our_story.paragraph1']()}</p>
          <p class="text-lg text-[#718096] leading-relaxed mb-6">{m['about.our_story.paragraph2']()}</p>
          <p class="text-lg text-[#718096] leading-relaxed">{m['about.our_story.paragraph3']()}</p>
        </div>
        <div class="aspect-video rounded-lg overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
            alt={m['about.our_story.image_alt']()}
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Timeline -->
      <div class="mt-16">
        <h3 class="text-2xl font-bold text-[#1A365D] mb-8 text-center">{m['about.timeline.title']()}</h3>
        <div class="relative max-w-4xl mx-auto">
          <!-- Desktop -->
          <div class="hidden md:block">
            <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-secondary to-[#1A365D]"></div>
            <div class="space-y-16">
              {#each timeline as item, index (index)}
                {@const Icon = item.icon}
                <div class={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <!-- dot -->
                  <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-secondary rounded-full z-10"></div>

                  <!-- card -->
                  <div class={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-secondary">
                      <div class="flex items-center mb-3">
                        <div class={`${item.color} p-2 rounded-lg mr-3`}>
                          <div class="text-white">
                            <Icon class="w-6 h-6" />
                          </div>
                        </div>
                        <div class="text-2xl font-bold text-secondary">{m[`about.timeline.items.${item.id}.year`]?.()}</div>
                      </div>
                      <h4 class="text-lg font-bold text-[#1A365D] mb-2">{m[`about.timeline.items.${item.id}.event`]?.()}</h4>
                      <p class="text-[#718096] text-sm">{m[`about.timeline.items.${item.id}.description`]?.()}</p>
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
                <div class="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-secondary to-[#1A365D]"></div>
                <div class="absolute left-0 top-2 w-3 h-3 bg-secondary rounded-full transform -translate-x-1"></div>

                <div class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
                  <div class="flex items-center mb-2">
                    <div class={`${item.color} p-1.5 rounded-md mr-2`}>
                      <div class="text-white">
                        <Icon class="w-4 h-4" />
                      </div>
                    </div>
                    <div class="text-lg font-bold text-secondary">{m[`about.timeline.items.${item.id}.year`]?.()}</div>
                  </div>
                  <h4 class="font-bold text-[#1A365D] mb-1 text-sm">{m[`about.timeline.items.${item.id}.event`]?.()}</h4>
                  <p class="text-[#718096] text-xs">{m[`about.timeline.items.${item.id}.description`]?.()}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <p class="text-xl text-[#718096] mb-6">{m['about.vision.paragraph1']()}</p>
        <p class="text-lg text-[#718096]">{m['about.vision.paragraph2']()}</p>
      </div>
    </div>
  </section>

  <!-- Our Values -->
  <section class="py-20 bg-[#F7FAFC]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-[#1A365D] mb-6">{m['about.values.title']()}</h2>
        <div class="w-24 h-1 bg-secondary mx-auto mb-8"></div>
        <p class="text-xl text-[#718096] max-w-3xl mx-auto">{m['about.values.intro']()}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each values as value, index (index)}
          {@const Icon = value.icon}
          <div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
            <div class="text-secondary mb-6 group-hover:scale-110 transition-transform duration-300">
              <div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                <div class="text-[#1A365D]">
                  <Icon class="w-8 h-8" />
                </div>
              </div>
            </div>
            <h3 class="text-2xl font-bold text-[#1A365D] mb-4">{m[`about.values.items.${value.id}.title`]?.()}</h3>
            <p class="text-[#718096] leading-relaxed">{m[`about.values.items.${value.id}.description`]?.()}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Why Choose Us -->
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-[#1A365D] mb-6">{m['about.why_choose_us.title']()}</h2>
        <div class="w-24 h-1 bg-secondary mx-auto mb-8"></div>
        <p class="text-xl text-[#718096] max-w-3xl mx-auto">{m['about.why_choose_us.intro']()}</p>
      </div>

      <div class="space-y-4">
        {#each benefits as key, index (index)}
          <div class="bg-[#F7FAFC] rounded-lg shadow-md overflow-hidden">
            <button
              class="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
              onclick={() => (openBenefit = openBenefit === index ? null : index)}
              aria-expanded={openBenefit === index}
            >
              <div class="flex items-center">
                <div class="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <CheckCircle class="w-5 h-5 text-[#1A365D]" />
                </div>
                <h3 class="text-xl font-bold text-[#1A365D]">{m[`about.why_choose_us.items.${key}.title`]?.()}</h3>
              </div>
              {#if openBenefit === index}
                <ChevronUp />
              {:else}
                <ChevronDown />
              {/if}
            </button>
            {#if openBenefit === index}
              <div class="px-6 pb-6">
                <p class="text-[#718096] leading-relaxed ml-12">{m[`about.why_choose_us.items.${key}.description`]?.()}</p>
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
        <h2 class="text-4xl md:text-5xl font-bold text-[#1A365D] mb-6">{m['about.expertise.title']()}</h2>
        <div class="w-24 h-1 bg-secondary mx-auto mb-8"></div>
        <p class="text-xl text-[#718096] max-w-3xl mx-auto">{m['about.expertise.intro']()}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each expertise as service, index (index)}
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div class="aspect-video overflow-hidden">
              <img
                src={service.image}
                alt={m[`about.expertise.items.${service.id}.title`]?.()}
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-[#1A365D] mb-4">{m[`about.expertise.items.${service.id}.title`]?.()}</h3>
              <p class="text-[#718096] leading-relaxed">{m[`about.expertise.items.${service.id}.description`]?.()}</p>
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
        <h2 class="text-4xl md:text-5xl font-bold text-[#1A365D] mb-6">{m['about.credentials.title']()}</h2>
        <div class="w-24 h-1 bg-secondary mx-auto mb-8"></div>
        <p class="text-xl text-[#718096] max-w-3xl mx-auto">{m['about.credentials.intro']()}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each credentials as key, index (index)}
          <div class="bg-[#F7FAFC] rounded-lg p-6 text-center hover:bg-secondary hover:text-[#1A365D] transition-all duration-200 group">
            <Award class="w-12 h-12 mx-auto mb-4 text-secondary group-hover:text-[#1A365D]" />
            <h3 class="font-bold text-[#1A365D] group-hover:text-[#1A365D] mb-2">
              {m[`about.credentials.items.${key}.name`]?.()}
            </h3>
            <p class="text-sm text-[#718096] group-hover:text-[#1A365D]">
              {m[`about.credentials.items.${key}.description`]?.()}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Community Involvement -->
  <section class="py-20 bg-[#F7FAFC]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-[#1A365D] mb-6">{m['about.community.title']()}</h2>
        <div class="w-24 h-1 bg-secondary mx-auto mb-8"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p class="text-lg text-[#718096] leading-relaxed mb-6">{m['about.community.paragraph1']()}</p>
          <p class="text-lg text-[#718096] leading-relaxed mb-6">{m['about.community.paragraph2']()}</p>
          <p class="text-lg text-[#718096] leading-relaxed">{m['about.community.paragraph3']()}</p>
        </div>

        <div class="grid grid-cols-2 gap-4">
          {#each communityGallery as image, index (index)}
            <div class="aspect-square rounded-lg overflow-hidden shadow-lg">
              <img
                src={image}
                alt={`${m['about.community.gallery_alt_prefix']()} ${index + 1}`}
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
      <h2 class="text-3xl md:text-4xl font-bold mb-6">{m['about.cta.title']()}</h2>
      <p class="text-xl text-white/90 mb-8">{m['about.cta.subtitle']()}</p>
      <a
        href="/contact"
        class="bg-secondary text-[#1A365D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-all duration-200 hover:scale-105 inline-block"
      >
        {m['about.cta.button']()}
      </a>
    </div>
  </section>
</main>
