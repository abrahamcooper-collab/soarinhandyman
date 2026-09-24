"use client";

import { useState, useRef } from "react";

export interface ServiceOptionConfig {
  baseLabor: number;
  perUnit: number;
  unitLabel: string;
  unitOptions: { label: string; value: number }[];
  complexityOptions: { label: string; multiplier: number }[];
  materialOptions: { label: string; cost: number }[];
  notes?: string;
}

export const serviceConfigs: Record<string, ServiceOptionConfig> = {
  "Ceiling Fan Installation": {
    baseLabor: 75,
    perUnit: 60,
    unitLabel: "Number of fans",
    unitOptions: [
      { label: "1 fan", value: 1 },
      { label: "2 fans", value: 2 },
      { label: "3 fans", value: 3 },
      { label: "4+ fans", value: 4 },
    ],
    complexityOptions: [
      { label: "Standard ceiling height, existing box", multiplier: 1 },
      { label: "Vaulted ceiling or downrod needed", multiplier: 1.3 },
      { label: "No existing electrical box", multiplier: 1.6 },
    ],
    materialOptions: [
      { label: "No materials needed", cost: 0 },
      { label: "New electrical box included", cost: 25 },
      { label: "Downrod and mounting hardware", cost: 35 },
    ],
    notes:
      "Assumes fan is provided by customer. Electrical work may require a licensed electrician.",
  },
  "Drywall Repair": {
    baseLabor: 80,
    perUnit: 45,
    unitLabel: "Number of damaged areas",
    unitOptions: [
      { label: "1 area", value: 1 },
      { label: "2 areas", value: 2 },
      { label: "3 areas", value: 3 },
      { label: "4+ areas", value: 4 },
    ],
    complexityOptions: [
      { label: "Small (under 6 inches)", multiplier: 1 },
      { label: "Medium (6 to 24 inches)", multiplier: 1.4 },
      { label: "Large (over 24 inches)", multiplier: 1.8 },
      { label: "Ceiling repair", multiplier: 1.5 },
    ],
    materialOptions: [
      { label: "Standard drywall patch", cost: 15 },
      { label: "Texture matching required", cost: 30 },
      { label: "Includes drywall sheet", cost: 25 },
    ],
    notes:
      "Estimate includes patching and finishing. Painting is additional if needed.",
  },
  "Hurricane Shutter Repair": {
    baseLabor: 90,
    perUnit: 40,
    unitLabel: "Number of shutters / panels",
    unitOptions: [
      { label: "1–2 shutters", value: 1 },
      { label: "3–5 shutters", value: 3 },
      { label: "6+ shutters", value: 6 },
    ],
    complexityOptions: [
      { label: "Track adjustment or lubrication", multiplier: 1 },
      { label: "Slat replacement or panel repair", multiplier: 1.3 },
      { label: "Motor / crank gearbox adjustment", multiplier: 1.6 },
    ],
    materialOptions: [
      { label: "No extra materials needed", cost: 0 },
      { label: "Replacement hardware & fasteners", cost: 30 },
      { label: "Heavy-duty track hardware", cost: 60 },
    ],
    notes: "Includes inspection of shutter tracks, alignment, and secure locking operation.",
  },
  "Outdoor Miscellaneous Work": {
    baseLabor: 80,
    perUnit: 40,
    unitLabel: "Estimated scope / hours",
    unitOptions: [
      { label: "Small job (1–2 hrs)", value: 1 },
      { label: "Medium job (Half-day)", value: 2 },
      { label: "Full day project", value: 4 },
    ],
    complexityOptions: [
      { label: "Ground level repair / installation", multiplier: 1 },
      { label: "Ladder access or post digging required", multiplier: 1.3 },
      { label: "Custom fabrication or heavy lifting", multiplier: 1.6 },
    ],
    materialOptions: [
      { label: "Customer provides materials", cost: 0 },
      { label: "Basic hardware & exterior fasteners", cost: 25 },
      { label: "Lumber / concrete / heavy materials", cost: 60 },
    ],
    notes: "Covers fence patch, deck repair, exterior trim, screen repair, and outdoor fixture mounting.",
  },
  "Gutters / Fascia Repairs": {
    baseLabor: 85,
    perUnit: 10,
    unitLabel: "Approximate linear feet",
    unitOptions: [
      { label: "Under 15 ft", value: 15 },
      { label: "15–30 ft", value: 30 },
      { label: "30–60 ft", value: 60 },
    ],
    complexityOptions: [
      { label: "Minor gutter seam re-seal / bracket repair", multiplier: 1 },
      { label: "Section replacement or fascia board repair", multiplier: 1.35 },
      { label: "Second-story height work", multiplier: 1.6 },
    ],
    materialOptions: [
      { label: "No materials needed", cost: 0 },
      { label: "Sealant & heavy-duty hangers", cost: 25 },
      { label: "Gutter section & fascia material", cost: 50 },
    ],
    notes: "Includes ladder setup, safety check, and seal testing.",
  },
  "Shower Door Replacement": {
    baseLabor: 120,
    perUnit: 80,
    unitLabel: "Number of shower doors",
    unitOptions: [
      { label: "1 shower door", value: 1 },
      { label: "2 shower doors", value: 2 },
    ],
    complexityOptions: [
      { label: "Framed sliding shower door replacement", multiplier: 1 },
      { label: "Frameless heavy glass door", multiplier: 1.4 },
      { label: "Custom tile enclosure fitting", multiplier: 1.6 },
    ],
    materialOptions: [
      { label: "Customer provides shower door unit", cost: 0 },
      { label: "Silicone sealant & hardware kit included", cost: 35 },
    ],
    notes: "Assumes new shower door unit is supplied by customer unless arranged in advance.",
  },
  "Bathroom Vanity Replacement": {
    baseLabor: 150,
    perUnit: 100,
    unitLabel: "Number of vanities",
    unitOptions: [
      { label: "1 vanity (single sink)", value: 1 },
      { label: "1 vanity (double sink)", value: 2 },
    ],
    complexityOptions: [
      { label: "Standard freestanding vanity swap", multiplier: 1 },
      { label: "Wall-hung / floating vanity", multiplier: 1.35 },
      { label: "Plumbing modifications or mirror/light move required", multiplier: 1.6 },
    ],
    materialOptions: [
      { label: "Customer provides vanity & faucet", cost: 0 },
      { label: "Supply lines, p-trap & plumber's putty included", cost: 40 },
    ],
    notes: "Includes removal of old vanity, positioning new cabinet, and re-connecting existing plumbing lines.",
  },
  "Light Fixture Installation": {
    baseLabor: 70,
    perUnit: 55,
    unitLabel: "Number of fixtures",
    unitOptions: [
      { label: "1 fixture", value: 1 },
      { label: "2 fixtures", value: 2 },
      { label: "3 fixtures", value: 3 },
    ],
    complexityOptions: [
      { label: "Standard flush mount or pendant", multiplier: 1 },
      { label: "Chandelier or heavy fixture", multiplier: 1.4 },
      { label: "New electrical box needed", multiplier: 1.6 },
    ],
    materialOptions: [
      { label: "No materials needed", cost: 0 },
      { label: "New electrical box", cost: 25 },
      { label: "Mounting hardware", cost: 15 },
    ],
    notes:
      "Power is shut off at the breaker during installation. Fixture provided by customer.",
  },
  "Door / Hardware Repair": {
    baseLabor: 65,
    perUnit: 35,
    unitLabel: "Number of doors",
    unitOptions: [
      { label: "1 door", value: 1 },
      { label: "2 doors", value: 2 },
      { label: "3 doors", value: 3 },
    ],
    complexityOptions: [
      { label: "Hinge or handle adjustment", multiplier: 1 },
      { label: "Lock or deadbolt replacement", multiplier: 1.2 },
      { label: "Door realignment and planing", multiplier: 1.5 },
    ],
    materialOptions: [
      { label: "No materials needed", cost: 0 },
      { label: "New hinges included", cost: 15 },
      { label: "New handle or lock set", cost: 45 },
    ],
    notes:
      "Includes diagnosis and adjustment. Hardware provided by customer unless noted.",
  },
  "TV Mounting": {
    baseLabor: 85,
    perUnit: 65,
    unitLabel: "Number of TVs",
    unitOptions: [
      { label: "1 TV", value: 1 },
      { label: "2 TVs", value: 2 },
    ],
    complexityOptions: [
      { label: "Fixed mount, standard wall", multiplier: 1 },
      { label: "Full-motion / articulating mount", multiplier: 1.2 },
      { label: "Stone or difficult wall surface", multiplier: 1.4 },
    ],
    materialOptions: [
      { label: "Customer provides mount", cost: 0 },
      { label: "Mount included (fixed)", cost: 45 },
      { label: "Mount included (full-motion)", cost: 85 },
      { label: "In-wall cable management kit", cost: 30 },
    ],
    notes:
      "Includes leveling and basic cable management. Mount can be provided by customer.",
  },
  "Shelving / Wall Mounting": {
    baseLabor: 55,
    perUnit: 30,
    unitLabel: "Number of items",
    unitOptions: [
      { label: "1 item", value: 1 },
      { label: "2 items", value: 2 },
      { label: "3 items", value: 3 },
      { label: "4+ items", value: 4 },
    ],
    complexityOptions: [
      { label: "Light items (artwork, small shelves)", multiplier: 1 },
      { label: "Heavy items (large mirror, heavy shelf)", multiplier: 1.3 },
      { label: "Gallery wall (multiple pieces)", multiplier: 1.5 },
    ],
    materialOptions: [
      { label: "Standard anchors included", cost: 10 },
      { label: "Heavy-duty anchors", cost: 20 },
      { label: "Floating shelf hardware", cost: 25 },
    ],
    notes:
      "Shelves and decor provided by customer. We ensure proper weight-rated mounting.",
  },
  "Cabinet / Hardware Repair": {
    baseLabor: 60,
    perUnit: 25,
    unitLabel: "Number of cabinets",
    unitOptions: [
      { label: "1–2 cabinets", value: 1 },
      { label: "3–5 cabinets", value: 3 },
      { label: "6+ cabinets", value: 6 },
    ],
    complexityOptions: [
      { label: "Hinge adjustment", multiplier: 1 },
      { label: "Handle or knob replacement", multiplier: 1.1 },
      { label: "Drawer slide repair", multiplier: 1.3 },
    ],
    materialOptions: [
      { label: "No materials needed", cost: 0 },
      { label: "New hinges included", cost: 20 },
      { label: "New handles or knobs", cost: 30 },
      { label: "New drawer slides", cost: 35 },
    ],
    notes:
      "Includes alignment and testing. Hardware can be provided by customer.",
  },
  "Trim / Baseboard Repair": {
    baseLabor: 70,
    perUnit: 8,
    unitLabel: "Approximate linear feet",
    unitOptions: [
      { label: "Under 10 ft", value: 10 },
      { label: "10–25 ft", value: 25 },
      { label: "25–50 ft", value: 50 },
    ],
    complexityOptions: [
      { label: "Simple repair and reattach", multiplier: 1 },
      { label: "Replace section with new trim", multiplier: 1.3 },
      { label: "Full room replacement", multiplier: 1.5 },
    ],
    materialOptions: [
      { label: "Using existing trim", cost: 0 },
      { label: "New trim material included", cost: 35 },
      { label: "Caulk and filler included", cost: 10 },
    ],
    notes:
      "Includes cutting, nailing, filling, and caulking. Painting is additional.",
  },
  "Interior / Exterior Painting": {
    baseLabor: 90,
    perUnit: 20,
    unitLabel: "Approximate area / room count",
    unitOptions: [
      { label: "Single Room", value: 1 },
      { label: "2–3 Rooms", value: 2 },
      { label: "4+ Rooms", value: 4 },
      { label: "Exterior Trim / Accent", value: 2 },
    ],
    complexityOptions: [
      { label: "Standard walls, minimal prep", multiplier: 1 },
      { label: "High ceilings or trim detail", multiplier: 1.3 },
      { label: "Heavy prep, scraping, or repair needed", multiplier: 1.6 },
    ],
    materialOptions: [
      { label: "Customer provides paint", cost: 0 },
      { label: "Standard paint & supplies included", cost: 40 },
      { label: "Premium paint & supplies included", cost: 75 },
    ],
    notes:
      "Includes wall preparation, taping, and drop cloths. Paint can be customer-supplied or provided.",
  },
  Bathroom: {
    baseLabor: 100,
    perUnit: 50,
    unitLabel: "Number of items / tasks",
    unitOptions: [
      { label: "1 task (e.g. Grab Bar)", value: 1 },
      { label: "2 tasks", value: 2 },
      { label: "3+ tasks (Bathroom Refresh)", value: 3 },
    ],
    complexityOptions: [
      { label: "Standard fixture or hardware swap", multiplier: 1 },
      { label: "Tile drilling or anchor reinforcement", multiplier: 1.3 },
      { label: "Full hardware, mirror & caulk refresh", multiplier: 1.6 },
    ],
    materialOptions: [
      { label: "Customer provides fixtures", cost: 0 },
      { label: "Standard anchors & silicone included", cost: 25 },
      { label: "Heavy-duty mounting hardware kit", cost: 45 },
    ],
    notes:
      "Covers bathroom grab bars, mirror mounting, towel rack installation, caulking, and fixture upgrades.",
  },
  Other: {
    baseLabor: 75,
    perUnit: 0,
    unitLabel: "Project scope",
    unitOptions: [{ label: "Small project", value: 1 }],
    complexityOptions: [
      { label: "Simple / quick fix", multiplier: 1 },
      { label: "Moderate project", multiplier: 1.5 },
      { label: "Complex project", multiplier: 2 },
    ],
    materialOptions: [
      { label: "No materials needed", cost: 0 },
      { label: "Some materials required", cost: 50 },
    ],
    notes:
      "For projects not listed above. Final pricing will be determined after project review.",
  },
};

export const serviceList = [
  "Ceiling Fan Installation",
  "Drywall Repair",
  "Hurricane Shutter Repair",
  "Outdoor Miscellaneous Work",
  "Gutters / Fascia Repairs",
  "Shower Door Replacement",
  "Bathroom Vanity Replacement",
  "Light Fixture Installation",
  "Door / Hardware Repair",
  "TV Mounting",
  "Shelving / Wall Mounting",
  "Cabinet / Hardware Repair",
  "Trim / Baseboard Repair",
  "Interior / Exterior Painting",
  "Bathroom",
  "Other",
];

const cityFees: Record<string, number> = {
  "Cape Coral": 0,
  "Fort Myers": 15,
  Naples: 25,
  "Port Charlotte": 20,
  "Punta Gorda": 25,
  Sanibel: 30,
};

export default function EstimateForm() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [unitIdx, setUnitIdx] = useState(0);
  const [complexityIdx, setComplexityIdx] = useState(0);
  const [materialIdx, setMaterialIdx] = useState(0);

  const [contactInfo, setContactInfo] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    preferredDate: "",
    description: "",
  });

  const [photos, setPhotos] = useState<File[]>([]);
  const [photoPreviews, setPhotoPreviews] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentConfig = selectedService ? serviceConfigs[selectedService] : null;

  const handleSelectService = (service: string) => {
    setSelectedService(service);
    setUnitIdx(0);
    setComplexityIdx(0);
    setMaterialIdx(0);
    setErrorMsg("");
  };

  const calculateEstimate = () => {
    if (!currentConfig) return { low: 0, high: 0 };
    const unitVal = currentConfig.unitOptions[unitIdx]?.value || 1;
    const complexityMult =
      currentConfig.complexityOptions[complexityIdx]?.multiplier || 1;
    const materialCost = currentConfig.materialOptions[materialIdx]?.cost || 0;
    const cityFee = cityFees[contactInfo.city] || 0;

    const baseCost = currentConfig.baseLabor * complexityMult;
    const perUnitCost = currentConfig.perUnit * unitVal * complexityMult;
    const rawTotal = baseCost + perUnitCost + materialCost + cityFee;

    const minTotal = Math.max(rawTotal, 65);
    const low = Math.round((minTotal * 0.85) / 5) * 5;
    const high = Math.round((minTotal * 1.25) / 5) * 5;

    return { low, high };
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const remainingSlots = 5 - photos.length;
    const selected = files.slice(0, remainingSlots);
    setPhotos((prev) => [...prev, ...selected]);

    const previews = selected.map((file) => URL.createObjectURL(file));
    setPhotoPreviews((prev) => [...prev, ...previews]);
  };

  const handleRemovePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
    setPhotoPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleGetEstimate = () => {
    if (!contactInfo.name || !contactInfo.phone || !contactInfo.email) {
      setErrorMsg("Please fill out all required fields marked with *");
      return;
    }
    setErrorMsg("");
    setStep(4);
  };

  const handleFinalSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedService("");
    setUnitIdx(0);
    setComplexityIdx(0);
    setMaterialIdx(0);
    setContactInfo({
      name: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      zipCode: "",
      preferredDate: "",
      description: "",
    });
    setPhotos([]);
    setPhotoPreviews([]);
    setErrorMsg("");
    setIsSubmitted(false);
  };

  const estimate = calculateEstimate();

  return (
    <section id="estimate-form" className="py-16 md:py-24 bg-[#F9F8F6]">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-semibold mb-3">
            Instant Estimate
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1C1C1A] mb-4 font-normal">
            Get an Estimate in Minutes
          </h2>
          <p className="text-[#6B6B6B] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Tell us what you need done and get an estimated project range before
            scheduling your service.
          </p>
          <div className="w-12 h-[1px] bg-[#C9A84C] mx-auto mt-6" />
        </div>

        {/* Multi-Step Card */}
        <div className="bg-[#FAF7F0] border border-[#EBE5DA] rounded-lg shadow-sm overflow-hidden">
          {/* Progress Header Bar */}
          <div className="flex items-center justify-between px-6 lg:px-8 py-5 bg-[#F3ECE0] border-b border-[#EBE5DA]">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className="flex items-center gap-2 flex-1 last:flex-none"
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-all duration-300 ${
                    step >= s
                      ? "bg-[#C9A84C] text-white"
                      : "bg-[#EBE5DA] text-[#8C857B]"
                  }`}
                >
                  {step > s ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    s
                  )}
                </div>
                {s < 4 && (
                  <div
                    className={`h-[1px] flex-1 transition-all duration-500 ${
                      step > s ? "bg-[#C9A84C]" : "bg-[#D8D2C6]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Form Content Body */}
          <div className="px-6 lg:px-8 py-8">
            {/* STEP 1: Select Service */}
            {step === 1 && (
              <div>
                <h3 className="font-serif text-2xl text-[#1C1C1A] mb-2 font-normal">
                  Select Your Service
                </h3>
                <p className="text-sm text-[#6B6B6B] mb-6">
                  Choose the service that best matches your project.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {serviceList.map((service) => {
                    const isSelected = selectedService === service;
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => handleSelectService(service)}
                        className={`px-4 py-3.5 text-left text-sm rounded-sm border transition-all duration-200 ${
                          isSelected
                            ? "border-[#C9A84C] bg-[#F5EFE0] text-[#1C1C1A] shadow-sm font-medium"
                            : "border-[#E5DFD5] bg-white text-[#4A4A4A] hover:border-[#C9A84C]/50 hover:bg-[#FAF7F0]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{service}</span>
                          {isSelected && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#C9A84C"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="shrink-0 ml-2"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!selectedService}
                    className="flex items-center gap-2 px-6 py-3 bg-[#C9A84C] text-white rounded-sm font-medium text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#B8943F] transition-colors"
                  >
                    Continue
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Project Details */}
            {step === 2 && currentConfig && (
              <div>
                <h3 className="font-serif text-2xl text-[#1C1C1A] mb-2 font-normal">
                  Project Details
                </h3>
                <p className="text-sm text-[#6B6B6B] mb-6">
                  Tell us about the scope of your{" "}
                  <span className="font-medium text-[#1C1C1A]">
                    {selectedService.toLowerCase()}
                  </span>{" "}
                  project.
                </p>

                <div className="space-y-6">
                  {/* Quantity / Units */}
                  <div>
                    <label className="block text-sm font-medium text-[#2C2C2A] mb-2">
                      {currentConfig.unitLabel}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {currentConfig.unitOptions.map((opt, idx) => (
                        <button
                          key={opt.label}
                          type="button"
                          onClick={() => setUnitIdx(idx)}
                          className={`px-3 py-2.5 text-sm rounded-sm border transition-all text-center ${
                            unitIdx === idx
                              ? "border-[#C9A84C] bg-[#F5EFE0] text-[#1C1C1A] font-medium"
                              : "border-[#E5DFD5] bg-white text-[#555] hover:border-[#C9A84C]/50"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Complexity */}
                  <div>
                    <label className="block text-sm font-medium text-[#2C2C2A] mb-2">
                      Project Complexity
                    </label>
                    <div className="space-y-2">
                      {currentConfig.complexityOptions.map((opt, idx) => (
                        <button
                          key={opt.label}
                          type="button"
                          onClick={() => setComplexityIdx(idx)}
                          className={`w-full flex items-center justify-between px-4 py-3 text-sm text-left rounded-sm border transition-all ${
                            complexityIdx === idx
                              ? "border-[#C9A84C] bg-[#F5EFE0] text-[#1C1C1A] font-medium"
                              : "border-[#E5DFD5] bg-white text-[#555] hover:border-[#C9A84C]/50"
                          }`}
                        >
                          <span>{opt.label}</span>
                          {complexityIdx === idx && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#C9A84C"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="shrink-0 ml-2"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Materials */}
                  <div>
                    <label className="block text-sm font-medium text-[#2C2C2A] mb-2">
                      Materials
                    </label>
                    <div className="space-y-2">
                      {currentConfig.materialOptions.map((opt, idx) => (
                        <button
                          key={opt.label}
                          type="button"
                          onClick={() => setMaterialIdx(idx)}
                          className={`w-full flex items-center justify-between px-4 py-3 text-sm text-left rounded-sm border transition-all ${
                            materialIdx === idx
                              ? "border-[#C9A84C] bg-[#F5EFE0] text-[#1C1C1A] font-medium"
                              : "border-[#E5DFD5] bg-white text-[#555] hover:border-[#C9A84C]/50"
                          }`}
                        >
                          <span>{opt.label}</span>
                          {materialIdx === idx && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#C9A84C"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="shrink-0 ml-2"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Service Note */}
                  {currentConfig.notes && (
                    <div className="flex items-start gap-2.5 px-4 py-3 bg-[#F3ECE0] border border-[#EBE5DA] rounded-sm text-sm text-[#555]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C9A84C"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 mt-0.5"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                      </svg>
                      <span>{currentConfig.notes}</span>
                    </div>
                  )}
                </div>

                <div className="mt-8 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex items-center gap-2 px-5 py-3 text-[#555] text-sm font-medium hover:text-[#1C1C1A] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex items-center gap-2 px-6 py-3 bg-[#C9A84C] text-white rounded-sm font-medium text-sm hover:bg-[#B8943F] transition-colors"
                  >
                    Continue
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Property & Contact Info */}
            {step === 3 && (
              <div>
                <h3 className="font-serif text-2xl text-[#1C1C1A] mb-2 font-normal">
                  Property & Contact Info
                </h3>
                <p className="text-sm text-[#6B6B6B] mb-6">
                  We need this to calculate your estimate and follow up about
                  your project.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-[#2C2C2A] mb-1.5">
                      Name <span className="text-[#C9A84C]">*</span>
                    </label>
                    <input
                      type="text"
                      value={contactInfo.name}
                      onChange={(e) =>
                        setContactInfo({ ...contactInfo, name: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 border border-[#D8D2C6] rounded-sm bg-white text-[#1C1C1A] text-sm focus:border-[#C9A84C] focus:outline-none focus:ring-1 focus:ring-[#C9A84C] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-[#2C2C2A] mb-1.5">
                      Phone <span className="text-[#C9A84C]">*</span>
                    </label>
                    <input
                      type="tel"
                      value={contactInfo.phone}
                      onChange={(e) =>
                        setContactInfo({ ...contactInfo, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 border border-[#D8D2C6] rounded-sm bg-white text-[#1C1C1A] text-sm focus:border-[#C9A84C] focus:outline-none focus:ring-1 focus:ring-[#C9A84C] transition-colors"
                      placeholder="(239) 000-0000"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-[#2C2C2A] mb-1.5">
                      Email <span className="text-[#C9A84C]">*</span>
                    </label>
                    <input
                      type="email"
                      value={contactInfo.email}
                      onChange={(e) =>
                        setContactInfo({ ...contactInfo, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 border border-[#D8D2C6] rounded-sm bg-white text-[#1C1C1A] text-sm focus:border-[#C9A84C] focus:outline-none focus:ring-1 focus:ring-[#C9A84C] transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-medium text-[#2C2C2A] mb-1.5">
                      Address
                    </label>
                    <input
                      type="text"
                      value={contactInfo.address}
                      onChange={(e) =>
                        setContactInfo({
                          ...contactInfo,
                          address: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 border border-[#D8D2C6] rounded-sm bg-white text-[#1C1C1A] text-sm focus:border-[#C9A84C] focus:outline-none focus:ring-1 focus:ring-[#C9A84C] transition-colors"
                      placeholder="Street address"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium text-[#2C2C2A] mb-1.5">
                      City <span className="text-[#C9A84C]">*</span>
                    </label>
                    <select
                      value={contactInfo.city}
                      onChange={(e) =>
                        setContactInfo({ ...contactInfo, city: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 border border-[#D8D2C6] rounded-sm bg-white text-[#1C1C1A] text-sm focus:border-[#C9A84C] focus:outline-none focus:ring-1 focus:ring-[#C9A84C] transition-colors"
                    >
                      <option value="">Select your city</option>
                      <option value="Cape Coral">Cape Coral</option>
                      <option value="Fort Myers">Fort Myers</option>
                      <option value="Naples">Naples</option>
                      <option value="Port Charlotte">Port Charlotte</option>
                      <option value="Punta Gorda">Punta Gorda</option>
                      <option value="Sanibel">Sanibel</option>
                      <option value="Other">Other / Surrounding Area</option>
                    </select>
                  </div>

                  {/* ZIP Code */}
                  <div>
                    <label className="block text-sm font-medium text-[#2C2C2A] mb-1.5">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      value={contactInfo.zipCode}
                      onChange={(e) =>
                        setContactInfo({
                          ...contactInfo,
                          zipCode: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 border border-[#D8D2C6] rounded-sm bg-white text-[#1C1C1A] text-sm focus:border-[#C9A84C] focus:outline-none focus:ring-1 focus:ring-[#C9A84C] transition-colors"
                      placeholder="33904"
                    />
                  </div>

                  {/* Preferred Service Date */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-[#2C2C2A] mb-1.5">
                      Preferred Service Date
                    </label>
                    <input
                      type="date"
                      value={contactInfo.preferredDate}
                      onChange={(e) =>
                        setContactInfo({
                          ...contactInfo,
                          preferredDate: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 border border-[#D8D2C6] rounded-sm bg-white text-[#1C1C1A] text-sm focus:border-[#C9A84C] focus:outline-none focus:ring-1 focus:ring-[#C9A84C] transition-colors"
                    />
                  </div>
                </div>

                {/* Project Description */}
                <div className="mt-4">
                  <label className="block text-sm font-medium text-[#2C2C2A] mb-1.5">
                    Project Description
                  </label>
                  <textarea
                    rows={3}
                    value={contactInfo.description}
                    onChange={(e) =>
                      setContactInfo({
                        ...contactInfo,
                        description: e.target.value,
                      })
                    }
                    placeholder="Tell us a bit about what you need done..."
                    className="w-full px-3.5 py-2.5 border border-[#D8D2C6] rounded-sm bg-white text-[#1C1C1A] text-sm focus:border-[#C9A84C] focus:outline-none focus:ring-1 focus:ring-[#C9A84C] transition-colors resize-none"
                  />
                </div>

                {/* Upload Photos */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-[#2C2C2A] mb-1">
                    Upload Photos — Optional
                  </label>
                  <p className="text-xs text-[#6B6B6B] mb-3">
                    Photos help us provide a more accurate estimate. Upload up to
                    5 photos of your project.
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />

                  {photoPreviews.length > 0 && (
                    <div className="flex flex-wrap gap-3 mb-3">
                      {photoPreviews.map((src, i) => (
                        <div key={i} className="relative">
                          <img
                            src={src}
                            alt={`Upload ${i + 1}`}
                            className="w-20 h-20 object-cover rounded-sm border border-[#D8D2C6]"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemovePhoto(i)}
                            className="absolute -top-2 -right-2 w-5 h-5 bg-[#1C1C1A] text-white rounded-full flex items-center justify-center hover:bg-[#333] text-xs font-bold"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {photos.length < 5 && (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex items-center gap-2 px-4 py-2.5 border border-dashed border-[#B5ADA0] text-[#555] text-sm rounded-sm hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors bg-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                      Add Photos
                    </button>
                  )}
                </div>

                {/* Error Banner */}
                {errorMsg && (
                  <div className="mt-4 flex items-start gap-2 px-4 py-3 bg-red-50 border border-red-200 rounded-sm text-sm text-red-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 mt-0.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="mt-8 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex items-center gap-2 px-5 py-3 text-[#555] text-sm font-medium hover:text-[#1C1C1A] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleGetEstimate}
                    className="flex items-center gap-2 px-6 py-3 bg-[#C9A84C] text-white rounded-sm font-medium text-sm hover:bg-[#B8943F] transition-colors"
                  >
                    Get My Estimate
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Estimate Calculation Result & Confirmation */}
            {step === 4 && (
              <div>
                {!isSubmitted ? (
                  <div className="text-center py-4">
                    {/* Icon */}
                    <div className="mx-auto w-14 h-14 bg-[#F5EFE0] rounded-full flex items-center justify-center mb-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C9A84C"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="1" x2="12" y2="23" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl text-[#1C1C1A] mb-2 font-normal">
                      Your Estimated Project Range
                    </h3>
                    <p className="text-sm text-[#6B6B6B] mb-6">
                      Based on the information you provided for{" "}
                      <span className="font-medium text-[#1C1C1A]">
                        {selectedService.toLowerCase()}
                      </span>
                      .
                    </p>

                    {/* Price Range Card */}
                    <div className="inline-block px-10 py-6 bg-gradient-to-br from-[#F5EFE0] to-[#FAF7F0] border border-[#E0D5C1] rounded-lg mb-6 shadow-sm">
                      <p className="font-serif text-4xl sm:text-5xl text-[#A38232] tracking-tight font-normal">
                        ${estimate.low}
                        <span className="text-[#A8A297] mx-2.5 font-light">–</span>
                        ${estimate.high}
                      </p>
                    </div>

                    {/* Disclaimer box */}
                    <div className="max-w-md mx-auto mb-6 text-left">
                      <div className="px-5 py-4 bg-[#F3ECE0] rounded-sm text-sm text-[#555] leading-relaxed">
                        <p className="flex items-start gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#C9A84C"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="shrink-0 mt-0.5"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="16" x2="12" y2="12" />
                            <line x1="12" y1="8" x2="12.01" y2="8" />
                          </svg>
                          <span>
                            This is an estimated range based on the information
                            provided. Final pricing may vary depending on project
                            conditions, materials, access, and the actual scope of
                            work. The minimum service charge is $65.
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                      <button
                        type="button"
                        onClick={handleFinalSubmit}
                        disabled={isSubmitting}
                        className="flex-1 px-6 py-3.5 bg-[#C9A84C] text-white rounded-sm font-medium text-sm hover:bg-[#B8943F] transition-colors disabled:opacity-50"
                      >
                        {isSubmitting ? "Submitting..." : "Request My Final Quote"}
                      </button>

                      <a
                        href="tel:2392223111"
                        className="flex items-center justify-center gap-2 px-6 py-3.5 border border-[#333] text-[#1C1C1A] rounded-sm font-medium text-sm hover:bg-[#1C1C1A] hover:text-white transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        Call (239) 222-3111
                      </a>
                    </div>

                    <div className="mt-6 flex justify-center">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="text-sm text-[#888] hover:text-[#C9A84C] transition-colors"
                      >
                        Start over
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Thank You State */
                  <div className="text-center py-6">
                    <div className="mx-auto w-16 h-16 bg-[#F5EFE0] rounded-full flex items-center justify-center mb-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C9A84C"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1C1A] mb-3 font-normal">
                      Thank You — Your Request Has Been Received
                    </h3>
                    <p className="text-[#6B6B6B] max-w-md mx-auto mb-8 text-sm sm:text-base leading-relaxed">
                      A member of Soarin Handyman Services will review your project
                      information and contact you regarding the next step.
                    </p>

                    <div className="inline-block px-8 py-4 bg-[#F5EFE0] border border-[#E0D5C1] rounded-sm mb-8">
                      <p className="text-xs uppercase tracking-wide text-[#8C857B] mb-1 font-medium">
                        Your Estimated Project Range
                      </p>
                      <p className="font-serif text-3xl text-[#A38232]">
                        ${estimate.low} – ${estimate.high}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-6 py-3 border border-[#D8D2C6] text-[#1C1C1A] hover:bg-[#F3ECE0] rounded-sm transition-colors font-medium text-sm"
                      >
                        Start New Estimate
                      </button>

                      <a
                        href="tel:2392223111"
                        className="px-6 py-3 bg-[#1C1C1A] text-white rounded-sm font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#333] transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        Call (239) 222-3111
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
