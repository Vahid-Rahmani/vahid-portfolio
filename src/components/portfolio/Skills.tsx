import { Sparkles } from "lucide-react";

const skills = [
  "HTML & CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Git & GitHub",
  "Responsive Design",
  "Figma",
  "REST APIs",
];

const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-8 flex items-center gap-2">
        <Sparkles className="text-portfolio-accent" size={22} />
        <h2 className="text-2xl font-bold text-white font-display">Skills</h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-portfolio-surface px-4 py-2 text-sm text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;