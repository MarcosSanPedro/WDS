<script lang="ts">
	import { Phone, Mail, MapPin, Clock } from '@lucide/svelte';
	import * as m from '$lib/paraglide/messages';
  
	interface FormData {
	  name: string;
	  email: string;
	  phone: string;
	  projectType: string;
	  budget: string;
	  message: string;
	}
  
	let formData = $state<FormData>({
	  name: '',
	  email: '',
	  phone: '',
	  projectType: '',
	  budget: '',
	  message: ''
	});
  
	// For listing service areas via messages
	const serviceAreaKeys = [
	  'miami',
	  'fort_lauderdale',
	  'boca_raton',
	  'west_palm_beach',
	  'aventura',
	  'coral_gables'
	] as const;
  </script>
  
  <section id="contact" class="bg-[#1A365D] py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
	  <div class="mb-16 text-center">
		<h2 class="mb-4 text-4xl font-bold text-white md:text-5xl">
		  {m['contact.title']()}
		</h2>
		<p class="mx-auto max-w-3xl text-xl text-white/80">
		  {m['contact.lead']()}
		</p>
	  </div>
  
	  <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
		<!-- Contact Form -->
		<div class="rounded-2xl bg-white p-8 shadow-2xl">
		  <h3 class="mb-6 text-2xl font-bold text-[#1A365D]">
			{m['contact.form.title']()}
		  </h3>
  
		  <form
			action="https://formspree.io/f/xvgqwppq"
			method="POST"
			class="space-y-6"
		  >
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			  <div>
				<label for="name" class="mb-2 block font-semibold text-[#1A365D]">
				  {m['contact.form.labels.name']()}
				</label>
				<input
				  id="name"
				  type="text"
				  name="name"
				  bind:value={formData.name}
				  required
				  class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-secondary"
				  placeholder={m['contact.form.placeholders.name']()}
				/>
			  </div>
			  <div>
				<label for="email" class="mb-2 block font-semibold text-[#1A365D]">
				  {m['contact.form.labels.email']()}
				</label>
				<input
				  id="email"
				  type="email"
				  name="email"
				  bind:value={formData.email}
				  required
				  class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-secondary"
				  placeholder={m['contact.form.placeholders.email']()}
				/>
			  </div>
			</div>
  
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			  <div>
				<label for="phone" class="mb-2 block font-semibold text-[#1A365D]">
				  {m['contact.form.labels.phone']()}
				</label>
				<input
				  id="phone"
				  type="tel"
				  name="phone"
				  bind:value={formData.phone}
				  class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-secondary"
				  placeholder={m['contact.form.placeholders.phone']()}
				/>
			  </div>
			  <div>
				<label for="projectType" class="mb-2 block font-semibold text-[#1A365D]">
				  {m['contact.form.labels.project_type']()}
				</label>
				<select
				  id="projectType"
				  name="projectType"
				  bind:value={formData.projectType}
				  required
				  class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-secondary"
				>
				  <option value="">{m['contact.form.project_type.placeholder']()}</option>
				  <option value="residential">
					{m['contact.form.project_type.options.residential']()}
				  </option>
				  <option value="commercial">
					{m['contact.form.project_type.options.commercial']()}
				  </option>
				  <option value="custom">
					{m['contact.form.project_type.options.custom']()}
				  </option>
				</select>
			  </div>
			</div>
  
			<div>
			  <label for="budget" class="mb-2 block font-semibold text-[#1A365D]">
				{m['contact.form.labels.budget']()}
			  </label>
			  <select
				id="budget"
				name="budget"
				bind:value={formData.budget}
				class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-secondary"
			  >
				<option value="">{m['contact.form.budget.placeholder']()}</option>
				<option value="0-25k">{m['contact.form.budget.options.0_25k']()}</option>
				<option value="25k-50k">{m['contact.form.budget.options.25k_50k']()}</option>
				<option value="50k-100k">{m['contact.form.budget.options.50k_100k']()}</option>
				<option value="100k-200k">{m['contact.form.budget.options.100k_200k']()}</option>
				<option value="200k+">{m['contact.form.budget.options.200k_plus']()}</option>
			  </select>
			</div>
  
			<div>
			  <label for="message" class="mb-2 block font-semibold text-[#1A365D]">
				{m['contact.form.labels.message']()}
			  </label>
			  <textarea
				id="message"
				name="message"
				bind:value={formData.message}
				required
				rows="4"
				class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-secondary"
				placeholder={m['contact.form.placeholders.message']()}
			  ></textarea>
			</div>
  
			<button
			  type="submit"
			  class="w-full rounded-lg bg-secondary px-8 py-4 text-lg font-semibold text-[#1A365D] transition-all duration-200 hover:scale-[1.02] hover:bg-secondary/90"
			>
			  {m['contact.form.submit']()}
			</button>
		  </form>
		</div>
  
		<!-- Contact Information -->
		<div class="space-y-8">
		  <div class="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
			<h3 class="mb-6 text-2xl font-bold text-white">
			  {m['contact.info.title']()}
			</h3>
  
			<div class="space-y-6">
			  <div class="flex items-center">
				<div class="mr-4 rounded-full bg-secondary p-3">
				  <Phone class="h-6 w-6 text-[#1A365D]" />
				</div>
				<div>
				  <div class="font-semibold text-white">{m['contact.info.phone_label']()}</div>
				  <a href="tel:+13055550123" class="text-white/80">
					{m['contact.info.phone_value']()}
				  </a>
				</div>
			  </div>
  
			  <div class="flex items-center">
				<div class="mr-4 rounded-full bg-secondary p-3">
				  <Mail class="h-6 w-6 text-[#1A365D]" />
				</div>
				<div>
				  <div class="font-semibold text-white">{m['contact.info.email_label']()}</div>
				  <a href="mailto:info@wdsbuilders.com" class="text-white/80">
					{m['contact.info.email_value']()}
				  </a>
				</div>
			  </div>
  
			  <div class="flex items-center">
				<div class="mr-4 rounded-full bg-secondary p-3">
				  <MapPin class="h-6 w-6 text-[#1A365D]" />
				</div>
				<div>
				  <div class="font-semibold text-white">{m['contact.info.office_label']()}</div>
				  <div class="text-white/80">
					{m['contact.info.office_address_line1']()}<br />
					{m['contact.info.office_address_line2']()}
				  </div>
				</div>
			  </div>
  
			  <div class="flex items-center">
				<div class="mr-4 rounded-full bg-secondary p-3">
				  <Clock class="h-6 w-6 text-[#1A365D]" />
				</div>
				<div>
				  <div class="font-semibold text-white">{m['contact.info.hours_label']()}</div>
				  <div class="text-white/80">
					{@html m['contact.info.hours_value']().replace(/\n/g, '<br />')}
				  </div>
				</div>
			  </div>
			</div>
		  </div>
  
		  <div class="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
			<h3 class="mb-4 text-2xl font-bold text-white">
			  {m['contact.service_areas.title']()}
			</h3>
			<p class="mb-4 text-white/80">
			  {m['contact.service_areas.intro']()}
			</p>
			<div class="grid grid-cols-2 gap-2 text-white/70">
			  {#each serviceAreaKeys as key}
				<div>• {m[`contact.service_areas.items.${key}`]()}</div>
			  {/each}
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </section>
  