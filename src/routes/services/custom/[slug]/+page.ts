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
		title: 'Custom Home Builds',
		goldTittle: 'Your Vision, Our Craft',
		subTittle:
			'Create your dream home from the ground up with our custom home-building services. Designed and built to your exact specifications.',
		meta: {
			description:
				'We bring your dream home to life with precision design and craftsmanship, creating a residence that reflects your lifestyle and vision.',
			heroImage: '/custom/home-builds.jpg',
			priceTag: 'From $350k',
			timeline: '6–12 months'
		},
		overview: {
			heading: 'From Blueprint to Reality',
			paragraph:
				'Building a custom home is a journey — and we make sure it’s as exciting as the final result. From the initial sketches to handing over the keys, every element is tailored to you. We combine architectural excellence, premium materials, and meticulous project management to deliver a home that’s truly one of a kind.'
		},
		trends: [
			{
				title: 'Smart Home Integration',
				description: 'Automated lighting, security, and climate control.',
				icon: Monitor
			},
			{
				title: 'Energy‑Efficient Design',
				description: 'Passive strategies and high‑performance envelopes.',
				icon: Leaf
			},
			{
				title: 'Multi‑Generational Layouts',
				description: 'Private suites and flexible common areas.',
				icon: Users
			}
		],
		featuresTittle: 'Tailored for Your Lifestyle',
		featuresSubtittle: 'Every square foot is designed with purpose, beauty, and comfort in mind.',
		features: [
			{
				title: 'Custom Floor Plans',
				description: 'Layouts that match your routines and flow.',
				icon: Ruler
			},
			{
				title: 'Premium Finishes',
				description: 'Curated fixtures, surfaces, and hardware.',
				icon: Star
			},
			{
				title: 'Outdoor Living',
				description: 'Patios, decks, and landscape integration.',
				icon: Sun
			},
			{
				title: 'Structural Integrity',
				description: 'Engineered frames for longevity and safety.',
				icon: Shield
			}
		],
		process: [
			{ title: 'Consultation', desc: 'Define program, budget, and site constraints.' },
			{ title: 'Design', desc: 'Plans, elevations, and 3D visualization.' },
			{ title: 'Selections', desc: 'Materials, fixtures, appliances, and finishes.' },
			{ title: 'Construction', desc: 'Quality‑controlled build with milestone checks.' },
			{ title: 'Handover', desc: 'Final walkthrough, manuals, and warranty.' }
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
			{
				question: 'Do you handle permits and inspections?',
				answer: 'Yes. We manage all permits, plan reviews, and inspections with local authorities.'
			},
			{
				question: 'Can I bring my own architect?',
				answer: 'Absolutely. We can collaborate or provide full design‑build services.'
			},
			{
				question: 'How do you control budget?',
				answer:
					'We establish allowances, track change orders, and provide transparent cost reports.'
			},
			{
				question: 'Do you help with site selection?',
				answer: 'Yes, we can evaluate lot suitability, utilities, and setbacks before purchase.'
			},
			{
				question: 'What warranties are included?',
				answer: 'You’ll receive structural, workmanship, and manufacturer warranties.'
			},
			{
				question: 'Can we make changes during construction?',
				answer: 'Yes. We follow a documented change process to manage scope, cost, and schedule.'
			}
		],
		cta: {
			heading: 'Start Building Your Dream Home',
			subheading: 'Let’s bring your vision to life with our expert team.',
			button: 'Book a Consultation'
		}
	},

	'unique-architectural-features': {
		slug: 'unique-architectural-features',
		title: 'Unique Architectural Features',
		goldTittle: 'Make a Statement',
		subTittle:
			'Add distinctive elements to your property with our architectural feature services — from custom staircases to intricate facades.',
		meta: {
			description:
				'We design and craft standout architectural elements that define your space and elevate everyday experiences.',
			heroImage: '/custom/architectural.jpg',
			priceTag: 'From $15k',
			timeline: '4–8 weeks'
		},
		overview: {
			heading: 'Design That Defines Character',
			paragraph:
				'Architectural features are the soul of a property’s design. We create custom elements that elevate aesthetics, add functionality, and create a lasting impression — precisely detailed and beautifully built.'
		},
		trends: [
			{
				title: 'Floating Staircases',
				description: 'Minimal structure with maximum impact.',
				icon: TrendingUp
			},
			{
				title: 'Geometric Facades',
				description: 'Parametric patterns and textured cladding.',
				icon: Grid
			},
			{
				title: 'Sustainable Materials',
				description: 'FSC wood, recycled metals, low‑VOC finishes.',
				icon: Leaf
			}
		],
		featuresTittle: 'Distinctive Design Elements',
		featuresSubtittle: 'Features that enhance both beauty and function.',
		features: [
			{
				title: 'Signature Staircases',
				description: 'Spiral, cantilevered, or ribbon stairs, engineered and code‑compliant.',
				icon: Activity
			},
			{
				title: 'Architectural Facades',
				description: 'Screens, sunshades, and articulated elevations.',
				icon: Home
			},
			{
				title: 'Feature Walls',
				description: 'Stone, millwork, or plaster relief walls that anchor spaces.',
				icon: Layers
			},
			{
				title: 'Custom Metal & Glass',
				description: 'Balustrades, canopies, and partitions in bespoke detailing.',
				icon: PanelsTopLeft
			}
		],
		process: [
			{ title: 'Consultation', desc: 'Aesthetic direction, constraints, and code review.' },
			{ title: 'Design & Engineering', desc: 'Details, connections, and load calcs.' },
			{ title: 'Fabrication', desc: 'CNC, millwork, and finish processes.' },
			{ title: 'Installation', desc: 'Precision fit‑up and site protection.' }
		],
		styles: {
			modern: [
				'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			traditional: [
				'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			contemporary: [
				'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			]
		},
		faqs: [
			{
				question: 'Can you match an existing style?',
				answer:
					'Yes. We reference your architectural language and materials for seamless integration.'
			},
			{
				question: 'Do these features meet code?',
				answer: 'All features are engineered and built to applicable building and safety codes.'
			},
			{
				question: 'What materials do you use?',
				answer: 'Hardwoods, steel, aluminum, glass, stone, and specialty finishes per design.'
			},
			{
				question: 'How long does fabrication take?',
				answer: 'Most pieces fabricate within 3–6 weeks depending on complexity and finishes.'
			},
			{
				question: 'Do you provide shop drawings?',
				answer: 'Yes. Detailed drawings and mockups are included for approval.'
			},
			{
				question: 'Can lighting be integrated?',
				answer: 'Absolutely — we can embed linear, spot, or backlit lighting for drama.'
			}
		],
		cta: {
			heading: 'Add Architectural Brilliance',
			subheading: 'Bring unique character to your space with our expertise.',
			button: 'Get Started'
		}
	},

	'specialty-renovations': {
		slug: 'specialty-renovations',
		title: 'Specialty Renovations',
		goldTittle: 'Spaces as Unique as You Are',
		subTittle:
			'Transform unique spaces with our specialty renovation services — home theaters, wine cellars, art studios, and more.',
		meta: {
			description:
				'We execute unconventional, highly customized projects that require specialized expertise and creative vision.',
			heroImage: '/custom/specialty.jpeg',
			priceTag: 'From $20k',
			timeline: '4–16 weeks'
		},
		overview: {
			heading: 'One‑of‑a‑Kind Transformations',
			paragraph:
				'Whether it’s cinema‑grade theaters, climate‑controlled wine rooms, gaming lounges, or maker studios, we deliver precision, performance, and wow‑factor — tuned to how you live and create.'
		},
		trends: [
			{
				title: 'Luxury Entertainment Rooms',
				description: 'Acoustics, tiered seating, and projection calibration.',
				icon: Tv
			},
			{
				title: 'Custom Wine Storage',
				description: 'Glass displays, racking, and humidity control.',
				icon: Droplet
			},
			{
				title: 'Creative Workspaces',
				description: 'Task lighting, resilient floors, and storage walls.',
				icon: PenTool
			}
		],
		featuresTittle: 'Tailored to Your Passion',
		featuresSubtittle: 'Design, engineering, and craftsmanship focused on performance.',
		features: [
			{
				title: 'Acoustic Engineering',
				description: 'Isolation, absorption, and diffusion for pristine sound.',
				icon: Volume2
			},
			{
				title: 'Environmental Control',
				description: 'Precise temperature and humidity systems where needed.',
				icon: Thermometer
			},
			{
				title: 'Custom Millwork',
				description: 'Built‑ins, niches, and display cabinetry.',
				icon: Archive
			},
			{
				title: 'Integrated AV & Lighting',
				description: 'Hidden wiring, control systems, and scene lighting.',
				icon: Lightbulb
			}
		],
		process: [
			{ title: 'Consultation', desc: 'Program, performance targets, and aesthetic goals.' },
			{ title: 'Design', desc: 'Layouts, specs, and 3D visualizations.' },
			{ title: 'Build', desc: 'Specialty trades, commissioning, and tuning.' },
			{ title: 'Handover', desc: 'Training, manuals, and maintenance guidance.' }
		],
		styles: {
			modern: [
				'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			traditional: [
				'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			contemporary: [
				'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			]
		},
		faqs: [
			{
				question: 'Do you handle specialized equipment?',
				answer: 'Yes. We coordinate manufacturer specs and provide proper power/ventilation.'
			},
			{
				question: 'Can rooms be multipurpose?',
				answer: 'Absolutely — we design flexible layouts and convertible furniture where desired.'
			},
			{
				question: 'What about noise to adjacent rooms?',
				answer: 'We use isolation assemblies and acoustic doors to limit transfer.'
			},
			{
				question: 'Do you provide climate control for wine?',
				answer: 'Yes, including vapor barriers, insulation, and dedicated cooling.'
			},
			{
				question: 'Can you integrate smart controls?',
				answer: 'Lighting, AV, HVAC, and shades can all be unified under one system.'
			},
			{
				question: 'Do you assist with permits?',
				answer: 'Yes, including any electrical, mechanical, and structural approvals.'
			}
		],
		cta: {
			heading: 'Create Your Signature Space',
			subheading: 'Let’s bring your unique renovation idea to life.',
			button: 'Book a Consultation'
		}
	},

	'custom-outdoor-structures': {
		slug: 'custom-outdoor-structures',
		title: 'Custom Outdoor Structures',
		goldTittle: 'Elevate Outdoor Living',
		subTittle:
			'Enhance your property with custom pergolas, gazebos, pavilions, and outdoor kitchens.',
		meta: {
			description:
				'We design and build outdoor structures that expand your living space and create unforgettable moments.',
			heroImage: '/custom/outdoors.jpg',
			priceTag: 'From $12k',
			timeline: '3–10 weeks'
		},
		overview: {
			heading: 'Your Backyard, Reimagined',
			paragraph:
				'From shaded lounges to chef‑worthy outdoor kitchens, we create durable, beautiful structures that make outdoor time effortless — all year long.'
		},
		trends: [
			{
				title: 'Outdoor Kitchens',
				description: 'Grills, smokers, sinks, refrigeration, and storage.',
				icon: Utensils
			},
			{
				title: 'Covered Lounges',
				description: 'Pergolas and gazebos with integrated lighting and fans.',
				icon: Umbrella
			},
			{
				title: 'Fire Features',
				description: 'Fire pits and fireplaces for warmth and ambience.',
				icon: Flame
			}
		],
		featuresTittle: 'Built for Comfort & Durability',
		featuresSubtittle: 'Weather‑resistant construction with the details that matter.',
		features: [
			{
				title: 'Premium Materials',
				description: 'Hardwoods, composites, masonry, and powder‑coated metals.',
				icon: Layers
			},
			{
				title: 'Utility Integration',
				description: 'Gas, water, and electrical safely routed and permitted.',
				icon: Plug
			},
			{
				title: 'Shade & Weathering',
				description: 'Louvered roofs, retractables, and wind screens.',
				icon: Sun
			},
			{
				title: 'Lighting & Audio',
				description: 'Low‑voltage lighting and outdoor‑rated speakers.',
				icon: Lightbulb
			}
		],
		process: [
			{ title: 'Consultation', desc: 'Use cases, sizing, and site constraints.' },
			{ title: 'Design', desc: 'Layout, elevations, and material palettes.' },
			{ title: 'Build', desc: 'Foundations, framing, finishes, and utilities.' },
			{ title: 'Final Touches', desc: 'Seating, planters, and night‑scene tuning.' }
		],
		styles: {
			modern: [
				'https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			traditional: [
				'https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			contemporary: [
				'https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			]
		},
		faqs: [
			{
				question: 'Are these structures weatherproof?',
				answer: 'They’re designed for your climate with durable finishes and drainage details.'
			},
			{
				question: 'Can you add utilities?',
				answer: 'Yes — gas, water, and power with proper trenching and permits.'
			},
			{
				question: 'Do you obtain permits?',
				answer: 'We handle all necessary municipal approvals and inspections.'
			},
			{
				question: 'How do you handle uneven yards?',
				answer: 'We design footings, steps, and retaining solutions to suit grade.'
			},
			{
				question: 'What maintenance is required?',
				answer: 'Annual cleaning and minor finish upkeep keep everything looking new.'
			},
			{
				question: 'Can you design for privacy?',
				answer: 'Screens, planting, and layout strategies can enhance privacy without bulk.'
			}
		],
		cta: {
			heading: 'Transform Your Outdoor Space',
			subheading: 'Bring your dream backyard to life.',
			button: 'Get Started'
		}
	},

	'historical-restorations': {
		slug: 'historical-restorations',
		title: 'Historical Restorations',
		goldTittle: 'Preserve the Past, Embrace the Present',
		subTittle:
			'Preserve the charm of historic properties with faithful restoration and discreet modernization.',
		meta: {
			description:
				'We restore historic properties with period‑accurate details while upgrading for safety, comfort, and efficiency.',
			heroImage: '/custom/historical.jpg',
			priceTag: 'From $40k',
			timeline: '3–8 months'
		},
		overview: {
			heading: 'Restoration with Respect',
			paragraph:
				'Every historic property has a story. We preserve original craftsmanship and architectural integrity, while integrating modern systems that remain visually discreet.'
		},
		trends: [
			{
				title: 'Material Matching',
				description: 'Reclaimed wood, lime plaster, and period hardware.',
				icon: Layers
			},
			{
				title: 'Structural Reinforcement',
				description: 'Hidden steel, sistering, and masonry stitching.',
				icon: Shield
			},
			{
				title: 'Discreet Amenities',
				description: 'In‑wall wiring, mini‑splits, and underfloor heating.',
				icon: Settings
			}
		],
		featuresTittle: 'Authenticity Meets Functionality',
		featuresSubtittle: 'True‑to‑era details with today’s livability.',
		features: [
			{
				title: 'Craft Preservation',
				description: 'Windows, moldings, and stonework carefully restored.',
				icon: Hammer
			},
			{
				title: 'Period‑Accurate Details',
				description: 'Profiles, paints, and fixtures researched and replicated.',
				icon: Ruler
			},
			{
				title: 'Life‑Safety Upgrades',
				description: 'Wiring, egress, and alarms brought to current code.',
				icon: Check
			},
			{
				title: 'Moisture & Envelope',
				description: 'Damp‑proofing and ventilation to protect the structure.',
				icon: Droplet
			}
		],
		process: [
			{ title: 'Assessment', desc: 'Condition survey and archival research.' },
			{ title: 'Design', desc: 'Scope aligned with preservation guidelines.' },
			{ title: 'Restoration', desc: 'Craft techniques and compatible materials.' },
			{ title: 'Integration', desc: 'Modern services added with minimal visual impact.' }
		],
		styles: {
			modern: [
				'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			traditional: [
				'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			contemporary: [
				'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			]
		},
		faqs: [
			{
				question: 'Do you work with preservation boards?',
				answer: 'Yes. We coordinate submittals, meetings, and site reviews.'
			},
			{
				question: 'Can modern amenities be added?',
				answer: 'Yes — we integrate HVAC, electrical, and plumbing without harming historic fabric.'
			},
			{
				question: 'How do you match materials?',
				answer: 'We source reclaimed materials or commission artisan reproductions.'
			},
			{
				question: 'What about lead paint or asbestos?',
				answer: 'We follow EPA/OSHA protocols and use licensed abatement partners.'
			},
			{
				question: 'Will insulation cause moisture issues?',
				answer: 'We use vapor‑open assemblies and ventilation to prevent damage.'
			},
			{
				question: 'Can you document the process?',
				answer: 'Yes, photo logs and reports are provided for records and grants.'
			}
		],
		cta: {
			heading: 'Restore History with Care',
			subheading: 'Preserve the beauty and value of your historic property.',
			button: 'Schedule a Consultation'
		}
	},

	'custom-commercial-builds': {
		slug: 'custom-commercial-builds',
		title: 'Custom Commercial Builds',
		goldTittle: 'Spaces That Define Your Brand',
		subTittle:
			'Stand out with a custom‑designed commercial space — from unique storefronts to specialized facilities.',
		meta: {
			description:
				'We design and build one‑of‑a‑kind commercial environments aligned with your brand and operational needs.',
			heroImage: '/custom/commercial-builds.jpg',
			priceTag: 'From $100k',
			timeline: '4–10 months'
		},
		overview: {
			heading: 'Your Business, Your Space',
			paragraph:
				'From hospitality to healthcare to creative offices, we craft spaces that enhance experience, streamline operations, and embody your brand — from concept through grand opening.'
		},
		trends: [
			{
				title: 'Experience‑Driven Design',
				description: 'Immersive touchpoints and customer journeys.',
				icon: Star
			},
			{
				title: 'Tech‑Integrated Spaces',
				description: 'BAS, AV, and IT that work together beautifully.',
				icon: Monitor
			},
			{
				title: 'Sustainable Construction',
				description: 'Healthy materials and efficient systems.',
				icon: Leaf
			}
		],
		featuresTittle: 'Built for Business',
		featuresSubtittle: 'Design and execution that drive traffic, engagement, and ROI.',
		features: [
			{
				title: 'Custom Storefronts',
				description: 'Façades and entries that make a powerful first impression.',
				icon: Landmark
			},
			{
				title: 'Specialized Facilities',
				description: 'Labs, studios, or clinics meeting strict criteria.',
				icon: PenTool
			},
			{
				title: 'Flexible Layouts',
				description: 'Spaces that adapt to new programs and growth.',
				icon: LayoutDashboard
			},
			{
				title: 'Back‑of‑House Flow',
				description: 'Optimized receiving, storage, and staff pathways.',
				icon: Route
			}
		],
		process: [
			{ title: 'Discovery', desc: 'Brand, operations, and target audience.' },
			{ title: 'Design', desc: 'Zoning, adjacency plans, and material mood boards.' },
			{ title: 'Permitting', desc: 'Submittals, reviews, and health/life‑safety coordination.' },
			{ title: 'Construction', desc: 'Quality‑controlled build and inspections.' },
			{ title: 'Turnover', desc: 'Commissioning, training, and launch support.' }
		],
		styles: {
			modern: [
				'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			traditional: [
				'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			],
			contemporary: [
				'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
			]
		},
		faqs: [
			{
				question: 'Do you work with franchises?',
				answer: 'Yes — we align with brand standards while elevating the local experience.'
			},
			{
				question: 'Can you meet tight deadlines?',
				answer: 'We set milestone schedules and use phased trades to hit launch dates.'
			},
			{
				question: 'How do you manage cost?',
				answer: 'Value engineering, alternates, and transparent reporting keep budgets in control.'
			},
			{
				question: 'Do you handle signage?',
				answer: 'Yes, we coordinate exterior/interior signage and local approvals.'
			},
			{
				question: 'What about post‑occupancy support?',
				answer: 'We provide punch resolution, training, and ongoing maintenance plans.'
			},
			{
				question: 'Can you build in occupied sites?',
				answer: 'Yes — logistics plans, hoarding, and off‑hour work minimize disruption.'
			}
		],
		cta: {
			heading: 'Build Your Signature Space',
			subheading: 'Custom commercial builds designed for success.',
			button: 'Get Started'
		}
	}
};
