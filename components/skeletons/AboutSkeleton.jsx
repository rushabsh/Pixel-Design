import React from "react";
import HeroSkeleton from "./HeroSkeleton";

export default function AboutSkeleton() {
  return (
    <div className="w-full min-h-screen bg-white" aria-busy="true" aria-label="Loading About Us...">
      {/* Hero */}
      <HeroSkeleton />

      {/* Main Content Area */}
      <div className="w-full max-w-7xl mx-auto px-6 py-24">
        {/* Intro Tagline */}
        <div className="w-3/4 max-w-2xl h-12 rounded-xl skeleton-shimmer-light mb-8" />
        <div className="w-full max-w-4xl h-5 rounded skeleton-shimmer-light mb-3" />
        <div className="w-5/6 max-w-3xl h-5 rounded skeleton-shimmer-light mb-16" />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 p-8 rounded-3xl bg-neutral-50 border border-neutral-200">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-3">
              <div className="w-24 h-12 rounded-lg skeleton-shimmer-light" />
              <div className="w-32 h-4 rounded skeleton-shimmer-light" />
            </div>
          ))}
        </div>

        {/* Team / Culture Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-[3/4] rounded-3xl skeleton-shimmer-light border border-neutral-200" />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-[#060609] py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="space-y-4">
            <div className="w-48 h-8 rounded-lg skeleton-shimmer-dark" />
            <div className="w-64 h-4 rounded skeleton-shimmer-dark" />
          </div>
          <div className="flex gap-8">
            <div className="w-28 h-6 rounded skeleton-shimmer-dark" />
            <div className="w-28 h-6 rounded skeleton-shimmer-dark" />
            <div className="w-28 h-6 rounded skeleton-shimmer-dark" />
          </div>
        </div>
      </div>
    </div>
  );
}

