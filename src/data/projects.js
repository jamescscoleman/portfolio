// src/data/projects.js
//
// Single source of truth for every project. Both the home grid and the
// per-project case-study pages read from here.
//
// Shape (every field except slug/title/shortTitle/summary/hero is optional -
// the ProjectPage template renders only what's present, so lighter projects
// stay clean instead of looking empty):
//
//   slug        string   - URL segment, e.g. "phonebelt" -> /projects/phonebelt
//   title       string   - full project title
//   shortTitle  string   - compact title for cards/tiles
//   tagline     string   - one-line hook shown under the title
//   summary     string   - card blurb on the home grid
//   hero        string   - lead image (public/ path)
//   status      string   - optional badge on the project card (e.g. "Currently building")
//   meta        object    { role, timeline, focus: [] }
//   highlights  string[] - outcomes / recognition, shown as pills
//   stages      string[] - build progression, shown as a stepper
//   sections    array     [{ heading?, body: <JSX> }]
//   links       array     [{ label, href }]
//   gallery     array     [{ src, caption }]  - to add more shots, drop files
//                         in public/ and append entries here.

const sourceProjects = [
  {
    slug: 'phonebelt',
    title: 'PhoneBelt LLC',
    shortTitle: 'PhoneBelt',
    tagline:
      'Driver safety for commercial fleets, without the camera drivers hate.',
    summary:
      'A sensor-based driver-safety system I founded for commercial fleets, solving with Bluetooth and accelerometers what competitors solve with the in-cab cameras drivers hate.',
    hero: '/PCB.jpg',
    meta: {
      role: 'Founder & Product Lead',
      timeline: 'Concept → Commercialization',
      focus: ['Hardware', 'B2B / Enterprise', 'Fleet Safety'],
    },
    highlights: [
      'NSF I-Corps',
      "Cornell Rev Hardware Accelerator",
      'Non-dilutive funding secured',
    ],
    stages: ['POC', 'MVP', 'Prototype', 'Final Product'],
    sections: [
      {
        heading: 'Why commercial driving is a different problem',
        body: (
          <>
            The economics of a crash change completely behind the wheel of an
            80,000-pound truck. A typical at-fault passenger claim runs around
            $20 to $30K in liability; an average large-truck crash costs roughly
            $91,000, and a fatal one about $3.6 million (FMCSA). The tail risk is
            what keeps fleet operators up at night: among trucking verdicts over
            $1 million, the average award ballooned from $2.3 million in 2010 to
            $22.3 million in 2018 (ATRI). Commercial driving doesn't just see
            more accidents; each one carries far higher, increasingly
            catastrophic stakes. That asymmetry is why fleets invest so heavily
            in driver safety, and why this is an enterprise problem, not a
            consumer one.
          </>
        ),
      },
      {
        heading: 'Why the incumbent fix backfires',
        body: (
          <>
            The standard answer is the driver-facing camera. Systems like Samsara
            (NYSE: IOT) and Lytx point a lens at the driver to monitor for phone
            use, seat-belt compliance, and drowsiness. Adoption is top-down:
            FedEx Ground has required a dual-facing camera in every contractor
            truck since 2017, and Amazon's AI camera system records drivers and
            ties the footage to their weekly pay scores. The people in the cab
            have fought back just as hard: Amazon drivers quit over the cameras,
            and Lytx paid over $4 million to settle a biometric-privacy lawsuit
            in Illinois. Many commercial drivers spend their
            working lives in their cabs, and a camera in that space reads as
            surveillance, not safety. Yet the budget behind this category is
            real: fleets pay $40 to $60 per vehicle per month for safety
            telematics, and Samsara alone has built a roughly
            $1.5-billion-a-year business on it. The demand is real; driver
            satisfaction with the incumbent product isn't.
          </>
        ),
      },
      {
        heading: 'What the UPS fight proved',
        body: (
          <>
            In 2023, 340,000 UPS Teamsters came within days of the largest
            single-employer strike in American history. Pay made the headlines,
            but in-cab surveillance was on the marquee too: "Wages Up, Cameras
            Off" was an official campaign slogan. UPS conceded. The contract
            that members ratified by 86% bans driver-facing cameras across the
            entire fleet and bars the company from disciplining drivers on
            telematics data alone. The industry's largest fleet agreed, in
            writing, that the leading safety technology is unacceptable to the
            people it watches. A safety system drivers will actually accept
            isn't a nice-to-have; at UPS scale, it's now a contract term.
          </>
        ),
      },
      {
        heading: 'A sensor-based, privacy-first alternative',
        body: (
          <>
            PhoneBelt solves the same problem without a camera. Instead of
            recording the driver, it reads signals: Bluetooth distance and angle
            to detect when a driver is handling their phone behind the wheel, and
            accelerometer data to evaluate driving behavior. There's no lens in
            the cab and no footage of the driver. Camera systems win the data but lose the
            driver; PhoneBelt's privacy-first design captures the safety signal
            fleets need while earning the buy-in that decides whether a safety
            program actually works in the field.
          </>
        ),
      },
      {
        heading: 'What I led',
        body: (
          <>
            I founded PhoneBelt and led product from concept through
            commercialization: proof of concept, MVP, prototype, and final
            product. Along the way I completed NSF I-Corps and Cornell's Rev
            Hardware Accelerator, and secured non-dilutive funding to support
            development.
          </>
        ),
      },
    ],
    gallery: [
      { src: '/phonebelt-poc.jpg', caption: 'Proof of concept: sensor and microcontroller on a breadboard' },
      { src: '/phonebelt-pcb.jpg', caption: 'First custom PCB' },
      { src: '/phonebelt-mvp.jpg', caption: 'MVP installed in a test vehicle' },
      { src: '/phonebelt-prototype.jpg', caption: '3D-printed enclosure iterations' },
      { src: '/phonebelt-app.jpg', caption: 'Live sensor data: Bluetooth distance and accelerometer readings' },
    ],
  },

  {
    slug: 'harvey',
    title: 'Harvey',
    shortTitle: 'Harvey',
    tagline:
      'A turn-based tactical courtroom game where you play a defense attorney dismantling the prosecution’s case.',
    summary:
      'A tactical puzzle game I’m building: outwit the prosecution witness by witness, exhibit by exhibit, before your case falls apart.',
    hero: '/harvey.jpg',
    status: 'Currently building',
    meta: {
      role: 'Designer & Developer',
      timeline: 'In development',
      focus: ['Game Design', 'Mobile', 'Procedural Audio'],
    },
    sections: [
      {
        heading: 'The game',
        body: (
          <>
            Harvey is a turn-based tactical puzzle game set in a courtroom. You
            play a defense attorney, and each case is a battle: the prosecution
            fields witnesses, expert testimony, and exhibits of evidence, all
            anchored by a prosecutor who wears down your Case Strength every
            round. To win, you dismantle the entire case: discredit every
            witness, neutralize every exhibit, and finally break the prosecutor
            before your own case collapses.
          </>
        ),
      },
      {
        heading: 'How it plays',
        body: (
          <>
            Every action spends Momentum; run out, and the prosecution takes
            the floor. Your toolkit is pure courtroom theater: intimidate a
            witness, reverse a hostile testimony so it damages their own side,
            deliver an epic speech to restore your standing, or spend
            everything on a tirade when the moment is right. The prosecution
            fights back in kind, with experts who bolster their witnesses,
            escalating threats that grow each round, and prosecutors whose
            tactics change from case to case. Reading the board and sequencing
            your arguments is the whole game.
          </>
        ),
      },
      {
        heading: 'How it’s being built',
        body: (
          <>
            Beyond the theme, Harvey is an experiment in designing gameplay
            math you can actually verify: every case in the campaign is
            simulated thousands of times to score its difficulty, so the
            challenge curve is tuned with data instead of gut feel. The audio
            is fully procedural: every sound effect and the lo-fi courtroom
            jazz soundtrack are synthesized in code, with zero audio files
            shipped. It’s in active development, so the code stays under wraps
            until it’s ready, but you can play the current build in your
            browser below. This page is the opening statement, not the full
            case.
          </>
        ),
      },
    ],
    links: [
      { label: 'Play the demo in your browser', href: 'https://play-harvey.netlify.app' },
    ],
    gallery: [
      {
        src: '/harvey-gameplay.mp4',
        video: true,
        poster: '/harvey-video-poster.jpg',
        caption:
          'Real gameplay: dismantling the prosecution’s case, one witness at a time (27s, tap to play)',
      },
    ],
  },

  {
    slug: 'car-ching',
    title: 'Car-Ching App',
    shortTitle: 'Car-Ching',
    tagline:
      'An insurtech app that lets smaller insurers offer Usage-Based Insurance priced on how you actually drive.',
    summary:
      'An insurtech mobile app I built to help insurance companies offer Usage-Based Insurance (UBI) policies.',
    hero: '/Car-Ching.png',
    meta: {
      role: 'Builder & Product',
      focus: ['Insurtech', 'Mobile', 'Data'],
    },
    sections: [
      {
        body: (
          <>
            Car-Ching is an insurtech mobile app I built to give small and
            medium-sized insurance companies a way to offer Usage-Based
            Insurance (UBI) policies.
          </>
        ),
      },
      {
        heading: "Car-Ching's value",
        body: (
          <>
            Picture an imaginary driver named Michael. He's 16 and drives
            incredibly safely: below the speed limit, always belted, never on
            his phone. Insurers don't know that. They see a 16-year-old male,
            the riskiest driving demographic, and group him in as risky because
            there's little data to prove otherwise. Car-Ching tracks his driving
            using the sensors already built into his smartphone and helps
            insurers price a rate based on his specific behavior. It runs in the
            background, and while setup is a small headache at first, the value
            of that data could be the difference between paying $500 and $3,000
            a year.
          </>
        ),
      },
    ],
    links: [
      {
        label: 'GitHub: Car-Ching',
        href: 'https://github.com/jamescscoleman/Car-Ching-App',
      },
    ],
  },

  {
    slug: 'flight-delays',
    title: 'Flight Delays Model',
    shortTitle: 'Flight Delays',
    tagline:
      'A 6-hour Spirit Airlines delay turned into a data-driven guide for picking flights.',
    summary:
      'After a 6-hour Spirit Airlines delay, I dug into which airlines and which days are most prone to delays.',
    hero: '/DataProject.png',
    meta: {
      role: 'Analysis',
      focus: ['Data', 'R', 'Aviation'],
    },
    sections: [
      {
        body: (
          <>
            After a prolonged 6-hour delay with Spirit Airlines, I was motivated
            to dig into how different airlines actually perform on delays. Using
            R and two months of 2018 DOT on-time data (January and August), I
            looked at which airlines have the best track records and which days
            are most prone to significant delays. A few findings stood out: to
            minimize delays, avoid flying on Mondays and Fridays. Among the
            airlines analyzed, JetBlue was the most delay-prone, averaging 36
            minutes late per flight, while Alaska Airlines tended to depart a
            few minutes ahead of schedule. It started as a way to get some
            closure on a bad travel day and turned into a small, data-driven
            guide for picking flights.
          </>
        ),
      },
    ],
    links: [
      {
        label: 'GitHub: analysis code and data',
        href: 'https://github.com/jamescscoleman/Flight-Delay-Prediction-Model',
      },
    ],
  },

  {
    slug: 'misfit-munchies',
    title: 'Misfit Munchies',
    shortTitle: 'Misfit Munchies',
    tagline:
      'Turning surplus and imperfect produce into affordable, nutritious dog treats.',
    summary:
      "Misfit Munchies turns surplus and imperfect produce into dog treats. The team won Best MVP and Best Team at Cal Lutheran's 2024 New Venture Fair, then two more awards at the 2025 fair.",
    hero: '/NewVentureFair.jpg',
    meta: {
      role: 'Team member',
      timeline: '2024 to 2025',
      focus: ['Sustainability', 'CPG'],
    },
    highlights: [
      'Best MVP & Best Team, Cal Lutheran New Venture Fair (2024)',
      'Best Brochure & Best Sign (2025)',
    ],
    sections: [
      {
        body: (
          <>
            At Misfit Munchies, we work directly with farmers to turn surplus
            and imperfect produce, often discarded just for how it looks, into
            dog treats. Plenty of good produce never reaches a shelf because
            it's slightly off in shape or size: crooked carrots, warped
            watermelons, misshapen mangoes. Dogs don't
            care what their food looks like, so we source this rejected produce
            from farmers and grocery stores and make affordable, nutritious
            treats from it. It's a practical use for food that would otherwise go
            to waste.
          </>
        ),
      },
      {
        body: (
          <>
            The credit here belongs to my teammates. Every award in that photo
            was earned by the whole table, and the sharpest thinking on the
            product and the pitch came from the people standing next to me. I
            was lucky to be part of it.
          </>
        ),
      },
    ],
    links: [
      {
        label: "Cal Lutheran's New Venture Fair winners",
        href: 'https://www.callutheran.edu/centers/entrepreneurship/programs/new-venture-winners.html',
      },
      {
        label: 'Instagram: @misfitmunchiestreats',
        href: 'https://www.instagram.com/misfitmunchiestreats/',
      },
    ],
  },

  {
    slug: 'werkhaus',
    title: 'WerkHaus',
    shortTitle: 'WerkHaus',
    tagline: 'Short-term workspace in offices sitting empty between leases.',
    summary:
      'A marketplace concept built in one Startup Weekend: match vacant offices with people who need short-term workspace. Won Best Business, 2022.',
    hero: '/WerkHaus.PNG',
    meta: {
      role: 'Startup Weekend team',
      timeline: '2022',
      focus: ['Marketplace', 'Real Estate'],
    },
    highlights: ['Best Business, Startup Weekend (2022)'],
    sections: [
      {
        body: (
          <>
            Offices sit vacant between leases, earning nothing, while plenty of
            people need a workspace for a month, not a multi-year term. Over one
            Startup Weekend we built and pitched WerkHaus to bridge that gap:
            owners squeeze revenue out of idle real estate, and renters get
            space without a lease. The judges named it Best Business at the end
            of the weekend.
          </>
        ),
      },
    ],
  },

  {
    slug: 'drinky',
    title: 'Drinky: Innovating Social Gatherings',
    shortTitle: 'Drinky',
    tagline:
      'A 3D-printed game with a mechanical twist. The CAD is the part I\'m proudest of.',
    summary:
      'At a Global Game Jam, I created Drinky, a 3D-printed game that adds a new twist to traditional drinking games.',
    hero: '/drinky-printed.jpg',
    meta: {
      role: 'Designer & Maker',
      timeline: 'Global Game Jam',
      focus: ['CAD', 'Fusion 360', 'Hardware'],
    },
    sections: [
      {
        body: (
          <>
            At a Global Game Jam, I created Drinky, a 3D-printed game that adds a
            twist to traditional drinking games. Designed in Fusion 360, Drinky
            uses a mechanical system to randomize drink pours. It looks simple,
            but the CAD is the part I'm most proud of: a cantilever beam plucks
            the lid open, and a gear with unevenly placed levers makes each pour
            unpredictable. The final design took about a month, and it went over
            well with the people who played it.
          </>
        ),
      },
      {
        body: (
          <>
            Printed with PLA, the final product was coated with high-quality
            paint and food-safe epoxy resin for a safe playing experience. For
            anyone interested in the technical details or looking to build their
            own, the Fusion 360 design files and documentation are on GitHub.
          </>
        ),
      },
    ],
    links: [
      { label: 'GitHub: DrinkyCAD', href: 'https://github.com/jamescscoleman/DrinkyCAD' },
    ],
    gallery: [
      {
        src: '/DrinkyCAD.png',
        caption: 'The Fusion 360 design: cantilever lid and uneven-lever gear',
      },
    ],
  },

  {
    slug: 'food-container',
    title: 'Redesigned Food Container',
    shortTitle: 'Food Container',
    tagline:
      'One versatile, stackable container with removable dividers, instead of a drawer full of mismatched ones.',
    summary:
      'A versatile container with removable dividers for better food storage and organization, born out of meal-prep frustration.',
    hero: '/foodcontainer1.jpg',
    meta: {
      role: 'Designer',
      focus: ['Product Design', 'CAD'],
    },
    sections: [
      {
        body: (
          <>
            This came out of my own frustration with meal prep: juggling 20
            different containers, each with its own odd shape and awkward
            proportions, made me wonder why there isn't just one versatile
            container. My design is a single container that stacks efficiently,
            with removable dividers so you can adjust it to whatever you're
            storing, instead of owning a drawer full of mismatched ones.
          </>
        ),
      },
    ],
    links: [
      {
        label: 'CAD files: Old Project Archive',
        href: 'https://github.com/jamescscoleman/Old-Project-Archive',
      },
    ],
  },

  {
    slug: 'bestdayusa',
    title: 'BestDayUSA',
    shortTitle: 'BestDayUSA',
    tagline:
      'An Etsy T-shirt store I designed, ran, and marketed end-to-end in 2022.',
    summary:
      'A fun e-commerce store I ran for a few months in 2022, designing and selling T-shirts on Etsy.',
    hero: '/BestDayUSA.PNG',
    meta: {
      role: 'Founder',
      timeline: '2022',
      focus: ['E-commerce', 'Design', 'Marketing'],
    },
    sections: [
      {
        body: (
          <>
            An e-commerce store I ran for a few months in 2022. I designed and
            sold T-shirts on Etsy, using Printify for logistics and Canva for
            design. It was more time-intensive than I expected, but running ads
            and talking to customers was the most fun part. The shop pulled in
            decent revenue over a couple of months, but the margins were too
            slim for it to be more than a hobby. I eventually paused it to focus
            on other things, though the designs and content are still up.
          </>
        ),
      },
    ],
    links: [
      {
        label: 'Downloadable designs',
        href: 'https://github.com/jamescscoleman/BestDayUSADesigns',
      },
      { label: 'Etsy shop', href: 'https://www.etsy.com/shop/BestDayUSA' },
    ],
    gallery: [
      { src: '/BestDayUSA.PNG', caption: 'The storefront' },
      { src: '/ShirtDesign.jpg', caption: 'One of the shirt designs' },
    ],
  },

  {
    slug: 'equity-research',
    title: 'A 2020 Options Bet',
    shortTitle: '2020 Options Bet',
    tagline:
      "The hedge fund career I didn't pursue, distilled into one trade.",
    summary:
      'I once wanted to run a hedge fund; instead the research habit became a hobby. In early 2020, that hobby met a firsthand read on the pandemic, and the puts I bought returned roughly 1000% in five months.',
    hero: '/EquityResearch.JPG',
    meta: {
      role: 'Individual Investor',
      timeline: 'Jan to May 2020',
      focus: ['Finance', 'Options', 'Thesis-driven'],
    },
    sections: [
      {
        body: (
          <>
            For a stretch of college I thought I'd end up running money. Equity
            research was my default free-time activity: valuations for fun, a
            close watch on the news, all of it pointed at an eventual hedge
            fund. Late in undergrad I let that ambition go. I wanted to build
            products more than portfolios, but the research habit never left.
          </>
        ),
      },
      {
        body: (
          <>
            Then January 2020 arrived. At UC Berkeley the pandemic was not an
            abstract headline: many classmates had family in China and were
            living it secondhand, and campus behavior had already changed while
            the S&amp;P sat near all-time highs. The market was weeks behind
            what campus already knew. I concluded it was a once-in-a-lifetime
            mispricing, and I bought puts ahead of the crash.
          </>
        ),
      },
      {
        body: (
          <>
            From January to May the trades returned roughly 1000%, aggressive
            enough to (dis)honorably earn me a feature on r/WallStreetBets. The
            screenshot above is one week of it: up 93% in the last week of
            February. I haven't tried to repeat it. It was a specific read on a
            specific moment, but it's the clearest evidence I have of what
            paying attention plus conviction can do.
          </>
        ),
      },
    ],
  },
];

// Canonical display + prev/next order - most representative work first.
// This is the single source of truth for ordering; the home grid and the
// per-project prev/next navigation both follow it. The home grid renders in
// two tiers so the flagship work isn't diluted by the smaller experiments.
const selectedOrder = ['phonebelt', 'harvey', 'misfit-munchies', 'car-ching'];
const moreOrder = [
  'equity-research',
  'flight-delays',
  'food-container',
  'bestdayusa',
  'drinky',
  'werkhaus',
];

const bySlug = (slug) => sourceProjects.find((p) => p.slug === slug);

export const selectedProjects = selectedOrder.map(bySlug);
export const moreProjects = moreOrder.map(bySlug);
export const projects = [...selectedProjects, ...moreProjects];

export const getProject = (slug) => projects.find((p) => p.slug === slug);

export const getProjectIndex = (slug) =>
  projects.findIndex((p) => p.slug === slug);

// The six-tile collage on the home hero.
export const featuredProjects = [
  'phonebelt',
  'harvey',
  'misfit-munchies',
  'car-ching',
  'food-container',
  'bestdayusa',
].map(bySlug);
