"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

export interface BeforeAfterPair {
  before: string;
  after: string;
  label?: string;
}

interface BeforeAfterProps {
  pairs: BeforeAfterPair[];
  serviceName: string;
}

function BeforeAfterSlider({ pair, index }: { pair: BeforeAfterPair; index: number }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div className="flex flex-col">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-lg overflow-hidden cursor-col-resize select-none border border-[#E5DFD5] shadow-sm group"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {/* After image (full behind) */}
        <Image
          src={pair.after}
          alt={`After - ${pair.label || `Project ${index + 1}`}`}
          fill
          className="object-cover"
          draggable={false}
        />

        {/* Before image (clipped via clipPath) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
        >
          <Image
            src={pair.before}
            alt={`Before - ${pair.label || `Project ${index + 1}`}`}
            fill
            className="object-cover"
            draggable={false}
          />
        </div>

        {/* Slider line & handle */}
        <div
          className="absolute top-0 bottom-0 z-10 pointer-events-none"
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        >
          <div className="w-[2px] h-full bg-white/90 shadow-md" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-[#C9A84C] transition-transform group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-ml-1.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>

        {/* Before / After labels */}
        <div className="absolute top-3 left-3 z-20 bg-[#1C1C1A]/75 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm backdrop-blur-sm pointer-events-none">
          Before
        </div>
        <div className="absolute top-3 right-3 z-20 bg-[#C9A84C]/85 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm backdrop-blur-sm pointer-events-none">
          After
        </div>
      </div>

      {pair.label && (
        <p className="text-center text-sm text-[#6B6B6B] mt-3 font-medium">{pair.label}</p>
      )}
    </div>
  );
}

export default function BeforeAfter({ pairs, serviceName }: BeforeAfterProps) {
  if (!pairs || pairs.length === 0) return null;

  return (
    <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-white border-b border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-semibold mb-2">
            REAL RESULTS
          </p>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#1C1C1A] font-normal mb-3">
            Before &amp; After — {serviceName}
          </h3>
          <p className="text-sm text-[#6B6B6B] max-w-lg mx-auto">
            Drag the slider to reveal the transformation. Real projects completed by Soarin Handyman Services.
          </p>
          <div className="w-12 h-[1px] bg-[#C9A84C] mx-auto mt-4" />
        </div>

        <div className={`grid gap-8 ${pairs.length === 1 ? "grid-cols-1 max-w-2xl mx-auto" : "grid-cols-1 md:grid-cols-2"}`}>
          {pairs.map((pair, idx) => (
            <BeforeAfterSlider key={idx} pair={pair} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
