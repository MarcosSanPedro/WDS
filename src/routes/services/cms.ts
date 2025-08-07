import type { Services } from '$lib/types';

export const services: Record<string, Services> = {
	'kitchen-renovations': {
		slug: 'kitchen-renovations',
		title: 'Your Dream Kitchen Starts Here',
		meta: {
			description:
				'Transform your home with custom cabinetry, premium countertops, and modern appliances. Experience unparalleled craftsmanship and design.',
			heroImage: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
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

	'bathroom-renovations': {
		slug: 'bathroom-renovations',
		title: 'Luxury & Comfort in Every Detail',
		meta: {
			description:
				'Upgrade your bathroom with spa-like features, high-end fixtures, and timeless designs for everyday indulgence.',
			heroImage: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			priceTag: 'From $15k',
			timeline: '3-6 weeks'
		},
		overview: {
			heading: 'Elevate Your Daily Routine',
			paragraph:
				'From cramped spaces to outdated finishes, we turn your bathroom into a stylish sanctuary—merging elegance, practicality, and relaxation. Every element is crafted to your comfort and taste.'
		},
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
			{
				question: 'Do you offer eco-friendly options?',
				answer:
					'Yes, we can source sustainable materials and water-saving fixtures for your project.'
			},
			{
				question: 'Can you expand my bathroom?',
				answer:
					'Absolutely. We can reconfigure layouts or incorporate adjacent space for a larger bathroom.'
			},
			{
				question: 'What about ventilation?',
				answer:
					'We ensure proper ventilation is installed or upgraded to prevent moisture issues.'
			},
			{
				question: 'Do you provide design inspiration?',
				answer:
					'Yes, our designers present curated style boards to help guide your choices.'
			},
			{
				question: 'What warranty do you provide?',
				answer:
					'We offer a 2-year workmanship warranty plus manufacturer warranties on materials.'
			}
		],
		cta: {
			heading: 'Turn Your Bathroom into a Spa',
			subheading: 'Book your consultation and step into luxury.',
			button: 'Book Consultation'
		}
	},

	'home-additions': {
		slug: 'home-additions',
		title: 'Expand Your Living Space with Ease',
		meta: {
			description:
				'Add bedrooms, sunrooms, or new living areas that blend seamlessly with your home’s style and structure.',
			heroImage: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			priceTag: 'From $40k',
			timeline: '6-12 weeks'
		},
		overview: {
			heading: 'Space for What Matters Most',
			paragraph:
				'Whether you’re growing your family or creating a dream space, our additions look like they were always part of your home—built to last with unmatched craftsmanship.'
		},
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
			{
				question: 'Will the addition match my home?',
				answer:
					'Yes, we design and build to seamlessly integrate with your home’s architecture.'
			},
			{
				question: 'Do you handle permits?',
				answer:
					'Absolutely, our team takes care of all necessary permits and inspections.'
			},
			{
				question: 'Can I live in my home during construction?',
				answer:
					'In most cases, yes, but it depends on the scope of work and access needs.'
			},
			{
				question: 'Do you work with my architect?',
				answer:
					'We can collaborate with your architect or provide our in-house design services.'
			},
			{
				question: 'What warranty do you provide?',
				answer:
					'We offer a 2-year workmanship warranty and honor manufacturer warranties on materials.'
			}
		],
		cta: {
			heading: 'Add More Space Without Moving',
			subheading: 'Expand your home to fit your lifestyle.',
			button: 'Request Quote'
		}
	},

	'basement-finishing': {
		slug: 'basement-finishing',
		title: 'Turn Your Basement into a Destination',
		meta: {
			description:
				'Maximize your home’s potential with a fully finished basement designed for living, working, or playing.',
			heroImage: 'https://images.pexels.com/photos/373548/pexels-photo-373548.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			priceTag: 'From $20k',
			timeline: '5-9 weeks'
		},
		overview: {
			heading: 'From Storage to Showcase',
			paragraph:
				'We transform dark, unused basements into vibrant, functional spaces—perfect for home theaters, guest suites, offices, or playrooms.'
		},
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
			{
				question: 'Do you handle waterproofing?',
				answer:
					'Yes, we address any moisture issues before starting the finishing process.'
			},
			{
				question: 'Can you add a bathroom?',
				answer:
					'Absolutely, we can include a bathroom or kitchenette in your basement design.'
			},
			{
				question: 'Will the basement be warm?',
				answer:
					'We insulate and seal to ensure year-round comfort.'
			},
			{
				question: 'Do you offer soundproofing?',
				answer:
					'Yes, perfect for home theaters, studios, or quiet offices.'
			},
			{
				question: 'What warranty do you provide?',
				answer:
					'We offer a 2-year workmanship warranty and honor all manufacturer warranties on materials.'
			}
		],
		cta: {
			heading: 'Unlock Your Basement’s Potential',
			subheading: 'Let’s create a space you’ll love to spend time in.',
			button: 'Get Started'
		}
	},

	'deck-patio-construction': {
		slug: 'deck-patio-construction',
		title: 'Outdoor Living at Its Finest',
		meta: {
			description:
				'Create a stunning outdoor escape with custom decks and patios built for beauty, comfort, and durability.',
			heroImage: 'https://images.pexels.com/photos/238385/pexels-photo-238385.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			priceTag: 'From $12k',
			timeline: '2-5 weeks'
		},
		overview: {
			heading: 'Expand Your Home Outdoors',
			paragraph:
				'From cozy patios to expansive decks, we craft outdoor spaces perfect for gatherings, relaxation, and year-round enjoyment.'
		},
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
			{
				question: 'What materials do you offer?',
				answer:
					'We work with natural wood, composite decking, pavers, and stone.'
			},
			{
				question: 'Do you offer covered patios?',
				answer:
					'Yes, we can integrate pergolas, awnings, or full covers.'
			},
			{
				question: 'Is maintenance required?',
				answer:
					'Composite materials require minimal upkeep, while wood may need periodic sealing.'
			},
			{
				question: 'Can you install outdoor kitchens?',
				answer:
					'Absolutely, we can design and build outdoor kitchens as part of your space.'
			},
			{
				question: 'What warranty do you provide?',
				answer:
					'We offer a 2-year workmanship warranty and honor all manufacturer warranties on materials.'
			}
		],
		cta: {
			heading: 'Bring Your Backyard to Life',
			subheading: 'Start your deck or patio project today.',
			button: 'Request Consultation'
		}
	},

	'whole-home-renovations': {
		slug: 'whole-home-renovations',
		title: 'Transform Your Entire Home',
		meta: {
			description:
				'From floor to ceiling, room to room, we reimagine and rebuild for a cohesive, stunning transformation.',
			heroImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
			priceTag: 'From $100k',
			timeline: '3-6 months'
		},
		overview: {
			heading: 'A Fresh Start Without Moving',
			paragraph:
				'We handle every aspect of your home’s transformation—coordinating design, construction, and finishing touches for a flawless result.'
		},
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
			{
				question: 'Do you manage the entire project?',
				answer:
					'Yes, we oversee everything from design to final walkthrough.'
			},
			{
				question: 'Can I renovate in phases?',
				answer:
					'Absolutely, we can plan a phased approach to fit your budget and schedule.'
			},
			{
				question: 'Will my home be livable during renovation?',
				answer:
					'It depends on the scope—some clients stay, others prefer temporary relocation.'
			},
			{
				question: 'Do you coordinate with designers?',
				answer:
					'Yes, we can work with your designer or provide our own.'
			},
			{
				question: 'What warranty do you provide?',
				answer:
					'We offer a 2-year workmanship warranty and honor all manufacturer warranties on materials.'
			}
		],
		cta: {
			heading: 'Reimagine Your Home',
			subheading: 'Let’s make every room your favorite room.',
			button: 'Start Your Renovation'
		}
	}
};
