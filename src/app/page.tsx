import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import EstimateForm from "./components/EstimateForm";
import PortfolioSection from "./components/PortfolioSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";




const services = [
  {
    title: "Ceiling Fan Installation & Replacement",
    description:
      "Professional installation and replacement of ceiling fans for improved comfort and style.",
    image: "/images/ceiling-fans/TN.jfif",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M12 7V3" />
        <path d="M17 12h4" />
        <path d="M12 17v4" />
        <path d="M7 12H3" />
        <path d="M15.536 8.464l2.828 -2.828" />
        <path d="M8.464 15.536l-2.828 2.828" />
        <path d="M15.536 15.536l2.828 2.828" />
        <path d="M8.464 8.464L5.636 5.636" />
      </svg>
    ),
    slug: "ceiling-fans",
  },
  {
    title: "Drywall Repair",
    description:
      "Repair holes, cracks, dents, and damaged drywall with a clean, finished appearance.",
    image: "/images/drywall-repairs/TN.jfif",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
        <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
        <path d="M14.5 17.5 4.5 15" />
      </svg>
    ),
    slug: "drywall-repair",
  },
  {
    title: "Hurricane Shutter Repair",
    description:
      "Professional hurricane shutter repair, track alignment, panel replacement, and storm readiness.",
    image: "/images/hurricane Shutter Repair/TN.jfif",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    slug: "hurricane-shutter-repair",
  },
  {
    title: "Outdoor Miscellaneous Work",
    description:
      "Fence repairs, deck maintenance, outdoor fixture mounting, and exterior handyman solutions.",
    image: "/images/Outdoor Miscellaneous work/TN.jfif",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    slug: "outdoor-miscellaneous-work",
  },
  {
    title: "Interior & Exterior Painting",
    description:
      "Fresh coats of paint for interior walls, trim, and exterior surfaces with clean, professional results.",
    image: "/images/painting/TN.jfif",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="10" rx="2" />
        <path d="M2 7h20" />
        <path d="M12 12v5" />
        <path d="M10 17h4" />
        <path d="M10 17v4h4v-4" />
      </svg>
    ),
    slug: "painting",
  },
  {
    title: "Bathroom Services",
    description:
      "Vanity replacements, shower door installations, grab bar mounting, and complete bathroom upgrades.",
    image: "/images/Bathroom/TN.jfif",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22V4c0-1 1-2 2-2h12c1 0 2 1 2 2v18" />
        <path d="M14 6h2" />
        <path d="M8 6h2" />
        <path d="M14 10h2" />
        <path d="M8 10h2" />
        <path d="M8 14h8" />
        <path d="M8 18h8" />
      </svg>
    ),
    slug: "bathroom",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Handyman working on ceiling light fixture"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* Spacer for fixed navbar */}
        <div className="h-20" />

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex items-center px-6 md:px-12 lg:px-16 pb-20">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-3xl">
              {/* Business Name (Enlarged Heading) */}
              <h1 className="mb-4">
                <a
                  href="https://www.google.com/maps/place/Soarin+Handyman+Services,+Llc/@26.5874184,-81.9571966,17z/data=!3m1!4b1!4m6!3m5!1s0x88db474b895eaaab:0x2b90686f1d88a466!8m2!3d26.5874184!4d-81.9571966!16s%2Fg%2F11h7v7p787?hl=en&entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-white hover:text-[#E6D4A6] text-4xl sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.1] font-normal tracking-tight transition-colors block"
                >
                  <span className="text-[#C9A84C]">Soarin Handyman Services, LLC</span>
                </a>
              </h1>

              {/* Tagline (Decreased Size) */}
              <p className="font-serif text-xl sm:text-2xl md:text-3xl text-stone-200 font-light leading-snug mb-6">
                Exceptional Handyman Work.{" "}
                <span className="text-[#C9A84C] italic font-normal">Done Right.</span>
              </p>

              {/* Description */}
              <p className="text-white/80 text-base leading-relaxed max-w-lg mb-10">
                Professional home repairs, installations, and improvements
                throughout Southwest Florida — with careful workmanship, clear
                communication, and attention to detail.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#estimate-form"
                  className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#1C1C1A] text-sm font-semibold px-7 py-3.5 rounded-md hover:bg-[#B8943F] transition-colors duration-200"
                >
                  Get Your Free Estimate
                  <span className="text-base">→</span>
                </Link>
                <Link
                  href="tel:2392223111"
                  className="inline-flex items-center gap-2.5 border border-white/40 text-white text-sm font-medium px-7 py-3.5 rounded-md hover:bg-white/10 transition-colors duration-200"
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
                    className="shrink-0"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Call (239) 222-3111
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas Strip */}
        <div className="relative z-10 w-full py-4 px-6 md:px-12 lg:px-16 mt-auto">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#C9A84C]/80 text-xs tracking-[0.15em]">
              Serving Cape Coral • Fort Myers • Naples • Port Charlotte • Punta
              Gorda • Sanibel
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Quality Workmanship */}
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-[#F5F0E8] flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3 className="font-serif text-[#1C1C1A] text-lg font-medium mb-2">
                Quality Workmanship
              </h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                Careful work with attention to the details that matter.
              </p>
            </div>

            {/* Professional Service */}
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-[#F5F0E8] flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-[#1C1C1A] text-lg font-medium mb-2">
                Professional Service
              </h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                Clear communication from the first conversation to project
                completion.
              </p>
            </div>

            {/* Reliable Scheduling */}
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-[#F5F0E8] flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="font-serif text-[#1C1C1A] text-lg font-medium mb-2">
                Reliable Scheduling
              </h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                Respect for your time, your home, and your project.
              </p>
            </div>

            {/* Serving Southwest Florida */}
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-[#F5F0E8] flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="font-serif text-[#1C1C1A] text-lg font-medium mb-2">
                Serving Southwest Florida
              </h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                Professional handyman services across the area&apos;s
                communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-[#F9F8F6] py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <p className="text-[#C9A84C] text-xs font-medium tracking-[0.25em] uppercase mb-4">
              Our Services
            </p>
            <h2 className="font-serif text-[#1C1C1A] text-4xl md:text-5xl font-normal mb-5">
              The Details Matter.
            </h2>
            <p className="text-[#6B6B6B] text-base leading-relaxed max-w-2xl mx-auto">
              From small repairs to larger home improvement projects, Soarin
              Handyman Services helps homeowners keep their properties looking,
              functioning, and feeling their best.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.slug}
                className="bg-white rounded-xl overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Icon Badge */}
                  <div className="absolute bottom-4 left-4 w-10 h-10 bg-[#C9A84C] rounded-lg flex items-center justify-center shadow-md">
                    <div className="text-white [&>svg]:stroke-white">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-[#1C1C1A] text-xl font-medium mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-[#C9A84C] text-sm font-semibold hover:text-[#B8943F] transition-colors duration-200"
                  >
                    Learn More
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instant Estimate Form Section */}
      <EstimateForm />

      {/* Why Soarin Section */}
      <section id="about" className="bg-[#1C1C1A] py-20 lg:py-28 text-white px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Image & Gold Overlay Badge */}
            <div className="relative">
              <div className="relative h-[400px] sm:h-[480px] lg:h-[500px] w-full overflow-hidden rounded-sm">
                <Image
                  src="/images/general/soarin-owner-handyman.jpg"
                  alt="Soarin Handyman Services owner ready for home repair projects"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Gold Badge Card */}
              <div className="absolute -bottom-6 -right-6 hidden lg:block bg-[#C9A84C] text-white p-6 rounded-sm shadow-xl max-w-[240px]">
                <p className="font-serif text-2xl mb-1 font-normal">
                  Your Home
                </p>
                <p className="text-sm text-white/90 leading-relaxed">
                  deserves more than a quick fix.
                </p>
              </div>
            </div>

            {/* Right Text Content */}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-semibold mb-3">
                WHY SOARIN
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl text-white mb-6 font-normal leading-tight">
                More Than a Repair. It’s Your Home.
              </h2>
              <p className="text-[#D1D1D1] text-base leading-relaxed mb-8">
                Your home deserves more than a quick fix. Soarin Handyman
                Services approaches every project with the same goal: understand
                what needs to be done, communicate clearly, and leave the work
                looking clean and finished.
              </p>

              {/* Feature List */}
              <ul className="space-y-4">
                {[
                  "Attention to detail on every project, large or small",
                  "Professional communication from start to finish",
                  "Respect for your property — we leave it clean",
                  "Clean workmanship that looks finished, not patched",
                  "Straightforward service with no surprises",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C9A84C"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-[#D1D1D1] text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Link */}
              <div className="mt-8">
                <Link
                  href="#about"
                  className="inline-flex items-center gap-2 text-[#C9A84C] hover:text-[#B8943F] text-sm font-semibold transition-colors"
                >
                  Learn More About Us
                  <span className="text-base">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* How It Works Section */}
      <section className="py-20 lg:py-28 bg-white px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-semibold mb-3">
              HOW IT WORKS
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#1C1C1A] mb-4 font-normal">
              Simple, Straightforward Process
            </h2>
            <div className="w-12 h-[1px] bg-[#C9A84C] mx-auto" />
          </div>

          {/* 3 Step Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                number: "01",
                title: "Tell Us What You Need",
                text: "Contact us or request an estimate online. Share the details of your project.",
              },
              {
                number: "02",
                title: "We Review the Project",
                text: "We learn about the work and determine the right approach for your home.",
              },
              {
                number: "03",
                title: "Get It Done Right",
                text: "Once approved, we complete the work with care and attention to detail.",
              },
            ].map((step, index) => (
              <div key={index} className="text-left">
                <p className="font-serif text-6xl lg:text-7xl text-[#E6D4A6] mb-4 font-normal leading-none">
                  {step.number}
                </p>
                <h3 className="font-serif text-2xl text-[#1C1C1A] mb-2 font-normal">
                  {step.title}
                </h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed max-w-xs">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Button */}
          <div className="text-center mt-12 md:mt-16">
            <Link
              href="#estimate-form"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C9A84C] hover:bg-[#B8943F] text-white font-medium text-sm rounded-md transition-colors duration-200 shadow-sm"
            >
              Start Your Project
              <span className="text-base">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="service-areas" className="py-20 lg:py-28 bg-[#FAF7F0] px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-semibold mb-3">
                SERVICE AREAS
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl text-[#1C1C1A] mb-4 font-normal leading-tight">
                Proudly Serving Southwest Florida
              </h2>
              <p className="text-[#6B6B6B] text-base leading-relaxed mb-8">
                Providing professional handyman services throughout Southwest
                Florida and surrounding communities.
              </p>

              {/* 2-Column City Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { name: "Cape Coral", slug: "cape-coral" },
                  { name: "Fort Myers", slug: "fort-myers" },
                  { name: "Naples", slug: "naples" },
                  { name: "Port Charlotte", slug: "port-charlotte" },
                  { name: "Punta Gorda", slug: "punta-gorda" },
                  { name: "Sanibel", slug: "sanibel" },
                ].map((area) => (
                  <Link
                    key={area.slug}
                    href={`/service-areas/${area.slug}`}
                    className="group flex items-center justify-between px-4 py-3.5 bg-white border border-[#E5DFD5] rounded-sm hover:border-[#C9A84C] hover:shadow-xs transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C9A84C"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span className="text-sm font-medium text-[#1C1C1A] group-hover:text-[#C9A84C] transition-colors">
                        {area.name}
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#A8A297] group-hover:text-[#C9A84C] transition-colors shrink-0"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Image Card */}
            <div className="relative h-[380px] sm:h-[420px] lg:h-[450px] w-full rounded-sm overflow-hidden shadow-md">
              <Image
                src="https://images.pexels.com/photos/19219055/pexels-photo-19219055.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Beautiful Southwest Florida home"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/80 via-[#1C1C1A]/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-serif text-2xl font-normal mb-1">
                  Southwest Florida
                </p>
                <p className="text-white/80 text-xs sm:text-sm">
                  Cape Coral • Fort Myers • Naples • Port Charlotte • Punta Gorda • Sanibel
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 lg:py-28 bg-[#FAF7F0] px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-semibold mb-3">
              GOOGLE REVIEWS & TESTIMONIALS
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#1C1C1A] mb-4 font-normal">
              Trusted by Southwest Florida Homeowners
            </h2>
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="flex text-[#C9A84C]">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#C9A84C"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-[#1C1C1A]">5.0 Star Rated on Google</span>
            </div>
            <div className="w-12 h-[1px] bg-[#C9A84C] mx-auto" />
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-lg border border-[#E5DFD5] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#C9A84C]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#C9A84C" stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#1877F2] bg-blue-50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                    </svg>
                    Google Review
                  </span>
                </div>
                <p className="text-[#4A4A4A] text-sm leading-relaxed mb-6 italic">
                  &ldquo;Robert did an outstanding job on our ceiling fan installation and drywall patch repair. Arrived right on time, explained everything clearly, and left the room spotless. Highly recommend Soarin Handyman Services!&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-[#E5DFD5]/60 flex items-center justify-between">
                <div>
                  <p className="font-serif text-[#1C1C1A] text-base font-normal">Michael S.</p>
                  <p className="text-xs text-[#8C857B]">Cape Coral, FL</p>
                </div>
                <span className="text-xs text-[#C9A84C] font-semibold">Verified Client</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg border border-[#E5DFD5] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#C9A84C]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#C9A84C" stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#1877F2] bg-blue-50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                    </svg>
                    Google Review
                  </span>
                </div>
                <p className="text-[#4A4A4A] text-sm leading-relaxed mb-6 italic">
                  &ldquo;Extremely meticulous work! Installed bathroom grab bars through marble tile seamlessly and fixed our storm shutters before hurricane season. Honest pricing and fantastic communication.&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-[#E5DFD5]/60 flex items-center justify-between">
                <div>
                  <p className="font-serif text-[#1C1C1A] text-base font-normal">Deborah K.</p>
                  <p className="text-xs text-[#8C857B]">Fort Myers, FL</p>
                </div>
                <span className="text-xs text-[#C9A84C] font-semibold">Verified Client</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-lg border border-[#E5DFD5] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#C9A84C]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#C9A84C" stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#1877F2] bg-blue-50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                    </svg>
                    Google Review
                  </span>
                </div>
                <p className="text-[#4A4A4A] text-sm leading-relaxed mb-6 italic">
                  &ldquo;Soarin Handyman replaced our bathroom vanity and painted our exterior entryway. Professional from start to finish. It&apos;s rare to find craftsmen this reliable in SWFL!&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-[#E5DFD5]/60 flex items-center justify-between">
                <div>
                  <p className="font-serif text-[#1C1C1A] text-base font-normal">James &amp; Sarah L.</p>
                  <p className="text-xs text-[#8C857B]">Naples, FL</p>
                </div>
                <span className="text-xs text-[#C9A84C] font-semibold">Verified Client</span>
              </div>
            </div>
          </div>

          {/* Link to Google Business Listing */}
          <div className="text-center mt-10">
            <a
              href="https://www.google.com/maps/place/Soarin+Handyman+Services,+Llc/@26.5874184,-81.9571966,17z/data=!3m1!4b1!4m6!3m5!1s0x88db474b895eaaab:0x2b90686f1d88a466!8m2!3d26.5874184!4d-81.9571966!16s%2Fg%2F11h7v7p787?hl=en&entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C9A84C] hover:text-[#B8943F] text-sm font-semibold transition-colors group"
            >
              <span>View All Customer Reviews on Google Maps</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

      {/* CTA Banner Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/36777507/pexels-photo-36777507.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Beautiful modern home interior"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        {/* Banner Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center text-white">
          <h2 className="font-serif text-4xl lg:text-6xl mb-5 font-normal leading-tight text-balance">
            Let’s Get Your Project Taken Care Of.
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
            Tell us what you need and we’ll help you determine the next step.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center">
            <Link
              href="#estimate-form"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#C9A84C] hover:bg-[#B8943F] text-white font-semibold rounded-md transition-all duration-300 shadow-md hover:shadow-lg text-sm"
            >
              Get My Free Estimate
              <span className="text-base">→</span>
            </Link>
            <a
              href="tel:2392223111"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 border border-white/40 text-white font-medium rounded-md hover:bg-white/10 transition-all text-sm"
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
                className="shrink-0"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call (239) 222-3111
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}








