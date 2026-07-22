// src/components/NotFound.js
//
// Real 404 page. Unknown paths used to silently render the homepage, which
// made stale links look like a bug; this says plainly that the page is gone.

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center text-cream">
    <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent">404</p>
    <h1 className="mb-4 font-display text-4xl font-semibold md:text-5xl">
      This page doesn't exist.
    </h1>
    <p className="mb-8 max-w-md leading-relaxed text-muted">
      The link may be old, or the page may have moved.
    </p>
    <Link
      to="/"
      className="group inline-flex items-center gap-2 text-accent transition-colors hover:text-accent-soft"
    >
      <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-0.5" />
      Back to the homepage
    </Link>
  </div>
);

export default NotFound;
