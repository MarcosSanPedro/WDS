import type { Services } from '$lib/types';
import {
	Layers,
	Droplet,
	Thermometer,
	Users,
	Home,
	Leaf,
	Flame,
	Expand,
	Gauge,
	Smartphone,
	Lightbulb,
	CalendarRange,
	Palette,
	Wrench,
	ShieldCheck,
	Monitor,
	Armchair,
	VolumeX,
	Sparkles,
	Boxes,
	Route,
	ClipboardCheck,
	Building2,
	Plug,
	Pipette,
	Cpu,
	Calendar,
	Activity,
	Recycle,
	Shield,
	ClipboardList,
	Cog,
	LayoutList,
	Waves,
	UtensilsCrossed,
	Music,
	Building,
	PanelsTopLeft,
	Battery
} from 'lucide-svelte';

import { error } from '@sveltejs/kit';
import * as m from '$lib/paraglide/messages';

export const _services: Record<string, Services> = {
	'office-renovations': {
		slug: 'office-renovations',
		title: m['commercial_details_services.office_renovations.title'](),
		goldTittle: m['commercial_details_services.office_renovations.gold_title'](),
		subTittle: m['commercial_details_services.office_renovations.subtitle'](),
		meta: {
			description: m['commercial_details_services.office_renovations.meta.description'](),
			heroImage: '/commercial/office.jpg',
			priceTag: m['commercial_details_services.office_renovations.meta.price_tag'](),
			timeline: m['commercial_details_services.office_renovations.meta.timeline']()
		},
		overview: {
			heading: m['commercial_details_services.office_renovations.overview.heading'](),
			paragraph: m['commercial_details_services.office_renovations.overview.paragraph']()
		},
		trend_heading: m['commercial_details_services.office_renovations.trends.heading'](),
		trend_description: m['commercial_details_services.office_renovations.trends.description'](),
		trends: [
			{
				title:
					m[
						'commercial_details_services.office_renovations.trends.items.hybrid_work_zones.title'
					](),
				description:
					m[
						'commercial_details_services.office_renovations.trends.items.hybrid_work_zones.description'
					](),
				icon: Users
			},
			{
				title:
					m[
						'commercial_details_services.office_renovations.trends.items.integrated_tech_walls.title'
					](),
				description:
					m[
						'commercial_details_services.office_renovations.trends.items.integrated_tech_walls.description'
					](),
				icon: Monitor
			},
			{
				title:
					m['commercial_details_services.office_renovations.trends.items.biophilic_design.title'](),
				description:
					m[
						'commercial_details_services.office_renovations.trends.items.biophilic_design.description'
					](),
				icon: Leaf
			}
		],
		featuresTittle: m['commercial_details_services.office_renovations.features.title'](),
		featuresSubtittle: m['commercial_details_services.office_renovations.features.subtitle'](),
		features: [
			{
				title:
					m[
						'commercial_details_services.office_renovations.features.items.ergonomic_workstations.title'
					](),
				description:
					m[
						'commercial_details_services.office_renovations.features.items.ergonomic_workstations.description'
					](),
				icon: Armchair
			},
			{
				title:
					m[
						'commercial_details_services.office_renovations.features.items.acoustic_control.title'
					](),
				description:
					m[
						'commercial_details_services.office_renovations.features.items.acoustic_control.description'
					](),
				icon: VolumeX
			},
			{
				title:
					m['commercial_details_services.office_renovations.features.items.smart_lighting.title'](),
				description:
					m[
						'commercial_details_services.office_renovations.features.items.smart_lighting.description'
					](),
				icon: Lightbulb
			},
			{
				title:
					m[
						'commercial_details_services.office_renovations.features.items.brand_expression.title'
					](),
				description:
					m[
						'commercial_details_services.office_renovations.features.items.brand_expression.description'
					](),
				icon: Palette
			}
		],
		process: [
			{
				title:
					m['commercial_details_services.office_renovations.process.steps.consultation.title'](),
				desc: m['commercial_details_services.office_renovations.process.steps.consultation.desc']()
			},
			{
				title:
					m['commercial_details_services.office_renovations.process.steps.concept_design.title'](),
				desc: m[
					'commercial_details_services.office_renovations.process.steps.concept_design.desc'
				]()
			},
			{
				title:
					m[
						'commercial_details_services.office_renovations.process.steps.material_tech_spec.title'
					](),
				desc: m[
					'commercial_details_services.office_renovations.process.steps.material_tech_spec.desc'
				]()
			},
			{
				title:
					m['commercial_details_services.office_renovations.process.steps.construction.title'](),
				desc: m['commercial_details_services.office_renovations.process.steps.construction.desc']()
			},
			{
				title: m['commercial_details_services.office_renovations.process.steps.handover.title'](),
				desc: m['commercial_details_services.office_renovations.process.steps.handover.desc']()
			}
		],
		styles: {
			modern: [
				'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			traditional: [
				'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			contemporary: [
				'https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			]
		},
		faqs: [
			{
				question:
					m['commercial_details_services.office_renovations.faqs.items.work_hours.question'](),
				answer: m['commercial_details_services.office_renovations.faqs.items.work_hours.answer']()
			},
			{
				question:
					m['commercial_details_services.office_renovations.faqs.items.furniture.question'](),
				answer: m['commercial_details_services.office_renovations.faqs.items.furniture.answer']()
			},
			{
				question: m['commercial_details_services.office_renovations.faqs.items.permits.question'](),
				answer: m['commercial_details_services.office_renovations.faqs.items.permits.answer']()
			},
			{
				question:
					m['commercial_details_services.office_renovations.faqs.items.hybrid_offices.question'](),
				answer:
					m['commercial_details_services.office_renovations.faqs.items.hybrid_offices.answer']()
			},
			{
				question: m['commercial_details_services.office_renovations.faqs.items.it_av.question'](),
				answer: m['commercial_details_services.office_renovations.faqs.items.it_av.answer']()
			}
		],
		cta: {
			heading: m['commercial_details_services.office_renovations.cta.heading'](),
			subheading: m['commercial_details_services.office_renovations.cta.subheading'](),
			button: m['commercial_details_services.office_renovations.cta.button']()
		}
	},

	'retail-construction': {
		slug: 'retail-construction',
		title: m['commercial_details_services.retail_construction.title'](),
		goldTittle: m['commercial_details_services.retail_construction.gold_title'](),
		subTittle: m['commercial_details_services.retail_construction.subtitle'](),
		meta: {
			description: m['commercial_details_services.retail_construction.meta.description'](),
			heroImage: '/commercial/retail.jpg',
			priceTag: m['commercial_details_services.retail_construction.meta.price_tag'](),
			timeline: m['commercial_details_services.retail_construction.meta.timeline']()
		},
		overview: {
			heading: m['commercial_details_services.retail_construction.overview.heading'](),
			paragraph: m['commercial_details_services.retail_construction.overview.paragraph']()
		},
		trend_heading: m['commercial_details_services.retail_construction.trends.heading'](),
		trend_description: m['commercial_details_services.retail_construction.trends.description'](),
		trends: [
			{
				title:
					m[
						'commercial_details_services.retail_construction.trends.items.experience_first_layouts.title'
					](),
				description:
					m[
						'commercial_details_services.retail_construction.trends.items.experience_first_layouts.description'
					](),
				icon: Sparkles
			},
			{
				title:
					m[
						'commercial_details_services.retail_construction.trends.items.modular_fixtures.title'
					](),
				description:
					m[
						'commercial_details_services.retail_construction.trends.items.modular_fixtures.description'
					](),
				icon: Boxes
			},
			{
				title:
					m[
						'commercial_details_services.retail_construction.trends.items.omnichannel_touchpoints.title'
					](),
				description:
					m[
						'commercial_details_services.retail_construction.trends.items.omnichannel_touchpoints.description'
					](),
				icon: Smartphone
			}
		],
		featuresTittle: m['commercial_details_services.retail_construction.features.title'](),
		featuresSubtittle: m['commercial_details_services.retail_construction.features.subtitle'](),
		features: [
			{
				title:
					m[
						'commercial_details_services.retail_construction.features.items.customer_flow_mapping.title'
					](),
				description:
					m[
						'commercial_details_services.retail_construction.features.items.customer_flow_mapping.description'
					](),
				icon: Route
			},
			{
				title:
					m[
						'commercial_details_services.retail_construction.features.items.lighting_for_product_pop.title'
					](),
				description:
					m[
						'commercial_details_services.retail_construction.features.items.lighting_for_product_pop.description'
					](),
				icon: Lightbulb
			},
			{
				title:
					m[
						'commercial_details_services.retail_construction.features.items.durable_finishes.title'
					](),
				description:
					m[
						'commercial_details_services.retail_construction.features.items.durable_finishes.description'
					](),
				icon: ShieldCheck
			},
			{
				title:
					m[
						'commercial_details_services.retail_construction.features.items.back_of_house_efficiency.title'
					](),
				description:
					m[
						'commercial_details_services.retail_construction.features.items.back_of_house_efficiency.description'
					](),
				icon: ClipboardCheck
			}
		],
		process: [
			{
				title:
					m['commercial_details_services.retail_construction.process.steps.brand_brief.title'](),
				desc: m['commercial_details_services.retail_construction.process.steps.brand_brief.desc']()
			},
			{
				title:
					m[
						'commercial_details_services.retail_construction.process.steps.concept_test_fit.title'
					](),
				desc: m[
					'commercial_details_services.retail_construction.process.steps.concept_test_fit.desc'
				]()
			},
			{
				title:
					m[
						'commercial_details_services.retail_construction.process.steps.detailing_permits.title'
					](),
				desc: m[
					'commercial_details_services.retail_construction.process.steps.detailing_permits.desc'
				]()
			},
			{
				title: m['commercial_details_services.retail_construction.process.steps.build_out.title'](),
				desc: m['commercial_details_services.retail_construction.process.steps.build_out.desc']()
			},
			{
				title:
					m['commercial_details_services.retail_construction.process.steps.merch_launch.title'](),
				desc: m['commercial_details_services.retail_construction.process.steps.merch_launch.desc']()
			}
		],
		styles: {
			modern: [
				'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/2171077/pexels-photo-2171077.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			traditional: [
				'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/373564/pexels-photo-373564.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/2171077/pexels-photo-2171077.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			contemporary: [
				'https://images.pexels.com/photos/2171077/pexels-photo-2171077.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			]
		},
		faqs: [
			{
				question:
					m['commercial_details_services.retail_construction.faqs.items.launch_date.question'](),
				answer: m['commercial_details_services.retail_construction.faqs.items.launch_date.answer']()
			},
			{
				question:
					m['commercial_details_services.retail_construction.faqs.items.millwork.question'](),
				answer: m['commercial_details_services.retail_construction.faqs.items.millwork.answer']()
			},
			{
				question:
					m[
						'commercial_details_services.retail_construction.faqs.items.signage_permits.question'
					](),
				answer:
					m['commercial_details_services.retail_construction.faqs.items.signage_permits.answer']()
			},
			{
				question:
					m['commercial_details_services.retail_construction.faqs.items.remain_open.question'](),
				answer: m['commercial_details_services.retail_construction.faqs.items.remain_open.answer']()
			},
			{
				question:
					m['commercial_details_services.retail_construction.faqs.items.multi_location.question'](),
				answer:
					m['commercial_details_services.retail_construction.faqs.items.multi_location.answer']()
			}
		],
		cta: {
			heading: m['commercial_details_services.retail_construction.cta.heading'](),
			subheading: m['commercial_details_services.retail_construction.cta.subheading'](),
			button: m['commercial_details_services.retail_construction.cta.button']()
		}
	},

	'industrial-upgrades': {
		slug: 'industrial-upgrades',
		title: m['commercial_details_services.industrial_upgrades.title'](),
		goldTittle: m['commercial_details_services.industrial_upgrades.gold_title'](),
		subTittle: m['commercial_details_services.industrial_upgrades.subtitle'](),
		meta: {
			description: m['commercial_details_services.industrial_upgrades.meta.description'](),
			heroImage: '/commercial/industrial.jpg',
			priceTag: m['commercial_details_services.industrial_upgrades.meta.price_tag'](),
			timeline: m['commercial_details_services.industrial_upgrades.meta.timeline']()
		},
		overview: {
			heading: m['commercial_details_services.industrial_upgrades.overview.heading'](),
			paragraph: m['commercial_details_services.industrial_upgrades.overview.paragraph']()
		},
		trend_heading: m['commercial_details_services.industrial_upgrades.trends.heading'](),
		trend_description: m['commercial_details_services.industrial_upgrades.trends.description'](),
		trends: [
			{
				title:
					m[
						'commercial_details_services.industrial_upgrades.trends.items.automation_readiness.title'
					](),
				description:
					m[
						'commercial_details_services.industrial_upgrades.trends.items.automation_readiness.description'
					](),
				icon: Cpu
			},
			{
				title:
					m['commercial_details_services.industrial_upgrades.trends.items.esd_flooring.title'](),
				description:
					m[
						'commercial_details_services.industrial_upgrades.trends.items.esd_flooring.description'
					](),
				icon: Layers
			},
			{
				title:
					m[
						'commercial_details_services.industrial_upgrades.trends.items.energy_monitoring.title'
					](),
				description:
					m[
						'commercial_details_services.industrial_upgrades.trends.items.energy_monitoring.description'
					](),
				icon: Gauge
			}
		],
		featuresTittle: m['commercial_details_services.industrial_upgrades.features.title'](),
		featuresSubtittle: m['commercial_details_services.industrial_upgrades.features.subtitle'](),
		features: [
			{
				title:
					m[
						'commercial_details_services.industrial_upgrades.features.items.structural_enhancements.title'
					](),
				description:
					m[
						'commercial_details_services.industrial_upgrades.features.items.structural_enhancements.description'
					](),
				icon: Building2
			},
			{
				title:
					m[
						'commercial_details_services.industrial_upgrades.features.items.power_controls.title'
					](),
				description:
					m[
						'commercial_details_services.industrial_upgrades.features.items.power_controls.description'
					](),
				icon: Plug
			},
			{
				title:
					m[
						'commercial_details_services.industrial_upgrades.features.items.process_utilities.title'
					](),
				description:
					m[
						'commercial_details_services.industrial_upgrades.features.items.process_utilities.description'
					](),
				icon: Pipette
			},
			{
				title:
					m[
						'commercial_details_services.industrial_upgrades.features.items.safety_systems.title'
					](),
				description:
					m[
						'commercial_details_services.industrial_upgrades.features.items.safety_systems.description'
					](),
				icon: ShieldCheck
			}
		],
		process: [
			{
				title:
					m['commercial_details_services.industrial_upgrades.process.steps.site_survey.title'](),
				desc: m['commercial_details_services.industrial_upgrades.process.steps.site_survey.desc']()
			},
			{
				title:
					m['commercial_details_services.industrial_upgrades.process.steps.engineering.title'](),
				desc: m['commercial_details_services.industrial_upgrades.process.steps.engineering.desc']()
			},
			{
				title:
					m['commercial_details_services.industrial_upgrades.process.steps.procurement.title'](),
				desc: m['commercial_details_services.industrial_upgrades.process.steps.procurement.desc']()
			},
			{
				title:
					m['commercial_details_services.industrial_upgrades.process.steps.installation.title'](),
				desc: m['commercial_details_services.industrial_upgrades.process.steps.installation.desc']()
			},
			{
				title:
					m['commercial_details_services.industrial_upgrades.process.steps.commissioning.title'](),
				desc: m[
					'commercial_details_services.industrial_upgrades.process.steps.commissioning.desc'
				]()
			}
		],
		styles: {
			modern: [
				'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/221047/pexels-photo-221047.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			traditional: [
				'https://images.pexels.com/photos/221047/pexels-photo-221047.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			contemporary: [
				'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/221047/pexels-photo-221047.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			]
		},
		faqs: [
			{
				question:
					m[
						'commercial_details_services.industrial_upgrades.faqs.items.live_operations.question'
					](),
				answer:
					m['commercial_details_services.industrial_upgrades.faqs.items.live_operations.answer']()
			},
			{
				question:
					m[
						'commercial_details_services.industrial_upgrades.faqs.items.stamped_engineering.question'
					](),
				answer:
					m[
						'commercial_details_services.industrial_upgrades.faqs.items.stamped_engineering.answer'
					]()
			},
			{
				question:
					m[
						'commercial_details_services.industrial_upgrades.faqs.items.owner_equipment.question'
					](),
				answer:
					m['commercial_details_services.industrial_upgrades.faqs.items.owner_equipment.answer']()
			},
			{
				question:
					m['commercial_details_services.industrial_upgrades.faqs.items.as_builts.question'](),
				answer: m['commercial_details_services.industrial_upgrades.faqs.items.as_builts.answer']()
			},
			{
				question:
					m[
						'commercial_details_services.industrial_upgrades.faqs.items.safety_compliance.question'
					](),
				answer:
					m['commercial_details_services.industrial_upgrades.faqs.items.safety_compliance.answer']()
			}
		],
		cta: {
			heading: m['commercial_details_services.industrial_upgrades.cta.heading'](),
			subheading: m['commercial_details_services.industrial_upgrades.cta.subheading'](),
			button: m['commercial_details_services.industrial_upgrades.cta.button']()
		}
	},

	'commercial-maintenance': {
		slug: 'commercial-maintenance',
		title: m['commercial_details_services.commercial_maintenance.title'](),
		goldTittle: m['commercial_details_services.commercial_maintenance.gold_title'](),
		subTittle: m['commercial_details_services.commercial_maintenance.subtitle'](),
		meta: {
			description: m['commercial_details_services.commercial_maintenance.meta.description'](),
			heroImage: '/commercial/commercialMaintenance.jpg',
			priceTag: m['commercial_details_services.commercial_maintenance.meta.price_tag'](),
			timeline: m['commercial_details_services.commercial_maintenance.meta.timeline']()
		},
		overview: {
			heading: m['commercial_details_services.commercial_maintenance.overview.heading'](),
			paragraph: m['commercial_details_services.commercial_maintenance.overview.paragraph']()
		},
		trend_heading: m['commercial_details_services.commercial_maintenance.trends.heading'](),
		trend_description: m['commercial_details_services.commercial_maintenance.trends.description'](),
		trends: [
			{
				title:
					m[
						'commercial_details_services.commercial_maintenance.trends.items.data_driven_pm.title'
					](),
				description:
					m[
						'commercial_details_services.commercial_maintenance.trends.items.data_driven_pm.description'
					](),
				icon: Calendar
			},
			{
				title:
					m[
						'commercial_details_services.commercial_maintenance.trends.items.remote_monitoring.title'
					](),
				description:
					m[
						'commercial_details_services.commercial_maintenance.trends.items.remote_monitoring.description'
					](),
				icon: Activity
			},
			{
				title:
					m[
						'commercial_details_services.commercial_maintenance.trends.items.sustainable_upkeep.title'
					](),
				description:
					m[
						'commercial_details_services.commercial_maintenance.trends.items.sustainable_upkeep.description'
					](),
				icon: Recycle
			}
		],
		featuresTittle: m['commercial_details_services.commercial_maintenance.features.title'](),
		featuresSubtittle: m['commercial_details_services.commercial_maintenance.features.subtitle'](),
		features: [
			{
				title:
					m[
						'commercial_details_services.commercial_maintenance.features.items.interior_exterior.title'
					](),
				description:
					m[
						'commercial_details_services.commercial_maintenance.features.items.interior_exterior.description'
					](),
				icon: Wrench
			},
			{
				title:
					m[
						'commercial_details_services.commercial_maintenance.features.items.mep_support.title'
					](),
				description:
					m[
						'commercial_details_services.commercial_maintenance.features.items.mep_support.description'
					](),
				icon: Cog
			},
			{
				title:
					m[
						'commercial_details_services.commercial_maintenance.features.items.life_safety.title'
					](),
				description:
					m[
						'commercial_details_services.commercial_maintenance.features.items.life_safety.description'
					](),
				icon: Shield
			},
			{
				title:
					m[
						'commercial_details_services.commercial_maintenance.features.items.vendor_management.title'
					](),
				description:
					m[
						'commercial_details_services.commercial_maintenance.features.items.vendor_management.description'
					](),
				icon: ClipboardList
			}
		],
		process: [
			{
				title:
					m['commercial_details_services.commercial_maintenance.process.steps.assessment.title'](),
				desc: m[
					'commercial_details_services.commercial_maintenance.process.steps.assessment.desc'
				]()
			},
			{
				title: m['commercial_details_services.commercial_maintenance.process.steps.plan.title'](),
				desc: m['commercial_details_services.commercial_maintenance.process.steps.plan.desc']()
			},
			{
				title:
					m['commercial_details_services.commercial_maintenance.process.steps.mobilize.title'](),
				desc: m['commercial_details_services.commercial_maintenance.process.steps.mobilize.desc']()
			},
			{
				title:
					m['commercial_details_services.commercial_maintenance.process.steps.execute.title'](),
				desc: m['commercial_details_services.commercial_maintenance.process.steps.execute.desc']()
			},
			{
				title: m['commercial_details_services.commercial_maintenance.process.steps.review.title'](),
				desc: m['commercial_details_services.commercial_maintenance.process.steps.review.desc']()
			}
		],
		styles: {
			modern: [
				'https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/4489730/pexels-photo-4489730.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/4480459/pexels-photo-4480459.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			traditional: [
				'https://images.pexels.com/photos/4489730/pexels-photo-4489730.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/4480459/pexels-photo-4480459.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			contemporary: [
				'https://images.pexels.com/photos/4480459/pexels-photo-4480459.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/4489730/pexels-photo-4489730.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			]
		},
		faqs: [
			{
				question:
					m[
						'commercial_details_services.commercial_maintenance.faqs.items.support_24_7.question'
					](),
				answer:
					m['commercial_details_services.commercial_maintenance.faqs.items.support_24_7.answer']()
			},
			{
				question:
					m[
						'commercial_details_services.commercial_maintenance.faqs.items.multi_properties.question'
					](),
				answer:
					m[
						'commercial_details_services.commercial_maintenance.faqs.items.multi_properties.answer'
					]()
			},
			{
				question:
					m[
						'commercial_details_services.commercial_maintenance.faqs.items.compliance_items.question'
					](),
				answer:
					m[
						'commercial_details_services.commercial_maintenance.faqs.items.compliance_items.answer'
					]()
			},
			{
				question:
					m[
						'commercial_details_services.commercial_maintenance.faqs.items.tenant_tickets.question'
					](),
				answer:
					m['commercial_details_services.commercial_maintenance.faqs.items.tenant_tickets.answer']()
			},
			{
				question:
					m[
						'commercial_details_services.commercial_maintenance.faqs.items.pricing_flexible.question'
					](),
				answer:
					m[
						'commercial_details_services.commercial_maintenance.faqs.items.pricing_flexible.answer'
					]()
			}
		],
		cta: {
			heading: m['commercial_details_services.commercial_maintenance.cta.heading'](),
			subheading: m['commercial_details_services.commercial_maintenance.cta.subheading'](),
			button: m['commercial_details_services.commercial_maintenance.cta.button']()
		}
	},

	'restaurant-hospitality-renovations': {
		slug: 'restaurant-hospitality-renovations',
		title: m['commercial_details_services.restaurant_hospitality_renovations.title'](),
		goldTittle: m['commercial_details_services.restaurant_hospitality_renovations.gold_title'](),
		subTittle: m['commercial_details_services.restaurant_hospitality_renovations.subtitle'](),
		meta: {
			description:
				m['commercial_details_services.restaurant_hospitality_renovations.meta.description'](),
			heroImage: '/commercial/restaurant.jpg',
			priceTag:
				m['commercial_details_services.restaurant_hospitality_renovations.meta.price_tag'](),
			timeline: m['commercial_details_services.restaurant_hospitality_renovations.meta.timeline']()
		},
		overview: {
			heading:
				m['commercial_details_services.restaurant_hospitality_renovations.overview.heading'](),
			paragraph:
				m['commercial_details_services.restaurant_hospitality_renovations.overview.paragraph']()
		},
		trend_heading:
			m['commercial_details_services.restaurant_hospitality_renovations.trends.heading'](),
		trend_description:
			m['commercial_details_services.restaurant_hospitality_renovations.trends.description'](),
		trends: [
			{
				title:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.trends.items.open_kitchen.title'
					](),
				description:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.trends.items.open_kitchen.description'
					](),
				icon: Flame
			},
			{
				title:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.trends.items.flexible_seating.title'
					](),
				description:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.trends.items.flexible_seating.description'
					](),
				icon: LayoutList
			},
			{
				title:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.trends.items.acoustic_softening.title'
					](),
				description:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.trends.items.acoustic_softening.description'
					](),
				icon: Waves
			}
		],
		featuresTittle:
			m['commercial_details_services.restaurant_hospitality_renovations.features.title'](),
		featuresSubtittle:
			m['commercial_details_services.restaurant_hospitality_renovations.features.subtitle'](),
		features: [
			{
				title:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.features.items.health_code_kitchens.title'
					](),
				description:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.features.items.health_code_kitchens.description'
					](),
				icon: UtensilsCrossed
			},
			{
				title:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.features.items.lighting_sound.title'
					](),
				description:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.features.items.lighting_sound.description'
					](),
				icon: Music
			},
			{
				title:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.features.items.durable_finishes.title'
					](),
				description:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.features.items.durable_finishes.description'
					](),
				icon: ShieldCheck
			},
			{
				title:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.features.items.service_flow.title'
					](),
				description:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.features.items.service_flow.description'
					](),
				icon: Route
			}
		],
		process: [
			{
				title:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.process.steps.concept_narrative.title'
					](),
				desc: m[
					'commercial_details_services.restaurant_hospitality_renovations.process.steps.concept_narrative.desc'
				]()
			},
			{
				title:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.process.steps.layouts_seating.title'
					](),
				desc: m[
					'commercial_details_services.restaurant_hospitality_renovations.process.steps.layouts_seating.desc'
				]()
			},
			{
				title:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.process.steps.permits_health.title'
					](),
				desc: m[
					'commercial_details_services.restaurant_hospitality_renovations.process.steps.permits_health.desc'
				]()
			},
			{
				title:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.process.steps.build_fit_out.title'
					](),
				desc: m[
					'commercial_details_services.restaurant_hospitality_renovations.process.steps.build_fit_out.desc'
				]()
			},
			{
				title:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.process.steps.training_launch.title'
					](),
				desc: m[
					'commercial_details_services.restaurant_hospitality_renovations.process.steps.training_launch.desc'
				]()
			}
		],
		styles: {
			modern: [
				'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			traditional: [
				'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			contemporary: [
				'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			]
		},
		faqs: [
			{
				question:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.faqs.items.health_dept.question'
					](),
				answer:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.faqs.items.health_dept.answer'
					]()
			},
			{
				question:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.faqs.items.partial_service.question'
					](),
				answer:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.faqs.items.partial_service.answer'
					]()
			},
			{
				question:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.faqs.items.kitchen_equipment.question'
					](),
				answer:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.faqs.items.kitchen_equipment.answer'
					]()
			},
			{
				question:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.faqs.items.improve_acoustics.question'
					](),
				answer:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.faqs.items.improve_acoustics.answer'
					]()
			},
			{
				question:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.faqs.items.ada.question'
					](),
				answer:
					m[
						'commercial_details_services.restaurant_hospitality_renovations.faqs.items.ada.answer'
					]()
			}
		],
		cta: {
			heading: m['commercial_details_services.restaurant_hospitality_renovations.cta.heading'](),
			subheading:
				m['commercial_details_services.restaurant_hospitality_renovations.cta.subheading'](),
			button: m['commercial_details_services.restaurant_hospitality_renovations.cta.button']()
		}
	},

	'commercial-building-additions': {
		slug: 'commercial-building-additions',
		title: m['commercial_details_services.commercial_building_additions.title'](),
		goldTittle: m['commercial_details_services.commercial_building_additions.gold_title'](),
		subTittle: m['commercial_details_services.commercial_building_additions.subtitle'](),
		meta: {
			description:
				m['commercial_details_services.commercial_building_additions.meta.description'](),
			heroImage: '/commercial/building.jpg',
			priceTag: m['commercial_details_services.commercial_building_additions.meta.price_tag'](),
			timeline: m['commercial_details_services.commercial_building_additions.meta.timeline']()
		},
		overview: {
			heading: m['commercial_details_services.commercial_building_additions.overview.heading'](),
			paragraph: m['commercial_details_services.commercial_building_additions.overview.paragraph']()
		},
		trend_heading: m['commercial_details_services.commercial_building_additions.trends.heading'](),
		trend_description:
			m['commercial_details_services.commercial_building_additions.trends.description'](),
		trends: [
			{
				title:
					m[
						'commercial_details_services.commercial_building_additions.trends.items.pre_engineered.title'
					](),
				description:
					m[
						'commercial_details_services.commercial_building_additions.trends.items.pre_engineered.description'
					](),
				icon: Boxes
			},
			{
				title:
					m[
						'commercial_details_services.commercial_building_additions.trends.items.energy_tight_envelopes.title'
					](),
				description:
					m[
						'commercial_details_services.commercial_building_additions.trends.items.energy_tight_envelopes.description'
					](),
				icon: Leaf
			},
			{
				title:
					m[
						'commercial_details_services.commercial_building_additions.trends.items.future_proofing.title'
					](),
				description:
					m[
						'commercial_details_services.commercial_building_additions.trends.items.future_proofing.description'
					](),
				icon: Expand
			}
		],
		featuresTittle: m['commercial_details_services.commercial_building_additions.features.title'](),
		featuresSubtittle:
			m['commercial_details_services.commercial_building_additions.features.subtitle'](),
		features: [
			{
				title:
					m[
						'commercial_details_services.commercial_building_additions.features.items.structural_integration.title'
					](),
				description:
					m[
						'commercial_details_services.commercial_building_additions.features.items.structural_integration.description'
					](),
				icon: Building
			},
			{
				title:
					m[
						'commercial_details_services.commercial_building_additions.features.items.systems_expansion.title'
					](),
				description:
					m[
						'commercial_details_services.commercial_building_additions.features.items.systems_expansion.description'
					](),
				icon: Thermometer
			},
			{
				title:
					m[
						'commercial_details_services.commercial_building_additions.features.items.exterior_continuity.title'
					](),
				description:
					m[
						'commercial_details_services.commercial_building_additions.features.items.exterior_continuity.description'
					](),
				icon: PanelsTopLeft
			},
			{
				title:
					m[
						'commercial_details_services.commercial_building_additions.features.items.phased_construction.title'
					](),
				description:
					m[
						'commercial_details_services.commercial_building_additions.features.items.phased_construction.description'
					](),
				icon: CalendarRange
			}
		],
		process: [
			{
				title:
					m[
						'commercial_details_services.commercial_building_additions.process.steps.feasibility.title'
					](),
				desc: m[
					'commercial_details_services.commercial_building_additions.process.steps.feasibility.desc'
				]()
			},
			{
				title:
					m[
						'commercial_details_services.commercial_building_additions.process.steps.design_engineering.title'
					](),
				desc: m[
					'commercial_details_services.commercial_building_additions.process.steps.design_engineering.desc'
				]()
			},
			{
				title:
					m[
						'commercial_details_services.commercial_building_additions.process.steps.permitting.title'
					](),
				desc: m[
					'commercial_details_services.commercial_building_additions.process.steps.permitting.desc'
				]()
			},
			{
				title:
					m[
						'commercial_details_services.commercial_building_additions.process.steps.construction.title'
					](),
				desc: m[
					'commercial_details_services.commercial_building_additions.process.steps.construction.desc'
				]()
			},
			{
				title:
					m[
						'commercial_details_services.commercial_building_additions.process.steps.close_out.title'
					](),
				desc: m[
					'commercial_details_services.commercial_building_additions.process.steps.close_out.desc'
				]()
			}
		],
		styles: {
			modern: [
				'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			traditional: [
				'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			contemporary: [
				'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			]
		},
		faqs: [
			{
				question:
					m[
						'commercial_details_services.commercial_building_additions.faqs.items.match_facade.question'
					](),
				answer:
					m[
						'commercial_details_services.commercial_building_additions.faqs.items.match_facade.answer'
					]()
			},
			{
				question:
					m[
						'commercial_details_services.commercial_building_additions.faqs.items.utilities_expansion.question'
					](),
				answer:
					m[
						'commercial_details_services.commercial_building_additions.faqs.items.utilities_expansion.answer'
					]()
			},
			{
				question:
					m[
						'commercial_details_services.commercial_building_additions.faqs.items.minimize_disruption.question'
					](),
				answer:
					m[
						'commercial_details_services.commercial_building_additions.faqs.items.minimize_disruption.answer'
					]()
			},
			{
				question:
					m[
						'commercial_details_services.commercial_building_additions.faqs.items.future_expansion.question'
					](),
				answer:
					m[
						'commercial_details_services.commercial_building_additions.faqs.items.future_expansion.answer'
					]()
			},
			{
				question:
					m[
						'commercial_details_services.commercial_building_additions.faqs.items.cost_phasing.question'
					](),
				answer:
					m[
						'commercial_details_services.commercial_building_additions.faqs.items.cost_phasing.answer'
					]()
			}
		],
		cta: {
			heading: m['commercial_details_services.commercial_building_additions.cta.heading'](),
			subheading: m['commercial_details_services.commercial_building_additions.cta.subheading'](),
			button: m['commercial_details_services.commercial_building_additions.cta.button']()
		}
	},

	'sustainable-commercial-construction': {
		slug: 'sustainable-commercial-construction',
		title: m['commercial_details_services.sustainable_commercial_construction.title'](),
		goldTittle: m['commercial_details_services.sustainable_commercial_construction.gold_title'](),
		subTittle: m['commercial_details_services.sustainable_commercial_construction.subtitle'](),
		meta: {
			description:
				m['commercial_details_services.sustainable_commercial_construction.meta.description'](),
			heroImage:
				'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			priceTag:
				m['commercial_details_services.sustainable_commercial_construction.meta.price_tag'](),
			timeline: m['commercial_details_services.sustainable_commercial_construction.meta.timeline']()
		},
		overview: {
			heading:
				m['commercial_details_services.sustainable_commercial_construction.overview.heading'](),
			paragraph:
				m['commercial_details_services.sustainable_commercial_construction.overview.paragraph']()
		},
		trend_heading:
			m['commercial_details_services.sustainable_commercial_construction.trends.heading'](),
		trend_description:
			m['commercial_details_services.sustainable_commercial_construction.trends.description'](),
		trends: [
			{
				title:
					m[
						'commercial_details_services.sustainable_commercial_construction.trends.items.deep_energy_retrofits.title'
					](),
				description:
					m[
						'commercial_details_services.sustainable_commercial_construction.trends.items.deep_energy_retrofits.description'
					](),
				icon: Leaf
			},
			{
				title:
					m[
						'commercial_details_services.sustainable_commercial_construction.trends.items.electrification.title'
					](),
				description:
					m[
						'commercial_details_services.sustainable_commercial_construction.trends.items.electrification.description'
					](),
				icon: Plug
			},
			{
				title:
					m[
						'commercial_details_services.sustainable_commercial_construction.trends.items.on_site_renewables.title'
					](),
				description:
					m[
						'commercial_details_services.sustainable_commercial_construction.trends.items.on_site_renewables.description'
					](),
				icon: Battery
			}
		],
		featuresTittle:
			m['commercial_details_services.sustainable_commercial_construction.features.title'](),
		featuresSubtittle:
			m['commercial_details_services.sustainable_commercial_construction.features.subtitle'](),
		features: [
			{
				title:
					m[
						'commercial_details_services.sustainable_commercial_construction.features.items.high_performance_envelope.title'
					](),
				description:
					m[
						'commercial_details_services.sustainable_commercial_construction.features.items.high_performance_envelope.description'
					](),
				icon: PanelsTopLeft
			},
			{
				title:
					m[
						'commercial_details_services.sustainable_commercial_construction.features.items.smart_controls.title'
					](),
				description:
					m[
						'commercial_details_services.sustainable_commercial_construction.features.items.smart_controls.description'
					](),
				icon: Gauge
			},
			{
				title:
					m[
						'commercial_details_services.sustainable_commercial_construction.features.items.water_stewardship.title'
					](),
				description:
					m[
						'commercial_details_services.sustainable_commercial_construction.features.items.water_stewardship.description'
					](),
				icon: Droplet
			},
			{
				title:
					m[
						'commercial_details_services.sustainable_commercial_construction.features.items.healthy_materials.title'
					](),
				description:
					m[
						'commercial_details_services.sustainable_commercial_construction.features.items.healthy_materials.description'
					](),
				icon: Recycle
			}
		],
		process: [
			{
				title:
					m[
						'commercial_details_services.sustainable_commercial_construction.process.steps.audit_baseline.title'
					](),
				desc: m[
					'commercial_details_services.sustainable_commercial_construction.process.steps.audit_baseline.desc'
				]()
			},
			{
				title:
					m[
						'commercial_details_services.sustainable_commercial_construction.process.steps.energy_modeling.title'
					](),
				desc: m[
					'commercial_details_services.sustainable_commercial_construction.process.steps.energy_modeling.desc'
				]()
			},
			{
				title:
					m[
						'commercial_details_services.sustainable_commercial_construction.process.steps.scope_incentives.title'
					](),
				desc: m[
					'commercial_details_services.sustainable_commercial_construction.process.steps.scope_incentives.desc'
				]()
			},
			{
				title:
					m[
						'commercial_details_services.sustainable_commercial_construction.process.steps.build_commission.title'
					](),
				desc: m[
					'commercial_details_services.sustainable_commercial_construction.process.steps.build_commission.desc'
				]()
			},
			{
				title:
					m[
						'commercial_details_services.sustainable_commercial_construction.process.steps.monitor_optimize.title'
					](),
				desc: m[
					'commercial_details_services.sustainable_commercial_construction.process.steps.monitor_optimize.desc'
				]()
			}
		],
		styles: {
			modern: [
				'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			traditional: [
				'https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			contemporary: [
				'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
				'https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			]
		},
		faqs: [
			{
				question:
					m[
						'commercial_details_services.sustainable_commercial_construction.faqs.items.lower_bills.question'
					](),
				answer:
					m[
						'commercial_details_services.sustainable_commercial_construction.faqs.items.lower_bills.answer'
					]()
			},
			{
				question:
					m[
						'commercial_details_services.sustainable_commercial_construction.faqs.items.rebates.question'
					](),
				answer:
					m[
						'commercial_details_services.sustainable_commercial_construction.faqs.items.rebates.answer'
					]()
			},
			{
				question:
					m[
						'commercial_details_services.sustainable_commercial_construction.faqs.items.phase_improvements.question'
					](),
				answer:
					m[
						'commercial_details_services.sustainable_commercial_construction.faqs.items.phase_improvements.answer'
					]()
			},
			{
				question:
					m[
						'commercial_details_services.sustainable_commercial_construction.faqs.items.comfort.question'
					](),
				answer:
					m[
						'commercial_details_services.sustainable_commercial_construction.faqs.items.comfort.answer'
					]()
			},
			{
				question:
					m[
						'commercial_details_services.sustainable_commercial_construction.faqs.items.leed_required.question'
					](),
				answer:
					m[
						'commercial_details_services.sustainable_commercial_construction.faqs.items.leed_required.answer'
					]()
			}
		],
		cta: {
			heading: m['commercial_details_services.sustainable_commercial_construction.cta.heading'](),
			subheading:
				m['commercial_details_services.sustainable_commercial_construction.cta.subheading'](),
			button: m['commercial_details_services.sustainable_commercial_construction.cta.button']()
		}
	}
};

export const load = ({ params }) => {
	const service = _services[params.slug as keyof typeof _services];
	if (!service) throw error(404, 'Service not found');
	return { service };
};
