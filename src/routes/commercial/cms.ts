import type { Services } from '$lib/types';

export const services: Record<string, Services> = {
	'kitchen-renovations': {
		slug: 'kitchen-renovations',
		title: 'Your Dream Kitchen Starts Here',
		meta: {

			description:
				'Transform your home with custom cabinetry, premium countertops, and modern appliances. Experience unparalleled craftsmanship and design.',
			heroImage: 'https://example.com/kitchen.jpg',
			priceTag: 'From $25k',
			timeline: '4-8 weeks'
		},
		overview: {
			heading: 'Transform Your Kitchen Experience',
			paragraph:
				'Outdated layout? Inefficient storage? Our award-winning designers re-imagine every inch—merging form, function and flawless finishes. From concept to completion, we create kitchens that become the heart of your home.'
		},
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
			{
				question: 'How long will my kitchen be unusable?',
				answer:
					'Most clients regain a functional space within 6 weeks, with final detailing completed by week 8.'
			},
			{
				question: 'What is included in the base price?',
				answer:
					'Our base package includes demolition, basic electrical and plumbing updates, standard cabinets, countertops, and installation.'
			},
			{
				question: 'Do you handle permits and inspections?',
				answer:
					'Yes, we manage all necessary permits and coordinate inspections throughout the project timeline.'
			},
			{
				question: 'Can I stay in my home during renovation?',
				answer:
					'Absolutely. We set up temporary kitchen facilities and work around your schedule to minimize disruption.'
			},
			{
				question: 'What warranty do you provide?',
				answer:
					'We offer a 2-year warranty on workmanship and honor all manufacturer warranties on materials and appliances.'
			}
		],
		cta: {
			heading: "Let's Cook Up Something Amazing",
			subheading: 'Ready to transform your kitchen? Schedule your consultation today.',
			button: 'Schedule Consultation'
		}
	},
	'bathroom-remodeling': {
		slug: 'bathroom-remodeling',
		title: 'Reimagine Your Bathroom Space',
		meta: {
			description: 'Upgrade your bathroom with luxury fixtures, elegant tilework, and spa-inspired design. We bring comfort and functionality together.',
			heroImage: 'https://example.com/bathroom.jpg',
			priceTag: 'From $15k',
			timeline: '2-6 weeks'
		},
		overview: {
			heading: 'Luxury Meets Practicality',
			paragraph: 'Whether it’s a sleek powder room or a master spa retreat, our designers and craftsmen work closely with you to build beautiful, efficient spaces that elevate your daily routine.'
		},
		process: [
			{ title: 'Personalized Planning', desc: 'We assess your needs and inspirations.' },
			{ title: 'Design & Material Selection', desc: 'Choose your layout, tiles, vanities and more.' },
			{ title: 'Demolition & Prep', desc: 'Safe removal of old fixtures and surfaces.' },
			{ title: 'Build & Install', desc: 'Meticulous execution of your custom design.' },
			{ title: 'Final Walkthrough', desc: 'Ensure every detail exceeds your expectations.' }
		],
		styles: {
			modern: [/* imágenes similares o nuevas según tu banco */],
			traditional: [],
			contemporary: []
		},
		faqs: [
			{ question: 'Can I upgrade just the shower or vanity?', answer: 'Yes, we offer partial remodels tailored to your priorities and budget.' },
			{ question: 'Do you offer waterproofing?', answer: 'Absolutely. All bathrooms include waterproofing measures for long-term durability.' },
			{ question: 'Is a tub-to-shower conversion possible?', answer: 'Yes, we specialize in efficient and stylish conversions.' }
		],
		cta: {
			heading: 'Step Into a Beautiful New Bathroom',
			subheading: 'Schedule a design consultation and get started today.',
			button: 'Book Now'
		}
	},

	'whole-home-renovations': {
		slug: 'whole-home-renovations',
		title: 'Complete Home Transformations',
		meta: {
			description: 'Turn your current home into your dream home with full-scale renovations, from floor plan redesign to custom finishes.',
			heroImage: 'https://example.com/home-reno.jpg',
			priceTag: 'From $100k',
			timeline: '3-6 months'
		},
		overview: {
			heading: 'One Vision, Entirely Reimagined',
			paragraph: 'We coordinate every room, feature, and detail to ensure cohesion, functionality, and beauty throughout your entire home.'
		},
		process: [
			{ title: 'Consultation & Discovery', desc: 'We understand your lifestyle and needs.' },
			{ title: 'Comprehensive Design', desc: 'We draft layouts, mood boards, and timelines.' },
			{ title: 'Permitting & Engineering', desc: 'We handle all technical requirements.' },
			{ title: 'Full Renovation', desc: 'From demo to framing, finishes to fixtures.' },
			{ title: 'Reveal & Aftercare', desc: 'We ensure every aspect meets our quality standards.' }
		],
		styles: {
			modern: [],
			traditional: [],
			contemporary: []
		},
		faqs: [
			{ question: 'Can I live at home during renovation?', answer: 'Depending on the scope, we’ll discuss phased approaches or temporary relocation.' },
			{ question: 'What’s included in a whole-home remodel?', answer: 'Design, construction, finishes, plumbing, electrical, flooring, and more.' },
			{ question: 'Do you work with structural changes?', answer: 'Yes, we collaborate with engineers and architects for major transformations.' }
		],
		cta: {
			heading: 'Rebuild the Home You Love',
			subheading: 'Let’s turn your vision into reality with a full-home remodel.',
			button: 'Start Planning'
		}
	},

	'commercial-construction': {
		slug: 'commercial-construction',
		title: 'Expert Commercial Construction Services',
		meta: {
			description: 'From office renovations to new retail buildouts, we deliver efficient, code-compliant commercial spaces tailored to your business.',
			heroImage: 'https://example.com/commercial.jpg',
			priceTag: 'Custom Bids',
			timeline: 'Project-based'
		},
		overview: {
			heading: 'Built for Business',
			paragraph: 'We create workspaces that support productivity, reflect brand identity, and meet all commercial regulations and standards.'
		},
		process: [
			{ title: 'Planning & Scope Review', desc: 'Understanding your goals and timelines.' },
			{ title: 'Design-Build Collaboration', desc: 'Partnering with architects and stakeholders.' },
			{ title: 'Construction Execution', desc: 'On-time, on-budget, safety-first delivery.' },
			{ title: 'Compliance & Inspections', desc: 'We manage all permitting and code checks.' },
			{ title: 'Handover', desc: 'Ready for occupancy or operations.' }
		],
		styles: {
			modern: [],
			traditional: [],
			contemporary: []
		},
		faqs: [
			{ question: 'Do you handle tenant build-outs?', answer: 'Yes, we work with property managers and business owners for interior completions.' },
			{ question: 'What industries do you serve?', answer: 'Retail, office, hospitality, healthcare, and light industrial.' },
			{ question: 'Do you offer maintenance after project completion?', answer: 'Yes, we provide optional maintenance and support packages.' }
		],
		cta: {
			heading: 'Let’s Build Your Business Forward',
			subheading: 'From blueprints to final walkthrough, we’re your trusted commercial partner.',
			button: 'Request Proposal'
		}
	},

	'custom-millwork': {
		slug: 'custom-millwork',
		title: 'Precision Custom Millwork',
		meta: {
			description: 'Enhance your interiors with handcrafted woodwork—from cabinetry to feature walls, stairs, doors, and more.',
			heroImage: 'https://example.com/millwork.jpg',
			priceTag: 'Project-based',
			timeline: '2-10 weeks'
		},
		overview: {
			heading: 'Craftsmanship in Every Cut',
			paragraph: 'Our team of master craftsmen builds pieces that add depth, luxury, and detail to any space. Everything is measured, made, and finished with care.'
		},
		process: [
			{ title: 'Design Consultation', desc: 'Collaborate with our designers to define your vision.' },
			{ title: 'Material Selection', desc: 'Pick from premium hardwoods, finishes, and profiles.' },
			{ title: 'Fabrication', desc: 'Custom-built in our workshop with expert attention.' },
			{ title: 'Installation', desc: 'Delivered and installed with precision.' },
			{ title: 'Final Detailing', desc: 'Sanding, staining, and finishing touches on-site.' }
		],
		styles: {
			modern: [],
			traditional: [],
			contemporary: []
		},
		faqs: [
			{ question: 'What kind of millwork can you build?', answer: 'Cabinetry, mantels, ceilings, walls, moldings, and more.' },
			{ question: 'Do you offer design matching?', answer: 'Yes, we can match existing styles or architectural elements.' },
			{ question: 'Is everything built in-house?', answer: 'Yes, all millwork is fabricated in our workshop for full control over quality.' }
		],
		cta: {
			heading: 'Let Wood Define Your Space',
			subheading: 'Contact us for custom millwork that elevates your interiors.',
			button: 'Get a Quote'
		}
	},

	'design-consultation': {
		slug: 'design-consultation',
		title: 'Professional Design Consultation',
		meta: {
			description: 'Not sure where to start? Our design team will guide you through layout, finishes, styles, and functionality tailored to your space and goals.',
			heroImage: 'https://example.com/design.jpg',
			priceTag: 'From $250',
			timeline: '1-2 sessions'
		},
		overview: {
			heading: 'Expert Guidance. Beautiful Results.',
			paragraph: 'Avoid costly mistakes and bring clarity to your vision. Whether it’s one room or an entire home, we help you make confident, informed design decisions.'
		},
		process: [
			{ title: 'Initial Call', desc: 'Discuss your needs, style, and scope.' },
			{ title: 'In-Person or Virtual Session', desc: 'We present tailored suggestions and ideas.' },
			{ title: 'Design Report', desc: 'Receive a written plan with materials, layouts, and references.' },
			{ title: 'Optional Follow-Up', desc: 'Book continued design support if needed.' },
			{ title: 'Execution Support', desc: 'We can connect you with our trusted contractors.' }
		],
		styles: {
			modern: [],
			traditional: [],
			contemporary: []
		},
		faqs: [
			{ question: 'Can I use the service for a single room?', answer: 'Yes! We consult on projects of any size.' },
			{ question: 'Do I have to remodel with your company?', answer: 'No, our consultation is obligation-free.' },
			{ question: 'Do you provide shopping lists or material guides?', answer: 'Yes, all plans include clear sourcing recommendations.' }
		],
		cta: {
			heading: 'Book Your Design Session',
			subheading: 'Clarity, creativity, and confidence start here.',
			button: 'Book Now'
		}
	}
};
