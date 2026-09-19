"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface TableItem {
  id: string;
  number: string;
  area: string;
  capacity: number;
  status: "available" | "occupied" | "kot" | "billed";
  amount?: number;
  guests?: number;
  waiter?: string;
  timer?: string;
  items?: string[];
}

const AREAS = ["All Areas", "AC Dining", "VIP Lounge", "Family Section", "Outdoor", "Non-AC"];

const TABLES: TableItem[] = [
  { id: "t1", number: "T-01", area: "AC Dining", capacity: 4, status: "occupied", amount: 1420, guests: 3, waiter: "Rohan S.", timer: "24m", items: ["Butter Chicken x1", "Garlic Naan x4", "Dal Makhani x1"] },
  { id: "t2", number: "T-02", area: "AC Dining", capacity: 2, status: "available" },
  { id: "t3", number: "T-03", area: "AC Dining", capacity: 6, status: "kot", amount: 2890, guests: 5, waiter: "Vikram P.", timer: "12m", items: ["Paneer Tikka x2", "Virgin Mojito x3", "Veg Biryani x2"] },
  { id: "t4", number: "T-04", area: "VIP Lounge", capacity: 8, status: "billed", amount: 4560, guests: 7, waiter: "Ananya M.", timer: "45m", items: ["Chef Special Platter", "Cocktails x4", "Tandoori Platter"] },
  { id: "t5", number: "T-05", area: "VIP Lounge", capacity: 4, status: "available" },
  { id: "t6", number: "T-06", area: "Family Section", capacity: 6, status: "occupied", amount: 1850, guests: 4, waiter: "Rohan S.", timer: "18m", items: ["Kadhai Paneer", "Roti x8", "Jeera Rice"] },
  { id: "t7", number: "T-07", area: "Outdoor", capacity: 4, status: "kot", amount: 940, guests: 2, waiter: "Amit K.", timer: "8m", items: ["Cold Coffee x2", "Crispy Corn x1"] },
  { id: "t8", number: "T-08", area: "Outdoor", capacity: 2, status: "available" },
  { id: "t9", number: "T-09", area: "Non-AC", capacity: 4, status: "available" },
  { id: "t10", number: "T-10", area: "AC Dining", capacity: 4, status: "occupied", amount: 2100, guests: 4, waiter: "Vikram P.", timer: "30m", items: ["Chicken Tikka", "Roomali Roti x6"] },
  { id: "t11", number: "T-11", area: "VIP Lounge", capacity: 6, status: "available" },
  { id: "t12", number: "T-12", area: "Family Section", capacity: 8, status: "kot", amount: 3410, guests: 6, waiter: "Ananya M.", timer: "15m", items: ["Fish Amritsari", "Chicken Biryani x3"] },
];

export default function DineInMockup({ className }: { className?: string }) {
  const [selectedArea, setSelectedArea] = useState("All Areas");
  const [selectedTable, setSelectedTable] = useState<TableItem>(TABLES[0]);
  const [kotStatus, setKotStatus] = useState<string | null>(null);

  const filteredTables = selectedArea === "All Areas"
    ? TABLES
    : TABLES.filter((t) => t.area === selectedArea);

  const stats = {
    total: 40,
    available: 28,
    occupied: 7,
    kot: 5,
    prebook: 3,
  };

  const handlePrintKOT = () => {
    setKotStatus("Printing ESC/POS ticket...");
    setTimeout(() => {
      setKotStatus("KOT Sent to Kitchen Printer (LAN :9100) ✓");
      setTimeout(() => setKotStatus(null), 3000);
    }, 600);
  };

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-2xl border border-white/10 bg-ink shadow-2xl shadow-brand-900/30",
        className
      )}
      role="region"
      aria-label="FatFox Dine-In Live Dashboard Preview"
    >
      {/* Top App Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3 gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-3 w-3 items-center justify-center">
            <span className="h-2 w-2 animate-ping rounded-full bg-emerald-400 opacity-75" />
          </span>
          <div className="flex items-center gap-2">
            <span className="font-display text-sm font-bold text-white">FatFox Dine-In Control Room</span>
            <span className="rounded-full bg-brand-500/20 px-2 py-0.5 text-[10px] font-bold text-brand-400 border border-brand-500/30">
              Flutter Captain App Synced
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-white/70">
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-emerald-400 border border-emerald-500/20">
            <svg viewBox="0 0 16 16" className="h-3 w-3 fill-current" aria-hidden="true">
              <path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2zM1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8z" />
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
            </svg>
            KOT Printer LAN :9100 Ready
          </span>
        </div>
      </div>

      {/* Metrics Header Bar */}
      <div className="grid grid-cols-5 border-b border-white/10 bg-black/20 text-center divide-x divide-white/10">
        <div className="py-2.5">
          <div className="text-[10px] font-medium text-white/50">Total Tables</div>
          <div className="font-display text-base font-bold text-white">{stats.total}</div>
        </div>
        <div className="py-2.5 bg-emerald-500/5">
          <div className="text-[10px] font-medium text-emerald-400">Available</div>
          <div className="font-display text-base font-bold text-emerald-400">{stats.available}</div>
        </div>
        <div className="py-2.5 bg-amber-500/5">
          <div className="text-[10px] font-medium text-amber-400">Occupied</div>
          <div className="font-display text-base font-bold text-amber-400">{stats.occupied}</div>
        </div>
        <div className="py-2.5 bg-rose-500/5">
          <div className="text-[10px] font-medium text-rose-400">Active KOT</div>
          <div className="font-display text-base font-bold text-rose-400">{stats.kot}</div>
        </div>
        <div className="py-2.5 bg-brand-500/5">
          <div className="text-[10px] font-medium text-brand-400">Pre-Bookings</div>
          <div className="font-display text-base font-bold text-brand-400">{stats.prebook}</div>
        </div>
      </div>

      {/* Area Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto border-b border-white/10 bg-white/5 p-2 scrollbar-none">
        {AREAS.map((area) => (
          <button
            key={area}
            type="button"
            onClick={() => setSelectedArea(area)}
            className={cn(
              "rounded-lg px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition",
              selectedArea === area
                ? "bg-brand-500 text-white shadow-md shadow-brand-500/30"
                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
            )}
          >
            {area}
          </button>
        ))}
      </div>

      {/* Main Grid: Tables + Captain Side Sheet */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-4 p-4">
        {/* Table Floor Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[380px] overflow-y-auto pr-1">
          {filteredTables.map((t) => {
            const isSelected = selectedTable.id === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setSelectedTable(t)}
                className={cn(
                  "relative flex flex-col justify-between rounded-xl border p-3 text-left transition group",
                  isSelected
                    ? "border-brand-500 bg-brand-500/10 ring-2 ring-brand-500/40"
                    : "border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10",
                  t.status === "available" && "border-emerald-500/30",
                  t.status === "occupied" && "border-amber-500/30",
                  t.status === "kot" && "border-rose-500/40",
                  t.status === "billed" && "border-sky-500/40"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-base font-extrabold text-white">{t.number}</span>
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider",
                      t.status === "available" && "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
                      t.status === "occupied" && "bg-amber-500/20 text-amber-300 border border-amber-500/30",
                      t.status === "kot" && "bg-rose-500/20 text-rose-300 border border-rose-500/30 animate-pulse",
                      t.status === "billed" && "bg-sky-500/20 text-sky-300 border border-sky-500/30"
                    )}
                  >
                    {t.status === "available" && "Free"}
                    {t.status === "occupied" && "Dining"}
                    {t.status === "kot" && "KOT Sent"}
                    {t.status === "billed" && "Billed"}
                  </span>
                </div>

                <div className="mt-2 text-[10px] text-white/50 space-y-0.5">
                  <div className="flex justify-between">
                    <span>{t.area}</span>
                    <span>Cap: {t.capacity}</span>
                  </div>
                  {t.guests && (
                    <div className="flex justify-between text-white/70">
                      <span>Guests: {t.guests}</span>
                      <span>{t.timer}</span>
                    </div>
                  )}
                </div>

                {t.amount ? (
                  <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2">
                    <span className="text-[10px] text-white/50">Total</span>
                    <span className="font-display text-xs font-bold text-emerald-400">₹{t.amount}</span>
                  </div>
                ) : (
                  <div className="mt-3 border-t border-white/5 pt-2 text-[10px] text-emerald-400/80 font-medium">
                    Ready to Seat
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Waiter Captain App Screen View (Dineinapk Preview) */}
        <div className="rounded-xl border border-white/15 bg-black/40 p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-base font-bold text-white">Table {selectedTable.number}</span>
                  <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/70">
                    {selectedTable.area}
                  </span>
                </div>
                <p className="text-[11px] text-white/50">
                  Waiter: <strong className="text-white/80">{selectedTable.waiter || "Unassigned"}</strong>
                </p>
              </div>
              {selectedTable.amount && (
                <div className="text-right">
                  <div className="text-[10px] text-white/50">Current Total</div>
                  <div className="font-display text-base font-extrabold text-emerald-400">₹{selectedTable.amount}</div>
                </div>
              )}
            </div>

            {/* Active Items */}
            <div className="mt-3">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-white/50 mb-2">
                Active Table Order Tickets
              </div>
              {selectedTable.items && selectedTable.items.length > 0 ? (
                <ul className="space-y-1.5 text-xs text-white/90">
                  {selectedTable.items.map((item, idx) => (
                    <li key={idx} className="flex items-center justify-between rounded-lg bg-white/5 px-2.5 py-1.5">
                      <span className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {item}
                      </span>
                      <span className="text-[10px] text-white/40">KOT #{201 + idx}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="rounded-lg border border-dashed border-white/15 p-4 text-center text-xs text-white/40">
                  Table is currently empty. Tap &quot;Take Order&quot; on Captain App (`Dineinapk`) or scan table QR code.
                </div>
              )}
            </div>
          </div>

          {/* Quick Captain Actions */}
          <div className="mt-4 space-y-2 pt-3 border-t border-white/10">
            {kotStatus && (
              <div className="rounded-lg bg-emerald-500/20 px-3 py-2 text-center text-xs font-bold text-emerald-300 border border-emerald-500/40 animate-pulse">
                {kotStatus}
              </div>
            )}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handlePrintKOT}
                className="flex items-center justify-center gap-1.5 rounded-lg bg-brand-500 px-3 py-2 text-xs font-bold text-white shadow-md shadow-brand-500/30 transition hover:bg-brand-600 active:scale-95"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
                  <path d="M6 14h12v8H6z" />
                </svg>
                Print KOT Ticket
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold text-white transition hover:bg-white/15"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
                </svg>
                Shift / Split Bill
              </button>
            </div>

            <div className="flex items-center justify-between text-[10px] text-white/40 px-1 pt-1">
              <span>Sunmi V2 &amp; Android Ready</span>
              <span>0.5s Ticket Latency</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
