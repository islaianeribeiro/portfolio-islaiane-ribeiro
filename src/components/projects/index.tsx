import { CustomCarousel } from "@/components/ui";
import ProjectCard from "./ProjectCard";
import projects from "@/data/projects";

export default function ProjectsSection() {
  return (
    <CustomCarousel
      title="Meus projetos"
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
  );
}
