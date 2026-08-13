"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = site.contact.phone.replace(/\D/g, "");

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          "Hi FatFox team! I'd like to book a free demo."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group flex h-13 items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-xl shadow-green-600/30 transition hover:-translate-y-0.5 hover:shadow-2xl"
      >
        <span className="relative flex h-7 w-7 items-center justify-center" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white">
            <path d="M12 2A10 10 0 0 0 3.2 17.4L2 22l4.8-1.2A10 10 0 1 0 12 2zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-2.9-1.3-4.8-4.2-5-4.4-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4-.1.7.5.2.7.8 2 .9 2.1.1.2.1.4 0 .6-.1.2-.2.4-.4.6l-.6.7c-.2.2-.4.4-.2.8.2.4 1 1.7 2.2 2.7 1.5 1.3 2.8 1.7 3.2 1.9.4.2.6.1.8-.1.2-.2.9-1 1.1-1.4.2-.4.4-.3.7-.2.3.1 1.8.9 2.1 1 .3.2.5.2.6.4.1.1.1.7-.1 1.3z" />
          </svg>
          <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#25D366]">
            <span className="absolute inset-0 animate-ping rounded-full bg-white/70" />
          </span>
        </span>
        <span className="text-sm font-bold">Chat with us</span>
      </a>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-ink shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600",
          showTop ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M8 13 V3 M4 7 L8 3 L12 7" />
        </svg>
      </button>
    </div>
  );
}
