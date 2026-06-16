// src/TechyPortfolio.js

import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Code, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Project = ({ title, summary, image, details }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <img
        src={image}
        alt={`${title} screenshot`}
        className="w-full h-72 object-cover rounded-lg mb-4"
        loading="lazy"
      />
      <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
      <p className="mb-4 text-gray-300">{summary}</p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center text-blue-400 hover:text-blue-300 focus:outline-none"
        aria-expanded={expanded}
        aria-controls={`${title}-details`}
      >
        {expanded ? 'Hide Details' : 'Show Details'}
        {expanded ? <ChevronUp size={20} className="ml-2" /> : <ChevronDown size={20} className="ml-2" />}
      </button>
      {expanded && (
        <div id={`${title}-details`} className="mt-4 text-gray-300 space-y-2">
          {details}
        </div>
      )}
    </div>
  );
};

const TechyPortfolio = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Welcome to my digital space.";

  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -150]);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typedText, fullText]);

  const projects = [
    {
      title: "PhoneBelt LLC",
      summary: "I founded PhoneBelt, a hardtech startup reducing commercial-fleet accidents through non-invasive driver-safety technology—leading product from concept to commercialization.",
      image: "/PCB.jpg",
      details: (
        <>
          I led product at PhoneBelt, a car safety startup. The premise of our business is this: phone use while driving causes the majority of preventable accidents. Drivers are becoming more distracted every year and accidents are on the rise. Solutions like Android Auto and Apple CarPlay act like solutions, but counterintuitively, have been shown to increase driver distraction. PhoneBelt tracks driving behavior and allows commercial driving companies a cost-effective solution to reduce accidents. Computer vision systems are expensive and invasive, drivers don't like being watched (e.g., the Teamsters have blocked companies like UPS from installing these invasive systems). Our non-invasive approach to driver safety allows for a cheap solution that drivers love.

          <br /><br />
          I led development from concept through prototyping and commercialization, completed NSF I-Corps and Cornell's Rev Hardware Accelerator, and secured non-dilutive funding to support development. PhoneBelt's product development process from left to right: POC, MVP, Prototype, Final Product.
        </>
      )
    },
    {
      title: "James AI",
      summary: "A digital twin of me—an AI assistant trained on my projects, writing, and experience, so you can ask it anything about my work and background.",
      image: "/JamesAI.png",
      details: (
        <>
          James AI is my digital twin: a GPT-4 assistant trained on my portfolio, resume, and writing. Ask it about my projects, how I approach a problem, or my background, and it answers as me.
        </>
      )
    },
    {
      title: "Car-Ching App",
      summary: "Car-Ching is an innovative insurtech mobile app designed to empower insurance companies with Usage-Based Insurance (UBI) policies.",
      image: "/Car-Ching.png",
      details: (
        <>
          Car-Ching is an innovative insurtech mobile app I built. It's crafted to empower small and medium-sized insurance companies the ability to provide Usage-Based Insurance (UBI) policies.

          <br /><br />
          <strong>Car-Ching's Value</strong>

          <br />
          Picture an imaginary driver named Michael. He's 16 and drives incredibly safely... he drives below the speed limit, he uses his seat belt, and never uses his phone while driving. Insurers don't know that. They see a 16-year-old male, the riskiest driving demographic. Despite being a very safe driver, he's going to get grouped in as a risky driver because there is little data to prove otherwise. The Car-Ching app can track his driving using sensors built into his smartphone and help insurers provide a rate based on his specific driving characteristics. It runs in the background and while it may be a small headache to set up at first, the value of this data could be the difference between him paying $500 for insurance and $3000.

          <br /><br />
          <strong>Trends:</strong>
          <ol className="list-decimal list-inside">
            <li>Insurance rates are increasingly based on data</li>
            <li>The emergence of unstructured databases</li>
            <li>The movement toward AI-based and personalized insurance rates</li>
            <li>The hypersonic growth of this same technology in the commercial driving space</li>
          </ol>

          <br />
          <ul className="list-disc list-inside">
            <li><a href="https://www.figma.com/file/Car-Chingv23Design" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Figma app: Car-Ching v2.3 Design</a></li>
            <li><a href="https://github.com/jamescscoleman/Car-Ching" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">GitHub: Car-Ching on GitHub</a></li>
            <li><a href="https://www.car-ching.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Website: Car-Ching</a></li>
          </ul>
        </>
      )
    },
    {
      title: "Flight Delays Model",
      summary: "After experiencing a prolonged 6-hour delay with Spirit Airlines, I was motivated to delve into the performance of various airlines regarding flight delays.",
      image: "/DataProject.png",
      details: (
        <>
          After experiencing a prolonged 6-hour delay with Spirit Airlines, I was motivated to delve into the performance of various airlines regarding flight delays. Utilizing R, I conducted a thorough analysis to identify which airlines have the best track records and which days are most susceptible to significant delays. The findings are enlightening: to minimize delay disruptions, it's wise to avoid flying on Mondays and Fridays. Among the airlines analyzed, JetBlue emerged as the most delay-prone, averaging 36 minutes late per flight. In contrast, Alaska Airlines impressively tends to depart a few minutes ahead of schedule. This project not only provided personal closure but also equipped travelers with data-driven strategies to enhance their flying experiences.
        </>
      )
    },
    {
      title: "Misfit Munchies",
      summary: "In May 2024, our team at Misfit Munchies triumphed, clinching the grand prize at the New Venture Fair!",
      image: "/NewVentureFair.jpg",
      details: (
        <>
          At Misfit Munchies, we collaborate directly with farmers to convert surplus and imperfect produce—often discarded solely for its appearance—into nutritious and delicious dog treats. Astonishingly, a significant portion of food waste stems from produce being slightly off in shape or size; crooked carrots, warped watermelons, or misshapen mangoes rarely make it to store shelves. Consumers tend to bypass these "ugly" items, impacting sales negatively, as their presence can lead to reduced overall purchases. This perfectly good food, rejected for its looks, is where we step in. Dogs, after all, are indifferent to the aesthetics of their food. By sourcing these rejected fruits and vegetables from farmers and grocery stores, we create affordable, high-quality dog treats that are not only beneficial for our planet but also offer superior nutrition compared to typical dog kibbles. Truly a win-win situation for everyone.
        </>
      )
    },
    {
      title: "WerkHaus",
      summary: "WerkHaus, our venture born during Startup Weekend, clinched the title of Best Business in 2022 by providing flexible office space solutions.",
      image: "/WerkHaus.PNG",
      details: (
        <>
          WerkHaus, our venture born during Startup Weekend, clinched the title of Best Business in 2022. It's essentially the Uber for underutilized office spaces, addressing the common issue of vacant offices in limbo, awaiting new leases. WerkHaus provides a dynamic solution for temporary building usage, bridging the gap between leases by connecting these empty spaces with those in need of short-term office solutions. This innovative approach not only maximizes the utility of commercial real estate but also offers businesses flexibility and efficiency in finding temporary workspaces.
        </>
      )
    },
    {
      title: "Drinky: Innovating Social Gatherings",
      summary: "At a Global Game Jam, I created Drinky, a 3D-printed game that adds a new twist to traditional drinking games.",
      image: "/DrinkyCAD.png",
      details: (
        <>
          At a Global Game Jam, I created Drinky, a 3D-printed game that adds a new twist to traditional drinking games. Designed in Fusion 360, Drinky uses a mechanical system to randomize drink pours, making the game more engaging. While it might not appear to be a mechanically complex design at first, a deep dive into the CAD design file will illustrate why this is the most impressive design I have ever constructed. I used a cantilever beam to randomly pluck open the lid as well as a gear with unpredictably placed levers to create a truly random experience for the user. The final product took an entire month to design but was received very well from all participants.

          <br /><br />
          Printed with PLA, the final product was coated with high-quality paint and food-safe epoxy resin to allow for a safe playing experience. For those interested in the technical details or looking to create their own Drinky, the Fusion 360 design files and documentation are available at: <a href="https://github.com/jamescscoleman/DrinkyCAD" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">DrinkyCAD on GitHub</a>
        </>
      )
    },
    {
      title: "Redesigned Food Container",
      summary: "Inspired by meal prepping challenges, I developed a versatile container with removable dividers for better food storage and organization.",
      image: "/foodcontainer1.jpg",
      details: (
        <>
          Inspired by the challenges I faced during meal prepping, I developed a unique solution to the common problem of managing numerous meal prep containers. The inconvenience of juggling 20 different types of containers, each with its own peculiar shape and awkward proportions, led me to question why we can't have a single, versatile container. My design introduces a container that not only fits all your meal prep needs but also stacks efficiently. Thanks to the addition of removable dividers, meal preppers can now tailor their container to fit their meals perfectly, rather than struggling to accommodate their food in unsuitable containers.

          <br /><br />
          <a href="https://github.com/jamescscoleman/Old-Project-Archive" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">CAD Link</a>
        </>
      )
    },
    {
      title: "BestDayUSA",
      summary: "A fun e-commerce store I ran for a few months in 2022, designing and selling T-shirts on Etsy.",
      image: "/BestDayUSA.png",
      details: (
        <>
          A fun e-commerce store I ran for a few months in 2022. I designed and sold T-shirts on Etsy with the help of Printify for logistics and Canva for designing. The store was really fun but was shockingly time-intensive. It was an exciting new challenge to try running ads and talking to customers was extremely rewarding. The shop earned a ton of revenue in just a couple of months but the profit margins were far too slim for it to be anything more than a hobby store. After a few months, I suspended the store to embark on new challenges but all the designs and content are still up. A truly novel and exciting journey.

          <br /><br />
          <ul className="list-disc list-inside">
            <li><a href="https://github.com/jamescscoleman/BestDayUSADesigns" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Downloadable Designs</a></li>
            <li><a href="https://www.etsy.com/shop/BestDayUSA" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Etsy Shop</a></li>
          </ul>
        </>
      )
    },
    {
      title: "Equity Research",
      summary: "A calculated bet during the 2020 market dislocation: I used my finance training to build a thesis around volatility and institutional inertia, which returned 1000% over five months.",
      image: "/EquityResearch.JPG",
      details: (
        <>
          During the early months of the 2020 pandemic, I paired my finance coursework at UC Berkeley with a simple thesis: in a period of extreme dislocation, large institutional funds lacked the agility to quickly shift their established strategies, creating mispriced opportunities for a nimble individual investor. I built positions around that thesis using options and futures—calculated, but admittedly risky.

          <br /><br />
          From January to May, the trades returned roughly 1000%, aggressive enough to (dis)honorably earn me a feature on the r/WallStreetBets subreddit. I'm not a stock guru, and I treat it as exactly what it was—a specific thesis for a specific moment—but it remains a useful reminder of what conviction plus timing can do.
        </>
      )
    }
  ];

  const sections = {
    home: (
      <div className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden" ref={homeRef}>
        {/* Background Image with Parallax Effect */}
        <motion.div
          style={{ y, backgroundImage: 'url(/home-background.jpg)' }}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        ></motion.div>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
        {/* Content */}
        <div className="relative z-10 px-4 max-w-3xl">
          <h1 className="text-5xl font-bold mb-4 text-white">{typedText}</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Building hardware taught me that mistakes are expensive. Building software taught me that iteration is everything. Today, I combine both as a product leader.
          </p>
        </div>
      </div>
    ),
    about: (
      <div className="relative w-full py-20 flex items-center justify-center" id="about">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-25"
          style={{ backgroundImage: 'url(/Graduation-BlackWhite.jpg)' }} // Updated background image
        ></div>
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
          <p className="text-lg text-gray-300 mb-4">
            I build products. Today that means leading product at PureSpectrum, turning the messy, complicated world of market-research software into tools people actually like using. I took the scenic route to get here: I founded a hardtech startup, then spent a year in investment banking on M&amp;A deals. By nature I'm a relentless learner—five universities, two countries—but these days that curiosity is focused on one thing: building great products.
          </p>
          <h3 className="text-2xl font-semibold text-white mb-2">Philosophies</h3>
          <ul className="list-disc list-inside text-lg text-gray-300">
            <li>80% of results come from 20% of the effort.</li>
            <li>Treat ideas as hypotheses.</li>
            <li>If you want to go fast, go alone. If you want to go far, go together.</li>
          </ul>
        </div>
      </div>
    ),
    projects: (
      <div className="w-full py-20 flex flex-col items-center justify-center" id="projects" ref={projectsRef}>
        <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    ),
    contact: (
      <div className="relative w-full py-20 flex items-center justify-center" id="contact" ref={contactRef}>
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/contact-background.jpg)' }}
        ></div>
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Contact</h2>
          <p className="text-lg text-gray-300 mb-4">Feel free to reach out to chat and share ideas:</p>
          <ul className="space-y-4 text-lg text-gray-300">
            <li>
              <span className="font-semibold">LinkedIn:</span>{' '}
              <a href="https://www.linkedin.com/in/james--coleman/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">James Coleman</a>
            </li>
            <li>
              <span className="font-semibold">GitHub:</span>{' '}
              <a href="https://github.com/jamescscoleman" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">jamescscoleman</a>
            </li>
          </ul>
        </div>
      </div>
    )
  };

  // Sidebar items with CSS-based tooltips
  const sidebarItems = [
    { icon: <Terminal size={24} />, section: 'home', label: 'Home' },
    { icon: <Code size={24} />, section: 'projects', label: 'Projects' },
    { icon: <Mail size={24} />, section: 'contact', label: 'Contact' },
  ];

  // Scroll to section handler
  const scrollToSection = (section) => {
    if (section === 'home') {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'projects') {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'contact') {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex min-h-screen bg-black text-gray-300">
      {/* Sidebar */}
      <div className="w-20 bg-gray-800 flex flex-col items-center py-8 fixed h-full">
        {sidebarItems.map((item, index) => (
          <div key={index} className="relative group">
            <button
              onClick={() => scrollToSection(item.section)}
              className={`p-4 mb-6 rounded-full focus:outline-none ${
                item.section === 'home' ? 'bg-blue-600' : 'hover:bg-gray-700'
              }`}
              aria-label={item.label}
            >
              {item.icon}
            </button>
            {/* Tooltip */}
            <span className="absolute left-20 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white text-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 ml-20">
        {/* Home Section */}
        {sections.home}

        {/* About Me Section */}
        {sections.about}

        {/* Projects Section */}
        {sections.projects}
        <hr className="border-gray-700 my-16" /> {/* Divider */}

        {/* Contact Section */}
        {sections.contact}
      </div>
    </div>
  );
};

export default TechyPortfolio;
