<script lang="ts">
	import { Phone, Mail, MapPin, Clock } from 'lucide-svelte';
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

	function handleInputChange(event: Event) {
		const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
		const { name, value } = target;

		formData[name as keyof FormData] = value;
	}

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		// Handle form submission here
		console.log('Form submitted:', formData);
		alert("Thank you for your interest! We'll contact you within 24 hours.");
	}
</script>

<section id="contact" class="bg-[#1A365D] py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-white md:text-5xl">
				{m['contact.title']()}
			</h2>
			<p class="mx-auto max-w-3xl text-xl text-white/80">
				Ready to transform your space? Contact us today for a free consultation and estimate.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
			<!-- Contact Form -->
			<div class="rounded-2xl bg-white p-8 shadow-2xl">
				<h3 class="mb-6 text-2xl font-bold text-[#1A365D]">Start Your Project</h3>

				<form
        action="https://formspree.io/f/xvgqwppq"
        method="POST"
        class="space-y-6"
        
				>
					<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div>
							<label for="name" class="mb-2 block font-semibold text-[#1A365D]">
								Full Name *
							</label>
							<input
								id="name"
								type="text"
								name="name"
								bind:value={formData.name}
								required
								class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-[#F6AD55]"
								placeholder="Your full name"
							/>
						</div>
						<div>
							<label for="email" class="mb-2 block font-semibold text-[#1A365D]">
								Email Address *
							</label>
							<input
								id="email"
								type="email"
								name="email"
								bind:value={formData.email}
								required
								class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-[#F6AD55]"
								placeholder="your.email@example.com"
							/>
						</div>
					</div>

					<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div>
							<label for="phone" class="mb-2 block font-semibold text-[#1A365D]">
								Phone Number
							</label>
							<input
								id="phone"
								type="tel"
								name="phone"
								bind:value={formData.phone}
								class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-[#F6AD55]"
								placeholder="(555) 123-4567"
							/>
						</div>
						<div>
							<label for="projectType" class="mb-2 block font-semibold text-[#1A365D]">
								Project Type *
							</label>
							<select
								id="projectType"
								name="projectType"
								bind:value={formData.projectType}
								required
								class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-[#F6AD55]"
							>
								<option value="">Select project type</option>
								<option value="kitchen">{m['services.kitchen']()}</option>
								<option value="bathroom">{m['services.bathroom']()}</option>
								<option value="whole-home">{m['services.whole_home']()}</option>
								<option value="commercial">{m['services.commercial']()}</option>
								<option value="other">Other</option>
							</select>
						</div>
					</div>

					<div>
						<label for="budget" class="mb-2 block font-semibold text-[#1A365D]">
							Estimated Budget
						</label>
						<select
							id="budget"
							name="budget"
							bind:value={formData.budget}
							class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-[#F6AD55]"
						>
							<option value="">Select budget range</option>
							<option value="0-25k">$0 - $25,000</option>
							<option value="25k-50k">$25,000 - $50,000</option>
							<option value="50k-100k">$50,000 - $100,000</option>
							<option value="100k-200k">$100,000 - $200,000</option>
							<option value="200k+">$200,000+</option>
						</select>
					</div>

					<div>
						<label for="message" class="mb-2 block font-semibold text-[#1A365D]">
							Project Details *
						</label>
						<textarea
							id="message"
							name="message"
							bind:value={formData.message}
							required
							rows="4"
							class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-[#F6AD55]"
							placeholder="Tell us about your project vision, timeline, and any specific requirements..."
						></textarea>
					</div>

					<button
						type="submit"
						class="w-full rounded-lg bg-[#F6AD55] px-8 py-4 text-lg font-semibold text-[#1A365D] transition-all duration-200 hover:scale-[1.02] hover:bg-[#F6AD55]/90"
					>
						{m['contact.get_estimate']()}
					</button>
				</form>
			</div>

			<!-- Contact Information -->
			<div class="space-y-8">
				<div class="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
					<h3 class="mb-6 text-2xl font-bold text-white">Contact Information</h3>

					<div class="space-y-6">
						<div class="flex items-center">
							<div class="mr-4 rounded-full bg-[#F6AD55] p-3">
								<Phone class="h-6 w-6 text-[#1A365D]" />
							</div>
							<div>
								<div class="font-semibold text-white">{m['contact.phone']()}</div>
								<div class="text-white/80">(305) 555-0123</div>
							</div>
						</div>

						<div class="flex items-center">
							<div class="mr-4 rounded-full bg-[#F6AD55] p-3">
								<Mail class="h-6 w-6 text-[#1A365D]" />
							</div>
							<div>
								<div class="font-semibold text-white">{m['contact.email']()}</div>
								<div class="text-white/80">info@wdsbuilders.com</div>
							</div>
						</div>

						<div class="flex items-center">
							<div class="mr-4 rounded-full bg-[#F6AD55] p-3">
								<MapPin class="h-6 w-6 text-[#1A365D]" />
							</div>
							<div>
								<div class="font-semibold text-white">Office</div>
								<div class="text-white/80">123 Construction Ave<br />Miami, FL 33101</div>
							</div>
						</div>

						<div class="flex items-center">
							<div class="mr-4 rounded-full bg-[#F6AD55] p-3">
								<Clock class="h-6 w-6 text-[#1A365D]" />
							</div>
							<div>
								<div class="font-semibold text-white">Hours</div>
								<div class="text-white/80">Mon-Fri: 8AM-6PM<br />Sat: 9AM-4PM</div>
							</div>
						</div>
					</div>
				</div>

				<div class="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
					<h3 class="mb-4 text-2xl font-bold text-white">Service Areas</h3>
					<p class="mb-4 text-white/80">We proudly serve South Florida including:</p>
					<div class="grid grid-cols-2 gap-2 text-white/70">
						<div>• Miami</div>
						<div>• Fort Lauderdale</div>
						<div>• Boca Raton</div>
						<div>• West Palm Beach</div>
						<div>• Aventura</div>
						<div>• Coral Gables</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
