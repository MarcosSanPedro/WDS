<script lang="ts">
  import { ChevronDown, ChevronUp, Calculator, Star } from 'lucide-svelte';
  import * as m from '$lib/paraglide/messages';

  let activeTab = $state<'modern' | 'traditional' | 'contemporary'>('modern');
  let openFaq = $state<number | null>(null);
  let budgetRange = $state({ size: 200, appliances: 'mid', finishes: 'standard' });

  const styles: Record<'modern' | 'traditional' | 'contemporary', string[]> = {
    modern: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    ],
    traditional: [
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    ],
    contemporary: [
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    ]
  };

  const faqs = [
    {
      question: 'How long will my kitchen be unusable?',
      answer: 'Most clients regain a functional space within 6 weeks, with final detailing completed by week 8.'
    },
    {
      question: 'What is included in the base price?',
      answer: 'Our base package includes demolition, basic electrical and plumbing updates, standard cabinets, countertops, and installation.'
    },
    {
      question: 'Do you handle permits and inspections?',
      answer: 'Yes, we manage all necessary permits and coordinate inspections throughout the project timeline.'
    },
    {
      question: 'Can I stay in my home during renovation?',
      answer: 'Absolutely. We set up temporary kitchen facilities and work around your schedule to minimize disruption.'
    },
    {
      question: 'What warranty do you provide?',
      answer: 'We offer a 2-year warranty on workmanship and honor all manufacturer warranties on materials and appliances.'
    }
  ];

  function calculateEstimate() {
    const basePrice = budgetRange.size * 150; // $150 per sq ft base
    const applianceMultiplier = budgetRange.appliances === 'luxury' ? 1.5 : budgetRange.appliances === 'mid' ? 1.2 : 1;
    const finishMultiplier = budgetRange.finishes === 'luxury' ? 1.4 : budgetRange.finishes === 'premium' ? 1.2 : 1;
    
    return Math.round(basePrice * applianceMultiplier * finishMultiplier);
  }
</script>

<svelte:head>
  <title>Kitchen Renovations in Miami | Free Estimate</title>
  <meta name="description" content="Transform your kitchen with custom cabinetry, premium countertops, and modern appliances. Miami kitchen renovation specialists." />
</svelte:head>

<main class="pt-16">
  <!-- Hero Section -->
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <div 
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url('https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
    >
      <div class="absolute inset-0 bg-[#1A365D]/70"></div>
    </div>
    
    <div class="relative z-10 text-center max-w-4xl mx-auto px-4">
      <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">
        Your Dream Kitchen Starts Here
      </h1>
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
        <div class="bg-[#F6AD55] text-[#1A365D] px-6 py-3 rounded-lg font-bold text-lg">
          From $25k
        </div>
        <div class="text-white text-lg">
          Timeline: 4-8 weeks
        </div>
      </div>
      <a
        href="/contact"
        class="bg-[#F6AD55] text-[#1A365D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F6AD55]/90 transition-all duration-200 hover:scale-105 inline-block"
      >
        Get Estimate
      </a>
    </div>
  </section>

  <!-- Overview Section -->
  <section class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-[#1A365D] mb-8">
        Transform Your Kitchen Experience
      </h2>
      <p class="text-xl text-[#718096] leading-relaxed">
        Outdated layout? Inefficient storage? Our award-winning designers re-imagine every inch—merging form, function and flawless finishes. From concept to completion, we create kitchens that become the heart of your home.
      </p>
    </div>
  </section>

  <!-- Process Section -->
  <section class="py-20 bg-[#F7FAFC]">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl md:text-4xl font-bold text-[#1A365D] mb-12 text-center">
        Our Kitchen Renovation Process
      </h2>
      
      <div class="space-y-4">
        {#each [
          { title: 'Initial Consultation', desc: 'We discuss your vision, needs, and budget in detail' },
          { title: '3D Design Rendering', desc: 'See your new kitchen before construction begins' },
          { title: 'Material Selection', desc: 'Choose from premium cabinets, countertops, and fixtures' },
          { title: 'Construction Phase', desc: 'Expert craftsmen bring your design to life' },
          { title: 'Final Reveal', desc: 'Walk through your completed dream kitchen' }
        ] as step, index}
          <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#F6AD55]">
            <div class="flex items-center">
              <div class="bg-[#F6AD55] text-[#1A365D] w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">
                {index + 1}
              </div>
              <div>
                <h3 class="text-xl font-bold text-[#1A365D]">{step.title}</h3>
                <p class="text-[#718096] mt-1">{step.desc}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Style Gallery -->
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4 text-center">
        Choose a Style That Fits Your Life
      </h2>
      <p class="text-xl text-[#718096] mb-12 text-center">
        Explore different design aesthetics to find your perfect match.
      </p>
      
      <div class="flex justify-center mb-8">
        <div class="bg-[#F7FAFC] rounded-lg p-2 flex space-x-2">
          {#each Object.keys(styles) as style}
            <button
              onclick={() => activeTab = style as 'modern' | 'traditional' | 'contemporary'}
              class="px-6 py-3 rounded-lg font-semibold capitalize transition-all duration-200 {activeTab === style ? 'bg-[#F6AD55] text-[#1A365D]' : 'text-[#718096] hover:text-[#1A365D]'}"
            >
              {style}
            </button>
          {/each}
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {#each styles[activeTab] as image, index}
          <div class="aspect-video rounded-lg overflow-hidden shadow-lg">
            <img
              src={image}
              alt="{activeTab} kitchen style {index + 1}"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Pricing Calculator -->
  <section class="py-20 bg-[#F7FAFC]">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <Calculator class="w-16 h-16 text-[#F6AD55] mx-auto mb-4" />
        <h2 class="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4">
          Pricing Calculator
        </h2>
        <p class="text-xl text-[#718096]">
          Curious about cost? Adjust the sliders below for an instant ballpark range.
        </p>
      </div>
      
      <div class="bg-white rounded-lg shadow-lg p-8">
        <div class="space-y-8">
          <div>
            <label for="kitchen-size" class="block text-[#1A365D] font-semibold mb-4">
              Kitchen Size: {budgetRange.size} sq ft
            </label>
            <input
              id="kitchen-size"
              type="range"
              min="100"
              max="500"
              bind:value={budgetRange.size}
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div>
            <label for="appliance-level" class="block text-[#1A365D] font-semibold mb-4">
              Appliance Level
            </label>
            <select
              id="appliance-level"
              bind:value={budgetRange.appliances}
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F6AD55] focus:border-transparent"
            >
              <option value="basic">Basic ($5k-$10k)</option>
              <option value="mid">Mid-Range ($10k-$20k)</option>
              <option value="luxury">Luxury ($20k+)</option>
            </select>
          </div>
          
          <div>
            <label for="finish-level" class="block text-[#1A365D] font-semibold mb-4">
              Finish Level
            </label>
            <select
              id="finish-level"
              bind:value={budgetRange.finishes}
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F6AD55] focus:border-transparent"
            >
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
              <option value="luxury">Luxury</option>
            </select>
          </div>
        </div>
        
        <div class="mt-8 p-6 bg-[#F7FAFC] rounded-lg text-center">
          <div class="text-3xl font-bold text-[#1A365D] mb-2">
            ${calculateEstimate().toLocaleString()}
          </div>
          <div class="text-[#718096] mb-4">
            Estimated Project Cost
          </div>
          <a
            href="/contact"
            class="bg-[#F6AD55] text-[#1A365D] px-6 py-3 rounded-lg font-semibold hover:bg-[#F6AD55]/90 transition-all duration-200 inline-block"
          >
            Get Detailed Quote
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQs -->
  <section class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl md:text-4xl font-bold text-[#1A365D] mb-12 text-center">
        Frequently Asked Questions
      </h2>
      
      <div class="space-y-4">
        {#each faqs as faq, index}
          <div class="bg-[#F7FAFC] rounded-lg">
            <button
              onclick={() => openFaq = openFaq === index ? null : index}
              class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200"
            >
              <span class="font-semibold text-[#1A365D]">{faq.question}</span>
              {#if openFaq === index}
                <ChevronUp />
              {:else}
                <ChevronDown />
              {/if}
            </button>
            {#if openFaq === index}
              <div class="px-6 pb-4">
                <p class="text-[#718096]">{faq.answer}</p>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- CTA Banner -->
  <section class="py-20 bg-[#1A365D] text-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">
        Let's Cook Up Something Amazing
      </h2>
      <p class="text-xl text-white/90 mb-8">
        Ready to transform your kitchen? Schedule your consultation today.
      </p>
      <a
        href="/contact"
        class="bg-[#F6AD55] text-[#1A365D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F6AD55]/90 transition-all duration-200 hover:scale-105 inline-block"
      >
        Schedule Consultation
      </a>
    </div>
  </section>
</main>
