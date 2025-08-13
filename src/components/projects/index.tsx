import { CustomCarousel } from "@/components/ui";
import ProjectCard from "./ProjectCard";
import projects from "@/data/projects";

export default function ProjectsSection() {
  return (
    <div className="relative w-full z-10" data-aos="fade-up">
      <h2 className="text-2xl font-semibold md:text-3xl uppercase text-center text-dark dark:text-light mb-6">
        Meus <span className="text-accent">Projetos</span>
      </h2>

      <CustomCarousel
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((item, i) => (
          <ProjectCard key={i} project={item} />
        ))}
      </CustomCarousel>
    </div>
  );
}
