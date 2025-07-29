<script lang="ts">
    import { Phone, Mail, MapPin, Clock } from 'lucide-svelte';
  
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
      alert('Thank you for your interest! We\'ll contact you within 24 hours.');
    }
  </script>
  
  <section id="contact" class="py-20 bg-[#1A365D]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Get Your Free Estimate
        </h2>
        <p class="text-xl text-white/80 max-w-3xl mx-auto">
          Ready to transform your space? Contact us today for a free consultation and estimate.
        </p>
      </div>
  
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white rounded-2xl p-8 shadow-2xl">
          <h3 class="text-2xl font-bold text-[#1A365D] mb-6">
            Start Your Project
          </h3>
          
          <form on:submit={handleSubmit} class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-[#1A365D] font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  bind:value={formData.name}
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F6AD55] focus:border-transparent transition-all duration-200"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label class="block text-[#1A365D] font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  bind:value={formData.email}
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F6AD55] focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
  
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-[#1A365D] font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  bind:value={formData.phone}
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F6AD55] focus:border-transparent transition-all duration-200"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label class="block text-[#1A365D] font-semibold mb-2">
                  Project Type *
                </label>
                <select
                  name="projectType"
                  bind:value={formData.projectType}
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F6AD55] focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select project type</option>
                  <option value="kitchen">Kitchen Renovation</option>
                  <option value="bathroom">Bathroom Remodeling</option>
                  <option value="whole-home">Whole Home Renovation</option>
                  <option value="commercial">Commercial Construction</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
  
            <div>
              <label class="block text-[#1A365D] font-semibold mb-2">
                Estimated Budget
              </label>
              <select
                name="budget"
                bind:value={formData.budget}
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F6AD55] focus:border-transparent transition-all duration-200"
              >
                <option value="">Select budget range</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k-200k">$100,000 - $200,000</option>
                <option value="200k+">$200,000+</option>
              </select>
            </div>
  
            <div>
              <label class="block text-[#1A365D] font-semibold mb-2">
                Project Details *
              </label>
              <textarea
                name="message"
                bind:value={formData.message}
                required
                rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F6AD55] focus:border-transparent transition-all duration-200"
                placeholder="Tell us about your project vision, timeline, and any specific requirements..."
              />
            </div>
  
            <button
              type="submit"
              class="w-full bg-[#F6AD55] text-[#1A365D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F6AD55]/90 transition-all duration-200 hover:scale-[1.02]"
            >
              Get My Free Estimate
            </button>
          </form>
        </div>
  
        <!-- Contact Information -->
        <div class="space-y-8">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>
            
            <div class="space-y-6">
              <div class="flex items-center">
                <div class="bg-[#F6AD55] p-3 rounded-full mr-4">
                  <Phone class="w-6 h-6 text-[#1A365D]" />
                </div>
                <div>
                  <div class="text-white font-semibold">Phone</div>
                  <div class="text-white/80">(305) 555-0123</div>
                </div>
              </div>
  
              <div class="flex items-center">
                <div class="bg-[#F6AD55] p-3 rounded-full mr-4">
                  <Mail class="w-6 h-6 text-[#1A365D]" />
                </div>
                <div>
                  <div class="text-white font-semibold">Email</div>
                  <div class="text-white/80">info@wdsbuilders.com</div>
                </div>
              </div>
  
              <div class="flex items-center">
                <div class="bg-[#F6AD55] p-3 rounded-full mr-4">
                  <MapPin class="w-6 h-6 text-[#1A365D]" />
                </div>
                <div>
                  <div class="text-white font-semibold">Office</div>
                  <div class="text-white/80">123 Construction Ave<br />Miami, FL 33101</div>
                </div>
              </div>
  
              <div class="flex items-center">
                <div class="bg-[#F6AD55] p-3 rounded-full mr-4">
                  <Clock class="w-6 h-6 text-[#1A365D]" />
                </div>
                <div>
                  <div class="text-white font-semibold">Hours</div>
                  <div class="text-white/80">Mon-Fri: 8AM-6PM<br />Sat: 9AM-4PM</div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-white mb-4">
              Service Areas
            </h3>
            <p class="text-white/80 mb-4">
              We proudly serve South Florida including:
            </p>
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