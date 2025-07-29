import CustomCarousel from "../ui/CustomCarousel";
import ProjectCard from "./ProjectCard";
import projects from "@/data/projects.json";

export default function ProjectsSection() {
  return (
    <CustomCarousel>
      {projects.map((item, i) => (
        <ProjectCard key={i} project={item} />
      ))}
    </CustomCarousel>
  );
}
