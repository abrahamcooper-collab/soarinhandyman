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
    title: "Ceiling Fan Installation",
    category: "installations",
    image:
      "https://images.pexels.com/photos/6474129/pexels-photo-6474129.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Professional ceiling fan installation with secure mounting.",
  },
  {
    title: "Drywall Repair & Patching",
    category: "repairs",
    image:
      "https://images.pexels.com/photos/11427055/pexels-photo-11427055.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Seamless drywall patch and texture match.",
  },
  {
    title: "Faucet Replacement",
    category: "installations",
    image:
      "https://images.pexels.com/photos/12196323/pexels-photo-12196323.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Modern faucet installation with leak-free connections.",
  },
  {
    title: "Caulking & Sealing",
    category: "repairs",
    image:
      "https://images.pexels.com/photos/6124242/pexels-photo-6124242.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Fresh caulk application around bathroom fixtures.",
  },
  {
    title: "Interior Painting & Finishing",
    category: "improvements",
    image:
      "https://images.pexels.com/photos/6474300/pexels-photo-6474300.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Clean interior painting and wall finishing.",
  },
  {
    title: "Wall Repair & Sanding",
    category: "repairs",
    image:
      "https://images.pexels.com/photos/6473965/pexels-photo-6473965.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Wall repair and surface preparation for a smooth finish.",
  },
  {
    title: "TV Mounting",
    category: "installations",
    image:
      "https://images.pexels.com/photos/7546718/pexels-photo-7546718.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Secure wall-mounted TV with clean cable management.",
  },
  {
    title: "Door & Hardware Repair",
    category: "repairs",
    image:
      "https://images.pexels.com/photos/9051071/pexels-photo-9051071.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Door adjustment and hardware replacement.",
  },
  {
    title: "Trim & Baseboard Installation",
    category: "improvements",
    image:
      "https://images.pexels.com/photos/7601180/pexels-photo-7601180.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "New trim and baseboard installation with clean joints.",
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
                unoptimized
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

        {/* Disclaimer Note */}
        <div className="text-center mt-10">
          <p className="text-sm text-[#8C857B]">
            Project photos shown are representative examples. Real project
            photos will be added as they become available.
          </p>
        </div>
      </div>
    </section>
  );
}
