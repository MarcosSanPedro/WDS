# Active Context: Migration in Progress

## Current Focus
Starting the React to Svelte 5 migration process. Setting up the foundation with proper project structure, translation system, and core components.

## Immediate Next Steps
1. **Create comprehensive translation keys** for all content from React app
2. **Set up Svelte stores** for shared state management
3. **Create TypeScript interfaces** for data structures
4. **Migrate Navigation component** as the foundation layout component
5. **Set up routing structure** with SvelteKit file-based routing

## Recent Decisions
- **Memory Bank Setup**: Established project documentation structure
- **Translation Strategy**: Use Paraglide system already configured, expand message files
- **Component Organization**: Follow lib/components structure with ui/, layout/, sections/ subdirectories
- **State Management**: Use Svelte stores for global state, reactive variables for local state

## Key Patterns Established
- **File Naming**: PascalCase for components, kebab-case for routes
- **Component Structure**: script/markup/style blocks with TypeScript
- **Translation Usage**: Import `m` from paraglide messages, use function calls
- **Styling**: Maintain existing TailwindCSS classes, leverage TailwindCSS 4.0 features

## Migration Strategy
1. **Foundation First**: Layout, navigation, routing structure
2. **Page by Page**: Start with Home page, then service pages
3. **Component Reuse**: Create reusable components in lib/components
4. **Progressive Enhancement**: Add SvelteKit features (SSR, preloading, etc.)

## Technical Considerations
- **Browser APIs**: Wrap in `typeof window !== 'undefined'` checks for SSR
- **Event Handling**: Convert React event handlers to Svelte directives
- **State Reactivity**: Use `$:` reactive statements instead of useEffect
- **Props**: Convert React props to Svelte `export let` declarations

## Content Structure Identified
From React app analysis:
- **Navigation**: Home, Services, Portfolio, About, Contact/Get Estimate
- **Home Sections**: Hero, StatsBar, Services, Portfolio, Process, Testimonials, Contact
- **Service Pages**: Kitchen, Bathroom, Whole Home, Commercial
- **Supporting Pages**: Privacy, Terms, Accessibility, 404

## Brand Elements to Maintain
- **Colors**: Navy (#1A365D), Orange (#F6AD55), White
- **Typography**: Existing font hierarchy and sizing
- **Animations**: Typewriter effect, scroll animations, hover effects
- **Layout**: Responsive design, mobile menu, fixed navigation

## Performance Goals
- **Bundle Size**: Reduce from React to Svelte compiled size
- **Load Time**: Improve with SSR and preloading
- **SEO**: Better meta management and server rendering
- **Accessibility**: Maintain existing accessibility features

## Quality Assurance
- **Functionality**: All features work identically to React version
- **Responsive**: Mobile and desktop layouts preserved
- **Translations**: All text properly internationalized
- **Performance**: Measurable improvements in key metrics
