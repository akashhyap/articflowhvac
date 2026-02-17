// ============================================================
// ArcticFlow HVAC Las Vegas — Centralized Site Data
// ============================================================

export const business = {
  name: 'ArcticFlow HVAC Las Vegas',
  shortName: 'ArcticFlow HVAC',
  tagline: 'Your Las Vegas HVAC Specialists',
  phone: '(725) 349-4849',
  phoneRaw: '7253494849',
  email: 'info@arcticflowhvaclasvegas.com',
  address: {
    street: '2407 S Industrial Rd',
    city: 'Las Vegas',
    state: 'NV',
    zip: '89102',
    full: '2407 S Industrial Rd, Las Vegas, NV 89102, USA',
  },
  hours: '24/7 - All Days Emergency Service Available',
  founded: '2018',
  license: 'NV Contractor License #0XXXXXX',
  domain: 'https://arcticflowhvaclasvegas.com',
};

export const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services/',
    children: [
      { label: 'Air Conditioning', href: '/services/air-conditioning/' },
      { label: 'Heating', href: '/services/heating/' },
      { label: 'Commercial HVAC', href: '/services/commercial-hvac/' },
      { label: 'Indoor Air Quality', href: '/services/indoor-air-quality/' },
    ],
  },
  { label: 'Service Areas', href: '/service-areas/' },
  { label: 'About', href: '/about/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Testimonials', href: '/testimonials/' },
  { label: 'Financing', href: '/financing/' },
  { label: 'Contact', href: '/contact/' },
];

// ============================================================
// Service Hubs
// ============================================================

export interface ServiceHub {
  slug: string;
  title: string;
  hubTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  intro: string;
  icon: string;
  spokes: ServiceSpoke[];
  faqs: FAQ[];
}

export interface ServiceSpoke {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  intro: string;
  icon: string;
  problemHeading: string;
  problemText: string;
  solutionHeading: string;
  solutionText: string;
  processSteps: { title: string; description: string }[];
  faqs: FAQ[];
  relatedSlugs: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export const serviceHubs: ServiceHub[] = [
  // -------------------------------------------------------
  // CLUSTER 1: Air Conditioning
  // -------------------------------------------------------
  {
    slug: 'air-conditioning',
    title: 'Air Conditioning',
    hubTitle: 'Air Conditioning Services',
    metaTitle: 'Air Conditioning Services Las Vegas | ArcticFlow HVAC',
    metaDescription: 'Professional air conditioning repair, installation, replacement, and maintenance services in Las Vegas, NV. 24/7 emergency AC service available. Call (725) 349-4849.',
    heroHeading: 'Air Conditioning Services in Las Vegas',
    heroSubheading: 'Expert AC repair, installation, and maintenance for the desert climate',
    intro: 'In Las Vegas, your air conditioning system is not a luxury — it is a necessity. With summer temperatures regularly exceeding 110°F, a reliable AC system keeps your family safe and comfortable. ArcticFlow HVAC provides comprehensive air conditioning services designed specifically for the demands of the Nevada desert climate. From emergency repairs during heat waves to complete system installations, our certified technicians deliver fast, dependable results every time.',
    icon: '❄️',
    spokes: [
      {
        slug: 'ac-repair',
        title: 'AC Repair',
        metaTitle: 'AC Repair Las Vegas | 24/7 Emergency Service | ArcticFlow HVAC',
        metaDescription: 'Fast, reliable AC repair in Las Vegas, NV. Same-day service, all makes and models. Licensed technicians available 24/7. Call (725) 349-4849 for immediate help.',
        heroHeading: 'AC Repair in Las Vegas',
        heroSubheading: 'Fast, reliable air conditioning repair when you need it most',
        intro: 'When your air conditioning breaks down in the Las Vegas heat, you need a repair team that responds fast. ArcticFlow HVAC provides same-day AC repair service for all makes and models. Our licensed technicians arrive equipped to diagnose and fix most issues in a single visit, getting your home back to comfortable temperatures quickly.',
        icon: '🔧',
        problemHeading: 'Signs Your AC Needs Repair',
        problemText: 'Common warning signs include warm air blowing from vents, unusual noises like grinding or squealing, frequent cycling on and off, unexplained spikes in energy bills, ice forming on the evaporator coil, and weak airflow throughout your home. Ignoring these signs can lead to a complete system breakdown — especially dangerous during a Las Vegas summer.',
        solutionHeading: 'Our AC Repair Process',
        solutionText: 'Our technicians perform a thorough diagnostic of your entire system, identify the root cause of the problem, explain your repair options with upfront pricing, and complete the repair efficiently. We stock common parts on our service vehicles so most repairs are completed the same day.',
        processSteps: [
          { title: 'Call or Book Online', description: 'Contact us 24/7 for emergency or scheduled AC repair in Las Vegas.' },
          { title: 'Diagnostic Inspection', description: 'Our technician performs a complete system evaluation to pinpoint the issue.' },
          { title: 'Transparent Quote', description: 'We explain the problem and provide upfront pricing before any work begins.' },
          { title: 'Expert Repair', description: 'We fix the issue right the first time using quality parts and proven techniques.' },
        ],
        faqs: [
          { question: 'How quickly can you repair my AC in Las Vegas?', answer: 'We offer same-day AC repair service throughout Las Vegas. For emergencies, we typically arrive within 1-2 hours of your call, 24 hours a day, 7 days a week.' },
          { question: 'How much does AC repair cost in Las Vegas?', answer: 'AC repair costs vary depending on the issue. Simple fixes like capacitor replacement may cost $150-$300, while compressor repairs can range from $600-$1,500. We provide upfront pricing before starting any repair.' },
          { question: 'Should I repair or replace my AC unit?', answer: 'Generally, if your AC is over 10-15 years old and the repair cost exceeds 50% of a new system, replacement is the better investment. Our technicians will give you an honest recommendation based on your system\'s condition and efficiency.' },
          { question: 'Do you repair all AC brands?', answer: 'Yes, our technicians are trained and certified to repair all major AC brands including Carrier, Lennox, Trane, Rheem, Goodman, Daikin, and more.' },
        ],
        relatedSlugs: ['ac-maintenance', 'ac-replacement', 'emergency-ac-repair'],
      },
      {
        slug: 'ac-installation',
        title: 'AC Installation',
        metaTitle: 'AC Installation Las Vegas | New System Install | ArcticFlow HVAC',
        metaDescription: 'Professional AC installation in Las Vegas. Energy-efficient cooling systems sized for desert climate. Free estimates. Licensed installers. Call (725) 349-4849.',
        heroHeading: 'AC Installation in Las Vegas',
        heroSubheading: 'Energy-efficient cooling systems designed for Nevada\'s desert climate',
        intro: 'Installing a new air conditioning system in Las Vegas requires expertise in desert climate HVAC design. ArcticFlow HVAC provides professional AC installation services that ensure your new system is properly sized, efficiently installed, and ready to handle the extreme heat. We work with top brands and back every installation with comprehensive warranties.',
        icon: '🏗️',
        problemHeading: 'When You Need a New AC Installation',
        problemText: 'If you are building a new home, adding onto your property, converting a space that lacks cooling, or your existing system has reached the end of its lifespan, a new AC installation provides the reliability and energy efficiency you need. Modern systems can reduce energy costs by 20-40% compared to older units.',
        solutionHeading: 'Our Installation Approach',
        solutionText: 'We start with a detailed load calculation to determine the exact cooling capacity your home needs. Oversized or undersized systems waste energy and fail prematurely. Our certified installers follow manufacturer specifications and local building codes to ensure a flawless installation.',
        processSteps: [
          { title: 'Free In-Home Consultation', description: 'We evaluate your space, ductwork, and cooling needs with a Manual J load calculation.' },
          { title: 'System Selection', description: 'We recommend the best equipment for your home and budget from trusted brands.' },
          { title: 'Professional Installation', description: 'Our licensed team installs your new system to manufacturer and code specifications.' },
          { title: 'Testing and Walkthrough', description: 'We verify performance and teach you how to get the most from your new system.' },
        ],
        faqs: [
          { question: 'How long does AC installation take in Las Vegas?', answer: 'A standard residential AC installation typically takes 1 day. Complex installations involving ductwork modifications may take 2-3 days.' },
          { question: 'What size AC do I need for my Las Vegas home?', answer: 'AC sizing depends on square footage, insulation, window exposure, and other factors. In Las Vegas, homes generally need more cooling capacity than national averages due to extreme heat. We perform a Manual J load calculation to determine the exact size.' },
          { question: 'What brands do you install?', answer: 'We install Carrier, Lennox, Trane, Rheem, Goodman, Daikin, and other top-rated brands. We help you choose the best option based on your budget and performance requirements.' },
          { question: 'Do you offer financing for new AC installation?', answer: 'Yes, we offer flexible financing options to make a new AC installation affordable. Ask us about our monthly payment plans with approved credit.' },
        ],
        relatedSlugs: ['ac-replacement', 'ac-maintenance', 'ac-repair'],
      },
      {
        slug: 'ac-replacement',
        title: 'AC Replacement',
        metaTitle: 'AC Replacement Las Vegas | System Upgrade | ArcticFlow HVAC',
        metaDescription: 'Expert AC replacement in Las Vegas. Upgrade to energy-efficient cooling with professional installation. Free estimates, financing available. Call (725) 349-4849.',
        heroHeading: 'AC Replacement in Las Vegas',
        heroSubheading: 'Upgrade to a modern, energy-efficient cooling system',
        intro: 'If your current air conditioning system is over 10 years old, frequently breaking down, or driving up your energy bills, a professional AC replacement can save you money and keep your Las Vegas home reliably cool. ArcticFlow HVAC handles the entire replacement process — from system selection to old unit removal and new installation — with minimal disruption to your comfort.',
        icon: '🔄',
        problemHeading: 'Signs It Is Time to Replace Your AC',
        problemText: 'Consider AC replacement if your system is 10-15 years old, requires frequent repairs costing more than $500 per year, uses R-22 refrigerant which is being phased out, struggles to maintain consistent temperatures, or produces excessively high energy bills. A new high-efficiency system pays for itself through lower utility costs.',
        solutionHeading: 'Our Replacement Process',
        solutionText: 'We evaluate your current system, assess your home\'s cooling needs, recommend the best replacement options within your budget, and handle the complete removal and installation. Our goal is to have your new system running the same day whenever possible.',
        processSteps: [
          { title: 'System Assessment', description: 'We evaluate your existing AC, ductwork, and home cooling requirements.' },
          { title: 'Equipment Recommendation', description: 'We recommend replacement systems that match your needs and budget.' },
          { title: 'Old System Removal', description: 'We safely remove and properly dispose of your old AC equipment.' },
          { title: 'New System Installation', description: 'Your new system is installed, tested, and ready to cool your home.' },
        ],
        faqs: [
          { question: 'How much does AC replacement cost in Las Vegas?', answer: 'AC replacement typically costs between $4,500 and $12,000 depending on system size, efficiency rating, and any ductwork modifications needed. We provide free estimates and flexible financing options.' },
          { question: 'How long will my new AC system last in Las Vegas?', answer: 'With proper maintenance, a new AC system in Las Vegas typically lasts 12-20 years. The desert climate can be demanding, so regular maintenance is essential to maximize system life.' },
          { question: 'Can I replace just the outdoor unit?', answer: 'While possible, we generally recommend replacing the complete system (indoor and outdoor units) for optimal efficiency and warranty coverage. Mismatched components reduce performance.' },
        ],
        relatedSlugs: ['ac-installation', 'ac-repair', 'ac-maintenance'],
      },
      {
        slug: 'ac-maintenance',
        title: 'AC Maintenance',
        metaTitle: 'AC Maintenance Las Vegas | Tune-Up Service | ArcticFlow HVAC',
        metaDescription: 'Professional AC maintenance and tune-up services in Las Vegas. Extend system life, prevent breakdowns, save on energy. Call (725) 349-4849 to schedule.',
        heroHeading: 'AC Maintenance & Tune-Ups in Las Vegas',
        heroSubheading: 'Preventative care to keep your cooling system running at peak performance',
        intro: 'Regular AC maintenance is the single best way to extend your system\'s life, prevent costly breakdowns, and keep energy bills low — especially in the demanding Las Vegas climate. ArcticFlow HVAC offers comprehensive maintenance plans that include seasonal tune-ups, priority scheduling, and discounted repair rates to keep your system running efficiently all year long.',
        icon: '🛠️',
        problemHeading: 'Why AC Maintenance Matters in Las Vegas',
        problemText: 'Las Vegas AC systems work harder and longer than systems in moderate climates. Without regular maintenance, efficiency drops by 5% each year, minor issues develop into major repairs, air quality suffers from dirty filters and coils, and system lifespan is significantly shortened. A well-maintained system runs cooler, quieter, and cheaper.',
        solutionHeading: 'Our Maintenance Checklist',
        solutionText: 'Our comprehensive AC tune-up covers all critical components: refrigerant level check, electrical connection inspection, thermostat calibration, condensate drain clearing, coil cleaning, filter replacement, airflow measurement, and safety system testing. We document everything and alert you to potential issues before they become emergencies.',
        processSteps: [
          { title: 'Schedule Your Tune-Up', description: 'Book a convenient time for your seasonal AC maintenance visit.' },
          { title: 'Comprehensive Inspection', description: 'Our technician performs a 20+ point inspection of your entire cooling system.' },
          { title: 'Cleaning and Adjustment', description: 'We clean coils, replace filters, calibrate controls, and optimize performance.' },
          { title: 'Performance Report', description: 'You receive a detailed report on system condition and any recommended action items.' },
        ],
        faqs: [
          { question: 'How often should I service my AC in Las Vegas?', answer: 'We recommend AC maintenance twice a year in Las Vegas — once in spring before cooling season and once in fall. The extreme heat puts extra stress on your system, making regular maintenance critical.' },
          { question: 'What does an AC tune-up include?', answer: 'Our tune-up includes a 20+ point inspection covering refrigerant levels, electrical connections, thermostat calibration, coil cleaning, filter replacement, airflow testing, and safety system verification.' },
          { question: 'How much does AC maintenance cost?', answer: 'A single AC tune-up typically costs $89-$149. Our maintenance plans offer two visits per year plus discounts on repairs and priority scheduling for better value.' },
        ],
        relatedSlugs: ['ac-repair', 'ac-replacement', 'emergency-ac-repair'],
      },
      {
        slug: 'emergency-ac-repair',
        title: 'Emergency AC Repair',
        metaTitle: '24/7 Emergency AC Repair Las Vegas | ArcticFlow HVAC',
        metaDescription: '24/7 emergency AC repair in Las Vegas. Fast response when your cooling fails. No extra charge for after-hours calls. Call (725) 349-4849 now.',
        heroHeading: '24/7 Emergency AC Repair in Las Vegas',
        heroSubheading: 'Fast response when your cooling system fails — day or night',
        intro: 'When your AC fails in the middle of a Las Vegas heat wave, it is an emergency. Indoor temperatures can climb to dangerous levels within hours. ArcticFlow HVAC provides 24/7 emergency AC repair with fast response times throughout the Las Vegas Valley. Our emergency technicians arrive fully equipped to diagnose and repair most issues on the first visit.',
        icon: '🚨',
        problemHeading: 'When to Call for Emergency AC Repair',
        problemText: 'Call us immediately if your AC completely stops working during extreme heat, if you smell burning or electrical odors from your HVAC system, if your AC is blowing hot air when outdoor temperatures exceed 100°F, if you hear loud banging, screeching, or grinding noises, or if someone in your home has health conditions affected by heat.',
        solutionHeading: 'Our Emergency Response',
        solutionText: 'Our emergency AC repair service operates 24 hours a day, 7 days a week, 365 days a year. We understand that HVAC emergencies in Las Vegas can be dangerous, which is why we prioritize fast dispatch and efficient repairs to restore your cooling as quickly as possible.',
        processSteps: [
          { title: 'Call Our Emergency Line', description: 'Reach us 24/7 at (725) 349-4849 for immediate emergency AC service.' },
          { title: 'Rapid Dispatch', description: 'We dispatch the nearest available technician, typically arriving within 1-2 hours.' },
          { title: 'On-Site Diagnosis', description: 'Our technician quickly identifies the problem and explains repair options.' },
          { title: 'Immediate Repair', description: 'We complete the repair on-site whenever possible to restore your cooling fast.' },
        ],
        faqs: [
          { question: 'Do you charge extra for emergency AC calls?', answer: 'We do not charge extra for after-hours or emergency dispatch. You pay the same fair rates whether you call at noon or midnight.' },
          { question: 'How fast can you get to my home?', answer: 'For emergency AC calls in Las Vegas, we typically arrive within 1-2 hours. Response times may vary during peak heat events.' },
          { question: 'Can you repair my AC at night?', answer: 'Yes. Our emergency technicians work around the clock. We carry common parts on our service vehicles to complete most after-hours repairs in a single visit.' },
        ],
        relatedSlugs: ['ac-repair', 'ac-maintenance', 'ac-replacement'],
      },
    ],
    faqs: [
      { question: 'What air conditioning services do you offer in Las Vegas?', answer: 'We provide comprehensive AC services including repair, installation, replacement, maintenance, and 24/7 emergency service for all makes and models of residential and commercial air conditioning systems.' },
      { question: 'How often should I service my AC in Las Vegas?', answer: 'In the extreme Las Vegas climate, we recommend servicing your AC system at least twice a year — in spring before cooling season and in fall. Regular maintenance prevents breakdowns and improves efficiency.' },
      { question: 'What AC brands do you work with?', answer: 'We service and install all major brands including Carrier, Lennox, Trane, Rheem, Goodman, Daikin, York, and more. Our technicians are factory-trained on multiple brands.' },
      { question: 'Do you offer emergency AC service in Las Vegas?', answer: 'Yes, we provide 24/7 emergency AC repair throughout the Las Vegas Valley. When your cooling fails in extreme heat, call us any time for fast, reliable service.' },
    ],
  },

  // -------------------------------------------------------
  // CLUSTER 2: Heating
  // -------------------------------------------------------
  {
    slug: 'heating',
    title: 'Heating',
    hubTitle: 'Heating Services',
    metaTitle: 'Heating Services Las Vegas | Furnace & Heat Pump | ArcticFlow HVAC',
    metaDescription: 'Professional heating repair, installation, and maintenance in Las Vegas, NV. Furnace and heat pump experts. 24/7 emergency service. Call (725) 349-4849.',
    heroHeading: 'Heating Services in Las Vegas',
    heroSubheading: 'Expert furnace and heat pump services for year-round comfort',
    intro: 'While Las Vegas is known for its scorching summers, winter nights can drop below freezing. A reliable heating system is essential for your family\'s comfort and safety during the cooler months. ArcticFlow HVAC provides complete heating services including furnace repair, heat pump installation, and seasonal maintenance to ensure your home stays warm when temperatures drop.',
    icon: '🔥',
    spokes: [
      {
        slug: 'furnace-repair',
        title: 'Furnace Repair',
        metaTitle: 'Furnace Repair Las Vegas | Same-Day Service | ArcticFlow HVAC',
        metaDescription: 'Professional furnace repair in Las Vegas. All brands, same-day service, upfront pricing. Licensed heating technicians. Call (725) 349-4849.',
        heroHeading: 'Furnace Repair in Las Vegas',
        heroSubheading: 'Fast, reliable furnace repair to restore your home\'s warmth',
        intro: 'When your furnace stops working during a cold Las Vegas night, you need a heating repair team you can trust. ArcticFlow HVAC provides same-day furnace repair for all brands and types, including gas furnaces, electric furnaces, and dual-fuel systems. Our licensed technicians diagnose the problem accurately and fix it right the first time.',
        icon: '🔧',
        problemHeading: 'Common Furnace Problems in Las Vegas',
        problemText: 'Frequent furnace issues include the pilot light or ignition system failing, the blower motor running continuously, the furnace not producing enough heat, unusual odors like burning or rotten eggs, short cycling where the furnace turns on and off repeatedly, and the thermostat not communicating with the furnace.',
        solutionHeading: 'Our Furnace Repair Expertise',
        solutionText: 'Our heating technicians are experienced with all types of furnace issues. We arrive with fully stocked service vehicles, perform thorough diagnostics, and provide clear explanations and upfront pricing before any repair work begins.',
        processSteps: [
          { title: 'Contact Us', description: 'Call or book online for same-day furnace repair in Las Vegas.' },
          { title: 'Complete Diagnosis', description: 'We inspect your entire heating system to find the root cause.' },
          { title: 'Clear Pricing', description: 'You receive an upfront quote before we start any work.' },
          { title: 'Quality Repair', description: 'We fix the issue using manufacturer-approved parts and methods.' },
        ],
        faqs: [
          { question: 'How quickly can you repair my furnace?', answer: 'We offer same-day furnace repair throughout Las Vegas. For urgent situations, we can typically arrive within a few hours of your call.' },
          { question: 'My furnace is blowing cold air. What is wrong?', answer: 'A furnace blowing cold air can indicate a faulty ignitor, a tripped flame sensor, a malfunctioning thermostat, or a problem with the gas supply. Our technicians will diagnose the exact cause and provide a fix.' },
          { question: 'How much does furnace repair cost?', answer: 'Furnace repair costs range from $100-$800 depending on the issue. Common fixes like ignitor replacement are on the lower end, while heat exchanger repairs are more involved. We provide upfront pricing.' },
        ],
        relatedSlugs: ['furnace-installation', 'heating-maintenance', 'heat-pump-services'],
      },
      {
        slug: 'furnace-installation',
        title: 'Furnace Installation',
        metaTitle: 'Furnace Installation Las Vegas | New Heating System | ArcticFlow HVAC',
        metaDescription: 'Professional furnace installation in Las Vegas. Energy-efficient heating systems, free estimates. Licensed installers. Call (725) 349-4849.',
        heroHeading: 'Furnace Installation in Las Vegas',
        heroSubheading: 'Modern, efficient heating systems for your Las Vegas home',
        intro: 'Whether you are building a new home or replacing an aging furnace, ArcticFlow HVAC delivers expert furnace installation services in Las Vegas. We help you select the right furnace for your home\'s size and heating needs, then install it to manufacturer specifications for maximum efficiency and longevity.',
        icon: '🏗️',
        problemHeading: 'Choosing the Right Furnace for Las Vegas',
        problemText: 'Las Vegas has a unique heating profile — mild winters with occasional freezing nights. You need a furnace that provides reliable heat without oversized energy consumption. High-efficiency models with variable-speed blowers are ideal for the desert climate, providing consistent warmth while keeping energy costs low.',
        solutionHeading: 'Expert Furnace Installation',
        solutionText: 'Our installation team handles every detail, from selecting the right furnace and sizing ductwork to securing permits and performing final safety testing. Every installation meets local building codes and manufacturer requirements.',
        processSteps: [
          { title: 'Home Assessment', description: 'We evaluate your heating needs, ductwork, and existing system condition.' },
          { title: 'System Recommendation', description: 'We recommend furnace options based on your home size, budget, and efficiency goals.' },
          { title: 'Professional Install', description: 'Our licensed team installs your new furnace to code and manufacturer standards.' },
          { title: 'Final Inspection', description: 'We test all components and walk you through your new system\'s operation.' },
        ],
        faqs: [
          { question: 'What type of furnace is best for Las Vegas?', answer: 'A high-efficiency gas furnace (95%+ AFUE) with a variable-speed blower is ideal for Las Vegas. It provides efficient heating during cold nights without excessive energy use during mild weather.' },
          { question: 'How long does furnace installation take?', answer: 'A standard furnace installation takes about 1 day. Installations requiring ductwork modifications may take 2 days.' },
          { question: 'Do I need a furnace in Las Vegas?', answer: 'Yes. While winters are mild compared to northern states, Las Vegas temperatures can drop into the 20s-30s on winter nights. A furnace or heat pump is essential for comfortable and safe indoor temperatures.' },
        ],
        relatedSlugs: ['furnace-repair', 'heat-pump-services', 'heating-maintenance'],
      },
      {
        slug: 'heat-pump-services',
        title: 'Heat Pump Services',
        metaTitle: 'Heat Pump Services Las Vegas | Install & Repair | ArcticFlow HVAC',
        metaDescription: 'Heat pump installation, repair, and maintenance in Las Vegas. Efficient heating and cooling in one system. Call (725) 349-4849 for a free estimate.',
        heroHeading: 'Heat Pump Services in Las Vegas',
        heroSubheading: 'Efficient heating and cooling in a single system',
        intro: 'Heat pumps are an excellent choice for Las Vegas homes, providing both cooling and heating from one efficient system. ArcticFlow HVAC offers complete heat pump services including installation, repair, and maintenance. Modern heat pumps deliver outstanding energy efficiency in the desert climate, reducing your utility costs year-round.',
        icon: '♻️',
        problemHeading: 'Benefits of Heat Pumps in Las Vegas',
        problemText: 'Heat pumps transfer heat instead of generating it, making them significantly more efficient than traditional furnaces. In the Las Vegas climate, heat pumps excel because winters are mild enough for efficient heat pump operation. You get year-round comfort from a single system with lower energy bills.',
        solutionHeading: 'Complete Heat Pump Services',
        solutionText: 'We install, repair, and maintain all types of heat pumps including central air-source heat pumps, mini-split ductless systems, and dual-fuel hybrid systems. Our technicians are certified in the latest heat pump technology.',
        processSteps: [
          { title: 'Consultation', description: 'We discuss your heating and cooling needs and assess your property.' },
          { title: 'System Design', description: 'We design a heat pump solution optimized for your home and the Las Vegas climate.' },
          { title: 'Expert Installation', description: 'Our certified team installs your heat pump with precision and care.' },
          { title: 'Performance Verification', description: 'We test heating and cooling modes to ensure peak performance.' },
        ],
        faqs: [
          { question: 'Are heat pumps effective in Las Vegas?', answer: 'Yes, heat pumps are very effective in Las Vegas. The mild winters are ideal for heat pump heating, and they provide excellent cooling during summer. Modern models work efficiently even in extreme temperatures.' },
          { question: 'How do heat pumps compare to traditional AC?', answer: 'Heat pumps provide both heating and cooling, potentially eliminating the need for a separate furnace. They are typically 2-3 times more efficient than electric resistance heating and comparable in cooling performance to standard AC units.' },
        ],
        relatedSlugs: ['furnace-installation', 'furnace-repair', 'heating-maintenance'],
      },
      {
        slug: 'heating-maintenance',
        title: 'Heating Maintenance',
        metaTitle: 'Heating Maintenance Las Vegas | Furnace Tune-Up | ArcticFlow HVAC',
        metaDescription: 'Heating maintenance and furnace tune-up in Las Vegas. Prevent breakdowns, extend system life. Affordable plans available. Call (725) 349-4849.',
        heroHeading: 'Heating Maintenance in Las Vegas',
        heroSubheading: 'Keep your heating system safe, efficient, and reliable',
        intro: 'Annual heating maintenance is essential for safe and efficient furnace operation. ArcticFlow HVAC provides thorough heating system tune-ups that check safety controls, clean critical components, and optimize performance before the cold season arrives. Our maintenance plans help prevent unexpected breakdowns and extend the life of your heating equipment.',
        icon: '🛠️',
        problemHeading: 'Why Heating Maintenance Matters',
        problemText: 'Furnaces that skip annual maintenance can develop dangerous issues like cracked heat exchangers and carbon monoxide leaks. Even without safety concerns, unmaintained furnaces lose efficiency, develop costly problems, and fail years before their expected lifespan. Maintenance pays for itself through avoided repairs and lower energy bills.',
        solutionHeading: 'Our Heating Tune-Up Service',
        solutionText: 'Our comprehensive heating maintenance includes safety inspections, combustion analysis, heat exchanger examination, electrical connection tightening, thermostat calibration, filter replacement, and blower component cleaning.',
        processSteps: [
          { title: 'Schedule Service', description: 'Book your heating maintenance before cold weather arrives.' },
          { title: 'Safety Inspection', description: 'We check for carbon monoxide, gas leaks, and heat exchanger integrity.' },
          { title: 'System Cleaning', description: 'We clean burners, blower components, and replace the air filter.' },
          { title: 'Performance Report', description: 'You receive a report with system status and any recommended repairs.' },
        ],
        faqs: [
          { question: 'When should I schedule heating maintenance in Las Vegas?', answer: 'Schedule heating maintenance in early fall (September or October) before you need your furnace regularly. This ensures your system is ready when temperatures drop.' },
          { question: 'What does a furnace tune-up include?', answer: 'Our tune-up includes safety testing for carbon monoxide and gas leaks, heat exchanger inspection, burner cleaning, thermostat calibration, filter replacement, and electrical connection checks.' },
        ],
        relatedSlugs: ['furnace-repair', 'furnace-installation', 'heat-pump-services'],
      },
    ],
    faqs: [
      { question: 'What heating services do you offer?', answer: 'We offer furnace repair, furnace installation, heat pump services, heating maintenance, and emergency heating repair for residential and commercial customers in Las Vegas.' },
      { question: 'Do Las Vegas homes need heating?', answer: 'Yes. Las Vegas winter temperatures can drop into the 20s-30s at night. A reliable heating system is essential for comfort and safety during the cooler months from November through March.' },
      { question: 'What is the best heating system for Las Vegas?', answer: 'Heat pumps are excellent for Las Vegas due to mild winters and their dual heating/cooling capability. High-efficiency gas furnaces are also popular for reliable, powerful heating on the coldest nights.' },
    ],
  },

  // -------------------------------------------------------
  // CLUSTER 3: Commercial HVAC
  // -------------------------------------------------------
  {
    slug: 'commercial-hvac',
    title: 'Commercial HVAC',
    hubTitle: 'Commercial HVAC Services',
    metaTitle: 'Commercial HVAC Services Las Vegas | ArcticFlow HVAC',
    metaDescription: 'Commercial HVAC repair, installation, and maintenance in Las Vegas. Office, retail, restaurant, and industrial HVAC solutions. Call (725) 349-4849.',
    heroHeading: 'Commercial HVAC Services in Las Vegas',
    heroSubheading: 'Reliable heating and cooling solutions for your business',
    intro: 'Las Vegas businesses depend on reliable HVAC systems to keep employees comfortable, customers happy, and operations running smoothly. ArcticFlow HVAC provides comprehensive commercial HVAC services for offices, retail spaces, restaurants, warehouses, and other commercial properties throughout the Las Vegas Valley. From emergency repairs to planned maintenance programs, we keep your business climate-controlled year-round.',
    icon: '🏢',
    spokes: [
      {
        slug: 'commercial-ac-repair',
        title: 'Commercial AC Repair',
        metaTitle: 'Commercial AC Repair Las Vegas | Business HVAC | ArcticFlow HVAC',
        metaDescription: 'Commercial AC repair in Las Vegas for offices, restaurants, and retail. Fast response, all system types. Call (725) 349-4849 for 24/7 commercial HVAC service.',
        heroHeading: 'Commercial AC Repair in Las Vegas',
        heroSubheading: 'Minimize downtime with fast, expert commercial cooling repair',
        intro: 'When your commercial AC system fails in Las Vegas, it directly impacts your business. Lost productivity, unhappy customers, and potential inventory damage can cost thousands. ArcticFlow HVAC provides fast commercial AC repair to minimize downtime and restore comfortable conditions in your business space.',
        icon: '🔧',
        problemHeading: 'Impact of Commercial AC Failure',
        problemText: 'A broken commercial AC system in Las Vegas can drive away customers, reduce employee productivity, damage temperature-sensitive inventory, violate health codes for food service businesses, and create an unsafe work environment during extreme heat.',
        solutionHeading: 'Fast Commercial AC Repair',
        solutionText: 'Our commercial HVAC technicians are experienced with rooftop units, split systems, package units, VRF systems, and chillers. We prioritize commercial calls to minimize business disruption and complete repairs efficiently.',
        processSteps: [
          { title: 'Emergency Contact', description: 'Call our commercial HVAC line for priority dispatch to your business.' },
          { title: 'System Diagnostics', description: 'We diagnose your commercial system quickly to identify the issue.' },
          { title: 'Rapid Repair', description: 'We complete the repair with minimal disruption to your business operations.' },
          { title: 'Follow-Up', description: 'We verify system performance and recommend preventive measures.' },
        ],
        faqs: [
          { question: 'How quickly can you repair commercial AC?', answer: 'We prioritize commercial AC calls and typically respond within 2-4 hours during business hours. Emergency service is available 24/7.' },
          { question: 'What types of commercial AC do you repair?', answer: 'We repair rooftop units (RTUs), split systems, package units, VRF/VRV systems, chillers, and all other commercial HVAC equipment.' },
        ],
        relatedSlugs: ['commercial-installation', 'commercial-maintenance'],
      },
      {
        slug: 'commercial-installation',
        title: 'Commercial Installation',
        metaTitle: 'Commercial HVAC Installation Las Vegas | ArcticFlow HVAC',
        metaDescription: 'Commercial HVAC installation in Las Vegas. New construction, tenant improvements, system upgrades. Licensed commercial installers. Call (725) 349-4849.',
        heroHeading: 'Commercial HVAC Installation in Las Vegas',
        heroSubheading: 'Custom climate control solutions for your business space',
        intro: 'ArcticFlow HVAC designs and installs commercial HVAC systems for Las Vegas businesses of all sizes. Whether you are building a new commercial space, renovating an existing property, or upgrading outdated equipment, we deliver efficient climate control solutions tailored to your business needs and budget.',
        icon: '🏗️',
        problemHeading: 'Commercial HVAC Requirements',
        problemText: 'Commercial spaces have unique HVAC needs: higher occupancy loads, varied use zones, kitchen exhaust requirements, server room cooling, and energy code compliance. Off-the-shelf solutions often fall short. Custom-designed systems ensure optimal comfort, efficiency, and code compliance.',
        solutionHeading: 'Engineered HVAC Solutions',
        solutionText: 'We design commercial HVAC systems from the ground up, considering occupancy, use patterns, energy codes, and budget. Our installations include rooftop units, split systems, VRF technology, and integrated control systems.',
        processSteps: [
          { title: 'Site Survey', description: 'We evaluate your commercial space and understand your operational requirements.' },
          { title: 'System Design', description: 'We engineer an HVAC solution optimized for your specific business needs.' },
          { title: 'Installation', description: 'Our commercial team installs the system with minimal business disruption.' },
          { title: 'Commissioning', description: 'We test, balance, and calibrate the system for optimal performance.' },
        ],
        faqs: [
          { question: 'What commercial properties do you serve?', answer: 'We install HVAC systems for offices, retail stores, restaurants, warehouses, medical facilities, churches, and other commercial properties in Las Vegas.' },
          { question: 'Do you handle permits for commercial HVAC?', answer: 'Yes, we handle all permitting and inspections required for commercial HVAC installations in Clark County.' },
        ],
        relatedSlugs: ['commercial-ac-repair', 'commercial-maintenance'],
      },
      {
        slug: 'commercial-maintenance',
        title: 'Commercial Maintenance',
        metaTitle: 'Commercial HVAC Maintenance Las Vegas | ArcticFlow HVAC',
        metaDescription: 'Commercial HVAC maintenance plans in Las Vegas. Prevent breakdowns, reduce energy costs, extend equipment life. Call (725) 349-4849.',
        heroHeading: 'Commercial HVAC Maintenance in Las Vegas',
        heroSubheading: 'Planned maintenance to protect your business investment',
        intro: 'A proactive commercial HVAC maintenance plan prevents costly breakdowns, reduces energy expenses, and extends equipment lifespan. ArcticFlow HVAC provides customized maintenance programs for Las Vegas businesses that include scheduled inspections, filter changes, and priority repair service to keep your systems running reliably.',
        icon: '🛠️',
        problemHeading: 'Cost of Neglected Commercial HVAC',
        problemText: 'Commercial HVAC systems that lack regular maintenance consume 15-25% more energy, suffer more frequent breakdowns during peak demand, and have shorter lifespans. For Las Vegas businesses, a failed AC in summer can mean lost revenue and unhappy customers.',
        solutionHeading: 'Custom Maintenance Programs',
        solutionText: 'We design maintenance schedules around your business operations, performing inspections and service during off-hours when possible. Our programs include quarterly or monthly inspections, filter management, belt and bearing maintenance, and priority emergency response.',
        processSteps: [
          { title: 'Assessment', description: 'We inventory your HVAC equipment and evaluate current conditions.' },
          { title: 'Custom Plan', description: 'We create a maintenance schedule tailored to your equipment and budget.' },
          { title: 'Scheduled Service', description: 'Our team performs regular inspections and preventive maintenance.' },
          { title: 'Reporting', description: 'You receive detailed reports on system condition and efficiency metrics.' },
        ],
        faqs: [
          { question: 'How often should commercial HVAC be serviced?', answer: 'Most commercial systems need quarterly maintenance. High-use environments like restaurants or server rooms may need monthly service.' },
          { question: 'Can you service all brands of commercial HVAC?', answer: 'Yes, our commercial technicians are trained on all major commercial HVAC brands and system types.' },
        ],
        relatedSlugs: ['commercial-ac-repair', 'commercial-installation'],
      },
    ],
    faqs: [
      { question: 'Do you offer commercial HVAC services in Las Vegas?', answer: 'Yes, we provide comprehensive commercial HVAC services including repair, installation, and maintenance for businesses throughout the Las Vegas Valley.' },
      { question: 'What types of businesses do you serve?', answer: 'We serve offices, retail spaces, restaurants, warehouses, medical facilities, churches, hotels, and all other commercial properties in Las Vegas.' },
      { question: 'Do you offer commercial maintenance contracts?', answer: 'Yes, we offer customized commercial HVAC maintenance plans with scheduled inspections, priority service, and discounted repair rates.' },
    ],
  },

  // -------------------------------------------------------
  // CLUSTER 4: Indoor Air Quality
  // -------------------------------------------------------
  {
    slug: 'indoor-air-quality',
    title: 'Indoor Air Quality',
    hubTitle: 'Indoor Air Quality Services',
    metaTitle: 'Indoor Air Quality Services Las Vegas | ArcticFlow HVAC',
    metaDescription: 'Improve your home\'s air quality with duct cleaning, air purification, and energy audits in Las Vegas. Healthier air for your family. Call (725) 349-4849.',
    heroHeading: 'Indoor Air Quality Services in Las Vegas',
    heroSubheading: 'Breathe cleaner, healthier air in your Las Vegas home',
    intro: 'Las Vegas presents unique indoor air quality challenges. Desert dust, allergens, and the sealed nature of modern homes can lead to poor indoor air quality that affects your family\'s health and comfort. ArcticFlow HVAC offers professional indoor air quality solutions including duct cleaning, air purification systems, and home energy audits to help you breathe easier.',
    icon: '🌬️',
    spokes: [
      {
        slug: 'duct-cleaning',
        title: 'Duct Cleaning',
        metaTitle: 'Duct Cleaning Las Vegas | Air Duct Cleaning | ArcticFlow HVAC',
        metaDescription: 'Professional air duct cleaning in Las Vegas. Remove dust, allergens, and debris for cleaner air and better HVAC performance. Call (725) 349-4849.',
        heroHeading: 'Duct Cleaning Services in Las Vegas',
        heroSubheading: 'Remove dust, allergens, and debris from your air ducts',
        intro: 'Las Vegas homes accumulate significant dust and debris in their ductwork due to the desert environment. Professional duct cleaning removes these contaminants, improving your indoor air quality and helping your HVAC system run more efficiently. ArcticFlow HVAC uses professional-grade equipment to thoroughly clean your entire duct system.',
        icon: '🌀',
        problemHeading: 'Why Las Vegas Homes Need Duct Cleaning',
        problemText: 'Desert dust, construction debris, pet dander, and other particles accumulate in your ducts over time. This buildup reduces airflow, forces your HVAC system to work harder, and circulates contaminants throughout your home every time the system runs.',
        solutionHeading: 'Professional Duct Cleaning Process',
        solutionText: 'We use high-powered vacuum systems and specialized tools to dislodge and remove debris from your entire duct system. Our process includes supply ducts, return ducts, registers, grilles, and accessible components of the air handler.',
        processSteps: [
          { title: 'Inspection', description: 'We inspect your ductwork to assess the level of contamination.' },
          { title: 'System Setup', description: 'We connect professional vacuum equipment and seal your duct system.' },
          { title: 'Deep Cleaning', description: 'We clean every accessible section of your ductwork thoroughly.' },
          { title: 'Final Verification', description: 'We verify clean ducts and restore all registers and grilles.' },
        ],
        faqs: [
          { question: 'How often should I clean my ducts in Las Vegas?', answer: 'We recommend duct cleaning every 3-5 years in Las Vegas, or more frequently if you have pets, allergies, or recent home renovations.' },
          { question: 'Does duct cleaning improve AC efficiency?', answer: 'Yes. Clean ducts allow better airflow, reducing strain on your HVAC system and potentially lowering energy bills by 10-15%.' },
        ],
        relatedSlugs: ['air-purification', 'energy-audits'],
      },
      {
        slug: 'air-purification',
        title: 'Air Purification',
        metaTitle: 'Air Purification Systems Las Vegas | ArcticFlow HVAC',
        metaDescription: 'Whole-home air purification systems in Las Vegas. UV lights, HEPA filtration, and air scrubbers for cleaner indoor air. Call (725) 349-4849.',
        heroHeading: 'Air Purification Systems in Las Vegas',
        heroSubheading: 'Advanced air cleaning technology for your home',
        intro: 'Standard HVAC filters only capture a fraction of airborne contaminants. ArcticFlow HVAC installs advanced air purification systems that eliminate bacteria, viruses, mold spores, VOCs, and fine particles that pass through conventional filters. Protect your family\'s health with whole-home air purification designed for the Las Vegas environment.',
        icon: '🛡️',
        problemHeading: 'What Is in Your Indoor Air?',
        problemText: 'Indoor air can contain dust mites, pollen, pet dander, mold spores, bacteria, viruses, volatile organic compounds from household products, and fine desert dust particles. These contaminants can trigger allergies, asthma, and other respiratory issues.',
        solutionHeading: 'Whole-Home Purification Solutions',
        solutionText: 'We install air purification systems that integrate with your existing HVAC system, cleaning your air every time it circulates. Options include UV germicidal lights, HEPA filtration, electronic air cleaners, and photocatalytic oxidation systems.',
        processSteps: [
          { title: 'Air Quality Assessment', description: 'We evaluate your current indoor air quality and identify concerns.' },
          { title: 'Solution Design', description: 'We recommend the best purification technology for your needs.' },
          { title: 'Professional Installation', description: 'We install the system integrated with your existing HVAC equipment.' },
          { title: 'Performance Testing', description: 'We verify the system is operating correctly and improving your air quality.' },
        ],
        faqs: [
          { question: 'What type of air purifier is best for Las Vegas?', answer: 'For Las Vegas homes, we often recommend a combination of high-MERV filtration for desert dust and UV germicidal lights for biological contaminants. The best solution depends on your specific concerns.' },
          { question: 'Do air purifiers help with allergies?', answer: 'Yes, whole-home air purification systems significantly reduce airborne allergens including dust, pollen, and pet dander, providing relief for allergy sufferers.' },
        ],
        relatedSlugs: ['duct-cleaning', 'energy-audits'],
      },
      {
        slug: 'energy-audits',
        title: 'Energy Audits',
        metaTitle: 'Home Energy Audits Las Vegas | ArcticFlow HVAC',
        metaDescription: 'Professional home energy audits in Las Vegas. Find energy waste, improve comfort, lower bills. Expert analysis and recommendations. Call (725) 349-4849.',
        heroHeading: 'Home Energy Audits in Las Vegas',
        heroSubheading: 'Discover where your home is wasting energy and money',
        intro: 'Las Vegas homeowners often face high energy bills, especially during summer. A professional home energy audit identifies where your home is losing energy and provides specific recommendations to improve efficiency. ArcticFlow HVAC conducts thorough energy assessments that help you prioritize improvements for the greatest impact on comfort and savings.',
        icon: '📊',
        problemHeading: 'Why Energy Bills Are High in Las Vegas',
        problemText: 'High energy bills in Las Vegas often result from inadequate insulation, air leaks around windows and doors, inefficient HVAC equipment, ductwork leaks losing conditioned air, and poor thermostat programming. An energy audit identifies exactly where your money is going.',
        solutionHeading: 'Comprehensive Energy Assessment',
        solutionText: 'Our energy audit includes thermal imaging to find insulation gaps, duct leakage testing, HVAC efficiency evaluation, insulation assessment, and window and door seal inspection. You receive a prioritized report of recommended improvements with estimated savings.',
        processSteps: [
          { title: 'Schedule Audit', description: 'Book a convenient time for your comprehensive home energy assessment.' },
          { title: 'On-Site Evaluation', description: 'We test and inspect your home\'s energy performance with professional equipment.' },
          { title: 'Analysis', description: 'We analyze the data and calculate potential savings for each improvement.' },
          { title: 'Action Plan', description: 'You receive a prioritized list of improvements with cost and savings estimates.' },
        ],
        faqs: [
          { question: 'How much does a home energy audit cost?', answer: 'A professional energy audit typically costs $200-$400. The audit often identifies savings that pay for the audit cost within the first year.' },
          { question: 'What does a home energy audit include?', answer: 'Our audit includes thermal imaging, duct leakage testing, HVAC efficiency evaluation, insulation assessment, and a detailed report with prioritized improvement recommendations.' },
        ],
        relatedSlugs: ['duct-cleaning', 'air-purification'],
      },
    ],
    faqs: [
      { question: 'Why is indoor air quality important in Las Vegas?', answer: 'Las Vegas homes face unique air quality challenges from desert dust, allergens, and sealed home construction. Poor indoor air quality can worsen allergies, asthma, and other health issues.' },
      { question: 'What indoor air quality services do you offer?', answer: 'We offer duct cleaning, air purification system installation, and home energy audits to improve your indoor air quality and HVAC efficiency.' },
    ],
  },
];

// ============================================================
// Service Areas
// ============================================================

export interface ServiceArea {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  intro: string;
  highlights: string[];
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'las-vegas',
    name: 'Las Vegas',
    metaTitle: 'HVAC Services in Las Vegas, NV | ArcticFlow HVAC',
    metaDescription: 'Professional HVAC repair, installation, and maintenance in Las Vegas, NV. 24/7 emergency service. Licensed and insured. Call (725) 349-4849.',
    heroHeading: 'HVAC Services in Las Vegas, NV',
    intro: 'As the heart of the valley, Las Vegas demands reliable HVAC systems year-round. ArcticFlow HVAC provides comprehensive heating and cooling services throughout Las Vegas, from the Strip corridor to residential neighborhoods. Our technicians know the unique challenges of maintaining comfort in the desert and deliver fast, dependable service every time.',
    highlights: ['Same-day service available', 'All Las Vegas neighborhoods covered', 'Licensed for Clark County', 'Emergency response 24/7'],
  },
  {
    slug: 'henderson',
    name: 'Henderson',
    metaTitle: 'HVAC Services in Henderson, NV | ArcticFlow HVAC',
    metaDescription: 'Expert HVAC repair, installation, and maintenance in Henderson, NV. Fast response, licensed technicians. Call (725) 349-4849.',
    heroHeading: 'HVAC Services in Henderson, NV',
    intro: 'Henderson residents trust ArcticFlow HVAC for reliable heating and cooling services. From Green Valley to Anthem and Inspirada, we provide expert HVAC repair, installation, and maintenance throughout Henderson. Our team understands the comfort needs of Henderson families and delivers professional service with every visit.',
    highlights: ['Serving all Henderson communities', 'Fast response times', 'New construction and retrofit specialists', 'Maintenance plans available'],
  },
  {
    slug: 'north-las-vegas',
    name: 'North Las Vegas',
    metaTitle: 'HVAC Services in North Las Vegas, NV | ArcticFlow HVAC',
    metaDescription: 'Professional HVAC services in North Las Vegas. AC repair, heating, installation. Licensed technicians available 24/7. Call (725) 349-4849.',
    heroHeading: 'HVAC Services in North Las Vegas, NV',
    intro: 'North Las Vegas homeowners and businesses count on ArcticFlow HVAC for dependable heating and cooling services. From Aliante to Eldorado, we provide fast, professional HVAC repair, installation, and maintenance throughout North Las Vegas. Our local presence means quicker response times when you need us most.',
    highlights: ['Quick response to North Las Vegas', 'Residential and commercial service', 'All HVAC brands serviced', 'Competitive local pricing'],
  },
  {
    slug: 'summerlin',
    name: 'Summerlin',
    metaTitle: 'HVAC Services in Summerlin, NV | ArcticFlow HVAC',
    metaDescription: 'Top-rated HVAC repair, installation, and maintenance in Summerlin, NV. Premium service for premium homes. Call (725) 349-4849.',
    heroHeading: 'HVAC Services in Summerlin, NV',
    intro: 'Summerlin homes deserve premium HVAC service. ArcticFlow HVAC provides expert heating and cooling solutions throughout Summerlin, from The Paseos to Redpoint. Whether you need AC repair, a new system installation, or a maintenance plan to protect your investment, our certified technicians deliver the quality service Summerlin homeowners expect.',
    highlights: ['Premium service for Summerlin homes', 'High-efficiency system specialists', 'Smart thermostat installation', 'Priority scheduling available'],
  },
  {
    slug: 'paradise',
    name: 'Paradise',
    metaTitle: 'HVAC Services in Paradise, NV | ArcticFlow HVAC',
    metaDescription: 'Reliable HVAC repair, installation, and maintenance in Paradise, NV. Near the Strip area. 24/7 emergency service. Call (725) 349-4849.',
    heroHeading: 'HVAC Services in Paradise, NV',
    intro: 'Paradise, NV — home to the famous Las Vegas Strip and surrounding neighborhoods — requires HVAC systems that can handle both residential comfort and commercial demands. ArcticFlow HVAC serves the entire Paradise area with fast, reliable heating and cooling services.',
    highlights: ['Residential and commercial coverage', 'Near-Strip service area', 'Fast emergency response', 'All HVAC services available'],
  },
  {
    slug: 'enterprise',
    name: 'Enterprise',
    metaTitle: 'HVAC Services in Enterprise, NV | ArcticFlow HVAC',
    metaDescription: 'Professional HVAC services in Enterprise, NV. Repair, installation, maintenance. Licensed and insured technicians. Call (725) 349-4849.',
    heroHeading: 'HVAC Services in Enterprise, NV',
    intro: 'Enterprise is one of the fastest-growing communities in the Las Vegas Valley. ArcticFlow HVAC provides professional heating and cooling services to Enterprise homes and businesses, from new construction installations to emergency repairs on existing systems.',
    highlights: ['New construction specialists', 'Growing community coverage', 'Energy-efficient upgrades', 'Flexible scheduling'],
  },
  {
    slug: 'spring-valley',
    name: 'Spring Valley',
    metaTitle: 'HVAC Services in Spring Valley, NV | ArcticFlow HVAC',
    metaDescription: 'Expert HVAC repair, installation, and maintenance in Spring Valley, NV. Trusted local service. Call (725) 349-4849 today.',
    heroHeading: 'HVAC Services in Spring Valley, NV',
    intro: 'Spring Valley homeowners trust ArcticFlow HVAC for reliable, affordable heating and cooling services. Our team provides expert AC repair, furnace service, and system installations throughout the Spring Valley area, delivering professional results and exceptional customer service.',
    highlights: ['Trusted by Spring Valley residents', 'Affordable service options', 'Complete HVAC solutions', 'Satisfaction guaranteed'],
  },
  {
    slug: 'whitney',
    name: 'Whitney',
    metaTitle: 'HVAC Services in Whitney, NV | ArcticFlow HVAC',
    metaDescription: 'HVAC repair, installation, and maintenance in Whitney, NV. Fast, professional service from local experts. Call (725) 349-4849.',
    heroHeading: 'HVAC Services in Whitney, NV',
    intro: 'Whitney residents can count on ArcticFlow HVAC for all their heating and cooling needs. From emergency AC repairs to planned system replacements, our certified technicians provide fast, professional HVAC service throughout the Whitney community.',
    highlights: ['Local Whitney coverage', 'All heating and cooling services', 'Licensed and insured', 'Free estimates available'],
  },
];

// ============================================================
// Testimonials
// ============================================================

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Maria G.',
    location: 'Las Vegas',
    rating: 5,
    text: 'ArcticFlow HVAC saved us during a brutal Las Vegas summer! Our AC went out at midnight and they had a technician at our door within an hour. Professional, efficient, and reasonably priced. Highly recommend!',
    service: 'Emergency AC Repair',
  },
  {
    name: 'James T.',
    location: 'Henderson',
    rating: 5,
    text: 'We had ArcticFlow install a brand new Carrier system in our Henderson home. From the initial estimate to the final walkthrough, everything was top-notch. Our energy bills dropped by 30% the first month.',
    service: 'AC Installation',
  },
  {
    name: 'Sarah L.',
    location: 'Summerlin',
    rating: 5,
    text: 'Best HVAC company in Las Vegas hands down. They showed up on time, diagnosed the issue quickly, and had our furnace running again in under two hours. Fair pricing and friendly technicians.',
    service: 'Furnace Repair',
  },
  {
    name: 'Robert M.',
    location: 'North Las Vegas',
    rating: 5,
    text: 'We signed up for their maintenance plan and it has been worth every penny. They catch small issues before they become big problems. Our AC has been running perfectly through two Las Vegas summers now.',
    service: 'AC Maintenance',
  },
  {
    name: 'Jennifer K.',
    location: 'Paradise',
    rating: 5,
    text: 'ArcticFlow replaced our 20-year-old AC system and the difference is incredible. The house cools down faster, it runs quieter, and our electric bill dropped significantly. Great team to work with.',
    service: 'AC Replacement',
  },
  {
    name: 'David H.',
    location: 'Enterprise',
    rating: 5,
    text: 'As a restaurant owner, I need my HVAC system working at all times. ArcticFlow has been maintaining our commercial system for two years now and we have had zero unexpected breakdowns. Reliable and professional.',
    service: 'Commercial Maintenance',
  },
  {
    name: 'Linda P.',
    location: 'Spring Valley',
    rating: 5,
    text: 'Had our ducts cleaned by ArcticFlow and the improvement in air quality was noticeable immediately. Less dust, less allergies, and the AC seems to run more efficiently. Very thorough service.',
    service: 'Duct Cleaning',
  },
  {
    name: 'Michael R.',
    location: 'Las Vegas',
    rating: 5,
    text: 'Honest, reliable, and skilled. ArcticFlow told us our AC only needed a minor repair when another company tried to sell us a whole new system. Saved us thousands. Earned a customer for life.',
    service: 'AC Repair',
  },
];

// ============================================================
// Gallery Items
// ============================================================

export interface GalleryItem {
  title: string;
  description: string;
  category: string;
}

export const galleryItems: GalleryItem[] = [
  { title: 'Professional AC Installation', description: 'New high-efficiency AC system installation for a Las Vegas home', category: 'Installation' },
  { title: 'AC Repair & Service', description: 'Emergency AC repair completed during a Las Vegas heat wave', category: 'Repair' },
  { title: 'Heat Pump Installation', description: 'Energy-efficient heat pump installation in Henderson', category: 'Installation' },
  { title: 'Maintenance & Tune-Up', description: 'Annual maintenance service keeping systems running at peak performance', category: 'Maintenance' },
  { title: 'Commercial Rooftop Unit', description: 'Commercial rooftop AC unit installation for a Las Vegas restaurant', category: 'Commercial' },
  { title: 'Ductwork Installation', description: 'New ductwork installation for improved airflow and efficiency', category: 'Installation' },
  { title: 'Thermostat Upgrade', description: 'Smart thermostat installation for better comfort control', category: 'Upgrade' },
  { title: 'Furnace Replacement', description: 'Old furnace replaced with a high-efficiency model in Summerlin', category: 'Replacement' },
];

// ============================================================
// Why Choose Us
// ============================================================

export const whyChooseUs = [
  { icon: '🕐', title: '24/7 Emergency Service', description: 'Always available for prompt, reliable HVAC assistance in the Las Vegas heat.' },
  { icon: '✅', title: 'Licensed & Insured', description: 'Certified, licensed, and fully insured HVAC technicians you can trust.' },
  { icon: '😊', title: 'Customer Satisfaction', description: 'Dedicated to keeping every customer happy and comfortable year-round.' },
  { icon: '💰', title: 'Competitive Pricing', description: 'Fair, upfront pricing with free estimates and no hidden charges.' },
  { icon: '⚡', title: 'Fast Response Times', description: 'Quick dispatch and same-day service throughout the Las Vegas Valley.' },
  { icon: '🏠', title: 'Locally Owned', description: 'Proudly locally owned and operated, serving our Las Vegas community.' },
];
