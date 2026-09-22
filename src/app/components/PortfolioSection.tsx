"use client";

import { useState } from "react";
import Image from "next/image";

export interface PortfolioItem {
  title: string;
  category: "repairs" | "installations" | "improvements";
  image: string;
  description: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Sink & Faucet Plumbing Installation",
    category: "installations",
    image: "/images/faucet-replacement/commercial-sink-faucet-plumbing.jpg",
    description: "Professional sink, faucet, and drain line plumbing installation.",
  },
  {
    title: "Wall Anchor Hole Patching & Spackling",
    category: "repairs",
    image: "/images/drywall-repairs/drywall-anchor-hole-spackle.jpg",
    description: "Detailed wall anchor hole spackling, drywall repair, and surface sanding.",
  },
  {
    title: "Marble Shower Safety Grab Bar",
    category: "installations",
    image: "/images/bathroom-grab-bars/grab-bar-marble-shower.jpg",
    description: "Vertical stainless steel safety grab bar securely mounted in marble tile shower.",
  },
  {
    title: "Window Frame Sealing & Caulking",
    category: "repairs",
    image: "/images/caulking/window-caulking-installation.jpg",
    description: "Weather-resistant window caulking bead application to prevent water intrusion.",
  },
  {
    title: "Exterior Stucco Entryway Painting",
    category: "improvements",
    image: "/images/painting/exterior-stucco-entry-painting.jpg",
    description: "Fresh exterior paint coat and trim finishing for home entryway.",
  },
  {
    title: "Under-Sink Vanity Plumbing Repair",
    category: "repairs",
    image: "/images/faucet-replacement/under-sink-plumbing-vanity.jpg",
    description: "Under-sink vanity framing, pipe inspection, and plumbing repair.",
  },
  {
    title: "Bathtub & Tile Safety Rails",
    category: "installations",
    image: "/images/bathroom-grab-bars/grab-bar-bathtub-safety.jpg",
    description: "Heavy-duty safety grab bars installed around bathtub enclosure.",
  },
  {
    title: "Interior Room Wall Painting",
    category: "improvements",
    image: "/images/painting/interior-room-painting.jpg",
    description: "Clean interior wall painting, border taping, and trim finish.",
  },
  {
    title: "Shower & Tub Tile Joint Caulking",
    category: "repairs",
    image: "/images/caulking/tile-joint-caulking.jpg",
    description: "Clean silicone caulking line along tile joint boundaries.",
  },
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { label: "All", value: "all" },
    { label: "Repairs", value: "repairs" },
    { label: "Installations", value: "installations" },
    { label: "Improvements", value: "improvements" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="our-work" className="py-20 lg:py-28 bg-[#F9F8F6] px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-semibold mb-3">
            PORTFOLIO
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#1C1C1A] mb-4 font-normal">
            Work Worth Showing Off.
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A84C] mx-auto" />
        </div>

        {/* Filter Tabs Bar */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex gap-1 p-1 bg-white border border-[#E5DFD5] rounded-sm shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`px-4 py-2 text-sm font-medium rounded-sm transition-all duration-200 ${
                  activeFilter === cat.value
                    ? "bg-[#1C1C1A] text-white shadow-xs"
                    : "text-[#6B6B6B] hover:text-[#1C1C1A] hover:bg-[#F9F8F6]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-sm bg-stone-200 h-64 md:h-72"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover Dark Overlay */}
              <div className="absolute inset-0 bg-[#1C1C1A]/0 group-hover:bg-[#1C1C1A]/60 transition-all duration-300 flex items-end p-6">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <p className="text-white font-serif text-lg mb-1 font-normal">
                    {item.title}
                  </p>
                  <p className="text-white/80 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-10">
          <p className="text-sm text-[#8C857B]">
            Authentic project photos from recent Soarin Handyman Services completed jobs in Southwest Florida.
          </p>
        </div>
      </div>
    </section>
  );
}
