<script lang="ts">
    import { ChevronLeft, ChevronRight, Eye } from 'lucide-svelte';
    import * as m from '$lib/paraglide/messages';
    
    let currentProject = $state(0);
    let beforeAfterSlider = $state(50);
    let isHovering = $state(false);
    
    const projects = [
        {
            title: 'Modern Miami Kitchen',
            category: 'Kitchen Renovation',
            image: '/kitchen-after.jpg',
            beforeImage: '/kitchen-before.jpg',
            description: 'Complete transformation featuring custom cabinetry, quartz countertops, and premium appliances with smart home integration.',
            duration: '6 weeks',
            budget: '$45,000'
        },
        {
            title: 'Luxury Bathroom Suite',
            category: 'Bathroom Remodel',
            image: '/placeholder.svg?height=600&width=800&text=Luxury+Bathroom+After',
            beforeImage: '/placeholder.svg?height=600&width=800&text=Bathroom+Before',
            description: 'Spa-inspired design with marble finishes, rainfall shower, heated floors, and custom vanity with integrated lighting.',
            duration: '4 weeks',
            budget: '$32,000'
        },
        {
            title: 'Contemporary Office Space',
            category: 'Commercial Renovation',
            image: '/placeholder.svg?height=600&width=800&text=Office+Space+After',
            beforeImage: '/placeholder.svg?height=600&width=800&text=Office+Before',
            description: 'Modern office buildout with open floor plan, custom millwork, efficient LED lighting, and collaborative workspaces.',
            duration: '8 weeks',
            budget: '$75,000'
        }
    ];
    
    function nextProject() {
        currentProject = (currentProject + 1) % projects.length;
        beforeAfterSlider = 50; // Reset slider position
    }
    
    function prevProject() {
        currentProject = (currentProject - 1 + projects.length) % projects.length;
        beforeAfterSlider = 50; // Reset slider position
    }
    
    function handleSliderMove(event: MouseEvent) {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        beforeAfterSlider = Math.max(0, Math.min(100, percentage));
    }
</script>

<section id="portfolio" class="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-20">
            <div class="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Eye size={16} />
                Our Work
            </div>
            <h2 class="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Portfolio Showcase
            </h2>
            <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Discover our exceptional projects that blend innovative design with superior craftsmanship
            </p>
        </div>

        <!-- Main Portfolio Card -->
        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
            <!-- Project Navigation -->
            <div class="bg-slate-900 px-8 py-6">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <span class="text-slate-400 text-sm font-medium">Project {currentProject + 1} of {projects.length}</span>
                        <div class="w-px h-6 bg-slate-700"></div>
                        <span class="text-orange-400 font-semibold">{projects[currentProject].category}</span>
                    </div>
                    
                    <div class="flex items-center gap-3">
                        <button
                            onclick={prevProject}
                            class="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-all duration-200 hover:scale-105"
                            aria-label="Previous project"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        
                        <div class="flex gap-2">
                            {#each projects as _, index}
                                <button
                                    onclick={() => { currentProject = index; beforeAfterSlider = 50; }}
                                    class="w-2 h-2 rounded-full transition-all duration-300 {index === currentProject ? 'bg-orange-400 w-8' : 'bg-slate-600 hover:bg-slate-500'}"
                                    aria-label="Go to project {index + 1}"
                                ></button>
                            {/each}
                        </div>
                        
                        <button
                            onclick={nextProject}
                            class="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-all duration-200 hover:scale-105"
                            aria-label="Next project"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 xl:grid-cols-5 gap-0">
                <!-- Before/After Comparison -->
                <div class="xl:col-span-3 relative">
                    <div 
                        class="relative aspect-[4/3] overflow-hidden cursor-col-resize select-none"
                        onmousemove={handleSliderMove}
                        onmouseenter={() => isHovering = true}
                        onmouseleave={() => isHovering = false}
                        role="img"
                        aria-label="Before and after comparison"
                    >
                        <!-- After Image (Background) -->
                        <img
                            src={projects[currentProject].image || "/placeholder.svg"}
                            alt="{projects[currentProject].title} - After"
                            class="absolute inset-0 w-full h-full object-cover"
                        />
                        
                        <!-- Before Image (Overlay) -->
                        <div 
                            class="absolute inset-0 overflow-hidden transition-all duration-100"
                            style="clip-path: inset(0 {100 - beforeAfterSlider}% 0 0)"
                        >
                            <img
                                src={projects[currentProject].beforeImage || "/placeholder.svg"}
                                alt="{projects[currentProject].title} - Before"
                                class="w-full h-full object-cover"
                            />
                        </div>
                        
                        <!-- Slider Line -->
                        <div 
                            class="absolute top-0 bottom-0 w-1 bg-white shadow-lg transition-all duration-100 {isHovering ? 'opacity-100' : 'opacity-70'}"
                            style="left: {beforeAfterSlider}%; transform: translateX(-50%)"
                        >
                            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                                <div class="w-4 h-4 bg-orange-400 rounded-full"></div>
                            </div>
                        </div>
                        
                        <!-- Labels -->
                        <div class="absolute top-6 left-6 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                            Before
                        </div>
                        <div class="absolute top-6 right-6 bg-emerald-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                            After
                        </div>
                        
                        <!-- Instruction Overlay -->
                        {#if isHovering}
                            <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-lg text-sm font-medium">
                                Drag to compare
                            </div>
                        {/if}
                    </div>
                </div>

                <!-- Project Details -->
                <div class="xl:col-span-2 p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-slate-50 to-white">
                    <h3 class="text-4xl font-bold text-slate-900 mb-4 leading-tight">
                        {projects[currentProject].title}
                    </h3>
                    
                    <p class="text-slate-600 text-lg leading-relaxed mb-8">
                        {projects[currentProject].description}
                    </p>
                    
                    <!-- Project Stats -->
                    <div class="grid grid-cols-2 gap-6 mb-8">
                        <div class="bg-white p-4 rounded-xl border border-slate-200">
                            <div class="text-2xl font-bold text-slate-900">{projects[currentProject].duration}</div>
                            <div class="text-sm text-slate-500 font-medium">Duration</div>
                        </div>
                        <div class="bg-white p-4 rounded-xl border border-slate-200">
                            <div class="text-2xl font-bold text-slate-900">{projects[currentProject].budget}</div>
                            <div class="text-sm text-slate-500 font-medium">Investment</div>
                        </div>
                    </div>
                    
                    <div class="flex gap-4">
                        <button class="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg">
                            View Full Project
                        </button>
                        <button class="px-6 py-4 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold hover:border-orange-500 hover:text-orange-600 transition-all duration-200">
                            Get Quote
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Project Thumbnails -->
        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {#each projects as project, index}
                <button
                    onclick={() => { currentProject = index; beforeAfterSlider = 50; }}
                    class="group relative overflow-hidden rounded-2xl transition-all duration-300 {index === currentProject ? 'ring-4 ring-orange-400 scale-105' : 'hover:scale-102'}"
                >
                    <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        class="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div class="absolute bottom-4 left-4 right-4">
                        <h4 class="text-white font-semibold text-lg mb-1">{project.title}</h4>
                        <p class="text-orange-300 text-sm">{project.category}</p>
                    </div>
                    {#if index === currentProject}
                        <div class="absolute top-4 right-4 bg-orange-400 text-white p-2 rounded-full">
                            <Eye size={16} />
                        </div>
                    {/if}
                </button>
            {/each}
        </div>
    </div>
</section>
