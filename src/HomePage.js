// src/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { selectedProjects, experimentProjects, featuredProjects } from './data/projects';

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

const HomePage = () => {
  return (
    <div className="min-h-screen bg-ink text-cream">
      {/* Slim top bar */}
      <header className="sticky top-0 z-30 border-b border-hairline/60 bg-ink/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-16">
          <a href="#top" className="text-sm font-medium text-cream">
            James Coleman
          </a>
          <nav className="flex items-center gap-6 text-sm text-muted">
            <a href="#about" className="transition-colors hover:text-cream">
              About
            </a>
            <a href="#projects" className="transition-colors hover:text-cream">
              Projects
            </a>
            <a href="#contact" className="transition-colors hover:text-cream">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Home Section */}
      <div
        id="top"
        className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 py-20 md:px-16"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent">James Coleman</p>
        <h1 className="mb-5 font-display text-5xl font-semibold tracking-tight text-cream md:text-7xl">
          A few things I've built.
        </h1>
        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted">
          Director of Product at PureSpectrum. Hardware founder before that,
          with a detour through M&amp;A.
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
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
                  className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105 md:h-56"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <span className="absolute bottom-3 left-4 right-4 font-semibold text-cream">
                  {project.shortTitle}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* About Me Section */}
      <div className="relative flex w-full items-center justify-center py-20" id="about">
        {/* Background Image */}
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center opacity-25"
          style={{ backgroundImage: 'url(/Graduation-BlackWhite.jpg)' }}
        ></div>
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4">
          <h2 className="mb-6 font-display text-3xl font-semibold text-cream md:text-4xl">About Me</h2>
          <p className="mb-4 text-lg leading-relaxed text-cream/85">
            I build products, specifically the ones that don't exist yet. I took the scenic route here, and each stop set up the next. Immediately after graduating undergrad I founded a hardware startup: zero to one, from a blank page to a shipped physical product. Hardware is unforgiving, so it taught me that mistakes are expensive and you can't patch an object after it's out the door. Then I moved into mergers and acquisitions, where I learned to see what actually makes a business valuable. From there I moved into software, where iteration is cheap and a good idea can reach people in days.
          </p>
          <p className="mb-6 text-lg leading-relaxed text-cream/85">
            Today I lead the Innovation product team at PureSpectrum, building AI-driven products for market research, and it's zero to one all over again: less about polishing what exists, more about creating capabilities that weren't possible before. That's the part I find most exciting: taking what's newly possible and turning it into products an entire industry can use.
          </p>
          <h3 className="mb-3 font-display text-2xl font-semibold text-cream">Philosophies</h3>
          <ul className="list-disc list-inside space-y-1 text-lg text-muted marker:text-accent">
            <li>
              The hardest product problems are people problems. PhoneBelt exists
              because drivers hate being watched, not because cameras miss data.
            </li>
            <li>
              Treat ideas as hypotheses and keep the tests cheap. A weekend
              build that flops teaches more than a quarter of planning.
            </li>
            <li>
              When you can measure, don't guess. Harvey's difficulty curve is
              tuned by simulation, not gut feel.
            </li>
          </ul>
        </div>
      </div>

      {/* Projects Section */}
      <div className="flex w-full flex-col items-center justify-center py-20" id="projects">
        <h2 className="mb-2 font-display text-3xl font-semibold text-cream md:text-4xl">Projects</h2>
        <p className="mb-10 max-w-2xl px-4 text-center leading-relaxed text-muted">
          A collection of things I've built alongside my career: startups, hardware, data, and a few odd experiments. Click any project to read the full story.
        </p>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
          {selectedProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <h3 className="mb-2 mt-16 font-display text-2xl font-semibold text-cream">
          Smaller experiments
        </h3>
        <p className="mb-10 max-w-2xl px-4 text-center leading-relaxed text-muted">
          Weekend builds, class projects, and one very specific bet.
        </p>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
          {experimentProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
      <hr className="my-16 border-hairline" />

      {/* Contact Section */}
      <div className="relative flex w-full items-center justify-center py-20" id="contact">
        <div className="relative z-10 mx-auto max-w-4xl px-4">
          <h2 className="mb-6 font-display text-3xl font-semibold text-cream md:text-4xl">Contact</h2>
          <p className="mb-6 text-lg text-muted">If something here sparked an idea, let's talk it over coffee:</p>
          <ul className="space-y-4 text-lg text-cream">
            <li>
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:jamescscoleman@gmail.com" className="text-accent underline">jamescscoleman@gmail.com</a>
            </li>
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

      {/* Footer */}
      <footer className="border-t border-hairline">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted md:flex-row md:px-16">
          <span>James Coleman</span>
          <div className="flex items-center gap-6">
            <a href="mailto:jamescscoleman@gmail.com" className="transition-colors hover:text-cream">
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/james--coleman/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-cream"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/jamescscoleman"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-cream"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
