import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { company, whatsappLink } from "@/lib/site-data";

export function WhatsAppWidget() {
  const [open, setOpen] = useState(true);

  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col items-end gap-3">
      {open ? (
        <div className="w-[19rem] overflow-hidden rounded-3xl border border-border bg-white shadow-lift">
          <div className="relative bg-brand-gradient px-5 py-4 text-white">
            <button
              aria-label="Minimise chat"
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 rounded-full bg-white/15 p-1.5 transition hover:bg-white/25"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15 text-lg">👋</span>
              <div>
                <p className="flex items-center gap-2 text-sm font-bold">
                  <span className="relative flex h-2 w-2">
                    <span
                      className="absolute inline-flex h-full w-full rounded-full bg-[#25D366]"
                      style={{ animation: "pulse-ring 2s ease-out infinite" }}
                    />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25D366]" />
                  </span>
                  We're Online
                </p>
                <p className="text-xs text-white/70">Typically replies in minutes</p>
              </div>
            </div>
          </div>
          <div className="px-5 py-4">
            <p className="text-sm font-semibold text-brand-ink">Need a quotation?</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Chat with {company.name} on WhatsApp and get your project priced.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      ) : (
        <button
          aria-label="Open WhatsApp chat"
          onClick={() => setOpen(true)}
          className="floaty grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform duration-300 hover:scale-105"
        >
          <MessageCircle className="h-7 w-7" />
        </button>
      )}
    </div>
  );
}