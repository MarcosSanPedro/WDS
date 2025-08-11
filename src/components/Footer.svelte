<script lang="ts">
  import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-svelte';
  import * as m from '$lib/paraglide/messages';
</script>

<footer class="bg-[#1A365D] text-white pt-16 pb-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
      <!-- Company Info -->
      <div>
        <h3 class="text-2xl font-bold mb-4">{m['company.short_name']()}</h3>
        <p class="text-white/80 mb-4 leading-relaxed">
          {m['footer.company_description']()}
        </p>
        <div class="flex space-x-4">
          <a href="/" class="text-white/80 hover:text-[#F6AD55] transition-colors duration-200">
            <Facebook size={20} />
          </a>
          <a href="/" class="text-white/80 hover:text-[#F6AD55] transition-colors duration-200">
            <Instagram size={20} />
          </a>
          <a href="/" class="text-white/80 hover:text-[#F6AD55] transition-colors duration-200">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      <!-- Services -->
      <div>
        <h4 class="text-lg font-semibold mb-4">{m['footer.services_heading']()}</h4>
        <ul class="space-y-2 text-white/80">
          <li><a href="/services/residential/" class="hover:text-[#F6AD55] transition-colors duration-200">{m['footer.kitchen_renovations']()}</a></li>
          <li><a href="/services/residential/" class="hover:text-[#F6AD55] transition-colors duration-200">{m['footer.bathroom_remodeling']()}</a></li>
          <li><a href="/services/residential/" class="hover:text-[#F6AD55] transition-colors duration-200">{m['footer.whole_home_renovations']()}</a></li>
          <li><a href="/services/residential/" class="hover:text-[#F6AD55] transition-colors duration-200">{m['footer.commercial_construction']()}</a></li>
          <li><a href="/services/residential/" class="hover:text-[#F6AD55] transition-colors duration-200">{m['footer.custom_millwork']()}</a></li>
        </ul>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="text-lg font-semibold mb-4">{m['footer.quick_links']()}</h4>
        <ul class="space-y-2 text-white/80">
          <li><a href="/" class="hover:text-[#F6AD55] transition-colors duration-200">{m['footer.home']()}</a></li>
          <li><a href="/services" class="hover:text-[#F6AD55] transition-colors duration-200">{m['footer.services']()}</a></li>
          <li><a href="/portfolio" class="hover:text-[#F6AD55] transition-colors duration-200">{m['footer.portfolio']()}</a></li>
          <li><a href="/about" class="hover:text-[#F6AD55] transition-colors duration-200">{m['footer.about']()}</a></li>
          <li><a href="/contact" class="hover:text-[#F6AD55] transition-colors duration-200">{m['footer.contact']()}</a></li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div>
        <h4 class="text-lg font-semibold mb-4">{m['footer.contact_info']()}</h4>
        <div class="space-y-3 text-white/80">
          <div class="flex items-center">
            <Phone size={16} class="mr-3 text-[#F6AD55]" />
            <span>{m['footer.phone']()}</span>
          </div>
          <div class="flex items-center">
            <Mail size={16} class="mr-3 text-[#F6AD55]" />
            <span>{m['footer.email']()}</span>
          </div>
          <div class="flex items-start">
            <MapPin size={16} class="mr-3 text-[#F6AD55] mt-1" />
            <span class="whitespace-pre-line">{m['footer.address']()}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-white/20 pt-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="text-white/80 mb-4 md:mb-0">
          {m['footer.copyright']()}
        </div>
        <div class="flex space-x-6 text-white/80 text-sm">
          <a href="/privacy" class="hover:text-[#F6AD55] transition-colors duration-200">{m['footer.privacy_policy']()}</a>
          <a href="/terms" class="hover:text-[#F6AD55] transition-colors duration-200">{m['footer.terms_service']()}</a>
          <a href="/accessibility" class="hover:text-[#F6AD55] transition-colors duration-200">{m['footer.accessibility']()}</a>
        </div>
      </div>
    </div>
  </div>
</footer>
