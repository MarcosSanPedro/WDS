<script lang="ts">
  import * as m from '$lib/paraglide/messages';
</script>

<svelte:head>
  <title>{m['terms.title']()}</title>
  <meta name="description" content={m['terms.meta_description']()} />
</svelte:head>

<main class="pt-16">
  <div class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl md:text-5xl font-bold text-[#1A365D] mb-8">
        {m['terms.heading']()}
      </h1>
      
      <div class="prose prose-lg max-w-none">
        <p class="text-[#718096] mb-6">
          <strong>{m['terms.last_updated']()}</strong> {m['terms.date']()}
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-[#1A365D] mb-4">{m['terms.acceptance_heading']()}</h2>
          <p class="text-[#718096] mb-4">
            {m['terms.acceptance_text']()}
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-[#1A365D] mb-4">{m['terms.services_heading']()}</h2>
          <p class="text-[#718096] mb-4">
            {m['terms.services_intro']()}
          </p>
          <ul class="list-disc pl-6 text-[#718096] mb-4">
            <li>{m['terms.service_kitchen']()}</li>
            <li>{m['terms.service_bathroom']()}</li>
            <li>{m['terms.service_whole_home']()}</li>
            <li>{m['terms.service_commercial']()}</li>
            <li>{m['terms.service_design']()}</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-[#1A365D] mb-4">{m['terms.estimates_heading']()}</h2>
          <p class="text-[#718096] mb-4">
            {m['terms.estimates_text']()}
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-[#1A365D] mb-4">{m['terms.payment_heading']()}</h2>
          <p class="text-[#718096] mb-4">
            {m['terms.payment_intro']()}
          </p>
          <ul class="list-disc pl-6 text-[#718096] mb-4">
            <li>{m['terms.payment_deposit']()}</li>
            <li>{m['terms.payment_progress']()}</li>
            <li>{m['terms.payment_final']()}</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-[#1A365D] mb-4">{m['terms.warranty_heading']()}</h2>
          <p class="text-[#718096] mb-4">
            {m['terms.warranty_text']()}
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-[#1A365D] mb-4">{m['terms.liability_heading']()}</h2>
          <p class="text-[#718096] mb-4">
            {m['terms.liability_text']()}
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-[#1A365D] mb-4">{m['terms.contact_heading']()}</h2>
          <p class="text-[#718096] mb-4">
            {m['terms.contact_intro']()}
          </p>
          <div class="text-[#718096]">
            <p>{m['terms.company_name']()}</p>
            <p>{m['terms.company_address1']()}</p>
            <p>{m['terms.company_address2']()}</p>
            <p>{m['terms.contact_email']()}</p>
            <p>{m['terms.contact_phone']()}</p>
            <p>{m['terms.license']()}</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</main>
