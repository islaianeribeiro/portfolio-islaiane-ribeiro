import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  aosDuration?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  aosDuration = 400,
}: ServiceCardProps) {
  return (
    <div
      className="group flex flex-col justify-center gap-3 items-center bg-gradient-to-br from-accent-2 to-light min-h-[280px] p-6 rounded-2xl border border-accent-3/30 shadow-lg hover:shadow-2xl"
      data-aos="fade-up"
      data-aos-duration={aosDuration}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent-3 text-accent-3 text-3xl">
        {icon}
      </div>

      <h3 className="text-accent-3 text-lg font-semibold tracking-wide">
        {title}
      </h3>

      <p className="text-center text-base text-dark">{description}</p>
    </div>
  );
}
