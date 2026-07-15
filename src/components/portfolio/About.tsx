import { UserRound } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-4 flex items-center gap-2">
        <UserRound className="text-portfolio-accent" size={22} />
        <h2 className="text-2xl font-bold text-white font-display">Über mich</h2>
      </div>
      <p className="text-lg leading-relaxed text-portfolio-muted">
        Zielorientierter und technisch versierter IT-Spezialist mit umfassender
        Erfahrung in der Hardware-Diagnose, Fehlerbehebung und Netzwerktechnik.
        Aktuell in der intensiven Weiterbildung zum Cloud Engineer, um moderne
        IT-Infrastrukturen in der Cloud (Azure) zu orchestrieren, automatisieren
        (Terraform, Docker) und zu verwalten. Ich suche eine Einstiegsposition
        als Junior Cloud Engineer oder IT-Systemadministrator im Raum Hamburg.
      </p>
    </section>
  );
};

export default About;