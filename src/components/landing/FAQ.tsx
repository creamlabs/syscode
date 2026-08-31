"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Do I need an account to use the canvas?",
    answer:
      "No. The current workspace works without sign-up, and saves your latest diagram locally in this browser.",
  },
  {
    question: "How do I add and connect components?",
    answer:
      "Click a component in the library or drag it onto the canvas. Then drag from a node's connection handle to another node to create a relationship.",
  },
  {
    question: "Where is my diagram stored?",
    answer:
      "Your nodes and connections are stored in your browser's local storage. They are not uploaded or shared with anyone.",
  },
  {
    question: "Can I take my design with me?",
    answer:
      "Yes. Use Export in the workspace to download a JSON copy of the current diagram that you can keep or inspect later.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="border-t border-white/[0.07] bg-white/[0.018] px-5 py-24 sm:px-8 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
            Questions, answered
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Good to know before you start.
          </h2>
        </div>
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="font-medium text-slate-200">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`size-4 shrink-0 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <p className="max-w-2xl pb-6 pr-10 text-sm leading-6 text-slate-500">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
