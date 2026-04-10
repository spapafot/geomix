// Replace data-ad-client and data-ad-slot with your Google AdSense values.
// Set NEXT_PUBLIC_ADSENSE_ID in your .env.local to activate ads.

import { useEffect } from "react";

interface AdSenseSlotProps {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal";
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export function AdSenseSlot({ slot, format = "auto", className }: AdSenseSlotProps) {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_ID;

  useEffect(() => {
    if (!clientId) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, [clientId]);

  if (!clientId) {
    // Dev placeholder — remove in production once AdSense is configured
    return (
      <div className={`flex items-center justify-center border border-dashed border-slate-600 rounded-lg text-slate-500 text-xs ${className}`}>
        Διαφήμιση (AdSense)
      </div>
    );
  }

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={{ display: "block" }}
      data-ad-client={clientId}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
}
