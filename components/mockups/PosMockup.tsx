import { cn } from "@/lib/utils";

function Bar({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return <div className={cn("h-2 rounded-full bg-white/15", className)} style={style} aria-hidden="true" />;
}

export function Track() {
  return (
    <div className="flex w-full items-center justify-between text-[10px] font-medium text-white/60" aria-hidden="true">
      <span>Mon</span>
      <span>Tue</span>
      <span>Wed</span>
      <span>Thu</span>
      <span>Fri</span>
      <span>Sat</span>
      <span>Sun</span>
    </div>
  );
}

export function Legend({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-4 text-[10px] text-white/60", className)} aria-hidden="true">
      <span className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-brand-500" /> Orders
      </span>
      <span className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-white/50" /> Revenue
      </span>
    </div>
  );
}

export default function PosMockup({ className }: { className?: string }) {
  return (
    <div className={cn("w-full overflow-hidden rounded-2xl border border-white/10 bg-ink shadow-2xl shadow-brand-900/20", className)} role="img" aria-label="FatFox POS dashboard preview">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex gap-2" aria-hidden="true">
          <span className="flex items-center gap-1.5 rounded-full bg-brand-500/20 px-2.5 py-1 text-[9px] font-semibold text-brand-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500" /> LIVE
          </span>
        </div>
      </div>

      <div className="grid grid-cols-[1.4fr_1fr] gap-3 p-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] text-white/50">Today&apos;s Revenue</div>
              <div className="font-display text-xl font-bold text-white">₹84,250</div>
            </div>
            <span className="rounded-full bg-green-400/15 px-2 py-1 text-[9px] font-semibold text-green-400">+18.4%</span>
          </div>

          <div className="rounded-xl border border-white/10 p-3">
            <div className="mb-2 flex justify-between text-[9px] text-white/50">
              <span>Orders this week</span>
              <span>1,248</span>
            </div>
            <div className="space-y-1.5" aria-hidden="true">
              <div className="h-16 rounded-md bg-white/5 p-2">
                <div className="flex h-full items-end gap-1">
                  <Bar className="h-[30%]" />
                  <Bar className="h-[55%]" />
                  <Bar className="h-[40%]" />
                  <Bar className="h-[80%]" />
                  <Bar className="h-[60%]" />
                  <Bar className="h-[95%] bg-brand-500" />
                  <Bar className="h-[70%]" />
                </div>
              </div>
            </div>
            <Track />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-white/10 p-2.5">
              <div className="text-[9px] text-white/50">Orders</div>
              <div className="font-display text-sm font-bold text-white">426</div>
              <div className="mt-1.5 h-1 rounded-full bg-white/10" aria-hidden="true">
                <div className="h-1 w-3/4 rounded-full bg-brand-500" />
              </div>
            </div>
            <div className="rounded-xl border border-white/10 p-2.5">
              <div className="text-[9px] text-white/50">Avg. prep time</div>
              <div className="font-display text-sm font-bold text-white">12m 40s</div>
              <div className="mt-1.5 h-1 rounded-full bg-white/10" aria-hidden="true">
                <div className="h-1 w-1/2 rounded-full bg-green-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2.5">
          <div className="rounded-xl border border-white/10 p-3">
            <div className="mb-2 text-[9px] font-semibold text-white/70">Live orders</div>
            {[
              { id: "#1042", item: "Paneer Tikka Roll", status: "Preparing", tone: "bg-yellow-400/15 text-yellow-300" },
              { id: "#1043", item: "Margherita Pizza", status: "Out for delivery", tone: "bg-green-400/15 text-green-400" },
              { id: "#1044", item: "Chicken Biryani", status: "New", tone: "bg-brand-500/20 text-brand-400" },
            ].map((o) => (
              <div key={o.id} className="flex items-center justify-between border-b border-white/5 py-2 last:border-0">
                <div>
                  <div className="text-[10px] font-semibold text-white">{o.item}</div>
                  <div className="text-[8px] text-white/40">{o.id} · 2 items</div>
                </div>
                <span className={cn("rounded-full px-2 py-0.5 text-[8px] font-semibold", o.tone)}>{o.status}</span>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-white/10 p-3">
            <div className="mb-2 text-[9px] font-semibold text-white/70">Floor plan</div>
            <div className="grid grid-cols-4 gap-1.5" aria-hidden="true">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex h-7 items-center justify-center rounded-md text-[7px] font-bold",
                    i === 1 ? "bg-brand-500 text-white" : i === 3 || i === 6 ? "bg-green-400/80 text-ink" : "bg-white/10 text-white/50"
                  )}
                >
                  T{i + 1}
                </div>
              ))}
            </div>
            <Legend className="mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}