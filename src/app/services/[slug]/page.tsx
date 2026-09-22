import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import EstimateForm from "../../components/EstimateForm";
import { servicesData } from "../../data/servicesAndAreas";

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F8F6]">
      <Navbar />

      {/* Hero Section for Service */}
      <section className="bg-[#1C1C1A] text-white pt-32 pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 bg-[#C9A84C]/20 border border-[#C9A84C]/40 rounded-sm mb-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] font-medium">
              HANDYMAN SERVICES
            </p>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal mb-6 leading-tight">
            {service.name}
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Service Overview & Photo */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative h-[360px] sm:h-[450px] w-full rounded-lg overflow-hidden shadow-md">
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Description & Key Details */}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-semibold mb-3">
                SERVICE OVERVIEW
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1C1A] mb-6 font-normal">
                Professional Care & Attention to Detail
              </h2>
              <p className="text-[#555] text-base leading-relaxed mb-8">
                {service.longDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#estimate-form"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C9A84C] hover:bg-[#B8943F] text-white font-medium text-sm rounded-md transition-colors"
                >
                  Get an Instant Estimate
                  <span>→</span>
                </Link>
                <a
                  href="tel:2392223111"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#1C1C1A] text-[#1C1C1A] hover:bg-[#1C1C1A] hover:text-white font-medium text-sm rounded-md transition-colors"
                >
                  Call (239) 222-3111
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Project Photo Gallery Section */}
      {service.gallery && service.gallery.length > 0 && (
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-[#F9F8F6] border-b border-[#E5DFD5]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-semibold mb-2">
                OUR REAL WORK
              </p>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#1C1C1A] font-normal mb-3">
                Recent {service.name} Projects ({service.gallery.length} Photos)
              </h3>
              <div className="w-12 h-[1px] bg-[#C9A84C] mx-auto" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.gallery.map((imgUrl, idx) => (
                <div
                  key={idx}
                  className="relative h-64 sm:h-72 rounded-lg overflow-hidden border border-[#E5DFD5] shadow-xs group bg-stone-200"
                >
                  <Image
                    src={imgUrl}
                    alt={`${service.name} project photo ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits & Common Problems & Included Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Key Benefits */}
          <div className="bg-white p-8 rounded-lg border border-[#E5DFD5] shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#F5EFE0] flex items-center justify-center mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-[#1C1C1A] mb-4 font-normal">
              Key Benefits
            </h3>
            <ul className="space-y-3 text-sm text-[#6B6B6B]">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#C9A84C] font-bold">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Common Issues Solved */}
          <div className="bg-white p-8 rounded-lg border border-[#E5DFD5] shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#F5EFE0] flex items-center justify-center mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-[#1C1C1A] mb-4 font-normal">
              Common Issues We Fix
            </h3>
            <ul className="space-y-3 text-sm text-[#6B6B6B]">
              {service.commonProblems.map((problem, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#C9A84C] font-bold">•</span>
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What's Included */}
          <div className="bg-white p-8 rounded-lg border border-[#E5DFD5] shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#F5EFE0] flex items-center justify-center mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-[#1C1C1A] mb-4 font-normal">
              What Is Included
            </h3>
            <ul className="space-y-3 text-sm text-[#6B6B6B]">
              {service.whatIsIncluded.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#C9A84C] font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      {service.faqs.length > 0 && (
        <section className="py-16 px-6 md:px-12 lg:px-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-[#1C1C1A] mb-8 text-center font-normal">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="p-6 bg-[#FAF7F0] border border-[#E5DFD5] rounded-sm"
                >
                  <h4 className="font-serif text-lg text-[#1C1C1A] mb-2 font-normal">
                    {faq.question}
                  </h4>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Embedded Estimate Form */}
      <EstimateForm />

      <Footer />
    </div>
  );
}
