<script lang="ts">
  import * as m from '$lib/paraglide/messages';
</script>

<svelte:head>
  <title>{m['privacy.title']()}</title>
  <meta name="description" content={m['privacy.meta_description']()} />
</svelte:head>

<main class="pt-16">
  <div class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl md:text-5xl font-bold text-[#1A365D] mb-8">
        {m['privacy.heading']()}
      </h1>
      
      <div class="prose prose-lg max-w-none">
        <p class="text-[#718096] mb-6">
          <strong>{m['privacy.last_updated']()}</strong> {m['privacy.date']()}
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-[#1A365D] mb-4">{m['privacy.information_collect_heading']()}</h2>
          <p class="text-[#718096] mb-4">
            {m['privacy.information_collect_intro']()}
          </p>
          <ul class="list-disc pl-6 text-[#718096] mb-4">
            <li>{m['privacy.collect_item1']()}</li>
            <li>{m['privacy.collect_item2']()}</li>
            <li>{m['privacy.collect_item3']()}</li>
            <li>{m['privacy.collect_item4']()}</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-[#1A365D] mb-4">{m['privacy.how_use_heading']()}</h2>
          <p class="text-[#718096] mb-4">
            {m['privacy.how_use_intro']()}
          </p>
          <ul class="list-disc pl-6 text-[#718096] mb-4">
            <li>{m['privacy.use_item1']()}</li>
            <li>{m['privacy.use_item2']()}</li>
            <li>{m['privacy.use_item3']()}</li>
            <li>{m['privacy.use_item4']()}</li>
            <li>{m['privacy.use_item5']()}</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-[#1A365D] mb-4">{m['privacy.sharing_heading']()}</h2>
          <p class="text-[#718096] mb-4">
            {m['privacy.sharing_text']()}
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-[#1A365D] mb-4">{m['privacy.security_heading']()}</h2>
          <p class="text-[#718096] mb-4">
            {m['privacy.security_text']()}
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-[#1A365D] mb-4">{m['privacy.contact_heading']()}</h2>
          <p class="text-[#718096] mb-4">
            {m['privacy.contact_intro']()}
          </p>
          <div class="text-[#718096]">
            <p>{m['privacy.company_name']()}</p>
            <p>{m['privacy.company_address1']()}</p>
            <p>{m['privacy.company_address2']()}</p>
            <p>{m['privacy.contact_email']()}</p>
            <p>{m['privacy.contact_phone']()}</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</main>
