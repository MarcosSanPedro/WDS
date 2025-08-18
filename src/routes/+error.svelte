<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { Home, ArrowLeft } from '@lucide/svelte';
  import * as m from '$lib/paraglide/messages';

  function goBack() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
</script>

<svelte:head>
  <title>{m['error.title']()}</title>
  <meta name="description" content={m['error.meta_description']()} />
</svelte:head>

<main class="pt-16">
  <div class="min-h-screen bg-[#F7FAFC] flex items-center justify-center px-4">
    <div class="max-w-2xl mx-auto text-center">
      <div class="mb-8">
        <div class="text-9xl font-bold text-secondary mb-4">404</div>
        <h1 class="text-4xl md:text-5xl font-bold text-[#1A365D] mb-4">
          {m['error.heading']()}
        </h1>
        <p class="text-xl text-[#718096] mb-8">
          {m['error.description']()}
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="/"
          class="bg-secondary text-[#1A365D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-all duration-200 hover:scale-105 flex items-center gap-2"
        >
          <Home size={20} />
          {m['error.go_home']()}
        </a>
        <button
          onclick={goBack}
          class="border-2 border-[#1A365D] text-[#1A365D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1A365D] hover:text-white transition-all duration-200 flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          {m['error.go_back']()}
        </button>
      </div>

      <div class="mt-12 p-8 bg-white rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold text-[#1A365D] mb-4">
          {m['error.looking_for']()}
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <a href="/services" class="text-secondary hover:text-[#1A365D] transition-colors">
            {m['error.our_services']()}
          </a>
          <a href="/portfolio" class="text-secondary hover:text-[#1A365D] transition-colors">
            {m['error.portfolio']()}
          </a>
          <a href="/about" class="text-secondary hover:text-[#1A365D] transition-colors">
            {m['error.about_us']()}
          </a>
          <a href="/contact" class="text-secondary hover:text-[#1A365D] transition-colors">
            {m['error.contact']()}
          </a>
        </div>
      </div>
    </div>
  </div>
</main>
