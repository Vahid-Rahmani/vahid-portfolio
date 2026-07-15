import { cn } from "@/lib/utils";

const OpenToWorkBadge = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-portfolio-accent/40 bg-portfolio-accent/10 px-4 py-1.5 text-sm font-medium text-portfolio-accent",
        className,
      )}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-portfolio-accent opacity-75"></span>
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-portfolio-accent"></span>
      </span>
      Open to Work
    </div>
  );
};

export default OpenToWorkBadge;