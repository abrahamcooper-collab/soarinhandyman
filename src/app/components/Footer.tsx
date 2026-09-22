import Link from "next/link";

const googleMapsUrl =
  "https://www.google.com/maps/place/Soarin+Handyman+Services,+Llc/@26.5874184,-81.9571966,17z/data=!3m1!4b1!4m6!3m5!1s0x88db474b895eaaab:0x2b90686f1d88a466!8m2!3d26.5874184!4d-81.9571966!16s%2Fg%2F11h7v7p787?hl=en&entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D";

const services = [
  { name: "Ceiling Fan Installation & Replacement", slug: "ceiling-fans" },
  { name: "Drywall Repair", slug: "drywall-repair" },
  { name: "Caulking", slug: "caulking" },
  { name: "Faucet Replacement", slug: "faucet-replacement" },
  { name: "Interior & Exterior Painting", slug: "painting" },
  { name: "Bathroom Grab Bars", slug: "bathroom-grab-bars" },
];

const serviceAreas = [
  { name: "Cape Coral", slug: "cape-coral" },
  { name: "Fort Myers", slug: "fort-myers" },
  { name: "Naples", slug: "naples" },
  { name: "Port Charlotte", slug: "port-charlotte" },
  { name: "Punta Gorda", slug: "punta-gorda" },
  { name: "Sanibel", slug: "sanibel" },
];

export default function Footer() {
  return (
    <footer className="bg-[#181816] text-white pt-16 pb-12 px-6 md:px-12 lg:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand Info */}
          <div>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block mb-4"
            >
              <span className="font-serif text-2xl text-white group-hover:text-[#C9A84C] transition-colors">
                Soarin{" "}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
                HANDYMAN SERVICES, LLC
              </span>
            </a>
            <p className="text-stone-400 text-sm leading-relaxed">
              Professional home repairs, installations, and improvements throughout
              Southwest Florida.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A84C] mb-4">
              SERVICES
            </h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="text-sm text-stone-400 hover:text-[#C9A84C] transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A84C] mb-4">
              SERVICE AREAS
            </h4>
            <ul className="space-y-2.5">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="text-sm text-stone-400 hover:text-[#C9A84C] transition-colors duration-200"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A84C] mb-4">
              CONTACT
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:2392223111"
                  className="flex items-center gap-2.5 text-sm text-stone-400 hover:text-[#C9A84C] transition-colors"
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
                  (239) 222-3111
                </a>
              </li>
              <li>
                <a
                  href="mailto:rdhoneycutt2@gmail.com"
                  className="flex items-center gap-2.5 text-sm text-stone-400 hover:text-[#C9A84C] transition-colors break-all"
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
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  rdhoneycutt2@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-stone-400">
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
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Southwest Florida
              </li>
            </ul>

            <div className="mt-5">
              <Link
                href="#estimate-form"
                className="inline-flex items-center gap-2 text-sm text-[#C9A84C] hover:text-[#B8943F] font-semibold transition-colors"
              >
                Get a Free Estimate
                <span className="text-base">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-stone-400 gap-4">
          <p>© {new Date().getFullYear()} Soarin Handyman Services, LLC. All rights reserved.</p>
          <p>Licensed & insured handyman services for Southwest Florida.</p>
        </div>
      </div>
    </footer>
  );
}
