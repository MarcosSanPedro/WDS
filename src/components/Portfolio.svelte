<script lang="ts">
    import { ChevronLeft, ChevronRight, Eye } from '@lucide/svelte';
    import { tweened } from 'svelte/motion';
    import { cubicInOut } from 'svelte/easing';
    import { onMount } from 'svelte';
    import * as m from '$lib/paraglide/messages';

    let currentProject = $state(0);
    let animationInterval: number;

    // Use tweened for smoother and more modern animation control
    const beforeAfterSlider = tweened(0, {
        duration: 1000,
        easing: cubicInOut
    });

    const projects = [
        {
            title: m['portfolio.projects.modern_miami_kitchen.title'](),
            category: m['portfolio.projects.modern_miami_kitchen.category'](),
            image: '/portfolio/kitchen-after.webp',
            beforeImage: '/portfolio/kitchen-before.webp',
            description: m['portfolio.projects.modern_miami_kitchen.description'](),
            duration: m['portfolio.projects.modern_miami_kitchen.duration'](),
            budget: m['portfolio.projects.modern_miami_kitchen.budget']()
        },
        {
            title: m['portfolio.projects.luxury_bathroom_suite.title'](),
            category: m['portfolio.projects.luxury_bathroom_suite.category'](),
            image: '/portfolio/bath-after.webp',
            beforeImage: '/portfolio/bath-before.webp',
            description: m['portfolio.projects.luxury_bathroom_suite.description'](),
            duration: m['portfolio.projects.luxury_bathroom_suite.duration'](),
            budget: m['portfolio.projects.luxury_bathroom_suite.budget']()
        },
        {
            title: m['portfolio.projects.contemporary_office_space.title'](),
            category: m['portfolio.projects.contemporary_office_space.category'](),
            image: '/portfolio/office-after.webp',
            beforeImage: '/portfolio/office-before.webp',
            description: m['portfolio.projects.contemporary_office_space.description'](),
            duration: m['portfolio.projects.contemporary_office_space.duration'](),
            budget: m['portfolio.projects.contemporary_office_space.budget']()
        }
    ];

    function nextProject() {
        currentProject = (currentProject + 1) % projects.length;
        restartAnimation();
    }

    function prevProject() {
        currentProject = (currentProject - 1 + projects.length) % projects.length;
        restartAnimation();
    }

    function restartAnimation() {
        clearInterval(animationInterval);
        beforeAfterSlider.set(0, { duration: 0 });
        startAnimation();
    }

    function startAnimation() {
        animationInterval = setInterval(() => {
            beforeAfterSlider.update(current => {
                return current >= 95 ? 0 : 95;
            });
        }, 6000); // Increased to 6 seconds for better viewing experience

        // Initial animation with delay
        setTimeout(() => {
            beforeAfterSlider.set(95);
        }, 1000);
    }

    onMount(() => {
        startAnimation();
        return () => {
            clearInterval(animationInterval);
        };
    });
</script>

<section id="portfolio" class="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-20">
            <div class="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Eye size={16} />
                {m['portfolio.tag']()}
            </div>
            <h2 class="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                {m['portfolio.heading']()}
            </h2>
            <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                {m['portfolio.subheading']()}
            </p>
        </div>

        <!-- Main Portfolio Card -->
        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
            <!-- Project Navigation -->
            <div class="bg-slate-900 px-8 py-6">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <span class="text-slate-400 text-sm font-medium">{m['portfolio.pagination']()} {currentProject + 1} {m['portfolio.of']()} {projects.length}</span>
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
                                    onclick={() => { currentProject = index; restartAnimation(); }}
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
                        class="relative aspect-[4/3] overflow-hidden select-none"
                        role="img"
                        aria-label="Before and after comparison"
                    >
                        <!-- After Image (Background) -->
                        <img
                            src={projects[currentProject].image || "/placeholder.svg"}
                            alt="{projects[currentProject].title} - After"
                            class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                        />
                        
                        <!-- Before Image (Overlay) -->
                        <div 
                            class="absolute inset-0 overflow-hidden transition-all duration-1000 ease-in-out"
                            style="clip-path: inset(0 {100 - $beforeAfterSlider}% 0 0)"
                        >
                            <img
                                src={projects[currentProject].beforeImage || "/placeholder.svg"}
                                alt="{projects[currentProject].title} - Before"
                                class="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                            />
                        </div>
                        
                        <!-- Animated Slider Line -->
                        <div 
                            class="absolute top-0 bottom-0 w-1 bg-white shadow-lg transition-all duration-1000 ease-in-out"
                            style="left: {$beforeAfterSlider}%; transform: translateX(-50%)"
                        >
                            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                                <div class="w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                        
                        <!-- Labels -->
                        <div class="absolute top-6 left-6 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg transition-opacity duration-500 ease-in-out {$beforeAfterSlider < 50 ? 'opacity-100' : 'opacity-70'}">
                            Before
                        </div>
                        <div class="absolute top-6 right-6 bg-emerald-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg transition-opacity duration-500 ease-in-out {$beforeAfterSlider > 50 ? 'opacity-100' : 'opacity-70'}">
                            After
                        </div>
                    </div>
                </div>

                <!-- Project Details -->
                <div class="xl:col-span-2 p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-slate-50 to-white">
                    <h3 class="text-4xl font-bold text-slate-900 mb-4 leading-tight animate-fade-in">
                        {projects[currentProject].title}
                    </h3>
                    
                    <p class="text-slate-600 text-lg leading-relaxed mb-8 animate-fade-in">
                        {projects[currentProject].description}
                    </p>
                    
                    <!-- Project Stats -->
                    <div class="grid grid-cols-2 gap-6 mb-0">
                        <div class="bg-white p-4 rounded-xl border border-slate-200 animate-slide-up">
                            <div class="text-2xl font-bold text-slate-900">{projects[currentProject].duration}</div>
                            <div class="text-sm text-slate-500 font-medium">{m['portfolio.label_duration']()}</div>
                        </div>
                        <div class="bg-white p-4 rounded-xl border border-slate-200 animate-slide-up">
                            <div class="text-2xl font-bold text-slate-900">{projects[currentProject].budget}</div>
                            <div class="text-sm text-slate-500 font-medium">{m['portfolio.label_investment']()}</div>
                        </div>
                    </div>
                    
                    <div class="mt-8 pt-6 border-t border-slate-200">
                        <div class="flex items-center justify-center text-slate-400">
                            <div class="flex gap-1">
                                <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                                <div class="w-2 h-2 bg-slate-300 rounded-full"></div>
                                <div class="w-2 h-2 bg-slate-300 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Project Thumbnails -->
        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {#each projects as project, index}
                <button
                    onclick={() => { currentProject = index; restartAnimation(); }}
                    class="group relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out {index === currentProject ? 'ring-4 ring-orange-400 scale-105' : 'hover:scale-102'}"
                >
                    <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        class="w-full aspect-[4/3] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div class="absolute bottom-4 left-4 right-4">
                        <h4 class="text-white font-semibold text-lg mb-1 animate-fade-in">{project.title}</h4>
                        <p class="text-orange-300 text-sm animate-fade-in">{project.category}</p>
                    </div>
                    {#if index === currentProject}
                        <div class="absolute top-4 right-4 bg-orange-400 text-white p-2 rounded-full animate-pulse">
                            <Eye size={16} />
                        </div>
                    {/if}
                </button>
            {/each}
        </div>
    </div>
</section>

<style>
    .animate-fade-in {
        animation: fadeIn 0.5s ease-in-out;
    }

    .animate-slide-up {
        animation: slideUp 0.5s ease-in-out;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes slideUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
</style>