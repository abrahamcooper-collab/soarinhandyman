import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { servicesData } from "../data/servicesAndAreas";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F9F8F6]">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-[#1C1C1A] text-white pt-32 pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-semibold mb-3">
            OUR SERVICES
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal mb-6 leading-tight">
            The Details Matter.
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From small repairs to larger home improvement projects, Soarin Handyman
            Services helps homeowners keep their properties looking, functioning,
            and feeling their best.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-xl overflow-hidden border border-[#E5DFD5] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-[#1C1C1A] text-xl font-medium mb-3 group-hover:text-[#C9A84C] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-[#C9A84C] text-sm font-semibold group-hover:gap-2.5 transition-all">
                    Learn More
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
