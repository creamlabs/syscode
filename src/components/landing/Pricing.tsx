import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";

const benefits = [
  "Full component library",
  "Unlimited local drafts",
  "Undo and redo history",
  "JSON export",
];

const Pricing = () => {
  return (
    <section className="px-5 pb-24 sm:px-8 sm:pb-32">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-sky-400/15 bg-[linear-gradient(120deg,rgba(56,189,248,0.09),rgba(139,92,246,0.06)_50%,rgba(255,255,255,0.02))] p-7 sm:p-12 lg:p-16">
        <div className="absolute -right-24 -top-24 size-72 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
              Open workspace
            </span>
            <h2 className="text-balance mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Start with an idea. Leave with a system.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              The canvas is free to use and requires no account. Your work stays
              private in your browser.
            </p>
            <ul className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2">
                  <Check className="size-4 text-emerald-400" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/home"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-100"
          >
            Build a system
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
