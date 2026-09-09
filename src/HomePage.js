// src/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { selectedProjects, moreProjects, featuredProjects } from './data/projects';

const ProjectCard = ({ project, index, compact = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.4, delay: (index % (compact ? 3 : 2)) * 0.08 }}
  >
    <Link
      to={`/projects/${project.slug}`}
      className={`group flex h-full flex-col rounded-xl border border-hairline bg-surface transition-colors duration-300 hover:border-accent/40 ${
        compact ? 'p-5' : 'p-6'
      }`}
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={project.hero}
          alt={`${project.title}`}
          className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            compact ? 'h-44' : 'h-72'
          }`}
          loading="lazy"
        />
        {project.status && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink shadow-lg">
            {project.status}
          </span>
        )}
      </div>
      <h3
        className={`mt-5 font-display font-semibold text-cream ${
          compact ? 'text-xl' : 'text-2xl'
        }`}
      >
        {project.shortTitle}
      </h3>
      <p className={`mt-2 flex-1 leading-relaxed text-muted ${compact ? 'text-sm' : ''}`}>
        {project.summary}
      </p>
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
          I'm a Director of Product at PureSpectrum. These are the things I've
          built along the way.
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

      {/* Projects Section */}
      <div className="flex w-full flex-col items-center justify-center py-20" id="projects">
        <h2 className="mb-2 font-display text-3xl font-semibold text-cream md:text-4xl">Projects</h2>
        <p className="mb-10 max-w-2xl px-4 text-center leading-relaxed text-muted">
          A collection of things I've built alongside my career: startups, hardware, games, and data. Click any project to read the full story.
        </p>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
          {selectedProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <h3 className="mb-8 mt-16 font-display text-2xl font-semibold text-cream">
          More projects
        </h3>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-3">
          {moreProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} compact />
          ))}
        </div>
      </div>
      <hr className="my-16 border-hairline" />

      {/* Contact Section */}
      <div className="relative flex w-full items-center justify-center py-20" id="contact">
        <div className="relative z-10 mx-auto max-w-4xl px-4">
          <h2 className="mb-6 font-display text-3xl font-semibold text-cream md:text-4xl">Contact</h2>
          <p className="mb-6 text-lg text-muted">Always up for sharing ideas over coffee:</p>
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
