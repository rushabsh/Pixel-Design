import React from "react";
import HeroSkeleton from "./HeroSkeleton";

export default function ContactSkeleton() {
  return (
    <div className="w-full min-h-screen bg-white" aria-busy="true" aria-label="Loading Contact Us...">
      {/* Hero */}
      <HeroSkeleton />

      {/* Contact Content Area */}
      <div className="w-full max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form Left Skeleton */}
          <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 space-y-6">
            <div className="w-48 h-8 rounded-lg skeleton-shimmer-light mb-6" />
            <div className="w-full h-14 rounded-xl skeleton-shimmer-light" />
            <div className="w-full h-14 rounded-xl skeleton-shimmer-light" />
            <div className="w-full h-36 rounded-xl skeleton-shimmer-light" />
            <div className="w-44 h-12 rounded-full skeleton-shimmer-light" />
          </div>

          {/* Info Right Skeleton */}
          <div className="space-y-8 flex flex-col justify-between">
            <div>
              <div className="w-3/4 h-10 rounded-xl skeleton-shimmer-light mb-4" />
              <div className="w-full h-5 rounded skeleton-shimmer-light mb-2" />
              <div className="w-2/3 h-5 rounded skeleton-shimmer-light mb-8" />
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                <div className="w-32 h-4 rounded skeleton-shimmer-light mb-2" />
                <div className="w-56 h-6 rounded-lg skeleton-shimmer-light" />
              </div>
              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                <div className="w-32 h-4 rounded skeleton-shimmer-light mb-2" />
                <div className="w-56 h-6 rounded-lg skeleton-shimmer-light" />
              </div>
            </div>
          </div>
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

