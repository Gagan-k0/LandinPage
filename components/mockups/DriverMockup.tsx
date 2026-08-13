import { cn } from "@/lib/utils";

export default function DriverMockup({ className }: { className?: string }) {
  return (
    <div className={cn("w-full overflow-hidden rounded-2xl border border-white/10 bg-ink shadow-2xl shadow-brand-900/20", className)} role="img" aria-label="FatFox delivery partner app preview">
      <div className="flex items-center justify-between bg-white/5 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-[10px] font-black text-white" aria-hidden="true">
            R
          </span>
          <div>
            <div className="text-[10px] font-semibold text-white">Rahul Kumar</div>
            <div className="flex items-center gap-1 text-[8px] text-green-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" aria-hidden="true" />
              Available
            </div>
          </div>
        </div>
        <span className="rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-bold text-white">₹1,840</span>
      </div>

      <div className="space-y-3 p-4">
        <div className="relative h-24 overflow-hidden rounded-xl bg-[#1e2a4a]">
          <div className="absolute inset-0 opacity-60" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, rgba(255,255,255,.25) 1px, transparent 1px), radial-gradient(circle at 60% 60%, rgba(255,255,255,.18) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
          <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-500/50" aria-hidden="true" />
          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500" aria-hidden="true" />
          <span className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2 py-0.5 text-[8px] font-bold text-ink">12 min away</span>
          <span className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[8px] font-bold text-ink">₹55 fare</span>
        </div>

        <div className="rounded-xl border border-white/10 p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-semibold text-white">Order #1043</span>
            <span className="rounded-full bg-brand-500/20 px-2 py-0.5 text-[8px] font-bold text-brand-400">NEW</span>
          </div>
          <div className="text-[9px] text-white/60">Pickup · Krishna Vilas, Indiranagar</div>
          <div className="mt-1 text-[9px] text-white/60">Drop · 4th Main Road, Koramangala</div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <span className="rounded-lg bg-white/5 py-1.5 text-center text-[9px] font-semibold text-white/70">Decline</span>
            <span className="rounded-lg bg-brand-500 py-1.5 text-center text-[9px] font-bold text-white">Accept</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">
          {[
            { v: "38", l: "Deliveries", t: "text-white" },
            { v: "4.9★", l: "Rating", t: "text-green-400" },
            { v: "₹8,540", l: "This week", t: "text-brand-400" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl border border-white/10 py-2.5">
              <div className={cn("font-display text-sm font-bold", s.t)}>{s.v}</div>
              <div className="text-[8px] text-white/50">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}