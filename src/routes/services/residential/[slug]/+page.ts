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
} from '@lucide/svelte';

export const _services: Record<string, Services> = {
	'kitchen-renovations': {
		slug: 'kitchen-renovations',
		title: 'Kitchen Renovations',
		goldTittle: 'Crafted for Living',
		subTittle:
			'Transform your cooking space into a hub of style, comfort, and efficiency. From smart layouts to luxury finishes, every detail is designed around how you live and entertain.',
		meta: {
			description:
				'Transform your home with custom cabinetry, premium countertops, and modern appliances. Experience unparalleled craftsmanship and design.',
			heroImage:
				'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			priceTag: 'From $25k',
			timeline: '4-8 weeks'
		},
		overview: {
			heading: 'Where Function Meets Flawless Design',
			paragraph:
			  'Our kitchen renovations go far beyond a cosmetic update — they are full-scale transformations designed to improve the way you live every day. We carefully consider workflow, storage solutions, and lighting to create a kitchen that works just as beautifully as it looks. Whether you want a sleek modern space, a warm and inviting farmhouse kitchen, or a high-end chef’s paradise, we deliver exceptional craftsmanship and premium materials that stand the test of time. From the first design consultation to the final walk-through, our process ensures your new kitchen reflects your style, enhances your home’s value, and becomes the true heart of your home.'
		  },
		  trend_heading: 'Latest Kitchen Design Trends',
	trend_description:
		'Discover the newest kitchen innovations that balance style, efficiency, and smart functionality.',
		trends: [
			{
				title: 'Smart Appliances',
				description:
					'Wi‑Fi enabled ovens, fridges, and dishwashers for monitoring, recipes, and energy savings.',
				icon: Wifi
			},
			{
				title: 'Quartz Countertops',
				description: 'Durable, low‑maintenance surfaces in timeless colors and patterns.',
				icon: Gem
			},
			{
				title: 'Open Shelving',
				description: 'Airy storage that showcases dinnerware and adds visual depth.',
				icon: Layers
			}
		],
		featuresTittle: 'Culinary Spaces Designed Around You',
		featuresSubtittle:
			'From sleek modern layouts to timeless classics, we create kitchens that blend beauty, function, and personalized details — giving you a space where cooking, dining, and gathering feel effortless and inspiring every day.',
		features: [
			{
				title: 'Custom Cabinetry',
				description: 'Built to fit your layout with premium hardware.',
				icon: Box
			},
			{
				title: 'Under‑Cabinet Lighting',
				description: 'Task lighting that eliminates shadows on worktops.',
				icon: Lightbulb
			},
			{
				title: 'Multi‑Purpose Island',
				description: 'Seating, storage, power outlets, and prep space in one.',
				icon: ChefHat
			},
			{
				title: 'Soft‑Close Drawers',
				description: 'Quiet, durable slides for a premium experience.',
				icon: PackageOpen
			}
		],
		process: [
			{ title: 'Initial Consultation', desc: 'We discuss your vision...' },
			{ title: '3D Design Rendering', desc: 'See your new kitchen...' },
			{ title: 'Material Selection', desc: 'Choose cabinets...' },
			{ title: 'Construction Phase', desc: 'Craftsmen build it.' },
			{ title: 'Final Reveal', desc: 'Walk through your new kitchen.' }
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
			{ question: 'How long does a kitchen renovation take?', answer: 'Most kitchen projects are completed in 4–8 weeks depending on complexity, custom features, and material availability. Large or structural changes may take longer.' },
			{ question: 'Can you work with my existing kitchen layout?', answer: 'Yes. We can improve your current layout for better functionality or create a completely new configuration to match your lifestyle.' },
			{ question: 'Do you handle plumbing, electrical, and permits?', answer: 'Absolutely. Our licensed trades handle all necessary plumbing, electrical work, and permitting, ensuring compliance with local building codes.' },
			{ question: 'What materials do you recommend for durability?', answer: 'We guide you through choosing high-quality countertops, cabinetry, flooring, and finishes that match your style and withstand daily use.' },
			{ question: 'Can I live in my home during the renovation?', answer: 'In most cases, yes. We take steps to minimize dust, noise, and disruption, and set up temporary kitchen spaces if needed.' },
			{ question: 'Will a new kitchen increase my home’s value?', answer: 'Yes, a well-planned kitchen remodel is one of the highest-return home improvements, boosting both appeal and resale value.' }
		  ],
		cta: {
			heading: "Let's Cook Up Something Amazing",
			subheading: 'Ready to transform your kitchen? Schedule your consultation today.',
			button: 'Schedule Consultation'
		}
	},

	'bathroom-renovations': {
		slug: 'bathroom-renovations',
		title: 'Bathroom Remodeling',
		goldTittle: 'Create Your Personal Spa',
		subTittle:
			'Turn your bathroom into a sanctuary of relaxation and style. Whether it’s a serene spa retreat or a functional family bath, we design spaces that inspire comfort every day.',
		meta: {
			description:
				'Upgrade your bathroom with spa-like features, high-end fixtures, and timeless designs for everyday indulgence.',
			heroImage:
				'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			priceTag: 'From $15k',
			timeline: '3-6 weeks'
		},
		overview: {
			heading: 'Luxury and Accessibility in Perfect Harmony',
			paragraph:
			  'We believe your bathroom should be more than just a functional space — it should be a retreat. Our bathroom remodeling services combine luxurious design with smart, practical features to create a space you’ll love every day. From spa-inspired showers and soaking tubs to accessibility upgrades like walk-in showers and grab bars, we tailor every detail to your needs. We focus on quality craftsmanship, moisture-resistant materials, and designs that maximize both beauty and function. Whether it’s a compact powder room refresh or a master bath transformation, our goal is to deliver a bathroom that elevates your daily routine and adds value to your home.'
		  },
		  trend_heading: 'Latest Bathroom Design Trends',
	trend_description:
		'Explore modern bathroom concepts that combine relaxation, luxury, and intelligent use of space.',
		trends: [
			{
				title: 'Rainfall Showers',
				description:
					'Luxurious shower experiences with multiple spray patterns and water-saving technology.',
				icon: Droplet
			},
			{
				title: 'Heated Floors',
				description: 'Radiant floor heating for comfort and luxury in any weather.',
				icon: Thermometer
			},
			{
				title: 'Floating Vanities',
				description: 'Modern, space-saving designs that create an airy, contemporary feel.',
				icon: Layers
			}
		],
		featuresTittle: 'Universal Design & Accessibility',
		featuresSubtittle:
			'We design bathrooms that are as beautiful as they are functional — thoughtfully crafted spaces that combine style, safety, and ease of use for every age and ability, so you can enjoy comfort and confidence every day.',
		features: [
			{
				title: 'Walk-in Showers',
				description: 'Barrier-free entry with non-slip surfaces and built-in seating options.',
				icon: ShowerHead
			},
			{
				title: 'Grab Bars',
				description: 'Stylish, sturdy support bars that blend seamlessly with your design.',
				icon: Hand
			},
			{
				title: 'Comfort Height Fixtures',
				description: 'Toilets and vanities at optimal heights for easier use.',
				icon: Ruler
			},
			{
				title: 'Wide Doorways',
				description: 'Accessible entry points that accommodate all mobility needs.',
				icon: DoorOpen
			}
		],
		process: [
			{ title: 'Design Consultation', desc: 'Share your ideas and goals.' },
			{ title: 'Material Selection', desc: 'Pick tiles, fixtures, and lighting.' },
			{ title: '3D Visualization', desc: 'Preview the finished space.' },
			{ title: 'Renovation', desc: 'Our team brings it to life.' },
			{ title: 'Final Inspection', desc: 'Ensure every detail is perfect.' }
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
			{ question: 'Do you offer both luxury and accessible bathroom solutions?', answer: 'Yes. We design bathrooms that balance elegance with safety, including barrier-free showers, comfort-height fixtures, and non-slip flooring.' },
			{ question: 'What is the typical timeline for a bathroom remodel?', answer: 'Most bathroom remodels take 3–6 weeks, depending on size, complexity, and customization.' },
			{ question: 'Can you work with small or awkward spaces?', answer: 'Absolutely. We specialize in creative layouts and storage solutions that make even small bathrooms feel spacious.' },
			{ question: 'Do you provide eco-friendly options?', answer: 'Yes. We can install water-saving fixtures, LED lighting, and sustainable materials to reduce environmental impact.' },
			{ question: 'Will you handle plumbing and electrical updates?', answer: 'Yes. All work is done by licensed professionals to ensure safety and code compliance.' },
			{ question: 'How can I make my bathroom feel more like a spa?', answer: 'We recommend features like rainfall showerheads, heated floors, deep soaking tubs, and calming lighting schemes.' }
		  ],
		cta: {
			heading: 'Turn Your Bathroom into a Spa',
			subheading: 'Book your consultation and step into luxury.',
			button: 'Book Consultation'
		}
	},

	'home-additions': {
		slug: 'Home Additions',
		title: 'Expand Your Living Space with Ease',
		goldTittle: 'Seamlessly Integrated',
		subTittle:
			'Expand your home with new rooms that blend perfectly into your existing style. From concept to completion, we deliver extra space without sacrificing beauty or flow.',
		meta: {
			description:
				'Add bedrooms, sunrooms, or new living areas that blend seamlessly with your home’s style and structure.',
			heroImage:
				'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			priceTag: 'From $40k',
			timeline: '6-12 weeks'
		},
		overview: {
			heading: 'Space That Grows With You',
			paragraph:
			  'A home addition is more than just extra square footage — it’s an opportunity to enhance your lifestyle and increase your property’s value. We design and build additions that seamlessly integrate with your existing home, both structurally and stylistically. Whether you need a larger kitchen, a sunroom, a home office, or an in-law suite, our team handles every aspect from design and permits to final construction. We focus on natural light, energy efficiency, and quality finishes to ensure your new space feels like it has always belonged. Our goal is to create a stress-free building experience while delivering a stunning, functional extension of your home.'
		  },
		  trend_heading: 'Latest Home Addition Trends',
	trend_description:
		'See how today’s home additions create seamless expansions that blend perfectly with existing structures.',
		trends: [
			{
				title: 'Multi‑Generational Suites',
				description: 'Private bedroom/bath combos designed for extended family living.',
				icon: Home
			},
			{
				title: 'Energy‑Efficient Envelope',
				description: 'High‑R insulation, advanced windows, and tight air‑sealing.',
				icon: Leaf
			},
			{
				title: 'Indoor–Outdoor Flow',
				description: 'Large sliders and decks that connect new rooms to the backyard.',
				icon: DoorOpen
			}
		],
		featuresTittle: 'More Room for What Matters Most',
		featuresSubtittle:
			'Our home additions seamlessly integrate with your existing architecture, giving you extra bedrooms, living areas, or specialty spaces that feel like they were always meant to be there — built with craftsmanship, comfort, and your lifestyle in mind.',
		features: [
			{
				title: 'Structural Engineering',
				description: 'Load calculations and foundations sized for longevity.',
				icon: Paintbrush
			},
			{
				title: 'Matched Exterior Finishes',
				description: 'Siding, roofing, and trim that blend seamlessly.',
				icon: CircuitBoard
			},
			{
				title: 'Integrated Systems',
				description: 'HVAC, electrical, and plumbing scaled for the new footprint.',
				icon: Speaker
			},
			{
				title: 'Sound Control',
				description: 'Insulated walls/doors for quiet, comfortable rooms.',
				icon: Joystick
			}
		],
		process: [
			{ title: 'Consultation', desc: 'We review your needs and property layout.' },
			{ title: 'Design & Planning', desc: 'Create a plan that complements your home.' },
			{ title: 'Permitting', desc: 'We handle required permits and approvals.' },
			{ title: 'Construction', desc: 'Build the addition to precise standards.' },
			{ title: 'Final Walkthrough', desc: 'Inspect every detail for perfection.' }
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
			{ question: 'Will the addition match my home’s style?', answer: 'Yes. We carefully select materials, finishes, and architectural details to match or enhance your existing design.' },
			{ question: 'Do you handle permits and inspections?', answer: 'Absolutely. We manage all permitting and coordinate inspections to keep your project on track.' },
			{ question: 'Can you build a second story addition?', answer: 'Yes. We can build upward or outward depending on zoning and structural feasibility.' },
			{ question: 'How long does a home addition take?', answer: 'Timelines vary, but most additions are completed in 8–16 weeks depending on complexity.' },
			{ question: 'Will I need to move out during construction?', answer: 'In most cases, you can stay in your home, though major structural work may require temporary relocation.' },
			{ question: 'Does an addition increase resale value?', answer: 'Yes, well-designed additions can significantly improve resale value and buyer appeal.' }
		  ],
		cta: {
			heading: 'Add More Space Without Moving',
			subheading: 'Expand your home to fit your lifestyle.',
			button: 'Request Quote'
		}
	},

	'basement-finishing': {
		slug: 'basement-finishing',
		title: 'Basement Finishing',
		goldTittle: 'From Storage to Showcase',
		subTittle:
			'Unlock the hidden potential of your basement. Whether it’s a home theater, guest suite, or workspace, we turn unused square footage into your favorite rooms.',
		meta: {
			description:
				'Maximize your home’s potential with a fully finished basement designed for living, working, or playing.',
			heroImage:
				'https://images.pexels.com/photos/373548/pexels-photo-373548.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			priceTag: 'From $20k',
			timeline: '5-9 weeks'
		},
		overview: {
			heading: 'From Empty to Extraordinary',
			paragraph:
			  'Your basement is full of potential — and we can help you unlock it. Our basement finishing services transform underutilized space into functional, inviting rooms. From cozy home theaters and entertainment areas to gyms, guest suites, and home offices, we create spaces that fit your lifestyle. We address waterproofing, insulation, and lighting from the start, ensuring your basement is comfortable year-round. With durable materials, smart layouts, and attention to detail, we turn your basement into a beautiful extension of your home — adding both living space and property value.'
		  },
		  trend_heading: 'Latest Basement Finishing Trends',
	trend_description:
		'Uncover how basements are being transformed into versatile living areas, from entertainment zones to guest suites.',
		trends: [
			{
				title: 'Home Theaters',
				description: 'Acoustic treatments, projection, and tiered seating options.',
				icon: Tv
			},
			{
				title: 'Daylight & Egress',
				description: 'Bigger windows, wells, and code‑compliant exits for safety and light.',
				icon: Sun
			},
			{
				title: 'Wet Bars & Kitchenettes',
				description: 'Add sinks, mini‑fridges, and storage for entertaining.',
				icon: CupSoda
			}
		],
		featuresTittle: 'Transform Your Basement into a Destination',
		featuresSubtittle:
			'From dark, unused storage to vibrant living areas, we create basements that suit your lifestyle — whether it’s a home theater, guest suite, gym, or workspace, every detail is designed for comfort, durability, and year-round enjoyment.',
		features: [
			{
				title: 'Moisture Management',
				description: 'Vapor barriers, drainage, and dehumidification solutions.',
				icon: Droplets
			},
			{
				title: 'Insulated Subfloors',
				description: 'Thermal and moisture protection for warmer feet year‑round.',
				icon: Thermometer
			},
			{
				title: 'Code Compliance',
				description: 'Egress windows, smoke/CO detectors, and proper ceiling heights.',
				icon: ShieldCheck
			},
			{
				title: 'Flexible Zoning',
				description: 'Designated areas for gym, office, play, or guests.',
				icon: LayoutDashboard
			}
		],
		process: [
			{ title: 'Assessment', desc: 'Evaluate space and address moisture concerns.' },
			{ title: 'Design Planning', desc: 'Create a custom layout for your needs.' },
			{ title: 'Framing & Insulation', desc: 'Ensure comfort and efficiency.' },
			{ title: 'Finishing Touches', desc: 'Install flooring, lighting, and trim.' },
			{ title: 'Final Reveal', desc: 'Enjoy your new living area.' }
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
			{ question: 'Do you handle waterproofing before finishing?', answer: 'Yes. We ensure the basement is fully waterproofed to prevent future damage.' },
			{ question: 'Can I add a bathroom or kitchenette?', answer: 'Absolutely. We can incorporate full bathrooms, wet bars, or even full kitchens.' },
			{ question: 'Will my basement be warm in winter?', answer: 'Yes. We use insulation, vapor barriers, and heating options to make it comfortable year-round.' },
			{ question: 'How long does basement finishing take?', answer: 'Typically 6–10 weeks, depending on scope and complexity.' },
			{ question: 'Can you design the space for multiple purposes?', answer: 'Yes. We can create zones for entertainment, work, storage, and more.' },
			{ question: 'Does finishing my basement increase home value?', answer: 'Yes, a finished basement adds usable square footage, which increases resale value.' }
		  ],
		cta: {
			heading: 'Unlock Your Basement’s Potential',
			subheading: 'Let’s create a space you’ll love to spend time in.',
			button: 'Get Started'
		}
	},

	'deck-patio-construction': {
		slug: 'deck-patio-construction',
		title: 'Deck & Patio Construction',
		goldTittle: 'Outdoor Living, Elevated',
		subTittle:
			'Bring your backyard dreams to life with stunning decks and patios built for comfort, beauty, and lasting enjoyment in every season.',
		meta: {
			description:
				'Create a stunning outdoor escape with custom decks and patios built for beauty, comfort, and durability.',
			heroImage:
				'https://images.pexels.com/photos/238385/pexels-photo-238385.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			priceTag: 'From $12k',
			timeline: '2-5 weeks'
		},
		overview: {
			heading: 'Your Backyard, Reimagined',
			paragraph:
			  'A great outdoor space is an extension of your home — a place to relax, entertain, and connect with nature. Our deck and patio construction services combine beauty and durability, using high-quality materials that stand up to the elements. Whether you prefer a natural wood deck, a low-maintenance composite, or a stunning stone patio, we customize the design to fit your lifestyle. We also offer built-in seating, lighting, pergolas, and weather protection so you can enjoy your space year-round. Every detail is planned for comfort, safety, and visual appeal.'
		  },
		  trend_heading: 'Latest Outdoor Living Trends',
	trend_description:
		'Find inspiration in the latest deck and patio designs that extend comfort and entertainment outdoors.',
		trends: [
			{
				title: 'Composite Decking 2.0',
				description: 'Fade‑resistant, low‑maintenance boards with hidden fasteners.',
				icon: Layers
			},
			{
				title: 'Outdoor Kitchens & Fire',
				description: 'Built‑in grills, prep space, and fire features for entertaining.',
				icon: Flame
			},
			{
				title: 'Shade & Weather Control',
				description: 'Pergolas, retractable canopies, and rain‑friendly details.',
				icon: Umbrella
			}
		],
		featuresTittle: ' Outdoor Living, Perfected',
		featuresSubtittle:
			'Turn your backyard into the ultimate gathering space with decks and patios built for beauty, comfort, and durability — designed for lounging, entertaining, and making memories in every season.',
		features: [
			{
				title: 'Material Options',
				description: 'Composite, hardwood, pavers, and natural stone.',
				icon: Layers
			},
			{
				title: 'Built‑in Seating & Planters',
				description: 'Maximize function with integrated elements.',
				icon: Leaf
			},
			{
				title: 'Low‑Voltage Lighting',
				description: 'Stairs, posts, and pathways illuminated for safety.',
				icon: Lightbulb
			},
			{
				title: 'Durable Railings',
				description: 'Aluminum, cable, or glass systems that stand up to weather.',
				icon: Fence
			}
		],
		process: [
			{ title: 'Consultation', desc: 'Discuss your outdoor vision and needs.' },
			{ title: 'Design & Layout', desc: 'Plan your perfect outdoor living area.' },
			{ title: 'Material Selection', desc: 'Choose wood, composite, or stone.' },
			{ title: 'Construction', desc: 'Expertly build your deck or patio.' },
			{ title: 'Final Touches', desc: 'Add lighting, railings, or pergolas.' }
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
			{ question: 'What materials do you offer?', answer: 'We build with pressure-treated wood, composite decking, hardwoods, stone, and pavers.' },
			{ question: 'Can you add shade or weather protection?', answer: 'Yes. We can install pergolas, roofs, retractable awnings, and privacy screens.' },
			{ question: 'Do you handle lighting installation?', answer: 'Absolutely. We can integrate deck and landscape lighting for safety and ambiance.' },
			{ question: 'How long will my deck or patio last?', answer: 'With proper maintenance, wood decks can last 10–15 years, while composite and stone can last decades.' },
			{ question: 'Do you take care of permits?', answer: 'Yes, we handle all permits and inspections.' },
			{ question: 'Can you build multi-level decks?', answer: 'Yes. Multi-tiered designs can create distinct zones for dining, lounging, and entertaining.' }
		  ],
		cta: {
			heading: 'Bring Your Backyard to Life',
			subheading: 'Start your deck or patio project today.',
			button: 'Request Consultation'
		}
	},

	'whole-home-renovations': {
		slug: 'whole-home-renovations',
		title: 'Whole-Home Renovations',
		goldTittle: 'Reimagine Every Room',
		subTittle:
			'Give your home a complete transformation that reflects your style. From floor to ceiling, every space will feel fresh, cohesive, and perfectly you.',
		meta: {
			description:
				'From floor to ceiling, room to room, we reimagine and rebuild for a cohesive, stunning transformation.',
			heroImage:
				'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			priceTag: 'From $100k',
			timeline: '3-6 months'
		},
		overview: {
			heading: 'One Vision, Every Room',
			paragraph:
			  'Our whole-home renovations are complete transformations — a chance to rethink and redesign your living spaces from top to bottom. We create a cohesive design that flows seamlessly from room to room, while addressing practical needs like storage, lighting, and energy efficiency. From updating kitchens and bathrooms to refreshing flooring, paint, and fixtures throughout, we manage every detail. Whether you want a modern refresh, a timeless classic, or a complete style change, our experienced team ensures your new home reflects your taste and enhances your lifestyle.'
		  },
		  trend_heading: 'Latest Whole-Home Renovation Trends',
	trend_description:
		'Learn how full-scale renovations are redefining homes with cohesive design, sustainability, and smart upgrades.',
		trends: [
			{
				title: 'Open‑Concept Living',
				description: 'Structural changes that create light‑filled, connected spaces.',
				icon: Expand
			},
			{
				title: 'Smart Home Integration',
				description: 'Lighting, climate, and security unified in one ecosystem.',
				icon: Smartphone
			},
			{
				title: 'High‑Performance Envelope',
				description: 'Better insulation, windows, and air‑sealing for comfort and savings.',
				icon: Gauge
			}
		],
		featuresTittle: 'A Complete Transformation, Inside and Out',
		featuresSubtittle:
			' Reimagine your home from floor to ceiling with a cohesive design that flows through every room — blending your personal style with modern comforts, energy efficiency, and craftsmanship that stands the test of time.',
		features: [
			{
				title: 'Cohesive Design Language',
				description: 'Finishes and details that flow consistently room to room.',
				icon: Palette
			},
			{
				title: 'Systems Upgrades',
				description: 'Electrical panel, plumbing, and HVAC sized for the new plan.',
				icon: Wrench
			},
			{
				title: 'Energy Efficiency',
				description: 'Window replacements, insulation, and air‑sealing throughout.',
				icon: Leaf
			},
			{
				title: 'Phased Construction',
				description: 'Plan around occupancy with temporary living strategies.',
				icon: CalendarRange
			}
		],
		process: [
			{ title: 'Consultation', desc: 'Discuss goals, style, and scope.' },
			{ title: 'Comprehensive Design', desc: 'Plan every space for flow and function.' },
			{ title: 'Material Selection', desc: 'Choose finishes, fixtures, and accents.' },
			{ title: 'Full Renovation', desc: 'Execute the complete home transformation.' },
			{ title: 'Final Reveal', desc: 'Walk through your beautiful new home.' }
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
			{ question: 'Do I need to move out during the renovation?', answer: 'For major renovations, temporary relocation is often recommended, but we can work in phases to minimize disruption.' },
			{ question: 'Can you keep some of my existing features?', answer: 'Yes. We can incorporate and restore elements you love while updating the rest of your home.' },
			{ question: 'How do you ensure a cohesive look?', answer: 'We create a comprehensive design plan that ties all spaces together with consistent colors, materials, and styles.' },
			{ question: 'How long does a whole-home renovation take?', answer: 'Timelines vary, but most take 3–9 months depending on scope and complexity.' },
			{ question: 'Do you handle permits and inspections?', answer: 'Yes, we take care of all required permits, approvals, and inspections.' },
			{ question: 'Will a full renovation increase my home’s value?', answer: 'Yes, especially when modernizing outdated spaces and improving functionality.' }
		  ],
		cta: {
			heading: 'Reimagine Your Home',
			subheading: 'Let’s make every room your favorite room.',
			button: 'Start Your Renovation'
		}
	}
};
