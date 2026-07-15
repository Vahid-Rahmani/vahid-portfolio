import { cn } from "@/lib/utils";

const ProfilePhoto = ({ className, src }: { className?: string; src?: string }) => {
  return (
    <div className={cn("relative mx-auto h-32 w-32 sm:h-40 sm:w-40", className)}>
      <div className="absolute -inset-1 rounded-full bg-portfolio-accent/20 blur-md"></div>
      <img
        src={src || "C:\Users\DCI-Student\dyad-apps\dreamy-starfish-snap\img\vr.jpg"}
        alt="Vahid Rahmani"
        className="relative h-full w-full rounded-full border-2 border-portfolio-accent/50 object-cover"
      />
    </div>
  );
};

export default ProfilePhoto;