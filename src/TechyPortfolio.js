// src/TechyPortfolio.js

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Project = ({ title, summary, image, details }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-surface border border-hairline p-6 rounded-xl transition-colors duration-300 hover:border-accent/40">
      <img
        src={image}
        alt={`${title} screenshot`}
        className="w-full h-72 object-cover rounded-lg mb-5"
        loading="lazy"
      />
      <h3 className="text-2xl font-display font-semibold mb-2 text-cream">{title}</h3>
      <p className="mb-4 text-muted leading-relaxed">{summary}</p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center text-accent hover:text-accent-soft focus:outline-none"
        aria-expanded={expanded}
        aria-controls={`${title}-details`}
      >
        {expanded ? 'Hide Details' : 'Show Details'}
        {expanded ? <ChevronUp size={20} className="ml-2" /> : <ChevronDown size={20} className="ml-2" />}
      </button>
      {expanded && (
        <div id={`${title}-details`} className="mt-4 text-muted leading-relaxed space-y-2">
          {details}
        </div>
      )}
    </div>
  );
};

const TechyPortfolio = () => {
  const projects = [
    {
      title: "PhoneBelt LLC",
      summary: "PhoneBelt was a hardtech startup I founded to reduce commercial-fleet accidents with non-invasive driver-safety hardware. I led product from concept through commercialization.",
      image: "/PCB.jpg",
      details: (
        <>
          I led product at PhoneBelt, a car safety startup. The premise of our business is this: phone use while driving causes the majority of preventable accidents. Drivers are becoming more distracted every year and accidents are on the rise. Solutions like Android Auto and Apple CarPlay act like solutions, but counterintuitively, have been shown to increase driver distraction. PhoneBelt tracks driving behavior and allows commercial driving companies a cost-effective solution to reduce accidents. Computer vision systems are expensive and invasive, drivers don't like being watched (e.g., the Teamsters have blocked companies like UPS from installing these invasive systems). Our non-invasive approach kept costs low and gave drivers something they were actually willing to live with.

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
      summary: "Car-Ching is an insurtech mobile app I built to help insurance companies offer Usage-Based Insurance (UBI) policies.",
      image: "/Car-Ching.png",
      details: (
        <>
          Car-Ching is an insurtech mobile app I built to give small and medium-sized insurance companies a way to offer Usage-Based Insurance (UBI) policies.

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
            <li><a href="https://www.figma.com/file/Car-Chingv23Design" target="_blank" rel="noopener noreferrer" className="text-accent underline">Figma app: Car-Ching v2.3 Design</a></li>
            <li><a href="https://github.com/jamescscoleman/Car-Ching" target="_blank" rel="noopener noreferrer" className="text-accent underline">GitHub: Car-Ching on GitHub</a></li>
            <li><a href="https://www.car-ching.com" target="_blank" rel="noopener noreferrer" className="text-accent underline">Website: Car-Ching</a></li>
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
          After experiencing a prolonged 6-hour delay with Spirit Airlines, I was motivated to delve into the performance of various airlines regarding flight delays. Utilizing R, I conducted a thorough analysis to identify which airlines have the best track records and which days are most susceptible to significant delays. A few findings stood out: to minimize delays, avoid flying on Mondays and Fridays. Among the airlines analyzed, JetBlue was the most delay-prone, averaging 36 minutes late per flight, while Alaska Airlines tended to depart a few minutes ahead of schedule. It started as a way to get some closure on a bad travel day and turned into a small, data-driven guide for picking flights.
        </>
      )
    },
    {
      title: "Misfit Munchies",
      summary: "Misfit Munchies turns surplus and imperfect produce into dog treats. In May 2024, the team won the grand prize at the New Venture Fair.",
      image: "/NewVentureFair.jpg",
      details: (
        <>
          At Misfit Munchies, we work directly with farmers to turn surplus and imperfect produce—often discarded just for how it looks—into dog treats. A meaningful share of food waste comes from produce being slightly off in shape or size: crooked carrots, warped watermelons, misshapen mangoes that rarely make it to store shelves. Dogs don't care what their food looks like, so we source this rejected produce from farmers and grocery stores and make affordable, nutritious treats from it. It's a practical use for food that would otherwise go to waste.
        </>
      )
    },
    {
      title: "WerkHaus",
      summary: "WerkHaus, built during Startup Weekend, won Best Business in 2022. It connects underused office space with people who need short-term workspace.",
      image: "/WerkHaus.PNG",
      details: (
        <>
          WerkHaus, built during Startup Weekend, won Best Business in 2022. It's essentially the Uber for underutilized office space, addressing the problem of vacant offices sitting in limbo between leases. WerkHaus bridges that gap by connecting empty spaces with people who need short-term offices. The idea was to make better use of commercial real estate while giving businesses a flexible way to find temporary space.
        </>
      )
    },
    {
      title: "Drinky: Innovating Social Gatherings",
      summary: "At a Global Game Jam, I created Drinky, a 3D-printed game that adds a new twist to traditional drinking games.",
      image: "/DrinkyCAD.png",
      details: (
        <>
          At a Global Game Jam, I created Drinky, a 3D-printed game that adds a twist to traditional drinking games. Designed in Fusion 360, Drinky uses a mechanical system to randomize drink pours. It looks simple, but the CAD is the part I'm most proud of: a cantilever beam plucks the lid open, and a gear with unevenly placed levers makes each pour unpredictable. The final design took about a month, and it went over well with the people who played it.

          <br /><br />
          Printed with PLA, the final product was coated with high-quality paint and food-safe epoxy resin to allow for a safe playing experience. For those interested in the technical details or looking to create their own Drinky, the Fusion 360 design files and documentation are available at: <a href="https://github.com/jamescscoleman/DrinkyCAD" target="_blank" rel="noopener noreferrer" className="text-accent underline">DrinkyCAD on GitHub</a>
        </>
      )
    },
    {
      title: "Redesigned Food Container",
      summary: "Inspired by meal prepping challenges, I developed a versatile container with removable dividers for better food storage and organization.",
      image: "/foodcontainer1.jpg",
      details: (
        <>
          This came out of my own frustration with meal prep: juggling 20 different containers, each with its own odd shape and awkward proportions, made me wonder why there isn't just one versatile container. My design is a single container that stacks efficiently, with removable dividers so you can adjust it to whatever you're storing instead of owning a drawer full of mismatched ones.

          <br /><br />
          <a href="https://github.com/jamescscoleman/Old-Project-Archive" target="_blank" rel="noopener noreferrer" className="text-accent underline">CAD Link</a>
        </>
      )
    },
    {
      title: "BestDayUSA",
      summary: "A fun e-commerce store I ran for a few months in 2022, designing and selling T-shirts on Etsy.",
      image: "/BestDayUSA.png",
      details: (
        <>
          An e-commerce store I ran for a few months in 2022. I designed and sold T-shirts on Etsy, using Printify for logistics and Canva for design. It was more time-intensive than I expected, but running ads and talking to customers was the most fun part. The shop pulled in decent revenue over a couple of months, but the margins were too slim for it to be more than a hobby. I eventually paused it to focus on other things, though the designs and content are still up.

          <br /><br />
          <ul className="list-disc list-inside">
            <li><a href="https://github.com/jamescscoleman/BestDayUSADesigns" target="_blank" rel="noopener noreferrer" className="text-accent underline">Downloadable Designs</a></li>
            <li><a href="https://www.etsy.com/shop/BestDayUSA" target="_blank" rel="noopener noreferrer" className="text-accent underline">Etsy Shop</a></li>
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

  const projectOrder = [
    'PhoneBelt LLC',
    'Misfit Munchies',
    'Flight Delays Model',
    'Equity Research',
    'Car-Ching App',
    'Redesigned Food Container',
    'James AI',
    'BestDayUSA',
    'Drinky: Innovating Social Gatherings',
    'WerkHaus',
  ];
  const rankedProjects = projectOrder.map((title) => projects.find((p) => p.title === title));

  const featured = [
    'PhoneBelt LLC',
    'Equity Research',
    'Drinky: Innovating Social Gatherings',
    'Misfit Munchies',
    'Car-Ching App',
    'James AI',
  ].map((title) => projects.find((p) => p.title === title));

  const sections = {
    home: (
      <div className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-16 py-20 max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-[0.25em] text-accent mb-4">James Coleman</p>
        <h1 className="text-5xl md:text-7xl font-display font-semibold tracking-tight text-cream mb-10">A few things I've built.</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {featured.map((project, index) => (
            <motion.a
              key={index}
              href="#projects"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative block overflow-hidden rounded-lg"
            >
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-40 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <span className="absolute bottom-3 left-4 right-4 text-cream font-semibold">
                {project.title.split(':')[0]}
              </span>
            </motion.a>
          ))}
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
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-cream mb-6">About Me</h2>
          <p className="text-lg text-cream/85 leading-relaxed mb-6">
            I build products. Today that means leading product at PureSpectrum, turning the messy, complicated world of market-research software into tools people actually like using. I took the scenic route to get here. I founded a hardtech startup, then worked in mergers and acquisitions. I'm a relentless learner by nature, but these days that curiosity points at one thing: building great products.
          </p>
          <h3 className="text-2xl font-display font-semibold text-cream mb-3">Philosophies</h3>
          <ul className="list-disc list-inside text-lg text-muted space-y-1 marker:text-accent">
            <li>80% of results come from 20% of the effort.</li>
            <li>Treat ideas as hypotheses.</li>
            <li>If you want to go fast, go alone. If you want to go far, go together.</li>
          </ul>
        </div>
      </div>
    ),
    projects: (
      <div className="w-full py-20 flex flex-col items-center justify-center" id="projects">
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-cream mb-2">Projects</h2>
        <p className="text-muted mb-10 max-w-2xl text-center px-4 leading-relaxed">
          A collection of things I've built alongside my career—startups, hardware, data, and a few odd experiments.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          {rankedProjects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    ),
    contact: (
      <div className="relative w-full py-20 flex items-center justify-center" id="contact">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/contact-background.jpg)' }}
        ></div>
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-cream mb-6">Contact</h2>
          <p className="text-lg text-muted mb-6">If something here sparked an idea, let's talk it over coffee:</p>
          <ul className="space-y-4 text-lg text-cream">
            <li>
              <span className="font-semibold">LinkedIn:</span>{' '}
              <a href="https://www.linkedin.com/in/james--coleman/" target="_blank" rel="noopener noreferrer" className="text-accent underline">James Coleman</a>
            </li>
            <li>
              <span className="font-semibold">GitHub:</span>{' '}
              <a href="https://github.com/jamescscoleman" target="_blank" rel="noopener noreferrer" className="text-accent underline">jamescscoleman</a>
            </li>
          </ul>
        </div>
      </div>
    )
  };

  return (
    <div className="min-h-screen bg-ink text-cream">
      {/* Home Section */}
      {sections.home}

      {/* About Me Section */}
      {sections.about}

      {/* Projects Section */}
      {sections.projects}
      <hr className="border-hairline my-16" /> {/* Divider */}

      {/* Contact Section */}
      {sections.contact}
    </div>
  );
};

export default TechyPortfolio;
