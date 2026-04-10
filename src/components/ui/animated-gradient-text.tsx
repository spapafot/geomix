import { cn } from "@/lib/utils";

export function AnimatedGradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "animate-[gradient_4s_linear_infinite] bg-[length:200%_auto]",
        "bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent",
        className,
      )}
      style={{
        backgroundSize: "200% auto",
        animation: "gradient 4s linear infinite",
      }}
    >
      {children}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </span>
  );
}
