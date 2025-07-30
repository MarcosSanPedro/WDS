# Technical Context: React to Svelte 5 Migration

## Current React Application (WDS folder)
- **Framework**: React 18.3.1 with TypeScript
- **Routing**: React Router DOM 7.7.1
- **Styling**: TailwindCSS 3.4.1
- **Build Tool**: Vite 5.4.2
- **Icons**: Lucide React 0.344.0
- **Package Manager**: npm (has package-lock.json)

## Target SvelteKit Application
- **Framework**: Svelte 5.0.0 with SvelteKit 2.22.0
- **Language**: TypeScript 5.0.0
- **Styling**: TailwindCSS 4.0.0 with @tailwindcss/vite
- **Build Tool**: Vite 7.0.4
- **Package Manager**: Bun (configured with bun.lock)
- **Icons**: Lucide Svelte 0.534.0
- **Adapter**: @sveltejs/adapter-auto 6.0.0

## Translation System (Already Configured)
- **Library**: @inlang/paraglide-js 2.2.0
- **CLI**: @inlang/cli 3.0.0
- **Configuration**: project.inlang/settings.json
- **Languages**: English (en), Spanish (es)
- **Message Files**: messages/en.json, messages/es.json
- **Output**: src/lib/paraglide/ (auto-generated)

## Development Environment
- **OS**: Windows 11
- **Shell**: cmd.exe
- **Node Runtime**: Bun
- **Editor**: VSCode

## Key Technical Differences

### State Management
- **React**: useState, useEffect hooks
- **Svelte**: Reactive variables, reactive statements ($:), stores

### Component Structure
- **React**: JSX with function components
- **Svelte**: .svelte files with script/markup/style blocks

### Routing
- **React**: React Router with BrowserRouter, Routes, Route
- **Svelte**: SvelteKit file-based routing with +page.svelte

### Event Handling
- **React**: onClick, onChange props
- **Svelte**: on:click, on:change directives

### Props
- **React**: Props passed as function parameters
- **Svelte**: Props declared with export let

## Migration Challenges & Solutions

### 1. Hooks to Reactive Statements
```javascript
// React
const [isScrolled, setIsScrolled] = useState(false);
useEffect(() => {
  const handleScroll = () => setIsScrolled(window.scrollY > 50);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// Svelte
let isScrolled = false;
$: if (typeof window !== 'undefined') {
  const handleScroll = () => isScrolled = window.scrollY > 50;
  window.addEventListener('scroll', handleScroll);
}
```

### 2. Router Migration
```javascript
// React Router
<Route path="/services/kitchen-renovations" element={<KitchenRenovations />} />

// SvelteKit
// File: src/routes/services/kitchen-renovations/+page.svelte
```

### 3. Component Props
```javascript
// React
interface HeroProps {
  title: string;
  subtitle: string;
}
const Hero = ({ title, subtitle }: HeroProps) => { ... }

// Svelte
<script lang="ts">
  export let title: string;
  export let subtitle: string;
</script>
```

## Build Configuration

### Vite Config (Current)
- TailwindCSS 4.0 plugin
- SvelteKit plugin
- Paraglide plugin for translations
- TypeScript support

### Package Scripts
- `dev`: Development server
- `build`: Production build
- `preview`: Preview build
- `check`: Type checking
- `format`: Prettier formatting
- `machine-translate`: Auto-translation

## Performance Considerations
- **SSR**: SvelteKit provides server-side rendering out of the box
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Size**: Svelte compiles to smaller bundles than React
- **Hydration**: Faster hydration with Svelte's compiled approach

## SEO Improvements
- **Meta Tags**: SvelteKit's app.html and +page.ts for meta management
- **Server Rendering**: Better initial page load and SEO
- **Preloading**: SvelteKit's intelligent preloading

## Development Workflow
1. **Component Migration**: Convert React components one by one
2. **Route Setup**: Create SvelteKit route structure
3. **State Management**: Implement Svelte stores for shared state
4. **Translation Integration**: Add translation keys to all text
5. **Testing**: Verify functionality matches React version
6. **Optimization**: Leverage SvelteKit features for performance
