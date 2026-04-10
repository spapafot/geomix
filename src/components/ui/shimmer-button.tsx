import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes } from "react";

interface ShimmerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  background?: string;
  className?: string;
  children: React.ReactNode;
}

export function ShimmerButton({
  shimmerColor = "#ffffff",
  shimmerSize = "0.1em",
  borderRadius = "12px",
  background = "rgba(30, 58, 138, 1)",
  className,
  children,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      style={
        {
          "--shimmer-color": shimmerColor,
          "--shimmer-size": shimmerSize,
          "--border-radius": borderRadius,
          "--background": background,
          "--cut": "0.1em",
          "--spread": "90deg",
        } as React.CSSProperties
      }
      className={cn(
        "group relative cursor-pointer overflow-hidden whitespace-nowrap px-8 py-4 font-semibold text-white",
        "[border-radius:var(--border-radius)] [background:var(--background)]",
        "transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(59,130,246,0.4)] active:scale-95",
        className,
      )}
      {...props}
    >
      {/* Shimmer */}
      <div
        className={cn(
          "absolute inset-0 overflow-hidden [border-radius:var(--border-radius)]",
        )}
      >
        <div
          className="absolute inset-[-100%] animate-[spin_3s_linear_infinite]"
          style={{
            background: `conic-gradient(from 0deg, transparent 0%, transparent 40%, var(--shimmer-color) 50%, transparent 60%, transparent 100%)`,
            opacity: 0.4,
          }}
        />
      </div>

      {/* Inner background */}
      <div
        className="absolute inset-[1px] [border-radius:calc(var(--border-radius)-1px)] [background:var(--background)]"
      />

      <span className="relative z-10">{children}</span>
    </button>
  );
}
