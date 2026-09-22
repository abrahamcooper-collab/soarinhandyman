import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import EstimateForm from "../../components/EstimateForm";
import { serviceAreasData, servicesData } from "../../data/servicesAndAreas";

export function generateStaticParams() {
  return serviceAreasData.map((area) => ({
    slug: area.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceAreaDetailPage({ params }: Props) {
  const { slug } = await params;
  const area = serviceAreasData.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F8F6]">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-[#1C1C1A] text-white pt-32 pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 bg-[#C9A84C]/20 border border-[#C9A84C]/40 rounded-sm mb-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] font-medium">
              SOUTHWEST FLORIDA SERVICE AREA
            </p>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal mb-6 leading-tight">
            Handyman Services in {area.name}, FL
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Professional home repairs, installations, and maintenance tailored for
            homeowners in {area.name}.
          </p>
        </div>
      </section>

      {/* Main Content & Image */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Description & Features */}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-semibold mb-3">
                LOCAL HANDYMAN CARE
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1C1A] mb-6 font-normal">
                Reliable Handyman Work for {area.name} Homes
              </h2>
              <p className="text-[#555] text-base leading-relaxed mb-8">
                {area.description}
              </p>

              <div className="mb-8">
                <h3 className="font-serif text-xl text-[#1C1C1A] mb-4 font-normal">
                  Why {area.name} Homeowners Choose Soarin:
                </h3>
                <ul className="space-y-3">
                  {area.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
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
                      <span className="text-[#555] text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#estimate-form"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C9A84C] hover:bg-[#B8943F] text-white font-medium text-sm rounded-md transition-colors"
                >
                  Get Your {area.name} Estimate
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

            {/* Right Image */}
            <div className="relative h-[360px] sm:h-[450px] w-full rounded-lg overflow-hidden shadow-md">
              <Image
                src={area.image}
                alt={`Soarin Handyman Services in ${area.name}`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-serif text-2xl mb-1">{area.name}, Florida</p>
                <p className="text-white/80 text-xs">
                  Licensed & Insured Handyman Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Services Grid for this area */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-semibold mb-3">
              AVAILABLE SERVICES IN {area.name.toUpperCase()}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1C1A] mb-4 font-normal">
              Services We Provide in {area.name}
            </h2>
            <div className="w-12 h-[1px] bg-[#C9A84C] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white p-6 rounded-lg border border-[#E5DFD5] shadow-xs hover:border-[#C9A84C] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif text-xl text-[#1C1C1A] mb-2 font-medium group-hover:text-[#C9A84C] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#C9A84C] group-hover:gap-2 transition-all">
                  View Details <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Estimate Form */}
      <EstimateForm />

      <Footer />
    </div>
  );
}
