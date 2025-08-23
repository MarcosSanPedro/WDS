import * as m  from '$lib/paraglide/messages';
import type { Services } from '$lib/types';
import {
	Wifi,
	Gem,
	Layers,
	Droplet,
	Thermometer,
	Users,
	Home,
	Leaf,
	DoorOpen,
	Tv,
	Sun,
	CupSoda,
	Flame,
	Umbrella,
	Expand,
	Gauge,
	Smartphone,
	ShowerHead,
	Hand,
	Ruler,
	Box,
	Lightbulb,
	ChefHat,
	PackageOpen,
	Joystick,
	Speaker,
	CircuitBoard,
	Paintbrush,
	CalendarRange,
	Palette,
	Wrench,
	Fence,
	LayoutDashboard,
	ShieldCheck,
	Droplets
} from 'lucide-svelte';

export const _services: Record<string, Services> = {
	'kitchen-renovations': {
		slug: 'kitchen-renovations',
		title: m['residential_details_services.kitchen_renovations.title'](),
		goldTittle: m['residential_details_services.kitchen_renovations.gold_title'](),
		subTittle: m['residential_details_services.kitchen_renovations.subtitle'](),
		meta: {
			description: m['residential_details_services.kitchen_renovations.meta.description'](),
			heroImage:
				'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			priceTag: m['residential_details_services.kitchen_renovations.meta.price_tag'](),
			timeline: m['residential_details_services.kitchen_renovations.meta.timeline']()
		},
		overview: {
			heading: m['residential_details_services.kitchen_renovations.overview.heading'](),
			paragraph: m['residential_details_services.kitchen_renovations.overview.paragraph']()
		},
		trend_heading: m['residential_details_services.kitchen_renovations.trends.heading'](),
		trend_description: m['residential_details_services.kitchen_renovations.trends.description'](),
		trends: [
			{
				title: m['residential_details_services.kitchen_renovations.trends.items.smart_appliances.title'](),
				description: m['residential_details_services.kitchen_renovations.trends.items.smart_appliances.description'](),
				icon: Wifi
			},
			{
				title: m['residential_details_services.kitchen_renovations.trends.items.quartz_countertops.title'](),
				description: m['residential_details_services.kitchen_renovations.trends.items.quartz_countertops.description'](),
				icon: Gem
			},
			{
				title: m['residential_details_services.kitchen_renovations.trends.items.open_shelving.title'](),
				description: m['residential_details_services.kitchen_renovations.trends.items.open_shelving.description'](),
				icon: Layers
			}
		],
		featuresTittle: m['residential_details_services.kitchen_renovations.features.title'](),
		featuresSubtittle: m['residential_details_services.kitchen_renovations.features.subtitle'](),
		features: [
			{
				title: m['residential_details_services.kitchen_renovations.features.items.custom_cabinetry.title'](),
				description: m['residential_details_services.kitchen_renovations.features.items.custom_cabinetry.description'](),
				icon: Box
			},
			{
				title: m['residential_details_services.kitchen_renovations.features.items.under_cabinet_lighting.title'](),
				description: m['residential_details_services.kitchen_renovations.features.items.under_cabinet_lighting.description'](),
				icon: Lightbulb
			},
			{
				title: m['residential_details_services.kitchen_renovations.features.items.multi_purpose_island.title'](),
				description: m['residential_details_services.kitchen_renovations.features.items.multi_purpose_island.description'](),
				icon: ChefHat
			},
			{
				title: m['residential_details_services.kitchen_renovations.features.items.soft_close_drawers.title'](),
				description: m['residential_details_services.kitchen_renovations.features.items.soft_close_drawers.description'](),
				icon: PackageOpen
			}
		],
		process: [
			{
				title: m['residential_details_services.kitchen_renovations.process.steps.initial_consultation.title'](),
				desc: m['residential_details_services.kitchen_renovations.process.steps.initial_consultation.desc']()
			},
			{
				title: m['residential_details_services.kitchen_renovations.process.steps.3d_design_rendering.title'](),
				desc: m['residential_details_services.kitchen_renovations.process.steps.3d_design_rendering.desc']()
			},
			{
				title: m['residential_details_services.kitchen_renovations.process.steps.material_selection.title'](),
				desc: m['residential_details_services.kitchen_renovations.process.steps.material_selection.desc']()
			},
			{
				title: m['residential_details_services.kitchen_renovations.process.steps.construction_phase.title'](),
				desc: m['residential_details_services.kitchen_renovations.process.steps.construction_phase.desc']()
			},
			{
				title: m['residential_details_services.kitchen_renovations.process.steps.final_reveal.title'](),
				desc: m['residential_details_services.kitchen_renovations.process.steps.final_reveal.desc']()
			}
		],
		styles: {
			modern: [
				'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			traditional: [
				'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			contemporary: [
				'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			]
		},
		faqs: [
			{
				question: m['residential_details_services.kitchen_renovations.faqs.items.duration.question'](),
				answer: m['residential_details_services.kitchen_renovations.faqs.items.duration.answer']()
			},
			{
				question: m['residential_details_services.kitchen_renovations.faqs.items.layout.question'](),
				answer: m['residential_details_services.kitchen_renovations.faqs.items.layout.answer']()
			},
			{
				question: m['residential_details_services.kitchen_renovations.faqs.items.permits_and_trades.question'](),
				answer: m['residential_details_services.kitchen_renovations.faqs.items.permits_and_trades.answer']()
			},
			{
				question: m['residential_details_services.kitchen_renovations.faqs.items.materials_durability.question'](),
				answer: m['residential_details_services.kitchen_renovations.faqs.items.materials_durability.answer']()
			},
			{
				question: m['residential_details_services.kitchen_renovations.faqs.items.live_in.question'](),
				answer: m['residential_details_services.kitchen_renovations.faqs.items.live_in.answer']()
			},
			{
				question: m['residential_details_services.kitchen_renovations.faqs.items.value_increase.question'](),
				answer: m['residential_details_services.kitchen_renovations.faqs.items.value_increase.answer']()
			}
		],
		cta: {
			heading: m['residential_details_services.kitchen_renovations.cta.heading'](),
			subheading: m['residential_details_services.kitchen_renovations.cta.subheading'](),
			button: m['residential_details_services.kitchen_renovations.cta.button']()
		}
	},

	'bathroom-renovations': {
		slug: 'bathroom-renovations',
		title: m['residential_details_services.bathroom_renovations.title'](),
		goldTittle: m['residential_details_services.bathroom_renovations.gold_title'](),
		subTittle: m['residential_details_services.bathroom_renovations.subtitle'](),
		meta: {
			description: m['residential_details_services.bathroom_renovations.meta.description'](),
			heroImage:
				'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			priceTag: m['residential_details_services.bathroom_renovations.meta.price_tag'](),
			timeline: m['residential_details_services.bathroom_renovations.meta.timeline']()
		},
		overview: {
			heading: m['residential_details_services.bathroom_renovations.overview.heading'](),
			paragraph: m['residential_details_services.bathroom_renovations.overview.paragraph']()
		},
		trend_heading: m['residential_details_services.bathroom_renovations.trends.heading'](),
		trend_description: m['residential_details_services.bathroom_renovations.trends.description'](),
		trends: [
			{
				title: m['residential_details_services.bathroom_renovations.trends.items.rainfall_showers.title'](),
				description: m['residential_details_services.bathroom_renovations.trends.items.rainfall_showers.description'](),
				icon: Droplet
			},
			{
				title: m['residential_details_services.bathroom_renovations.trends.items.heated_floors.title'](),
				description: m['residential_details_services.bathroom_renovations.trends.items.heated_floors.description'](),
				icon: Thermometer
			},
			{
				title: m['residential_details_services.bathroom_renovations.trends.items.floating_vanities.title'](),
				description: m['residential_details_services.bathroom_renovations.trends.items.floating_vanities.description'](),
				icon: Layers
			}
		],
		featuresTittle: m['residential_details_services.bathroom_renovations.features.title'](),
		featuresSubtittle: m['residential_details_services.bathroom_renovations.features.subtitle'](),
		features: [
			{
				title: m['residential_details_services.bathroom_renovations.features.items.walk_in_showers.title'](),
				description: m['residential_details_services.bathroom_renovations.features.items.walk_in_showers.description'](),
				icon: ShowerHead
			},
			{
				title: m['residential_details_services.bathroom_renovations.features.items.grab_bars.title'](),
				description: m['residential_details_services.bathroom_renovations.features.items.grab_bars.description'](),
				icon: Hand
			},
			{
				title: m['residential_details_services.bathroom_renovations.features.items.comfort_height_fixtures.title'](),
				description: m['residential_details_services.bathroom_renovations.features.items.comfort_height_fixtures.description'](),
				icon: Ruler
			},
			{
				title: m['residential_details_services.bathroom_renovations.features.items.wide_doorways.title'](),
				description: m['residential_details_services.bathroom_renovations.features.items.wide_doorways.description'](),
				icon: DoorOpen
			}
		],
		process: [
			{
				title: m['residential_details_services.bathroom_renovations.process.steps.design_consultation.title'](),
				desc: m['residential_details_services.bathroom_renovations.process.steps.design_consultation.desc']()
			},
			{
				title: m['residential_details_services.bathroom_renovations.process.steps.material_selection.title'](),
				desc: m['residential_details_services.bathroom_renovations.process.steps.material_selection.desc']()
			},
			{
				title: m['residential_details_services.bathroom_renovations.process.steps.visualization_3d.title'](),
				desc: m['residential_details_services.bathroom_renovations.process.steps.visualization_3d.desc']()
			},
			{
				title: m['residential_details_services.bathroom_renovations.process.steps.renovation.title'](),
				desc: m['residential_details_services.bathroom_renovations.process.steps.renovation.desc']()
			},
			{
				title: m['residential_details_services.bathroom_renovations.process.steps.final_inspection.title'](),
				desc: m['residential_details_services.bathroom_renovations.process.steps.final_inspection.desc']()
			}
		],
		styles: {
			modern: [
				'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/1457840/pexels-photo-1457840.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			traditional: [
				'https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/1457844/pexels-photo-1457844.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			contemporary: [
				'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/1457840/pexels-photo-1457840.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			]
		},
		faqs: [
			{
				question: m['residential_details_services.bathroom_renovations.faqs.items.luxury_accessible.question'](),
				answer: m['residential_details_services.bathroom_renovations.faqs.items.luxury_accessible.answer']()
			},
			{
				question: m['residential_details_services.bathroom_renovations.faqs.items.timeline.question'](),
				answer: m['residential_details_services.bathroom_renovations.faqs.items.timeline.answer']()
			},
			{
				question: m['residential_details_services.bathroom_renovations.faqs.items.small_spaces.question'](),
				answer: m['residential_details_services.bathroom_renovations.faqs.items.small_spaces.answer']()
			},
			{
				question: m['residential_details_services.bathroom_renovations.faqs.items.eco_friendly.question'](),
				answer: m['residential_details_services.bathroom_renovations.faqs.items.eco_friendly.answer']()
			},
			{
				question: m['residential_details_services.bathroom_renovations.faqs.items.plumbing_electrical_updates.question'](),
				answer: m['residential_details_services.bathroom_renovations.faqs.items.plumbing_electrical_updates.answer']()
			},
			{
				question: m['residential_details_services.bathroom_renovations.faqs.items.spa_feel.question'](),
				answer: m['residential_details_services.bathroom_renovations.faqs.items.spa_feel.answer']()
			}
		],
		cta: {
			heading: m['residential_details_services.bathroom_renovations.cta.heading'](),
			subheading: m['residential_details_services.bathroom_renovations.cta.subheading'](),
			button: m['residential_details_services.bathroom_renovations.cta.button']()
		}
	},

	'home-additions': {
		slug: 'Home Additions',
		title: m['residential_details_services.home_additions.title'](),
		goldTittle: m['residential_details_services.home_additions.gold_title'](),
		subTittle: m['residential_details_services.home_additions.subtitle'](),
		meta: {
			description: m['residential_details_services.home_additions.meta.description'](),
			heroImage:
				'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			priceTag: m['residential_details_services.home_additions.meta.price_tag'](),
			timeline: m['residential_details_services.home_additions.meta.timeline']()
		},
		overview: {
			heading: m['residential_details_services.home_additions.overview.heading'](),
			paragraph: m['residential_details_services.home_additions.overview.paragraph']()
		},
		trend_heading: m['residential_details_services.home_additions.trends.heading'](),
		trend_description: m['residential_details_services.home_additions.trends.description'](),
		trends: [
			{
				title: m['residential_details_services.home_additions.trends.items.multi_generational_suites.title'](),
				description: m['residential_details_services.home_additions.trends.items.multi_generational_suites.description'](),
				icon: Home
			},
			{
				title: m['residential_details_services.home_additions.trends.items.energy_efficient_envelope.title'](),
				description: m['residential_details_services.home_additions.trends.items.energy_efficient_envelope.description'](),
				icon: Leaf
			},
			{
				title: m['residential_details_services.home_additions.trends.items.indoor_outdoor_flow.title'](),
				description: m['residential_details_services.home_additions.trends.items.indoor_outdoor_flow.description'](),
				icon: DoorOpen
			}
		],
		featuresTittle: m['residential_details_services.home_additions.features.title'](),
		featuresSubtittle: m['residential_details_services.home_additions.features.subtitle'](),
		features: [
			{
				title: m['residential_details_services.home_additions.features.items.structural_engineering.title'](),
				description: m['residential_details_services.home_additions.features.items.structural_engineering.description'](),
				icon: Paintbrush
			},
			{
				title: m['residential_details_services.home_additions.features.items.matched_exterior_finishes.title'](),
				description: m['residential_details_services.home_additions.features.items.matched_exterior_finishes.description'](),
				icon: CircuitBoard
			},
			{
				title: m['residential_details_services.home_additions.features.items.integrated_systems.title'](),
				description: m['residential_details_services.home_additions.features.items.integrated_systems.description'](),
				icon: Speaker
			},
			{
				title: m['residential_details_services.home_additions.features.items.sound_control.title'](),
				description: m['residential_details_services.home_additions.features.items.sound_control.description'](),
				icon: Joystick
			}
		],
		process: [
			{
				title: m['residential_details_services.home_additions.process.steps.consultation.title'](),
				desc: m['residential_details_services.home_additions.process.steps.consultation.desc']()
			},
			{
				title: m['residential_details_services.home_additions.process.steps.design_planning.title'](),
				desc: m['residential_details_services.home_additions.process.steps.design_planning.desc']()
			},
			{
				title: m['residential_details_services.home_additions.process.steps.permitting.title'](),
				desc: m['residential_details_services.home_additions.process.steps.permitting.desc']()
			},
			{
				title: m['residential_details_services.home_additions.process.steps.construction.title'](),
				desc: m['residential_details_services.home_additions.process.steps.construction.desc']()
			},
			{
				title: m['residential_details_services.home_additions.process.steps.final_walkthrough.title'](),
				desc: m['residential_details_services.home_additions.process.steps.final_walkthrough.desc']()
			}
		],
		styles: {
			modern: [
				'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			traditional: [
				'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			contemporary: [
				'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			]
		},
		faqs: [
			{
				question: m['residential_details_services.home_additions.faqs.items.match_style.question'](),
				answer: m['residential_details_services.home_additions.faqs.items.match_style.answer']()
			},
			{
				question: m['residential_details_services.home_additions.faqs.items.permits_inspections.question'](),
				answer: m['residential_details_services.home_additions.faqs.items.permits_inspections.answer']()
			},
			{
				question: m['residential_details_services.home_additions.faqs.items.second_story.question'](),
				answer: m['residential_details_services.home_additions.faqs.items.second_story.answer']()
			},
			{
				question: m['residential_details_services.home_additions.faqs.items.timeline.question'](),
				answer: m['residential_details_services.home_additions.faqs.items.timeline.answer']()
			},
			{
				question: m['residential_details_services.home_additions.faqs.items.move_out.question'](),
				answer: m['residential_details_services.home_additions.faqs.items.move_out.answer']()
			},
			{
				question: m['residential_details_services.home_additions.faqs.items.resale_value.question'](),
				answer: m['residential_details_services.home_additions.faqs.items.resale_value.answer']()
			}
		],
		cta: {
			heading: m['residential_details_services.home_additions.cta.heading'](),
			subheading: m['residential_details_services.home_additions.cta.subheading'](),
			button: m['residential_details_services.home_additions.cta.button']()
		}
	},

	'basement-finishing': {
		slug: 'basement-finishing',
		title: m['residential_details_services.basement_finishing.title'](),
		goldTittle: m['residential_details_services.basement_finishing.gold_title'](),
		subTittle: m['residential_details_services.basement_finishing.subtitle'](),
		meta: {
			description: m['residential_details_services.basement_finishing.meta.description'](),
			heroImage:
				'https://images.pexels.com/photos/373548/pexels-photo-373548.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			priceTag: m['residential_details_services.basement_finishing.meta.price_tag'](),
			timeline: m['residential_details_services.basement_finishing.meta.timeline']()
		},
		overview: {
			heading: m['residential_details_services.basement_finishing.overview.heading'](),
			paragraph: m['residential_details_services.basement_finishing.overview.paragraph']()
		},
		trend_heading: m['residential_details_services.basement_finishing.trends.heading'](),
		trend_description: m['residential_details_services.basement_finishing.trends.description'](),
		trends: [
			{
				title: m['residential_details_services.basement_finishing.trends.items.home_theaters.title'](),
				description: m['residential_details_services.basement_finishing.trends.items.home_theaters.description'](),
				icon: Tv
			},
			{
				title: m['residential_details_services.basement_finishing.trends.items.daylight_egress.title'](),
				description: m['residential_details_services.basement_finishing.trends.items.daylight_egress.description'](),
				icon: Sun
			},
			{
				title: m['residential_details_services.basement_finishing.trends.items.wet_bars_kitchenettes.title'](),
				description: m['residential_details_services.basement_finishing.trends.items.wet_bars_kitchenettes.description'](),
				icon: CupSoda
			}
		],
		featuresTittle: m['residential_details_services.basement_finishing.features.title'](),
		featuresSubtittle: m['residential_details_services.basement_finishing.features.subtitle'](),
		features: [
			{
				title: m['residential_details_services.basement_finishing.features.items.moisture_management.title'](),
				description: m['residential_details_services.basement_finishing.features.items.moisture_management.description'](),
				icon: Droplets
			},
			{
				title: m['residential_details_services.basement_finishing.features.items.insulated_subfloors.title'](),
				description: m['residential_details_services.basement_finishing.features.items.insulated_subfloors.description'](),
				icon: Thermometer
			},
			{
				title: m['residential_details_services.basement_finishing.features.items.code_compliance.title'](),
				description: m['residential_details_services.basement_finishing.features.items.code_compliance.description'](),
				icon: ShieldCheck
			},
			{
				title: m['residential_details_services.basement_finishing.features.items.flexible_zoning.title'](),
				description: m['residential_details_services.basement_finishing.features.items.flexible_zoning.description'](),
				icon: LayoutDashboard
			}
		],
		process: [
			{
				title: m['residential_details_services.basement_finishing.process.steps.assessment.title'](),
				desc: m['residential_details_services.basement_finishing.process.steps.assessment.desc']()
			},
			{
				title: m['residential_details_services.basement_finishing.process.steps.design_planning.title'](),
				desc: m['residential_details_services.basement_finishing.process.steps.design_planning.desc']()
			},
			{
				title: m['residential_details_services.basement_finishing.process.steps.framing_insulation.title'](),
				desc: m['residential_details_services.basement_finishing.process.steps.framing_insulation.desc']()
			},
			{
				title: m['residential_details_services.basement_finishing.process.steps.finishing_touches.title'](),
				desc: m['residential_details_services.basement_finishing.process.steps.finishing_touches.desc']()
			},
			{
				title: m['residential_details_services.basement_finishing.process.steps.final_reveal.title'](),
				desc: m['residential_details_services.basement_finishing.process.steps.final_reveal.desc']()
			}
		],
		styles: {
			modern: [
				'https://images.pexels.com/photos/373548/pexels-photo-373548.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/373553/pexels-photo-373553.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			traditional: [
				'https://images.pexels.com/photos/373553/pexels-photo-373553.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/373548/pexels-photo-373548.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			contemporary: [
				'https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/373548/pexels-photo-373548.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/373553/pexels-photo-373553.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			]
		},
		faqs: [
			{
				question: m['residential_details_services.basement_finishing.faqs.items.waterproofing.question'](),
				answer: m['residential_details_services.basement_finishing.faqs.items.waterproofing.answer']()
			},
			{
				question: m['residential_details_services.basement_finishing.faqs.items.add_bath_kitchen.question'](),
				answer: m['residential_details_services.basement_finishing.faqs.items.add_bath_kitchen.answer']()
			},
			{
				question: m['residential_details_services.basement_finishing.faqs.items.warm_winter.question'](),
				answer: m['residential_details_services.basement_finishing.faqs.items.warm_winter.answer']()
			},
			{
				question: m['residential_details_services.basement_finishing.faqs.items.duration.question'](),
				answer: m['residential_details_services.basement_finishing.faqs.items.duration.answer']()
			},
			{
				question: m['residential_details_services.basement_finishing.faqs.items.multi_purpose.question'](),
				answer: m['residential_details_services.basement_finishing.faqs.items.multi_purpose.answer']()
			},
			{
				question: m['residential_details_services.basement_finishing.faqs.items.value_increase.question'](),
				answer: m['residential_details_services.basement_finishing.faqs.items.value_increase.answer']()
			}
		],
		cta: {
			heading: m['residential_details_services.basement_finishing.cta.heading'](),
			subheading: m['residential_details_services.basement_finishing.cta.subheading'](),
			button: m['residential_details_services.basement_finishing.cta.button']()
		}
	},

	'deck-patio-construction': {
		slug: 'deck-patio-construction',
		title: m['residential_details_services.deck_patio_construction.title'](),
		goldTittle: m['residential_details_services.deck_patio_construction.gold_title'](),
		subTittle: m['residential_details_services.deck_patio_construction.subtitle'](),
		meta: {
			description: m['residential_details_services.deck_patio_construction.meta.description'](),
			heroImage:
				'https://images.pexels.com/photos/238385/pexels-photo-238385.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			priceTag: m['residential_details_services.deck_patio_construction.meta.price_tag'](),
			timeline: m['residential_details_services.deck_patio_construction.meta.timeline']()
		},
		overview: {
			heading: m['residential_details_services.deck_patio_construction.overview.heading'](),
			paragraph: m['residential_details_services.deck_patio_construction.overview.paragraph']()
		},
		trend_heading: m['residential_details_services.deck_patio_construction.trends.heading'](),
		trend_description: m['residential_details_services.deck_patio_construction.trends.description'](),
		trends: [
			{
				title: m['residential_details_services.deck_patio_construction.trends.items.composite_decking_2_0.title'](),
				description: m['residential_details_services.deck_patio_construction.trends.items.composite_decking_2_0.description'](),
				icon: Layers
			},
			{
				title: m['residential_details_services.deck_patio_construction.trends.items.outdoor_kitchens_fire.title'](),
				description: m['residential_details_services.deck_patio_construction.trends.items.outdoor_kitchens_fire.description'](),
				icon: Flame
			},
			{
				title: m['residential_details_services.deck_patio_construction.trends.items.shade_weather_control.title'](),
				description: m['residential_details_services.deck_patio_construction.trends.items.shade_weather_control.description'](),
				icon: Umbrella
			}
		],
		featuresTittle: m['residential_details_services.deck_patio_construction.features.title'](),
		featuresSubtittle: m['residential_details_services.deck_patio_construction.features.subtitle'](),
		features: [
			{
				title: m['residential_details_services.deck_patio_construction.features.items.material_options.title'](),
				description: m['residential_details_services.deck_patio_construction.features.items.material_options.description'](),
				icon: Layers
			},
			{
				title: m['residential_details_services.deck_patio_construction.features.items.built_in_seating_planters.title'](),
				description: m['residential_details_services.deck_patio_construction.features.items.built_in_seating_planters.description'](),
				icon: Leaf
			},
			{
				title: m['residential_details_services.deck_patio_construction.features.items.low_voltage_lighting.title'](),
				description: m['residential_details_services.deck_patio_construction.features.items.low_voltage_lighting.description'](),
				icon: Lightbulb
			},
			{
				title: m['residential_details_services.deck_patio_construction.features.items.durable_railings.title'](),
				description: m['residential_details_services.deck_patio_construction.features.items.durable_railings.description'](),
				icon: Fence
			}
		],
		process: [
			{
				title: m['residential_details_services.deck_patio_construction.process.steps.consultation.title'](),
				desc: m['residential_details_services.deck_patio_construction.process.steps.consultation.desc']()
			},
			{
				title: m['residential_details_services.deck_patio_construction.process.steps.design_layout.title'](),
				desc: m['residential_details_services.deck_patio_construction.process.steps.design_layout.desc']()
			},
			{
				title: m['residential_details_services.deck_patio_construction.process.steps.material_selection.title'](),
				desc: m['residential_details_services.deck_patio_construction.process.steps.material_selection.desc']()
			},
			{
				title: m['residential_details_services.deck_patio_construction.process.steps.construction.title'](),
				desc: m['residential_details_services.deck_patio_construction.process.steps.construction.desc']()
			},
			{
				title: m['residential_details_services.deck_patio_construction.process.steps.final_touches.title'](),
				desc: m['residential_details_services.deck_patio_construction.process.steps.final_touches.desc']()
			}
		],
		styles: {
			modern: [
				'https://images.pexels.com/photos/238385/pexels-photo-238385.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/259597/pexels-photo-259597.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/273638/pexels-photo-273638.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			traditional: [
				'https://images.pexels.com/photos/273638/pexels-photo-273638.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/238385/pexels-photo-238385.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/259597/pexels-photo-259597.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			contemporary: [
				'https://images.pexels.com/photos/259597/pexels-photo-259597.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/238385/pexels-photo-238385.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/273638/pexels-photo-273638.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			]
		},
		faqs: [
			{
				question: m['residential_details_services.deck_patio_construction.faqs.items.materials_offered.question'](),
				answer: m['residential_details_services.deck_patio_construction.faqs.items.materials_offered.answer']()
			},
			{
				question: m['residential_details_services.deck_patio_construction.faqs.items.shade_weather.question'](),
				answer: m['residential_details_services.deck_patio_construction.faqs.items.shade_weather.answer']()
			},
			{
				question: m['residential_details_services.deck_patio_construction.faqs.items.lighting_installation.question'](),
				answer: m['residential_details_services.deck_patio_construction.faqs.items.lighting_installation.answer']()
			},
			{
				question: m['residential_details_services.deck_patio_construction.faqs.items.lifespan.question'](),
				answer: m['residential_details_services.deck_patio_construction.faqs.items.lifespan.answer']()
			},
			{
				question: m['residential_details_services.deck_patio_construction.faqs.items.permits.question'](),
				answer: m['residential_details_services.deck_patio_construction.faqs.items.permits.answer']()
			},
			{
				question: m['residential_details_services.deck_patio_construction.faqs.items.multi_level_decks.question'](),
				answer: m['residential_details_services.deck_patio_construction.faqs.items.multi_level_decks.answer']()
			}
		],
		cta: {
			heading: m['residential_details_services.deck_patio_construction.cta.heading'](),
			subheading: m['residential_details_services.deck_patio_construction.cta.subheading'](),
			button: m['residential_details_services.deck_patio_construction.cta.button']()
		}
	},

	'whole-home-renovations': {
		slug: 'whole-home-renovations',
		title: m['residential_details_services.whole_home_renovations.title'](),
		goldTittle: m['residential_details_services.whole_home_renovations.gold_title'](),
		subTittle: m['residential_details_services.whole_home_renovations.subtitle'](),
		meta: {
			description: m['residential_details_services.whole_home_renovations.meta.description'](),
			heroImage:
				'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			priceTag: m['residential_details_services.whole_home_renovations.meta.price_tag'](),
			timeline: m['residential_details_services.whole_home_renovations.meta.timeline']()
		},
		overview: {
			heading: m['residential_details_services.whole_home_renovations.overview.heading'](),
			paragraph: m['residential_details_services.whole_home_renovations.overview.paragraph']()
		},
		trend_heading: m['residential_details_services.whole_home_renovations.trends.heading'](),
		trend_description: m['residential_details_services.whole_home_renovations.trends.description'](),
		trends: [
			{
				title: m['residential_details_services.whole_home_renovations.trends.items.open_concept_living.title'](),
				description: m['residential_details_services.whole_home_renovations.trends.items.open_concept_living.description'](),
				icon: Expand
			},
			{
				title: m['residential_details_services.whole_home_renovations.trends.items.smart_home_integration.title'](),
				description: m['residential_details_services.whole_home_renovations.trends.items.smart_home_integration.description'](),
				icon: Smartphone
			},
			{
				title: m['residential_details_services.whole_home_renovations.trends.items.high_performance_envelope.title'](),
				description: m['residential_details_services.whole_home_renovations.trends.items.high_performance_envelope.description'](),
				icon: Gauge
			}
		],
		featuresTittle: m['residential_details_services.whole_home_renovations.features.title'](),
		featuresSubtittle: m['residential_details_services.whole_home_renovations.features.subtitle'](),
		features: [
			{
				title: m['residential_details_services.whole_home_renovations.features.items.cohesive_design_language.title'](),
				description: m['residential_details_services.whole_home_renovations.features.items.cohesive_design_language.description'](),
				icon: Palette
			},
			{
				title: m['residential_details_services.whole_home_renovations.features.items.systems_upgrades.title'](),
				description: m['residential_details_services.whole_home_renovations.features.items.systems_upgrades.description'](),
				icon: Wrench
			},
			{
				title: m['residential_details_services.whole_home_renovations.features.items.energy_efficiency.title'](),
				description: m['residential_details_services.whole_home_renovations.features.items.energy_efficiency.description'](),
				icon: Leaf
			},
			{
				title: m['residential_details_services.whole_home_renovations.features.items.phased_construction.title'](),
				description: m['residential_details_services.whole_home_renovations.features.items.phased_construction.description'](),
				icon: CalendarRange
			}
		],
		process: [
			{
				title: m['residential_details_services.whole_home_renovations.process.steps.consultation.title'](),
				desc: m['residential_details_services.whole_home_renovations.process.steps.consultation.desc']()
			},
			{
				title: m['residential_details_services.whole_home_renovations.process.steps.comprehensive_design.title'](),
				desc: m['residential_details_services.whole_home_renovations.process.steps.comprehensive_design.desc']()
			},
			{
				title: m['residential_details_services.whole_home_renovations.process.steps.material_selection.title'](),
				desc: m['residential_details_services.whole_home_renovations.process.steps.material_selection.desc']()
			},
			{
				title: m['residential_details_services.whole_home_renovations.process.steps.full_renovation.title'](),
				desc: m['residential_details_services.whole_home_renovations.process.steps.full_renovation.desc']()
			},
			{
				title: m['residential_details_services.whole_home_renovations.process.steps.final_reveal.title'](),
				desc: m['residential_details_services.whole_home_renovations.process.steps.final_reveal.desc']()
			}
		],
		styles: {
			modern: [
				'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			traditional: [
				'https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			contemporary: [
				'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			]
		},
		faqs: [
			{
				question: m['residential_details_services.whole_home_renovations.faqs.items.move_out.question'](),
				answer: m['residential_details_services.whole_home_renovations.faqs.items.move_out.answer']()
			},
			{
				question: m['residential_details_services.whole_home_renovations.faqs.items.keep_existing_features.question'](),
				answer: m['residential_details_services.whole_home_renovations.faqs.items.keep_existing_features.answer']()
			},
			{
				question: m['residential_details_services.whole_home_renovations.faqs.items.cohesive_look.question'](),
				answer: m['residential_details_services.whole_home_renovations.faqs.items.cohesive_look.answer']()
			},
			{
				question: m['residential_details_services.whole_home_renovations.faqs.items.duration.question'](),
				answer: m['residential_details_services.whole_home_renovations.faqs.items.duration.answer']()
			},
			{
				question: m['residential_details_services.whole_home_renovations.faqs.items.permits_inspections.question'](),
				answer: m['residential_details_services.whole_home_renovations.faqs.items.permits_inspections.answer']()
			},
			{
				question: m['residential_details_services.whole_home_renovations.faqs.items.value_increase.question'](),
				answer: m['residential_details_services.whole_home_renovations.faqs.items.value_increase.answer']()
			}
		],
		cta: {
			heading: m['residential_details_services.whole_home_renovations.cta.heading'](),
			subheading: m['residential_details_services.whole_home_renovations.cta.subheading'](),
			button: m['residential_details_services.whole_home_renovations.cta.button']()
		}
	}
};
