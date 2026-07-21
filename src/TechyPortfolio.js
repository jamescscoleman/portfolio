// src/TechyPortfolio.js

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects, featuredProjects } from './data/projects';

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
  >
    <Link
      to={`/projects/${project.slug}`}
      className="group flex h-full flex-col rounded-xl border border-hairline bg-surface p-6 transition-colors duration-300 hover:border-accent/40"
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={project.hero}
          alt={`${project.title}`}
          className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {project.status && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink shadow-lg">
            {project.status}
          </span>
        )}
      </div>
      <h3 className="mt-5 font-display text-2xl font-semibold text-cream">{project.shortTitle}</h3>
      <p className="mt-2 flex-1 leading-relaxed text-muted">{project.summary}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-accent transition-colors group-hover:text-accent-soft">
        View project
        <ArrowUpRight
          size={18}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </Link>
  </motion.div>
);

const TechyPortfolio = () => {
  const sections = {
    home: (
      <div className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-16 py-20 max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-[0.25em] text-accent mb-4">James Coleman</p>
        <h1 className="text-5xl md:text-7xl font-display font-semibold tracking-tight text-cream mb-10">A few things I've built.</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Link
                to={`/projects/${project.slug}`}
                className="group relative block overflow-hidden rounded-lg"
              >
                <img
                  src={project.hero}
                  alt={`${project.title}`}
                  className="w-full h-40 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <span className="absolute bottom-3 left-4 right-4 text-cream font-semibold">
                  {project.shortTitle}
                </span>
              </Link>
            </motion.div>
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
          <p className="text-lg text-cream/85 leading-relaxed mb-4">
            I build products, specifically the ones that don't exist yet. I took the scenic route here, and each stop set up the next. Immediately after graduating undergrad I founded a hardware startup: zero to one, from a blank page to a shipped physical product. Hardware is unforgiving, so it taught me that mistakes are expensive and you can't patch an object after it's out the door. Then I moved into mergers and acquisitions, where I learned to see what actually makes a business valuable. From there I moved into software, where iteration is cheap and a good idea can reach people in days.
          </p>
          <p className="text-lg text-cream/85 leading-relaxed mb-6">
            Today I lead the Innovation product team at PureSpectrum, building AI-driven products for market research, and it's zero to one all over again: less about polishing what exists, more about creating capabilities that weren't possible before. That's the part I find most exciting: taking what's newly possible and turning it into products an entire industry can use.
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
          A collection of things I've built alongside my career: startups, hardware, data, and a few odd experiments. Click any project to read the full story.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
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
