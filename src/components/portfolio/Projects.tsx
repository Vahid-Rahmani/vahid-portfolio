import { ListTodo, CloudSun, ShoppingBag, ArrowUpRight } from "lucide-react";

const projects = [
  {
    icon: ListTodo,
    title: "TaskFlow",
    desc: "A drag-and-drop task manager with categories, due dates, and a calming dark UI.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "#",
  },
  {
    icon: CloudSun,
    title: "Weatherly",
    desc: "A clean weather dashboard that pulls live data from a public API and works great on mobile.",
    tags: ["React", "REST API", "CSS"],
    link: "#",
  },
  {
    icon: ShoppingBag,
    title: "ShopLite",
    desc: "A responsive e-commerce UI prototype with a cart, product grid, and smooth interactions.",
    tags: ["React", "Responsive", "Figma"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="mb-8 text-2xl font-bold text-white font-display">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className="group rounded-2xl border border-white/10 bg-portfolio-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-portfolio-accent/50"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-portfolio-accent/15 text-portfolio-accent">
                <Icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-portfolio-muted">
                {p.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-portfolio-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-portfolio-accent transition-all group-hover:gap-2"
              >
                View project <ArrowUpRight size={16} />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;