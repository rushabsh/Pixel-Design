import React from "react";
import HeroSkeleton from "./HeroSkeleton";

export default function ServicesSkeleton() {
  return (
    <div className="w-full min-h-screen bg-white" aria-busy="true" aria-label="Loading Services...">
      {/* Hero */}
      <HeroSkeleton />

      {/* Services List Breakdown */}
      <div className="w-full max-w-7xl mx-auto px-6 py-24 space-y-24">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex flex-col lg:flex-row gap-12 items-center p-8 rounded-3xl bg-neutral-50 border border-neutral-200">
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="w-24 h-6 rounded-md skeleton-shimmer-light" />
              <div className="w-3/4 h-10 rounded-xl skeleton-shimmer-light" />
              <div className="w-full h-4 rounded skeleton-shimmer-light" />
              <div className="w-5/6 h-4 rounded skeleton-shimmer-light" />
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[1, 2, 3, 4].map((tag) => (
                  <div key={tag} className="w-full h-10 rounded-xl skeleton-shimmer-light" />
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 aspect-video rounded-2xl skeleton-shimmer-light border border-neutral-200" />
          </div>
        ))}
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

