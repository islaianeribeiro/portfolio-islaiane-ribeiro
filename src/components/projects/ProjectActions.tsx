import Link from "next/link";

interface ProjectActionsProps {
  project: {
    id: string;
    linkDeploy: string;
    linkRepositorio: string;
  };
}

interface ProjectLink {
  label: string;
  href: string;
  target?: "_blank";
  className: string;
}

export function ProjectActions({ project }: ProjectActionsProps) {
  const links: ProjectLink[] = [
    project.linkDeploy
      ? {
          label: "Ver projeto",
          href: project.linkDeploy,
          target: "_blank",
          className:
            "inline-flex items-center justify-center px-4 py-2 text-sm font-semibold bg-accent-3 text-light rounded-lg transition-all duration-200 hover:bg-accent hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent-2",
        }
      : null,
    {
      label: "Detalhes",
      href: `/project/${project.id}`,
      className:
        "inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-accent-2 text-accent-3 hover:-translate-y-0.5 rounded-lg transition-all duration-200 hover:bg-accent hover:text-light hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent-2",
    },
    {
      label: "Código",
      href: project.linkRepositorio,
      target: "_blank",
      className:
        "inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-accent-3 border border-accent-3 hover:-translate-y-0.5 rounded-lg transition-colors duration-200 hover:text-accent-3 hover:underline",
    },
  ].filter((link): link is ProjectLink => Boolean(link));

  return (
    <div className="pb-2.5 flex justify-center flex-wrap gap-2">
      {links.map(({ label, href, target, className }) => (
        <Link key={label} href={href} target={target} className={className}>
          {label}
        </Link>
      ))}
    </div>
  );
}
