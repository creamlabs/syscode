import { Boxes } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.07] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="SysCode home"
        >
          <span className="grid size-7 place-items-center rounded-lg bg-sky-400 text-slate-950">
            <Boxes className="size-3.5" />
          </span>
          <span className="font-semibold text-white">SysCode</span>
        </Link>
        <p className="text-sm text-slate-600">
          Learn system design by building it.
        </p>
        <div className="flex items-center gap-5 text-sm text-slate-500">
          <a href="#features" className="transition hover:text-slate-200">
            Features
          </a>
          <a href="#faq" className="transition hover:text-slate-200">
            FAQ
          </a>
          <Link href="/home" className="transition hover:text-slate-200">
            Canvas
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
