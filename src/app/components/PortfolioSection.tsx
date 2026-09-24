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
    title: "Bathroom Vanity & Faucet Installation",
    category: "installations",
    image: "/images/bathroom/bathroom-vanity-faucet-installation.jpg",
    description: "Professional vanity cabinet and faucet plumbing installation.",
  },
  {
    title: "Drywall Patch & Smooth Finish",
    category: "repairs",
    image: "/images/drywall-repairs/drywall-patch-repair.jpg",
    description: "Seamless drywall patching, mud, and texture-matched finish.",
  },
  {
    title: "Marble Shower Safety Grab Bar",
    category: "installations",
    image: "/images/bathroom/grab-bar-marble-shower.jpg",
    description: "Vertical stainless steel safety grab bar securely mounted in marble tile shower.",
  },
  {
    title: "Hurricane Shutter Track Repair",
    category: "repairs",
    image: "/images/hurricane-shutter-repair/d0578b9601f5e5dce3d6a8fe3fa46c56c088db62-1.jpg",
    description: "Storm shutter track alignment, lubrication, and hardware repair.",
  },
  {
    title: "Exterior Stucco Entryway Painting",
    category: "improvements",
    image: "/images/painting/exterior-wall-stucco-repair.jpg",
    description: "Fresh exterior paint coat and trim finishing for home entryway.",
  },
  {
    title: "Ceiling Fan Replacement",
    category: "installations",
    image: "/images/ceiling-fans/TN.jpg",
    description: "Complete ceiling fan swap with secure mounting and wiring.",
  },
  {
    title: "Outdoor Miscellaneous Repair",
    category: "improvements",
    image: "/images/outdoor-miscellaneous-work/984027b5d6755a58e07852bfb0408ac960f364f1-1.jpg",
    description: "Fence, gate, and outdoor fixture repair and installation.",
  },
  {
    title: "Interior Room Wall Painting",
    category: "improvements",
    image: "/images/painting/interior-room-painting.jpg",
    description: "Clean interior wall painting, border taping, and trim finish.",
  },
  {
    title: "Bathroom Shower Grab Bar Install",
    category: "installations",
    image: "/images/bathroom/grab-bar-vertical-install.jpg",
    description: "Heavy-duty grab bar securely mounted alongside shower enclosure.",
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
                className={`px-4 py-2 text-sm font-medium rounded-sm transition-all duration-200 ${activeFilter === cat.value
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
