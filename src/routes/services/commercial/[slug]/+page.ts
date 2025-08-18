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

export const _services: Record<string, Services> = {
	'office-renovations': {
		slug: 'office-renovations',
		title: 'Office Renovations',
		goldTittle: 'Workspaces That Inspire',
		subTittle:
			'Create a productive and inspiring workspace with our office renovation services. We design layouts that optimize space, integrate technology, and reflect your brand identity.',
		meta: {
			description:
				'We design and renovate offices that foster collaboration, efficiency, and brand presence. From layouts to tech integration, every detail is built for productivity.',
			heroImage: '/commercial/office.jpg',
			priceTag: 'From $50k',
			timeline: '6–12 weeks'
		},
		overview: {
			heading: 'Redefining the Modern Workplace',
			paragraph:
				'An office is more than desks and walls — it’s the heartbeat of your business. We transform outdated spaces into environments that motivate teams, impress clients, and support growth. From open collaboration to private focus rooms and hybrid setups, our designs balance performance, comfort, and brand personality.'
		},
		trends: [
			{
				title: 'Hybrid Work Zones',
				description: 'Spaces designed for both in‑office collaboration and remote meeting needs.',
				icon: Users
			},
			{
				title: 'Integrated Tech Walls',
				description: 'Built‑in displays, wireless casting, and smart whiteboards.',
				icon: Monitor
			},
			{
				title: 'Biophilic Design',
				description: 'Daylight strategies, natural textures, and living greenery.',
				icon: Leaf
			}
		],
		featuresTittle: 'Built for Performance & Comfort',
		featuresSubtittle:
			'From ergonomic planning to brand‑centric interiors, our office renovations create environments where productivity and well‑being thrive together.',
		features: [
			{
				title: 'Ergonomic Workstations',
				description: 'Height‑adjustable desks and optimal circulation paths.',
				icon: Armchair
			},
			{
				title: 'Acoustic Control',
				description: 'Partitions, panels, and ceiling treatments that reduce noise.',
				icon: VolumeX
			},
			{
				title: 'Smart Lighting',
				description: 'Human‑centric LED systems with occupancy and daylight sensors.',
				icon: Lightbulb
			},
			{
				title: 'Brand Expression',
				description: 'Custom finishes, graphics, and wayfinding aligned to your identity.',
				icon: Palette
			}
		],
		process: [
			{ title: 'Consultation', desc: 'Goals, workflows, culture, and budget.' },
			{ title: 'Concept Design', desc: 'Test‑fit layouts, mood boards, and 3D views.' },
			{ title: 'Material & Tech Spec', desc: 'Finishes, furniture, AV, and lighting.' },
			{ title: 'Construction', desc: 'Phased build to minimize disruption.' },
			{ title: 'Handover', desc: 'Punch list, commissioning, and warranty briefing.' }
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
				question: 'Can work happen during business hours?',
				answer: 'Yes. We phase work and can schedule after‑hours to reduce disruption.'
			},
			{
				question: 'Do you source furniture?',
				answer: 'We can specify, procure, and install ergonomic furniture to match the design.'
			},
			{
				question: 'Do you handle permits?',
				answer: 'Yes, including MEP drawings, life‑safety coordination, and inspections.'
			},
			{
				question: 'Can you support hybrid offices?',
				answer: 'Absolutely — focus rooms, huddle areas, and video‑ready conference spaces.'
			},
			{
				question: 'What about IT and AV?',
				answer: 'We coordinate with your vendors or provide turnkey solutions.'
			}
		],
		cta: {
			heading: 'Elevate Your Office Space',
			subheading: 'Book a consultation and build a workspace that inspires.',
			button: 'Get Started'
		}
	},

	'retail-construction': {
		slug: 'retail-construction',
		title: 'Retail Space Construction',
		goldTittle: 'Designed to Sell',
		subTittle:
			'Build an inviting retail environment that attracts customers and boosts sales. From storefronts to interior layouts, we craft spaces tailored to your business.',
		meta: {
			description:
				'We create customer‑centric retail spaces with smart traffic flow, brand‑forward displays, and durable materials that look great under heavy use.',
			heroImage: '/commercial/retail.jpg',
			priceTag: 'From $80k',
			timeline: '8–14 weeks'
		},
		overview: {
			heading: 'Retail That Converts',
			paragraph:
				'Great retail design guides customers, tells your brand story, and converts browsers into buyers. We plan every detail — from window displays and queuing to lighting and materials — so your store feels intuitive, memorable, and on‑brand.'
		},
		trends: [
			{
				title: 'Experience‑First Layouts',
				description: 'Demo zones, sampling bars, and photo‑friendly moments.',
				icon: Sparkles
			},
			{
				title: 'Modular Fixtures',
				description: 'Moveable shelving and displays for seasonal resets.',
				icon: Boxes
			},
			{
				title: 'Omnichannel Touchpoints',
				description: 'Pick‑up counters, self‑checkout, and QR‑enabled browsing.',
				icon: Smartphone
			}
		],
		featuresTittle: 'Merchandising Meets Engineering',
		featuresSubtittle:
			'We blend visual merchandising with durable construction to deliver spaces that look amazing and perform under traffic.',
		features: [
			{
				title: 'Customer Flow Mapping',
				description: 'Planograms and circulation paths that increase dwell time.',
				icon: Route
			},
			{
				title: 'Lighting for Product Pop',
				description: 'CRI‑rich lighting that makes colors and textures shine.',
				icon: Lightbulb
			},
			{
				title: 'Durable Finishes',
				description: 'Scratch‑ and stain‑resistant flooring and wall systems.',
				icon: ShieldCheck
			},
			{
				title: 'Back‑of‑House Efficiency',
				description: 'Stockroom, POS, and security planned for speed and safety.',
				icon: ClipboardCheck
			}
		],
		process: [
			{ title: 'Brand & Brief', desc: 'Understand customer profile and brand DNA.' },
			{ title: 'Concept & Test‑Fit', desc: 'Adjacency diagrams and store zoning.' },
			{ title: 'Detailing & Permits', desc: 'Millwork, signage, and approvals.' },
			{ title: 'Build‑Out', desc: 'Demo, rough‑ins, finishes, and fixture install.' },
			{ title: 'Merch & Launch', desc: 'Final merchandising and soft‑open support.' }
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
				question: 'Can you meet a strict launch date?',
				answer:
					'Yes. We plan backwards from your launch and compress schedules with phased trades when needed.'
			},
			{
				question: 'Do you fabricate custom millwork?',
				answer: 'We design and build custom fixtures or work with your preferred vendors.'
			},
			{
				question: 'Do you coordinate signage and permits?',
				answer: 'Yes, including exterior signage and municipal approvals.'
			},
			{
				question: 'Can stores remain open during renovations?',
				answer: 'We can phase and barricade construction to keep trading where feasible.'
			},
			{
				question: 'Do you roll out multi‑location builds?',
				answer: 'We standardize details to scale across your portfolio.'
			}
		],
		cta: {
			heading: 'Open a Store That Converts',
			subheading: 'Let’s design a retail space your customers love.',
			button: 'Plan My Store'
		}
	},

	'industrial-upgrades': {
		slug: 'industrial-upgrades',
		title: 'Industrial Facility Upgrades',
		goldTittle: 'Built for Throughput',
		subTittle:
			'Improve the efficiency and safety of your industrial facility with our upgrade services — from structural enhancements to equipment installations.',
		meta: {
			description:
				'We modernize plants, warehouses, and production spaces with structural, mechanical, and electrical upgrades that improve uptime and safety.',
			heroImage: '/commercial/industrial.jpg',
			priceTag: 'From $120k',
			timeline: '10–20 weeks'
		},
		overview: {
			heading: 'Precision Upgrades, Minimal Downtime',
			paragraph:
				'Industrial work demands reliability. We plan shutdown windows, coordinate trades, and stage installs to keep your operations moving. From racking and mezzanines to power distribution and machine bases, we engineer for safety, code compliance, and long‑term durability.'
		},
		trends: [
			{
				title: 'Automation Readiness',
				description: 'Power, data, and floor layouts prepped for robotics and conveyors.',
				icon: Cpu
			},
			{
				title: 'ESD & Specialty Flooring',
				description: 'Surface systems for cleanrooms, labs, and high‑traffic areas.',
				icon: Layers
			},
			{
				title: 'Energy Monitoring',
				description: 'Sub‑metering and dashboards to track and cut utility costs.',
				icon: Gauge
			}
		],
		featuresTittle: 'Engineered for Performance',
		featuresSubtittle:
			'Every upgrade is designed for safety, serviceability, and uptime — with documentation your maintenance team will actually use.',
		features: [
			{
				title: 'Structural Enhancements',
				description: 'Equipment pads, mezzanines, and seismic bracing.',
				icon: Building2
			},
			{
				title: 'Power & Controls',
				description: 'Panels, feeders, PLC coordination, and labeling.',
				icon: Plug
			},
			{
				title: 'Process Utilities',
				description: 'Compressed air, vacuum, gas, and water distribution.',
				icon: Pipette
			},
			{
				title: 'Safety Systems',
				description: 'Guarding, e‑stops, eyewash stations, and signage.',
				icon: ShieldCheck
			}
		],
		process: [
			{ title: 'Site Survey', desc: 'Measure, scan, and document current conditions.' },
			{ title: 'Engineering', desc: 'Stamped drawings and load calculations.' },
			{ title: 'Procurement', desc: 'Long‑lead items ordered early to protect schedule.' },
			{ title: 'Installation', desc: 'Coordinated trades, shift work, and hot‑work permits.' },
			{ title: 'Commissioning', desc: 'Testing, O&M manuals, and training.' }
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
				question: 'Can you work during live operations?',
				answer: 'Yes. We coordinate with production to schedule shutdowns and safe work windows.'
			},
			{
				question: 'Do you provide stamped engineering?',
				answer: 'We deliver PE‑stamped drawings as required by jurisdiction.'
			},
			{
				question: 'Can you install owner‑furnished equipment?',
				answer: 'Absolutely. We set, anchor, and align to manufacturer specs.'
			},
			{
				question: 'Do you update as‑builts?',
				answer: 'Yes, including redlines and digital O&M documentation.'
			},
			{
				question: 'What about safety compliance?',
				answer: 'Our programs meet OSHA requirements and your site‑specific policies.'
			}
		],
		cta: {
			heading: 'Upgrade With Confidence',
			subheading: 'Increase throughput and safety without sacrificing uptime.',
			button: 'Plan an Upgrade'
		}
	},

	'commercial-maintenance': {
		slug: 'commercial-maintenance',
		title: 'Commercial Property Maintenance',
		goldTittle: 'Proactive. Reliable. On‑Time.',
		subTittle:
			'Keep your commercial property in pristine condition with our maintenance services. Regular upkeep and timely repairs keep your space professional and operational.',
		meta: {
			description:
				'From preventative maintenance to emergency repairs, we protect your investment and keep your building running smoothly.',
			heroImage: '/commercial/commercialMaintenance.jpg',
			priceTag: 'Custom Plans',
			timeline: 'Ongoing'
		},
		overview: {
			heading: 'Prevent Problems. Protect Uptime.',
			paragraph:
				'A well‑maintained building lowers costs and preserves value. Our teams handle scheduled inspections, minor works, and rapid response repairs — coordinated through clear SLAs and a single point of contact.'
		},
		trends: [
			{
				title: 'Data‑Driven PM Schedules',
				description: 'Usage‑based intervals that reduce unnecessary service.',
				icon: Calendar
			},
			{
				title: 'Remote Monitoring',
				description: 'Sensors for temperature, leaks, and equipment status.',
				icon: Activity
			},
			{
				title: 'Sustainable Upkeep',
				description: 'Green cleaning, filter programs, and waste reduction.',
				icon: Recycle
			}
		],
		featuresTittle: 'Everything You Need, One Team',
		featuresSubtittle:
			'We keep your spaces safe, compliant, and looking sharp — without disrupting tenants or operations.',
		features: [
			{
				title: 'Interior & Exterior',
				description: 'Paint, patch, doors, glazing, and façade touch‑ups.',
				icon: Wrench
			},
			{
				title: 'MEP Support',
				description: 'Light fixture relamps, filter changes, and small repairs.',
				icon: Cog
			},
			{
				title: 'Life‑Safety Readiness',
				description: 'E‑lights, exit signage, and extinguisher coordination.',
				icon: Shield
			},
			{
				title: 'Vendor Management',
				description: 'Landscaping, janitorial, pest — one coordinated schedule.',
				icon: ClipboardList
			}
		],
		process: [
			{ title: 'Assessment', desc: 'Site walk and asset inventory.' },
			{ title: 'Plan', desc: 'PM calendar, service levels, and response tiers.' },
			{ title: 'Mobilize', desc: 'Onboarding, key access, and communication setup.' },
			{ title: 'Execute', desc: 'Routine care, ticketing, and reporting.' },
			{ title: 'Review', desc: 'Quarterly performance and optimization.' }
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
				question: 'Do you offer 24/7 support?',
				answer: 'Yes. Emergency response is available based on SLA.'
			},
			{
				question: 'Can you manage multiple properties?',
				answer: 'We centralize reporting and billing across your portfolio.'
			},
			{
				question: 'Do you handle compliance items?',
				answer: 'We coordinate routine checks and keep documentation updated.'
			},
			{
				question: 'How do tenants submit tickets?',
				answer: 'We provide a simple portal/email workflow tracked to SLAs.'
			},
			{
				question: 'Is pricing flexible?',
				answer: 'Yes — per‑call, retainer, or fixed PM programs.'
			}
		],
		cta: {
			heading: 'Keep Your Building Running',
			subheading: 'Custom maintenance plans that protect uptime and value.',
			button: 'Build My Plan'
		}
	},

	'restaurant-hospitality-renovations': {
		slug: 'restaurant-hospitality-renovations',
		title: 'Restaurant & Hospitality Renovations',
		goldTittle: 'Ambience Meets Operations',
		subTittle:
			'Transform your restaurant or hospitality venue into a welcoming space. We craft atmospheres that align with your brand and meet regulatory standards.',
		meta: {
			description:
				'From dining rooms to BOH kitchens and guest amenities, we renovate hospitality spaces for experience, durability, and code compliance.',
			heroImage: '/commercial/restaurant.jpg',
			priceTag: 'From $150k',
			timeline: '10–18 weeks'
		},
		overview: {
			heading: 'Design for Guests. Engineer for Service.',
			paragraph:
				'Hospitality spaces must wow guests and work hard for staff. We optimize seat counts, acoustics, lighting, and server paths while building BOH areas that are easy to clean, safe, and efficient — all to health and fire codes.'
		},
		trends: [
			{
				title: 'Open Kitchen Moments',
				description: 'Chef’s counters and pass‑throughs that showcase the craft.',
				icon: Flame
			},
			{
				title: 'Flexible Seating',
				description: 'Booths, banquettes, and movable tables for different party sizes.',
				icon: LayoutList
			},
			{
				title: 'Acoustic Softening',
				description: 'Ceiling baffles and wall treatments for comfortable conversation.',
				icon: Waves
			}
		],
		featuresTittle: 'Atmosphere You Can Taste',
		featuresSubtittle:
			'We blend ambience, durability, and compliance to create unforgettable guest experiences — front and back of house.',
		features: [
			{
				title: 'Health‑Code Kitchens',
				description: 'NSF surfaces, grease trap coordination, and wash zones.',
				icon: UtensilsCrossed
			},
			{
				title: 'Lighting & Sound',
				description: 'Layered lighting and acoustic tuning for mood and clarity.',
				icon: Music
			},
			{
				title: 'Durable Finishes',
				description: 'Slip‑resistant floors and stain‑resistant upholstery.',
				icon: ShieldCheck
			},
			{
				title: 'Service Flow',
				description: 'Clear paths from expo line to tables and bar.',
				icon: Route
			}
		],
		process: [
			{ title: 'Concept & Narrative', desc: 'Translate your cuisine and brand into space.' },
			{ title: 'Layouts & Seating', desc: 'Optimize FOH/BOH adjacencies and capacities.' },
			{ title: 'Permits & Health Dept.', desc: 'Drawings, submittals, and inspections.' },
			{ title: 'Build & Fit‑Out', desc: 'MEP, finishes, millwork, and equipment set.' },
			{ title: 'Training & Launch', desc: 'Walkthrough, punch, and soft‑opening support.' }
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
				question: 'Do you work with health department requirements?',
				answer: 'Yes — we coordinate submittals, inspections, and corrections.'
			},
			{
				question: 'Can we keep partial service during a remodel?',
				answer: 'Often yes with phased areas and temporary kitchens.'
			},
			{
				question: 'Do you install kitchen equipment?',
				answer: 'We coordinate trades and final connections to spec.'
			},
			{
				question: 'Can you improve acoustics?',
				answer: 'We design materials and layouts to reduce reverberation times.'
			},
			{
				question: 'What about ADA?',
				answer: 'We ensure restrooms, seating, and circulation meet accessibility standards.'
			}
		],
		cta: {
			heading: 'Make Every Seat the Best Seat',
			subheading: 'Let’s craft a space guests return to — again and again.',
			button: 'Start My Renovation'
		}
	},

	'commercial-building-additions': {
		slug: 'commercial-building-additions',
		title: 'Commercial Building Additions',
		goldTittle: 'Expand Without Disruption',
		subTittle:
			'Expand your business with seamless building additions — more office, storage, or operational space designed to blend with your existing structure.',
		meta: {
			description:
				'From schematics to steel, we deliver additions that scale your operations, match your architecture, and meet code.',
			heroImage: '/commercial/building.jpg',
			priceTag: 'From $250k',
			timeline: '4–8 months'
		},
		overview: {
			heading: 'Room to Grow, Done Right',
			paragraph:
				'Whether you’re adding offices, storage, or production space, we handle zoning, structure, and building systems to ensure a seamless connection — functionally and visually — to your current facility.'
		},
		trends: [
			{
				title: 'Pre‑Engineered Systems',
				description: 'Faster timelines with PEMB frames and panel systems.',
				icon: Boxes
			},
			{
				title: 'Energy‑Tight Envelopes',
				description: 'High‑performance insulation and glazing for lower OPEX.',
				icon: Leaf
			},
			{
				title: 'Future‑Proofing',
				description: 'Knock‑out panels and stubs for later expansion phases.',
				icon: Expand
			}
		],
		featuresTittle: 'Seamless, Scalable, Compliant',
		featuresSubtittle:
			'We integrate structure, MEP, life‑safety, and finishes so your addition works like it was always there.',
		features: [
			{
				title: 'Structural Integration',
				description: 'Foundations, tie‑ins, and load paths engineered to code.',
				icon: Building
			},
			{
				title: 'Systems Expansion',
				description: 'HVAC tonnage, electrical service, and sprinklers scaled smartly.',
				icon: Thermometer
			},
			{
				title: 'Exterior Continuity',
				description: 'Siding, roofing, and glazing that match your existing look.',
				icon: PanelsTopLeft
			},
			{
				title: 'Phased Construction',
				description: 'Access, hoarding, and logistics that keep you operating.',
				icon: CalendarRange
			}
		],
		process: [
			{ title: 'Feasibility', desc: 'Zoning checks, utilities, and site constraints.' },
			{ title: 'Design & Engineering', desc: 'Architectural and structural coordination.' },
			{ title: 'Permitting', desc: 'Submittals, reviews, and approvals.' },
			{ title: 'Construction', desc: 'Groundworks, shell, and fit‑out.' },
			{ title: 'Close‑Out', desc: 'CO, manuals, and warranty handover.' }
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
				question: 'Can you match our existing façade?',
				answer: 'Yes. We source compatible systems or propose tasteful updates across both volumes.'
			},
			{
				question: 'Do you handle utilities expansion?',
				answer: 'We coordinate with utility providers and resize systems as needed.'
			},
			{
				question: 'How do you minimize disruption?',
				answer: 'Clear logistics plans, temporary partitions, and off‑hour work where needed.'
			},
			{
				question: 'What about future expansion?',
				answer: 'We can design structural and service stubs to enable later growth.'
			},
			{
				question: 'Do you provide cost phasing?',
				answer: 'Yes — options for shell‑only vs. full build‑out.'
			}
		],
		cta: {
			heading: 'Grow Without Moving',
			subheading: 'Add smart square footage that pays for itself.',
			button: 'Scope an Addition'
		}
	},

	'sustainable-commercial-construction': {
		slug: 'sustainable-commercial-construction',
		title: 'Sustainable Commercial Construction',
		goldTittle: 'Build Green. Save Green.',
		subTittle:
			'Embrace eco‑friendly practices with our sustainable construction services. We use energy‑efficient materials and designs to reduce your environmental footprint.',
		meta: {
			description:
				'From envelope upgrades to electrification and renewables, we deliver sustainable buildings that cut costs and carbon.',
			heroImage:
				'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			priceTag: 'From $90k',
			timeline: '8–16 weeks (scope‑dependent)'
		},
		overview: {
			heading: 'Sustainability That Pays Back',
			paragraph:
				'Green projects shouldn’t be guesswork. We model ROI, select proven technologies, and install systems that reduce utilities, improve comfort, and support ESG goals — without compromising aesthetics.'
		},
		trends: [
			{
				title: 'Deep Energy Retrofits',
				description: 'Envelope, HVAC, and controls tuned as a single system.',
				icon: Leaf
			},
			{
				title: 'Electrification',
				description: 'Heat pumps and induction shifting from gas to high‑efficiency electric.',
				icon: Plug
			},
			{
				title: 'On‑Site Renewables',
				description: 'Solar PV readiness, battery storage, and EV charging.',
				icon: Battery
			}
		],
		featuresTittle: 'Lower Costs. Higher Comfort.',
		featuresSubtittle:
			'We combine efficiency, wellness, and durability so your spaces perform for decades.',
		features: [
			{
				title: 'High‑Performance Envelope',
				description: 'Insulation, air‑sealing, and glazing that slash losses.',
				icon: PanelsTopLeft
			},
			{
				title: 'Smart Controls',
				description: 'BAS scheduling, CO₂‑based ventilation, and sub‑metering.',
				icon: Gauge
			},
			{
				title: 'Water Stewardship',
				description: 'Low‑flow fixtures and leak detection to cut usage.',
				icon: Droplet
			},
			{
				title: 'Healthy Materials',
				description: 'Low‑VOC paints, FSC woods, and recyclable finishes.',
				icon: Recycle
			}
		],
		process: [
			{ title: 'Audit & Baseline', desc: 'Utility review and site assessment.' },
			{ title: 'Energy Modeling', desc: 'Scenario analysis and ROI forecasting.' },
			{ title: 'Scope & Incentives', desc: 'Select measures and capture rebates.' },
			{ title: 'Build & Commission', desc: 'Install, test, and verify performance.' },
			{ title: 'Monitor & Optimize', desc: 'Post‑occupancy tuning and reporting.' }
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
				question: 'Will this actually lower bills?',
				answer: 'Yes — we target measures with clear payback and share modeled savings ranges.'
			},
			{
				question: 'Do you help with rebates?',
				answer: 'We identify and process incentives to reduce upfront costs.'
			},
			{
				question: 'Can we phase improvements?',
				answer: 'Absolutely. We build multi‑year roadmaps aligned to capital cycles.'
			},
			{
				question: 'Does this affect comfort?',
				answer: 'Expect better temperatures, air quality, and acoustics.'
			},
			{
				question: 'Is LEED or similar required?',
				answer:
					'Certification is optional — we can design to standards with or without formal pursuit.'
			}
		],
		cta: {
			heading: 'Build Greener, Operate Smarter',
			subheading: 'Cut costs and carbon with proven upgrades.',
			button: 'Plan a Sustainable Project'
		}
	}
};

export const load = ({ params }) => {
	const service = _services[params.slug as keyof typeof _services];
	if (!service) throw error(404, 'Service not found');
	return { service };
};
