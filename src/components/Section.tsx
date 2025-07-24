import React, { ReactNode } from "react";

type SectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

const Section = ({ id, className = "", children }: SectionProps) => {
  return (
    <section id={id} className={`${className}`}>
      {children}
    </section>
  );
};

export default Section;
