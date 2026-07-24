import { useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import profileImage from "../../../img/vr.jpg";

const ProfilePhoto = ({ className, src, size = "lg" }: { className?: string; src?: string; size?: "sm" | "lg" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const pulseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const animate = useCallback(() => {
    const glow = glowRef.current;
    if (!glow) return;
    currentRef.current.x = lerp(currentRef.current.x, targetRef.current.x, 0.08);
    currentRef.current.y = lerp(currentRef.current.y, targetRef.current.y, 0.08);
    glow.style.setProperty("--glow-x", `${currentRef.current.x}px`);
    glow.style.setProperty("--glow-y", `${currentRef.current.y}px`);
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const maxOffset = 30;
      const rawX = ((e.clientX - centerX) / window.innerWidth) * maxOffset * 2;
      const rawY = ((e.clientY - centerY) / window.innerHeight) * maxOffset * 2;
      targetRef.current = {
        x: Math.max(-maxOffset, Math.min(maxOffset, rawX)),
        y: Math.max(-maxOffset, Math.min(maxOffset, rawY)),
      };
      container.classList.add("profile-glow--active");
    };

    const handleMouseLeave = () => {
      targetRef.current = { x: 0, y: 0 };
      container.classList.remove("profile-glow--active");
    };

    const handleTouchStart = () => {
      container.classList.add("profile-glow--pulse");
      if (pulseTimerRef.current) clearTimeout(pulseTimerRef.current);
      pulseTimerRef.current = setTimeout(() => {
        container.classList.remove("profile-glow--pulse");
      }, 800);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("touchstart", handleTouchStart, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("touchstart", handleTouchStart);
      if (pulseTimerRef.current) clearTimeout(pulseTimerRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className={cn("profile-photo-container relative mx-auto", className)}>
      <div
        ref={glowRef}
        className="profile-glow"
        style={{ "--glow-x": "0px", "--glow-y": "0px" } as React.CSSProperties}
        aria-hidden="true"
      />
      <div className={cn("relative", size === "sm" ? "h-14 w-14" : "h-28 w-28 sm:h-32 sm:w-32")}>
        <img
          src={src || profileImage}
          alt="Vahid Rahmani"
          className="h-full w-full rounded-full border border-white/10 object-cover"
        />
      </div>
    </div>
  );
};

export default ProfilePhoto;
