# Project Brief: React to Svelte 5 Migration

## Project Overview
Migrating a React-based construction company marketing website (World Detail Specialist) to Svelte 5 with SvelteKit, maintaining the same functionality and design while leveraging modern Svelte features.

## Core Requirements
- **Source**: React application in `WDS/` folder with TypeScript, TailwindCSS, React Router
- **Target**: Svelte 5 + SvelteKit with TypeScript, TailwindCSS 4.0, Bun
- **Features**: Marketing website with multiple pages, portfolio, services, contact forms
- **Tech Stack**: Svelte 5, SvelteKit, TypeScript, TailwindCSS 4.0, Vite, Bun
- **Internationalization**: Paraglide translation system (en/es) - already configured
- **No Authentication**: Marketing site only, no user authentication required

## Key Goals
1. **Complete Migration**: Convert all React components to Svelte 5 components
2. **Routing**: Migrate from React Router to SvelteKit file-based routing
3. **State Management**: Replace React hooks with Svelte stores and reactive statements
4. **Performance**: Leverage SvelteKit's SSR and optimization features
5. **SEO**: Implement proper meta management and server-side rendering
6. **Translations**: Integrate all content with Paraglide translation system
7. **Best Practices**: Follow Svelte 5 and SvelteKit conventions

## Success Criteria
- All pages and components migrated and functional
- Routing works correctly with SvelteKit
- Translations implemented throughout
- Performance improvements over React version
- Clean, maintainable code structure
- SEO-optimized with proper meta tags

## Constraints
- Must maintain existing design and user experience
- No hardcoded text - everything must use translation system
- Use Bun as package manager
- Follow established file naming and organization conventions
