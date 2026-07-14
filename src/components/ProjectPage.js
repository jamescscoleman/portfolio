// src/components/ProjectPage.js
//
// The per-project case study. Every block is conditional, so a rich project
// (PhoneBelt) and a one-paragraph project (James AI) both look intentional —
// the page's density scales with the content it's given.

import React, { useEffect, useState, Fragment } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Play, X } from 'lucide-react';
import {
  projects,
  getProject,
  getProjectIndex,
} from '../data/projects';

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

const ProjectPage = () => {
  const { slug } = useParams();
  const project = getProject(slug);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (project) {
      document.title = `${project.shortTitle} — James Coleman`;
    }
    return () => {
      document.title = 'James Coleman — Portfolio';
    };
  }, [project]);

  // Close the lightbox on Escape.
  useEffect(() => {
    if (!lightbox) return undefined;
    const onKey = (e) => e.key === 'Escape' && setLightbox(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  if (!project) return <Navigate to="/" replace />;

  const idx = getProjectIndex(slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  const { meta = {}, highlights, stages, sections = [], links, gallery } = project;

  return (
    <div className="min-h-screen bg-ink text-cream">
      {/* Slim top bar */}
      <header className="sticky top-0 z-30 border-b border-hairline/60 bg-ink/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            to="/#projects"
            className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-cream"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
            All projects
          </Link>
          <Link to="/" className="text-sm font-medium text-muted transition-colors hover:text-cream">
            James Coleman
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-10">
        {meta.focus?.length ? (
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.4 }}
            className="mb-4 text-xs uppercase tracking-[0.22em] text-accent"
          >
            {meta.focus.join('  ·  ')}
          </motion.p>
        ) : null}

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="font-display text-4xl font-semibold leading-tight text-cream md:text-5xl"
        >
          {project.title}
        </motion.h1>

        {project.tagline ? (
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-5 text-xl leading-relaxed text-muted"
          >
            {project.tagline}
          </motion.p>
        ) : null}

        {/* Meta row */}
        {(meta.role || meta.timeline) && (
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-sm"
          >
            {meta.role && (
              <div>
                <span className="block text-xs uppercase tracking-wider text-muted/70">Role</span>
                <span className="mt-1 block text-cream">{meta.role}</span>
              </div>
            )}
            {meta.timeline && (
              <div>
                <span className="block text-xs uppercase tracking-wider text-muted/70">Timeline</span>
                <span className="mt-1 block text-cream">{meta.timeline}</span>
              </div>
            )}
          </motion.div>
        )}

        {highlights?.length ? (
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-7 flex flex-wrap gap-2"
          >
            {highlights.map((h) => (
              <span
                key={h}
                className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm text-accent-soft"
              >
                {h}
              </span>
            ))}
          </motion.div>
        ) : null}
      </section>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mx-auto max-w-5xl px-6"
      >
        <img
          src={project.hero}
          alt={`${project.title}`}
          className="w-full rounded-2xl border border-hairline object-cover shadow-2xl shadow-black/40 md:aspect-[16/10]"
        />
      </motion.div>

      {/* Body */}
      <article className="mx-auto max-w-2xl px-6 py-16">
        {/* Build progression */}
        {stages?.length ? (
          <div className="mb-12">
            <h2 className="mb-4 text-xs uppercase tracking-[0.2em] text-muted/70">Build progression</h2>
            <div className="flex flex-wrap items-center gap-2">
              {stages.map((s, i) => (
                <Fragment key={s}>
                  <span className="rounded-full border border-hairline bg-surface px-3 py-1.5 text-sm text-cream">
                    {s}
                  </span>
                  {i < stages.length - 1 && (
                    <ArrowRight size={15} className="text-muted/60" />
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        ) : null}

        <div className="space-y-10">
          {sections.map((section, i) => (
            <div key={i}>
              {section.heading ? (
                <h2 className="mb-3 font-display text-2xl font-semibold text-cream">
                  {section.heading}
                </h2>
              ) : null}
              <div className="text-lg leading-relaxed text-cream/80">{section.body}</div>
            </div>
          ))}
        </div>

        {/* Links */}
        {links?.length ? (
          <div className="mt-12 border-t border-hairline pt-8">
            <h2 className="mb-4 text-xs uppercase tracking-[0.2em] text-muted/70">Links</h2>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-accent transition-colors hover:text-accent-soft"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </article>

      {/* Gallery */}
      {gallery?.length ? (
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <h2 className="mb-6 text-xs uppercase tracking-[0.2em] text-muted/70">Gallery</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {gallery.map((shot) => (
              <figure key={shot.src} className="group">
                <button
                  type="button"
                  onClick={() => setLightbox(shot)}
                  className="relative block w-full overflow-hidden rounded-xl border border-hairline"
                >
                  <img
                    src={shot.video ? shot.poster : shot.src}
                    alt={shot.caption || ''}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {shot.video && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink/80 text-accent backdrop-blur transition-transform group-hover:scale-110">
                        <Play size={24} className="ml-0.5" fill="currentColor" />
                      </span>
                    </span>
                  )}
                </button>
                {shot.caption ? (
                  <figcaption className="mt-2 text-sm text-muted">{shot.caption}</figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      {/* Prev / Next */}
      <nav className="border-t border-hairline">
        <div className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-hairline">
          <Link
            to={`/projects/${prev.slug}`}
            className="group flex flex-col px-6 py-8 transition-colors hover:bg-surface"
          >
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted">
              <ArrowLeft size={13} /> Previous
            </span>
            <span className="mt-2 font-display text-lg text-cream group-hover:text-accent-soft">
              {prev.shortTitle}
            </span>
          </Link>
          <Link
            to={`/projects/${next.slug}`}
            className="group flex flex-col items-end px-6 py-8 text-right transition-colors hover:bg-surface"
          >
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted">
              Next <ArrowRight size={13} />
            </span>
            <span className="mt-2 font-display text-lg text-cream group-hover:text-accent-soft">
              {next.shortTitle}
            </span>
          </Link>
        </div>
      </nav>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-6 backdrop-blur"
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute right-5 top-5 text-muted transition-colors hover:text-cream"
              onClick={() => setLightbox(null)}
            >
              <X size={28} />
            </button>
            <motion.figure
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-4xl"
            >
              {lightbox.video ? (
                <video
                  src={lightbox.src}
                  poster={lightbox.poster}
                  controls
                  autoPlay
                  playsInline
                  loop
                  className="max-h-[80vh] w-auto rounded-xl border border-hairline"
                />
              ) : (
                <img
                  src={lightbox.src}
                  alt={lightbox.caption || ''}
                  className="max-h-[80vh] w-auto rounded-xl border border-hairline object-contain"
                />
              )}
              {lightbox.caption ? (
                <figcaption className="mt-3 text-center text-sm text-muted">
                  {lightbox.caption}
                </figcaption>
              ) : null}
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectPage;
