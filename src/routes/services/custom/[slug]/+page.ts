import * as m  from '$lib/paraglide/messages';
import type { Services } from '$lib/types';
import {
	Layers,
	Droplet,
	Home,
	Leaf,
	Tv,
	Flame,
	Umbrella,
	Ruler,
	Box,
	Lightbulb,
	Paintbrush,
	Archive,
	Star,
	Monitor,
	PenTool,
	Volume2,
	Utensils,
	Shield,
	Settings,
	Hammer,
	Check,
	Users,
	Sun,
	PanelsTopLeft,
	Activity,
	TrendingUp,
	Grid,
	Thermometer,
	Plug,
	LayoutDashboard,
	Landmark,
	Route
} from 'lucide-svelte';

export const _services: Record<string, Services> = {
	'custom-home-builds': {
    slug: 'custom-home-builds',
    title: m['custom_details_services.custom_home_builds.title'](),
    goldTittle: m['custom_details_services.custom_home_builds.gold_title'](),
    subTittle: m['custom_details_services.custom_home_builds.subtitle'](),
    meta: {
      description: m['custom_details_services.custom_home_builds.meta.description'](),
      heroImage: '/custom/home-builds.jpg',
      priceTag: m['custom_details_services.custom_home_builds.meta.price_tag'](),
      timeline: m['custom_details_services.custom_home_builds.meta.timeline']()
    },
    overview: {
      heading: m['custom_details_services.custom_home_builds.overview.heading'](),
      paragraph: m['custom_details_services.custom_home_builds.overview.paragraph']()
    },
    trend_heading: m['custom_details_services.custom_home_builds.trends.heading'](),
    trend_description: m['custom_details_services.custom_home_builds.trends.description'](),
    trends: [
      {
        title: m['custom_details_services.custom_home_builds.trends.items.smart_home_integration.title'](),
        description: m['custom_details_services.custom_home_builds.trends.items.smart_home_integration.description'](),
        icon: Monitor
      },
      {
        title: m['custom_details_services.custom_home_builds.trends.items.energy_efficient_design.title'](),
        description: m['custom_details_services.custom_home_builds.trends.items.energy_efficient_design.description'](),
        icon: Leaf
      },
      {
        title: m['custom_details_services.custom_home_builds.trends.items.multi_generational_layouts.title'](),
        description: m['custom_details_services.custom_home_builds.trends.items.multi_generational_layouts.description'](),
        icon: Users
      }
    ],
    featuresTittle: m['custom_details_services.custom_home_builds.features.title'](),
    featuresSubtittle: m['custom_details_services.custom_home_builds.features.subtitle'](),
    features: [
      {
        title: m['custom_details_services.custom_home_builds.features.items.custom_floor_plans.title'](),
        description: m['custom_details_services.custom_home_builds.features.items.custom_floor_plans.description'](),
        icon: Ruler
      },
      {
        title: m['custom_details_services.custom_home_builds.features.items.premium_finishes.title'](),
        description: m['custom_details_services.custom_home_builds.features.items.premium_finishes.description'](),
        icon: Star
      },
      {
        title: m['custom_details_services.custom_home_builds.features.items.outdoor_living.title'](),
        description: m['custom_details_services.custom_home_builds.features.items.outdoor_living.description'](),
        icon: Sun
      },
      {
        title: m['custom_details_services.custom_home_builds.features.items.structural_integrity.title'](),
        description: m['custom_details_services.custom_home_builds.features.items.structural_integrity.description'](),
        icon: Shield
      }
    ],
    process: [
      { title: m['custom_details_services.custom_home_builds.process.steps.consultation.title'](), desc: m['custom_details_services.custom_home_builds.process.steps.consultation.desc']() },
      { title: m['custom_details_services.custom_home_builds.process.steps.design.title'](), desc: m['custom_details_services.custom_home_builds.process.steps.design.desc']() },
      { title: m['custom_details_services.custom_home_builds.process.steps.selections.title'](), desc: m['custom_details_services.custom_home_builds.process.steps.selections.desc']() },
      { title: m['custom_details_services.custom_home_builds.process.steps.construction.title'](), desc: m['custom_details_services.custom_home_builds.process.steps.construction.desc']() },
      { title: m['custom_details_services.custom_home_builds.process.steps.handover.title'](), desc: m['custom_details_services.custom_home_builds.process.steps.handover.desc']() }
    ],
    styles: {
      modern: [
        'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
      ],
      traditional: [
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
      ],
      contemporary: [
        'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
      ]
    },
    faqs: [
      { question: m['custom_details_services.custom_home_builds.faqs.items.permits_inspections.question'](), answer: m['custom_details_services.custom_home_builds.faqs.items.permits_inspections.answer']() },
      { question: m['custom_details_services.custom_home_builds.faqs.items.bring_architect.question'](), answer: m['custom_details_services.custom_home_builds.faqs.items.bring_architect.answer']() },
      { question: m['custom_details_services.custom_home_builds.faqs.items.budget_control.question'](), answer: m['custom_details_services.custom_home_builds.faqs.items.budget_control.answer']() },
      { question: m['custom_details_services.custom_home_builds.faqs.items.site_selection.question'](), answer: m['custom_details_services.custom_home_builds.faqs.items.site_selection.answer']() },
      { question: m['custom_details_services.custom_home_builds.faqs.items.warranties.question'](), answer: m['custom_details_services.custom_home_builds.faqs.items.warranties.answer']() },
      { question: m['custom_details_services.custom_home_builds.faqs.items.changes_during_build.question'](), answer: m['custom_details_services.custom_home_builds.faqs.items.changes_during_build.answer']() }
    ],
    cta: {
      heading: m['custom_details_services.custom_home_builds.cta.heading'](),
      subheading: m['custom_details_services.custom_home_builds.cta.subheading'](),
      button: m['custom_details_services.custom_home_builds.cta.button']()
    }
  },

  'unique-architectural-features': {
    slug: 'unique-architectural-features',
    title: m['custom_details_services.unique_architectural_features.title'](),
    goldTittle: m['custom_details_services.unique_architectural_features.gold_title'](),
    subTittle: m['custom_details_services.unique_architectural_features.subtitle'](),
    meta: {
      description: m['custom_details_services.unique_architectural_features.meta.description'](),
      heroImage: '/custom/architectural.jpg',
      priceTag: m['custom_details_services.unique_architectural_features.meta.price_tag'](),
      timeline: m['custom_details_services.unique_architectural_features.meta.timeline']()
    },
    overview: {
      heading: m['custom_details_services.unique_architectural_features.overview.heading'](),
      paragraph: m['custom_details_services.unique_architectural_features.overview.paragraph']()
    },
    trend_heading: m['custom_details_services.unique_architectural_features.trends.heading'](),
    trend_description: m['custom_details_services.unique_architectural_features.trends.description'](),
    trends: [
      {
        title: m['custom_details_services.unique_architectural_features.trends.items.floating_staircases.title'](),
        description: m['custom_details_services.unique_architectural_features.trends.items.floating_staircases.description'](),
        icon: TrendingUp
      },
      {
        title: m['custom_details_services.unique_architectural_features.trends.items.geometric_facades.title'](),
        description: m['custom_details_services.unique_architectural_features.trends.items.geometric_facades.description'](),
        icon: Grid
      },
      {
        title: m['custom_details_services.unique_architectural_features.trends.items.sustainable_materials.title'](),
        description: m['custom_details_services.unique_architectural_features.trends.items.sustainable_materials.description'](),
        icon: Leaf
      }
    ],
    featuresTittle: m['custom_details_services.unique_architectural_features.features.title'](),
    featuresSubtittle: m['custom_details_services.unique_architectural_features.features.subtitle'](),
    features: [
      {
        title: m['custom_details_services.unique_architectural_features.features.items.signature_staircases.title'](),
        description: m['custom_details_services.unique_architectural_features.features.items.signature_staircases.description'](),
        icon: Activity
      },
      {
        title: m['custom_details_services.unique_architectural_features.features.items.architectural_facades.title'](),
        description: m['custom_details_services.unique_architectural_features.features.items.architectural_facades.description'](),
        icon: Home
      },
      {
        title: m['custom_details_services.unique_architectural_features.features.items.feature_walls.title'](),
        description: m['custom_details_services.unique_architectural_features.features.items.feature_walls.description'](),
        icon: Layers
      },
      {
        title: m['custom_details_services.unique_architectural_features.features.items.custom_metal_glass.title'](),
        description: m['custom_details_services.unique_architectural_features.features.items.custom_metal_glass.description'](),
        icon: PanelsTopLeft
      }
    ],
    process: [
      { title: m['custom_details_services.unique_architectural_features.process.steps.consultation.title'](), desc: m['custom_details_services.unique_architectural_features.process.steps.consultation.desc']() },
      { title: m['custom_details_services.unique_architectural_features.process.steps.design_engineering.title'](), desc: m['custom_details_services.unique_architectural_features.process.steps.design_engineering.desc']() },
      { title: m['custom_details_services.unique_architectural_features.process.steps.fabrication.title'](), desc: m['custom_details_services.unique_architectural_features.process.steps.fabrication.desc']() },
      { title: m['custom_details_services.unique_architectural_features.process.steps.installation.title'](), desc: m['custom_details_services.unique_architectural_features.process.steps.installation.desc']() }
    ],
    styles: {
      modern: ['https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'],
      traditional: ['https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'],
      contemporary: ['https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop']
    },
    faqs: [
      { question: m['custom_details_services.unique_architectural_features.faqs.items.match_style.question'](), answer: m['custom_details_services.unique_architectural_features.faqs.items.match_style.answer']() },
      { question: m['custom_details_services.unique_architectural_features.faqs.items.meet_code.question'](), answer: m['custom_details_services.unique_architectural_features.faqs.items.meet_code.answer']() },
      { question: m['custom_details_services.unique_architectural_features.faqs.items.materials_used.question'](), answer: m['custom_details_services.unique_architectural_features.faqs.items.materials_used.answer']() },
      { question: m['custom_details_services.unique_architectural_features.faqs.items.fabrication_time.question'](), answer: m['custom_details_services.unique_architectural_features.faqs.items.fabrication_time.answer']() },
      { question: m['custom_details_services.unique_architectural_features.faqs.items.shop_drawings.question'](), answer: m['custom_details_services.unique_architectural_features.faqs.items.shop_drawings.answer']() },
      { question: m['custom_details_services.unique_architectural_features.faqs.items.integrated_lighting.question'](), answer: m['custom_details_services.unique_architectural_features.faqs.items.integrated_lighting.answer']() }
    ],
    cta: {
      heading: m['custom_details_services.unique_architectural_features.cta.heading'](),
      subheading: m['custom_details_services.unique_architectural_features.cta.subheading'](),
      button: m['custom_details_services.unique_architectural_features.cta.button']()
    }
  },

  'specialty-renovations': {
    slug: 'specialty-renovations',
    title: m['custom_details_services.specialty_renovations.title'](),
    goldTittle: m['custom_details_services.specialty_renovations.gold_title'](),
    subTittle: m['custom_details_services.specialty_renovations.subtitle'](),
    meta: {
      description: m['custom_details_services.specialty_renovations.meta.description'](),
      heroImage: '/custom/specialty.jpeg',
      priceTag: m['custom_details_services.specialty_renovations.meta.price_tag'](),
      timeline: m['custom_details_services.specialty_renovations.meta.timeline']()
    },
    overview: {
      heading: m['custom_details_services.specialty_renovations.overview.heading'](),
      paragraph: m['custom_details_services.specialty_renovations.overview.paragraph']()
    },
    trend_heading: m['custom_details_services.specialty_renovations.trends.heading'](),
    trend_description: m['custom_details_services.specialty_renovations.trends.description'](),
    trends: [
      {
        title: m['custom_details_services.specialty_renovations.trends.items.luxury_entertainment_rooms.title'](),
        description: m['custom_details_services.specialty_renovations.trends.items.luxury_entertainment_rooms.description'](),
        icon: Tv
      },
      {
        title: m['custom_details_services.specialty_renovations.trends.items.custom_wine_storage.title'](),
        description: m['custom_details_services.specialty_renovations.trends.items.custom_wine_storage.description'](),
        icon: Droplet
      },
      {
        title: m['custom_details_services.specialty_renovations.trends.items.creative_workspaces.title'](),
        description: m['custom_details_services.specialty_renovations.trends.items.creative_workspaces.description'](),
        icon: PenTool
      }
    ],
    featuresTittle: m['custom_details_services.specialty_renovations.features.title'](),
    featuresSubtittle: m['custom_details_services.specialty_renovations.features.subtitle'](),
    features: [
      {
        title: m['custom_details_services.specialty_renovations.features.items.acoustic_engineering.title'](),
        description: m['custom_details_services.specialty_renovations.features.items.acoustic_engineering.description'](),
        icon: Volume2
      },
      {
        title: m['custom_details_services.specialty_renovations.features.items.environmental_control.title'](),
        description: m['custom_details_services.specialty_renovations.features.items.environmental_control.description'](),
        icon: Thermometer
      },
      {
        title: m['custom_details_services.specialty_renovations.features.items.custom_millwork.title'](),
        description: m['custom_details_services.specialty_renovations.features.items.custom_millwork.description'](),
        icon: Archive
      },
      {
        title: m['custom_details_services.specialty_renovations.features.items.integrated_av_lighting.title'](),
        description: m['custom_details_services.specialty_renovations.features.items.integrated_av_lighting.description'](),
        icon: Lightbulb
      }
    ],
    process: [
      { title: m['custom_details_services.specialty_renovations.process.steps.consultation.title'](), desc: m['custom_details_services.specialty_renovations.process.steps.consultation.desc']() },
      { title: m['custom_details_services.specialty_renovations.process.steps.design.title'](), desc: m['custom_details_services.specialty_renovations.process.steps.design.desc']() },
      { title: m['custom_details_services.specialty_renovations.process.steps.build.title'](), desc: m['custom_details_services.specialty_renovations.process.steps.build.desc']() },
      { title: m['custom_details_services.specialty_renovations.process.steps.handover.title'](), desc: m['custom_details_services.specialty_renovations.process.steps.handover.desc']() }
    ],
    styles: {
      modern: ['https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'],
      traditional: ['https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'],
      contemporary: ['https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop']
    },
    faqs: [
      { question: m['custom_details_services.specialty_renovations.faqs.items.specialized_equipment.question'](), answer: m['custom_details_services.specialty_renovations.faqs.items.specialized_equipment.answer']() },
      { question: m['custom_details_services.specialty_renovations.faqs.items.multipurpose_rooms.question'](), answer: m['custom_details_services.specialty_renovations.faqs.items.multipurpose_rooms.answer']() },
      { question: m['custom_details_services.specialty_renovations.faqs.items.noise_transfer.question'](), answer: m['custom_details_services.specialty_renovations.faqs.items.noise_transfer.answer']() },
      { question: m['custom_details_services.specialty_renovations.faqs.items.wine_climate_control.question'](), answer: m['custom_details_services.specialty_renovations.faqs.items.wine_climate_control.answer']() },
      { question: m['custom_details_services.specialty_renovations.faqs.items.smart_controls.question'](), answer: m['custom_details_services.specialty_renovations.faqs.items.smart_controls.answer']() },
      { question: m['custom_details_services.specialty_renovations.faqs.items.permits.question'](), answer: m['custom_details_services.specialty_renovations.faqs.items.permits.answer']() }
    ],
    cta: {
      heading: m['custom_details_services.specialty_renovations.cta.heading'](),
      subheading: m['custom_details_services.specialty_renovations.cta.subheading'](),
      button: m['custom_details_services.specialty_renovations.cta.button']()
    }
  },

  'custom-outdoor-structures': {
    slug: 'custom-outdoor-structures',
    title: m['custom_details_services.custom_outdoor_structures.title'](),
    goldTittle: m['custom_details_services.custom_outdoor_structures.gold_title'](),
    subTittle: m['custom_details_services.custom_outdoor_structures.subtitle'](),
    meta: {
      description: m['custom_details_services.custom_outdoor_structures.meta.description'](),
      heroImage: '/custom/outdoors.jpg',
      priceTag: m['custom_details_services.custom_outdoor_structures.meta.price_tag'](),
      timeline: m['custom_details_services.custom_outdoor_structures.meta.timeline']()
    },
    overview: {
      heading: m['custom_details_services.custom_outdoor_structures.overview.heading'](),
      paragraph: m['custom_details_services.custom_outdoor_structures.overview.paragraph']()
    },
    trend_heading: m['custom_details_services.custom_outdoor_structures.trends.heading'](),
    trend_description: m['custom_details_services.custom_outdoor_structures.trends.description'](),
    trends: [
      {
        title: m['custom_details_services.custom_outdoor_structures.trends.items.outdoor_kitchens.title'](),
        description: m['custom_details_services.custom_outdoor_structures.trends.items.outdoor_kitchens.description'](),
        icon: Utensils
      },
      {
        title: m['custom_details_services.custom_outdoor_structures.trends.items.covered_lounges.title'](),
        description: m['custom_details_services.custom_outdoor_structures.trends.items.covered_lounges.description'](),
        icon: Umbrella
      },
      {
        title: m['custom_details_services.custom_outdoor_structures.trends.items.fire_features.title'](),
        description: m['custom_details_services.custom_outdoor_structures.trends.items.fire_features.description'](),
        icon: Flame
      }
    ],
    featuresTittle: m['custom_details_services.custom_outdoor_structures.features.title'](),
    featuresSubtittle: m['custom_details_services.custom_outdoor_structures.features.subtitle'](),
    features: [
      {
        title: m['custom_details_services.custom_outdoor_structures.features.items.premium_materials.title'](),
        description: m['custom_details_services.custom_outdoor_structures.features.items.premium_materials.description'](),
        icon: Layers
      },
      {
        title: m['custom_details_services.custom_outdoor_structures.features.items.utility_integration.title'](),
        description: m['custom_details_services.custom_outdoor_structures.features.items.utility_integration.description'](),
        icon: Plug
      },
      {
        title: m['custom_details_services.custom_outdoor_structures.features.items.shade_weathering.title'](),
        description: m['custom_details_services.custom_outdoor_structures.features.items.shade_weathering.description'](),
        icon: Sun
      },
      {
        title: m['custom_details_services.custom_outdoor_structures.features.items.lighting_audio.title'](),
        description: m['custom_details_services.custom_outdoor_structures.features.items.lighting_audio.description'](),
        icon: Lightbulb
      }
    ],
    process: [
      { title: m['custom_details_services.custom_outdoor_structures.process.steps.consultation.title'](), desc: m['custom_details_services.custom_outdoor_structures.process.steps.consultation.desc']() },
      { title: m['custom_details_services.custom_outdoor_structures.process.steps.design.title'](), desc: m['custom_details_services.custom_outdoor_structures.process.steps.design.desc']() },
      { title: m['custom_details_services.custom_outdoor_structures.process.steps.build.title'](), desc: m['custom_details_services.custom_outdoor_structures.process.steps.build.desc']() },
      { title: m['custom_details_services.custom_outdoor_structures.process.steps.final_touches.title'](), desc: m['custom_details_services.custom_outdoor_structures.process.steps.final_touches.desc']() }
    ],
    styles: {
      modern: ['https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'],
      traditional: ['https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'],
      contemporary: ['https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop']
    },
    faqs: [
      { question: m['custom_details_services.custom_outdoor_structures.faqs.items.weatherproof.question'](), answer: m['custom_details_services.custom_outdoor_structures.faqs.items.weatherproof.answer']() },
      { question: m['custom_details_services.custom_outdoor_structures.faqs.items.add_utilities.question'](), answer: m['custom_details_services.custom_outdoor_structures.faqs.items.add_utilities.answer']() },
      { question: m['custom_details_services.custom_outdoor_structures.faqs.items.obtain_permits.question'](), answer: m['custom_details_services.custom_outdoor_structures.faqs.items.obtain_permits.answer']() },
      { question: m['custom_details_services.custom_outdoor_structures.faqs.items.uneven_yards.question'](), answer: m['custom_details_services.custom_outdoor_structures.faqs.items.uneven_yards.answer']() },
      { question: m['custom_details_services.custom_outdoor_structures.faqs.items.maintenance.question'](), answer: m['custom_details_services.custom_outdoor_structures.faqs.items.maintenance.answer']() },
      { question: m['custom_details_services.custom_outdoor_structures.faqs.items.privacy_design.question'](), answer: m['custom_details_services.custom_outdoor_structures.faqs.items.privacy_design.answer']() }
    ],
    cta: {
      heading: m['custom_details_services.custom_outdoor_structures.cta.heading'](),
      subheading: m['custom_details_services.custom_outdoor_structures.cta.subheading'](),
      button: m['custom_details_services.custom_outdoor_structures.cta.button']()
    }
  },

  'historical-restorations': {
    slug: 'historical-restorations',
    title: m['custom_details_services.historical_restorations.title'](),
    goldTittle: m['custom_details_services.historical_restorations.gold_title'](),
    subTittle: m['custom_details_services.historical_restorations.subtitle'](),
    meta: {
      description: m['custom_details_services.historical_restorations.meta.description'](),
      heroImage: '/custom/historical.jpg',
      priceTag: m['custom_details_services.historical_restorations.meta.price_tag'](),
      timeline: m['custom_details_services.historical_restorations.meta.timeline']()
    },
    overview: {
      heading: m['custom_details_services.historical_restorations.overview.heading'](),
      paragraph: m['custom_details_services.historical_restorations.overview.paragraph']()
    },
    trend_heading: m['custom_details_services.historical_restorations.trends.heading'](),
    trend_description: m['custom_details_services.historical_restorations.trends.description'](),
    trends: [
      {
        title: m['custom_details_services.historical_restorations.trends.items.material_matching.title'](),
        description: m['custom_details_services.historical_restorations.trends.items.material_matching.description'](),
        icon: Layers
      },
      {
        title: m['custom_details_services.historical_restorations.trends.items.structural_reinforcement.title'](),
        description: m['custom_details_services.historical_restorations.trends.items.structural_reinforcement.description'](),
        icon: Shield
      },
      {
        title: m['custom_details_services.historical_restorations.trends.items.discreet_amenities.title'](),
        description: m['custom_details_services.historical_restorations.trends.items.discreet_amenities.description'](),
        icon: Settings
      }
    ],
    featuresTittle: m['custom_details_services.historical_restorations.features.title'](),
    featuresSubtittle: m['custom_details_services.historical_restorations.features.subtitle'](),
    features: [
      {
        title: m['custom_details_services.historical_restorations.features.items.craft_preservation.title'](),
        description: m['custom_details_services.historical_restorations.features.items.craft_preservation.description'](),
        icon: Hammer
      },
      {
        title: m['custom_details_services.historical_restorations.features.items.period_accurate_details.title'](),
        description: m['custom_details_services.historical_restorations.features.items.period_accurate_details.description'](),
        icon: Ruler
      },
      {
        title: m['custom_details_services.historical_restorations.features.items.life_safety_upgrades.title'](),
        description: m['custom_details_services.historical_restorations.features.items.life_safety_upgrades.description'](),
        icon: Check
      },
      {
        title: m['custom_details_services.historical_restorations.features.items.moisture_envelope.title'](),
        description: m['custom_details_services.historical_restorations.features.items.moisture_envelope.description'](),
        icon: Droplet
      }
    ],
    process: [
      { title: m['custom_details_services.historical_restorations.process.steps.assessment.title'](), desc: m['custom_details_services.historical_restorations.process.steps.assessment.desc']() },
      { title: m['custom_details_services.historical_restorations.process.steps.design.title'](), desc: m['custom_details_services.historical_restorations.process.steps.design.desc']() },
      { title: m['custom_details_services.historical_restorations.process.steps.restoration.title'](), desc: m['custom_details_services.historical_restorations.process.steps.restoration.desc']() },
      { title: m['custom_details_services.historical_restorations.process.steps.integration.title'](), desc: m['custom_details_services.historical_restorations.process.steps.integration.desc']() }
    ],
    styles: {
      modern: ['https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'],
      traditional: ['https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'],
      contemporary: ['https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop']
    },
    faqs: [
      { question: m['custom_details_services.historical_restorations.faqs.items.preservation_boards.question'](), answer: m['custom_details_services.historical_restorations.faqs.items.preservation_boards.answer']() },
      { question: m['custom_details_services.historical_restorations.faqs.items.modern_amenities.question'](), answer: m['custom_details_services.historical_restorations.faqs.items.modern_amenities.answer']() },
      { question: m['custom_details_services.historical_restorations.faqs.items.match_materials.question'](), answer: m['custom_details_services.historical_restorations.faqs.items.match_materials.answer']() },
      { question: m['custom_details_services.historical_restorations.faqs.items.hazard_materials.question'](), answer: m['custom_details_services.historical_restorations.faqs.items.hazard_materials.answer']() },
      { question: m['custom_details_services.historical_restorations.faqs.items.insulation_moisture.question'](), answer: m['custom_details_services.historical_restorations.faqs.items.insulation_moisture.answer']() },
      { question: m['custom_details_services.historical_restorations.faqs.items.documentation.question'](), answer: m['custom_details_services.historical_restorations.faqs.items.documentation.answer']() }
    ],
    cta: {
      heading: m['custom_details_services.historical_restorations.cta.heading'](),
      subheading: m['custom_details_services.historical_restorations.cta.subheading'](),
      button: m['custom_details_services.historical_restorations.cta.button']()
    }
  },

  'custom-commercial-builds': {
    slug: 'custom-commercial-builds',
    title: m['custom_details_services.custom_commercial_builds.title'](),
    goldTittle: m['custom_details_services.custom_commercial_builds.gold_title'](),
    subTittle: m['custom_details_services.custom_commercial_builds.subtitle'](),
    meta: {
      description: m['custom_details_services.custom_commercial_builds.meta.description'](),
      heroImage: '/custom/commercial-builds.jpg',
      priceTag: m['custom_details_services.custom_commercial_builds.meta.price_tag'](),
      timeline: m['custom_details_services.custom_commercial_builds.meta.timeline']()
    },
    overview: {
      heading: m['custom_details_services.custom_commercial_builds.overview.heading'](),
      paragraph: m['custom_details_services.custom_commercial_builds.overview.paragraph']()
    },
    trend_heading: m['custom_details_services.custom_commercial_builds.trends.heading'](),
    trend_description: m['custom_details_services.custom_commercial_builds.trends.description'](),
    trends: [
      {
        title: m['custom_details_services.custom_commercial_builds.trends.items.experience_driven_design.title'](),
        description: m['custom_details_services.custom_commercial_builds.trends.items.experience_driven_design.description'](),
        icon: Star
      },
      {
        title: m['custom_details_services.custom_commercial_builds.trends.items.tech_integrated_spaces.title'](),
        description: m['custom_details_services.custom_commercial_builds.trends.items.tech_integrated_spaces.description'](),
        icon: Monitor
      },
      {
        title: m['custom_details_services.custom_commercial_builds.trends.items.sustainable_construction.title'](),
        description: m['custom_details_services.custom_commercial_builds.trends.items.sustainable_construction.description'](),
        icon: Leaf
      }
    ],
    featuresTittle: m['custom_details_services.custom_commercial_builds.features.title'](),
    featuresSubtittle: m['custom_details_services.custom_commercial_builds.features.subtitle'](),
    features: [
      {
        title: m['custom_details_services.custom_commercial_builds.features.items.custom_storefronts.title'](),
        description: m['custom_details_services.custom_commercial_builds.features.items.custom_storefronts.description'](),
        icon: Landmark
      },
      {
        title: m['custom_details_services.custom_commercial_builds.features.items.specialized_facilities.title'](),
        description: m['custom_details_services.custom_commercial_builds.features.items.specialized_facilities.description'](),
        icon: PenTool
      },
      {
        title: m['custom_details_services.custom_commercial_builds.features.items.flexible_layouts.title'](),
        description: m['custom_details_services.custom_commercial_builds.features.items.flexible_layouts.description'](),
        icon: LayoutDashboard
      },
      {
        title: m['custom_details_services.custom_commercial_builds.features.items.back_of_house_flow.title'](),
        description: m['custom_details_services.custom_commercial_builds.features.items.back_of_house_flow.description'](),
        icon: Route
      }
    ],
    process: [
      { title: m['custom_details_services.custom_commercial_builds.process.steps.discovery.title'](), desc: m['custom_details_services.custom_commercial_builds.process.steps.discovery.desc']() },
      { title: m['custom_details_services.custom_commercial_builds.process.steps.design.title'](), desc: m['custom_details_services.custom_commercial_builds.process.steps.design.desc']() },
      { title: m['custom_details_services.custom_commercial_builds.process.steps.permitting.title'](), desc: m['custom_details_services.custom_commercial_builds.process.steps.permitting.desc']() },
      { title: m['custom_details_services.custom_commercial_builds.process.steps.construction.title'](), desc: m['custom_details_services.custom_commercial_builds.process.steps.construction.desc']() },
      { title: m['custom_details_services.custom_commercial_builds.process.steps.turnover.title'](), desc: m['custom_details_services.custom_commercial_builds.process.steps.turnover.desc']() }
    ],
    styles: {
      modern: ['https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'],
      traditional: ['https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'],
      contemporary: ['https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop']
    },
    faqs: [
      { question: m['custom_details_services.custom_commercial_builds.faqs.items.franchises.question'](), answer: m['custom_details_services.custom_commercial_builds.faqs.items.franchises.answer']() },
      { question: m['custom_details_services.custom_commercial_builds.faqs.items.deadlines.question'](), answer: m['custom_details_services.custom_commercial_builds.faqs.items.deadlines.answer']() },
      { question: m['custom_details_services.custom_commercial_builds.faqs.items.cost_management.question'](), answer: m['custom_details_services.custom_commercial_builds.faqs.items.cost_management.answer']() },
      { question: m['custom_details_services.custom_commercial_builds.faqs.items.signage.question'](), answer: m['custom_details_services.custom_commercial_builds.faqs.items.signage.answer']() },
      { question: m['custom_details_services.custom_commercial_builds.faqs.items.post_occupancy.question'](), answer: m['custom_details_services.custom_commercial_builds.faqs.items.post_occupancy.answer']() },
      { question: m['custom_details_services.custom_commercial_builds.faqs.items.occupied_sites.question'](), answer: m['custom_details_services.custom_commercial_builds.faqs.items.occupied_sites.answer']() }
    ],
    cta: {
      heading: m['custom_details_services.custom_commercial_builds.cta.heading'](),
      subheading: m['custom_details_services.custom_commercial_builds.cta.subheading'](),
      button: m['custom_details_services.custom_commercial_builds.cta.button']()
    }
  }
};
