import React from "react";
import HeroSkeleton from "./HeroSkeleton";

export default function PageSkeleton() {
  return (
    <div className="w-full min-h-screen bg-white" aria-busy="true" aria-label="Loading page content...">
      {/* 1. Hero Section Skeleton */}
      <HeroSkeleton />

      {/* 2. Interactive Text Shimmer Strip */}
      <div className="w-full h-48 py-8 flex flex-col items-center justify-center bg-black/95 overflow-hidden">
        <div className="w-3/4 max-w-2xl h-16 rounded-2xl skeleton-shimmer-dark opacity-80" />
      </div>

      {/* 3. Marquee Ticker Skeleton */}
      <div className="w-full h-20 bg-neutral-100 flex items-center justify-center border-y border-neutral-200">
        <div className="w-5/6 h-8 rounded-lg skeleton-shimmer-light" />
      </div>

      {/* 4. Services Grid Skeleton */}
      <div className="w-full max-w-7xl mx-auto px-6 py-24">
        <div className="w-48 h-8 rounded-lg skeleton-shimmer-light mb-4" />
        <div className="w-96 max-w-full h-12 rounded-xl skeleton-shimmer-light mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-neutral-200 bg-neutral-50 flex flex-col justify-between h-80">
              <div>
                <div className="w-14 h-14 rounded-2xl skeleton-shimmer-light mb-6" />
                <div className="w-3/4 h-7 rounded-lg skeleton-shimmer-light mb-4" />
                <div className="w-full h-4 rounded skeleton-shimmer-light mb-2" />
                <div className="w-5/6 h-4 rounded skeleton-shimmer-light mb-2" />
                <div className="w-2/3 h-4 rounded skeleton-shimmer-light" />
              </div>
              <div className="w-32 h-6 rounded-md skeleton-shimmer-light mt-8" />
            </div>
          ))}
        </div>
      </div>

      {/* 5. {SMART} Development Dark Section Skeleton */}
      <div className="w-full bg-[#0d0f11] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="w-64 h-10 rounded-xl skeleton-shimmer-dark mb-6" />
          <div className="w-full max-w-lg h-6 rounded-md skeleton-shimmer-dark mb-12" />
          <div className="w-full h-96 rounded-3xl skeleton-shimmer-dark border border-white/5" />
        </div>
      </div>

      {/* 6. Portfolio Cards Skeleton */}
      <div className="w-full max-w-7xl mx-auto px-6 py-24">
        <div className="w-56 h-8 rounded-lg skeleton-shimmer-light mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-[4/3] rounded-3xl skeleton-shimmer-light border border-neutral-200" />
          ))}
        </div>
      </div>

      {/* 7. Footer Skeleton */}
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

