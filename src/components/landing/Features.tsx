import {
  Blocks,
  BrainCircuit,
  GitBranch,
  MousePointer2,
  Save,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Blocks,
    title: "Architecture components",
    copy: "Start with familiar building blocks—from clients and gateways to queues, caches, and databases.",
  },
  {
    icon: GitBranch,
    title: "Flows you can follow",
    copy: "Connect services and make the path of every request visible at a glance.",
  },
  {
    icon: MousePointer2,
    title: "A canvas that stays fluid",
    copy: "Move, connect, zoom, and reorganize ideas without fighting rigid diagram tools.",
  },
  {
    icon: Save,
    title: "Automatic local saves",
    copy: "Your latest design stays in this browser, so you can leave and pick up where you stopped.",
  },
  {
    icon: BrainCircuit,
    title: "Built for learning",
    copy: "A focused workspace encourages you to reason about boundaries, bottlenecks, and trade-offs.",
  },
  {
    icon: Sparkles,
    title: "Useful from the first click",
    copy: "Open the starter architecture, remix it, or clear the canvas and begin from scratch.",
  },
];

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="border-y border-white/[0.07] bg-white/[0.018] px-5 py-24 sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
              Designed for clarity
            </span>
            <h2 className="text-balance mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Everything you need to think in systems.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              Keep the mechanics simple so your attention stays on the
              architecture.
            </p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, copy }) => (
              <article
                key={title}
                className="group bg-[#0a0e14] p-7 transition-colors hover:bg-[#0d131c] sm:p-8"
              >
                <div className="mb-6 grid size-10 place-items-center rounded-xl border border-sky-400/15 bg-sky-400/[0.07] text-sky-300 transition group-hover:border-sky-400/30 group-hover:bg-sky-400/10">
                  <Icon className="size-5" strokeWidth={1.8} />
                </div>
                <h3 className="font-semibold text-slate-100">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                A shorter feedback loop
              </span>
              <h2 className="text-balance mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                From blank canvas to clear architecture.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-8 text-slate-400">
                Build an idea in minutes, then refine it as your understanding
                grows.
              </p>
            </div>
            <ol className="space-y-4">
              {[
                [
                  "01",
                  "Choose the building blocks",
                  "Pick components from the library or use the starter system as a practical jumping-off point.",
                ],
                [
                  "02",
                  "Connect the request flow",
                  "Draw the relationships between services and rearrange the canvas until the design reads naturally.",
                ],
                [
                  "03",
                  "Iterate without fear",
                  "Undo changes, reset the example, or return later—your browser keeps your latest draft close.",
                ],
              ].map(([number, title, copy]) => (
                <li
                  key={number}
                  className="grid gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 sm:grid-cols-[70px_1fr] sm:p-8"
                >
                  <span className="font-mono text-sm text-sky-300/70">
                    {number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                      {copy}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
