<script lang="ts">
  import * as m from '$lib/paraglide/messages';
</script>

<svelte:head>
  <title>{m['accessibility.title']()}</title>
  <meta name="description" content={m['accessibility.meta_description']()} />
</svelte:head>

<main class="pt-16">
  <div class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl md:text-5xl font-bold text-[#1A365D] mb-8">
        {m['accessibility.heading']()}
      </h1>
      
      <div class="prose prose-lg max-w-none">
        <p class="text-[#718096] mb-6">
          <strong>{m['accessibility.last_updated']()}</strong> {m['accessibility.date']()}
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-[#1A365D] mb-4">{m['accessibility.commitment_heading']()}</h2>
          <p class="text-[#718096] mb-4">
            {m['accessibility.commitment_text']()}
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-[#1A365D] mb-4">{m['accessibility.standards_heading']()}</h2>
          <p class="text-[#718096] mb-4">
            {m['accessibility.standards_text']()}
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-[#1A365D] mb-4">{m['accessibility.features_heading']()}</h2>
          <p class="text-[#718096] mb-4">
            {m['accessibility.features_intro']()}
          </p>
          <ul class="list-disc pl-6 text-[#718096] mb-4">
            <li>{m['accessibility.feature_keyboard']()}</li>
            <li>{m['accessibility.feature_screen_reader']()}</li>
            <li>{m['accessibility.feature_contrast']()}</li>
            <li>{m['accessibility.feature_alt_text']()}</li>
            <li>{m['accessibility.feature_headings']()}</li>
            <li>{m['accessibility.feature_focus']()}</li>
            <li>{m['accessibility.feature_motion']()}</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-[#1A365D] mb-4">{m['accessibility.efforts_heading']()}</h2>
          <p class="text-[#718096] mb-4">
            {m['accessibility.efforts_text']()}
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-[#1A365D] mb-4">{m['accessibility.feedback_heading']()}</h2>
          <p class="text-[#718096] mb-4">
            {m['accessibility.feedback_text']()}
          </p>
          <div class="text-[#718096]">
            <p>{m['accessibility.contact_email']()}: accessibility@wdsbuilders.com</p>
            <p>{m['accessibility.contact_phone']()}: (305) 555-0123</p>
            <p>{m['accessibility.contact_mail']()}:<br />
            World Detail Specialist<br />
            123 Construction Ave<br />
            Miami, FL 33101</p>
          </div>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold text-[#1A365D] mb-4">{m['accessibility.alternative_heading']()}</h2>
          <p class="text-[#718096] mb-4">
            {m['accessibility.alternative_text']()}
          </p>
        </section>
      </div>
    </div>
  </div>
</main>
