"use client";

import { useState } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqList: FaqItem[] = [
  {
    question: "What types of handyman services do you provide?",
    answer:
      "Soarin Handyman Services provides a range of professional home repairs and improvements, including ceiling fan installation, drywall repair, caulking, faucet replacement, interior & exterior painting, bathroom grab bars, and other general handyman projects. Contact us to discuss your specific needs.",
  },
  {
    question: "How do I request an estimate?",
    answer:
      "You can request a free estimate through our online estimate calculator, by calling us directly, or by filling out our contact form. The online calculator provides an instant estimated range based on the information you provide.",
  },
  {
    question: "Can I send photos of my project?",
    answer:
      "Yes — photos are extremely helpful for providing an accurate estimate. You can upload photos through our online estimate form or email them directly. The more we can see of the project, the more accurate your estimate will be.",
  },
  {
    question: "Do you provide estimates before starting work?",
    answer:
      "Yes. We provide an estimated range through our online calculator and review the project before confirming final pricing. This helps ensure there are no surprises before work begins.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve Cape Coral, Fort Myers, Naples, Port Charlotte, Punta Gorda, and Sanibel, as well as surrounding communities throughout Southwest Florida.",
  },
  {
    question: "Can you handle multiple repairs during one visit?",
    answer:
      "In many cases, yes. Combining multiple repairs into a single visit can be more efficient for both you and us. Mention all the items you need addressed when requesting your estimate.",
  },
  {
    question: "How far in advance should I schedule?",
    answer:
      "We recommend reaching out as soon as you know you need work done. Scheduling depends on current demand and project scope, so the earlier you contact us, the more flexibility we will have.",
  },
  {
    question: "Do you provide the materials?",
    answer:
      "This depends on the project. For some items, we can source and provide materials. For others, you may prefer to purchase the specific product you want. We will discuss materials during the estimate process.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white px-6 md:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-semibold mb-3">
            FAQ
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#1C1C1A] mb-4 font-normal">
            Questions & Answers
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A84C] mx-auto" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqList.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-sm transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border border-[#C9A84C] bg-[#FAF7F0] shadow-sm"
                    : "border border-[#E5DFD5] bg-white hover:border-[#C9A84C]/50"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors"
                >
                  <span className="font-serif text-lg md:text-xl text-[#1C1C1A] font-normal leading-snug pr-4">
                    {item.question}
                  </span>
                  <span
                    className={`text-2xl font-light shrink-0 transition-transform ${
                      isOpen ? "text-[#C9A84C]" : "text-[#8C857B]"
                    }`}
                  >
                    {isOpen ? "—" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#555] leading-relaxed">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
