import { UserRound } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-4 flex items-center gap-2">
        <UserRound className="text-portfolio-accent" size={22} />
        <h2 className="text-2xl font-bold text-white font-display">About Me</h2>
      </div>
      <p className="text-lg leading-relaxed text-portfolio-muted">
        I'm a self-taught junior frontend developer who loves building
        interfaces that are as pleasant to use as they are to look at. After
        completing a web development bootcamp, I've been sharpening my skills by
        shipping small, polished projects. I care about accessibility, clean
        code, and learning something new every single day. I'm now looking for
        my first role where I can grow alongside an experienced team.
      </p>
    </section>
  );
};

export default About;