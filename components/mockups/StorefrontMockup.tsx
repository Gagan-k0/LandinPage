import { cn } from "@/lib/utils";

export default function StorefrontMockup({ className }: { className?: string }) {
  return (
    <div className={cn("w-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl shadow-brand-900/15", className)} role="img" aria-label="FatFox branded food ordering website preview">
      <div className="bg-ink px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-brand-500 text-[9px] font-black text-white" aria-hidden="true">
              F
            </span>
            <span className="text-[10px] font-bold text-white">Krishna Vilas</span>
          </div>
          <div className="flex items-center gap-3 text-[9px] font-medium text-white/60" aria-hidden="true">
            <span>Home</span>
            <span>Menu</span>
            <span>Offers</span>
            <span className="flex items-center gap-1 rounded-full bg-brand-500 px-2.5 py-1 font-semibold text-white">
              Cart · 2
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-3 p-4">
        <div className="rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 p-4 text-white">
          <div className="font-display text-sm font-bold">Free delivery on orders above ₹299</div>
          <div className="text-[10px] text-white/80">Order now · delivered in 30 minutes</div>
        </div>

        <div className="flex gap-2" aria-hidden="true">
          <span className="flex-1 rounded-full border border-black/10 px-3 py-1.5 text-[9px] text-black/50">Search dishes…</span>
          <span className="rounded-full bg-ink px-3 py-1.5 text-[9px] font-semibold text-white">Order now</span>
        </div>

        <div>
          <div className="mb-2 text-[10px] font-bold text-ink">Popular right now</div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { name: "Butter Chicken", price: "₹289", tone: "bg-brand-500/15 text-brand-700" },
              { name: "Cheese Pizza", price: "₹249", tone: "bg-green-400/15 text-green-700" },
              { name: "Veg Biryani", price: "₹199", tone: "bg-yellow-400/20 text-yellow-700" },
            ].map((d) => (
              <div key={d.name} className="overflow-hidden rounded-xl border border-black/10">
                <div className={cn("flex h-14 items-end justify-center pb-1", d.tone)} aria-hidden="true">
                  <span className="rounded-full bg-black/10 px-2 py-0.5 text-[7px] font-bold text-ink/70">
                    {d.name}
                  </span>
                </div>
                <div className="flex items-center justify-between p-2">
                  <span className="text-[9px] font-bold text-ink">{d.price}</span>
                  <span className="rounded-full bg-brand-500 px-2 py-0.5 text-[7px] font-bold text-white">ADD</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-black/10 px-3 py-2" aria-hidden="true">
          <span className="text-[9px] font-semibold text-ink">Estimated delivery</span>
          <span className="flex items-center gap-1 text-[9px] font-bold text-brand-600">
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" /></svg>
            25 min · Free
          </span>
        </div>
      </div>
    </div>
  );
}