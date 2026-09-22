import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { serviceAreasData } from "../data/servicesAndAreas";

export default function ServiceAreasPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F9F8F6]">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-[#1C1C1A] text-white pt-32 pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-semibold mb-3">
            SERVICE AREAS
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal mb-6 leading-tight">
            Proudly Serving Southwest Florida
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Providing professional handyman services throughout Cape Coral, Fort
            Myers, Naples, Port Charlotte, Punta Gorda, Sanibel, and surrounding
            communities.
          </p>
        </div>
      </section>

      {/* Service Areas Grid Section */}
      <section className="py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreasData.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group bg-white rounded-xl overflow-hidden border border-[#E5DFD5] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={area.image}
                    alt={`Handyman services in ${area.name}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5">
                    <h3 className="font-serif text-white text-2xl font-normal">
                      {area.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6">
                    {area.description}
                  </p>

                  <div className="inline-flex items-center gap-1.5 text-[#C9A84C] text-sm font-semibold group-hover:gap-2.5 transition-all">
                    View {area.name} Handyman Services
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
