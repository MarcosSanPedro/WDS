<script lang="ts">
  import { ArrowRight, Phone } from 'lucide-svelte';
  import * as m from '$lib/paraglide/messages';
  
  let typewriterText = $state('');
  const fullText = m['hero.title']();
  
  // Typewriter effect using $effect
  $effect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        typewriterText = fullText.slice(0, index);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    
    // Teardown function to clear interval
    return () => clearInterval(timer);
  });
</script>

<section id="home" class="relative h-screen flex items-center justify-center overflow-hidden">
  <!-- Background Image -->
  <div 
    class="absolute inset-0 bg-cover bg-center bg-fixed"
    style="background-image: url('/hero-image.jpeg')"
  >
    <div class="absolute inset-0 bg-[#1A365D]/70"></div>
  </div>
  
  <!-- Content -->
  <div class="relative z-10 text-center max-w-4xl mx-auto px-4">
    <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
      {typewriterText}<span class="animate-pulse">|</span>
    </h1>
    <p class="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
      {m['hero.subtitle']()}
    </p>
    
    <div class="flex flex-col sm:flex-row justify-center gap-4">
      <button class="bg-[#F6AD55] text-[#1A365D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F6AD55]/90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
        {m['hero.cta_primary']()}
        <ArrowRight size={20} />
      </button>
      
      <a 
        href="tel:+1234567890" 
        class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#1A365D] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
      >
        <Phone size={20} />
        Call Now
      </a>
    </div>
  </div>
  
  <!-- Scroll Indicator -->
  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
    <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center">
      <div class="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
    </div>
  </div>
</section>
