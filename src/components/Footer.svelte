<script lang="ts">
    import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-svelte';
  
    // Navigation handler for internal links
    function handleNavigation(path: string) {
      // For SPA navigation, you would typically use your router here
      // For now, using standard navigation
      window.location.href = path;
    }
  
    // External link handler
    function handleExternalLink(url: string) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  </script>
  
  <footer class="bg-[#1A365D] text-white pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Company Info -->
        <div>
          <h3 class="text-2xl font-bold mb-4">WDS</h3>
          <p class="text-white/80 mb-4 leading-relaxed">
            South Florida's premier construction company, transforming homes and commercial spaces with unmatched craftsmanship and innovation.
          </p>
          <div class="flex space-x-4">
            <button 
              on:click={() => handleExternalLink('https://facebook.com')} 
              class="text-white/80 hover:text-[#F6AD55] transition-colors duration-200"
              aria-label="Visit our Facebook page"
            >
              <Facebook size={20} />
            </button>
            <button 
              on:click={() => handleExternalLink('https://instagram.com')} 
              class="text-white/80 hover:text-[#F6AD55] transition-colors duration-200"
              aria-label="Visit our Instagram page"
            >
              <Instagram size={20} />
            </button>
            <button 
              on:click={() => handleExternalLink('https://linkedin.com')} 
              class="text-white/80 hover:text-[#F6AD55] transition-colors duration-200"
              aria-label="Visit our LinkedIn page"
            >
              <Linkedin size={20} />
            </button>
          </div>
        </div>
  
        <!-- Services -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Services</h4>
          <ul class="space-y-2 text-white/80">
            <li>
              <button 
                on:click={() => handleNavigation('/services/kitchen')} 
                class="hover:text-[#F6AD55] transition-colors duration-200 text-left"
              >
                Kitchen Renovations
              </button>
            </li>
            <li>
              <button 
                on:click={() => handleNavigation('/services/bathroom')} 
                class="hover:text-[#F6AD55] transition-colors duration-200 text-left"
              >
                Bathroom Remodeling
              </button>
            </li>
            <li>
              <button 
                on:click={() => handleNavigation('/services/whole-home')} 
                class="hover:text-[#F6AD55] transition-colors duration-200 text-left"
              >
                Whole Home Renovations
              </button>
            </li>
            <li>
              <button 
                on:click={() => handleNavigation('/services/commercial')} 
                class="hover:text-[#F6AD55] transition-colors duration-200 text-left"
              >
                Commercial Construction
              </button>
            </li>
            <li>
              <button 
                on:click={() => handleNavigation('/services/millwork')} 
                class="hover:text-[#F6AD55] transition-colors duration-200 text-left"
              >
                Custom Millwork
              </button>
            </li>
          </ul>
        </div>
  
        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2 text-white/80">
            <li>
              <button 
                on:click={() => handleNavigation('/')} 
                class="hover:text-[#F6AD55] transition-colors duration-200 text-left"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                on:click={() => handleNavigation('/services')} 
                class="hover:text-[#F6AD55] transition-colors duration-200 text-left"
              >
                Services
              </button>
            </li>
            <li>
              <button 
                on:click={() => handleNavigation('/portfolio')} 
                class="hover:text-[#F6AD55] transition-colors duration-200 text-left"
              >
                Portfolio
              </button>
            </li>
            <li>
              <button 
                on:click={() => handleNavigation('/about')} 
                class="hover:text-[#F6AD55] transition-colors duration-200 text-left"
              >
                About
              </button>
            </li>
            <li>
              <button 
                on:click={() => handleNavigation('/contact')} 
                class="hover:text-[#F6AD55] transition-colors duration-200 text-left"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
  
        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Contact Info</h4>
          <div class="space-y-3 text-white/80">
            <div class="flex items-center">
              <Phone size={16} class="mr-3 text-[#F6AD55]" />
              <a href="tel:+13055550123" class="hover:text-[#F6AD55] transition-colors duration-200">
                (305) 555-0123
              </a>
            </div>
            <div class="flex items-center">
              <Mail size={16} class="mr-3 text-[#F6AD55]" />
              <a href="mailto:info@wdsbuilders.com" class="hover:text-[#F6AD55] transition-colors duration-200">
                info@wdsbuilders.com
              </a>
            </div>
            <div class="flex items-start">
              <MapPin size={16} class="mr-3 text-[#F6AD55] mt-1" />
              <a 
                href="https://maps.google.com/?q=123+Construction+Ave,+Miami,+FL+33101" 
                target="_blank" 
                rel="noopener noreferrer"
                class="hover:text-[#F6AD55] transition-colors duration-200"
              >
                123 Construction Ave<br />Miami, FL 33101
              </a>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Bottom Bar -->
      <div class="border-t border-white/20 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-white/80 mb-4 md:mb-0">
            © 2024 WDS Construction. All rights reserved.
          </div>
          <div class="flex space-x-6 text-white/80 text-sm">
            <button 
              on:click={() => handleNavigation('/privacy-policy')} 
              class="hover:text-[#F6AD55] transition-colors duration-200"
            >
              Privacy Policy
            </button>
            <button 
              on:click={() => handleNavigation('/terms-and-conditions')} 
              class="hover:text-[#F6AD55] transition-colors duration-200"
            >
              Terms of Service
            </button>
            <button 
              on:click={() => handleNavigation('/accessibility-statement')} 
              class="hover:text-[#F6AD55] transition-colors duration-200"
            >
              Accessibility
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>