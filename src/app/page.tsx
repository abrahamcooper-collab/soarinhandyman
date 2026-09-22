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
    image: "/images/ceiling-fans/ceiling-fan-installation.png",
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
    image: "/images/drywall-repairs/drywall-repair-process.png",
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
    title: "Caulking",
    description:
      "Refresh worn or damaged caulking around bathrooms, kitchens, windows, and other surfaces.",
    image: "/images/caulking/bathroom-caulking.png",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    slug: "caulking",
  },
  {
    title: "Faucet Replacement",
    description:
      "Upgrade or replace kitchen and bathroom faucets with professional, leak-free installation.",
    image: "/images/faucet-replacement/kitchen-faucet-install.png",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v6" />
        <path d="M6 8h12" />
        <path d="M6 8v2a6 6 0 0 0 12 0V8" />
        <path d="M12 16v6" />
        <path d="M8 22h8" />
      </svg>
    ),
    slug: "faucet-replacement",
  },
  {
    title: "Interior & Exterior Painting",
    description:
      "Fresh coats of paint for interior walls, trim, and exterior surfaces with clean, professional results.",
    image: "/images/painting/interior-painting.png",
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
    title: "Bathroom Grab Bars",
    description:
      "Secure installation of safety grab bars for bathrooms, providing added support and accessibility.",
    image: "/images/bathroom-grab-bars/grab-bar-installed.png",
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
    slug: "bathroom-grab-bars",
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
            <div className="max-w-xl">
              {/* Subtitle */}
              <p className="text-[#C9A84C] text-xs font-medium tracking-[0.2em] uppercase mb-6">
                Southwest Florida Handyman Services
              </p>

              {/* Heading */}
              <h1 className="font-serif text-white text-5xl md:text-6xl lg:text-[64px] leading-[1.1] font-normal mb-6">
                Exceptional Handyman
                <br />
                Work.{" "}
                <span className="text-[#C9A84C] italic">Done Right.</span>
              </h1>

              {/* Description */}
              <p className="text-white/80 text-base leading-relaxed max-w-md mb-10">
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
                  src="https://images.pexels.com/photos/5691550/pexels-photo-5691550.jpeg?auto=compress&cs=tinysrgb&w=1000"
                  alt="Handyman carefully working in a home"
                  fill
                  className="object-cover"
                  unoptimized
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
              TESTIMONIALS
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#1C1C1A] mb-4 font-normal">
              Trusted by Homeowners
            </h2>
            <div className="w-12 h-[1px] bg-[#C9A84C] mx-auto" />
          </div>

          {/* Placeholder Review Box */}
          <div className="text-center max-w-md mx-auto py-10">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-[#F3ECE0] rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6B6B6B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <p className="text-[#6B6B6B] text-sm leading-relaxed">
              Customer reviews will appear here once available. If you have
              worked with Soarin Handyman Services, we would love to hear about
              your experience.
            </p>
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








