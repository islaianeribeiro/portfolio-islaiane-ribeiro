// app/page.tsx
import { ParticlesBackground } from "@/components/common/ParticlesBackground";
import NavBar from "@/components/navbar";
import StartPage from "@/components/startpage";
import { Section, Footer } from "@/components/layout";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

const sections = [
  {
    id: "home",
    component: <StartPage />,
  },
  {
    id: "about",
    component: <About />,
  },
  {
    id: "projects",
    component: <Projects />,
  },
  {
    id: "skills",
    component: <Skills />,
  },
  {
    id: "contact",
    component: <Contact />,
  },
];

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <NavBar />

      <main className="mt-8">
        {sections.map(({ id, component }) => (
          <Section
            key={id}
            id={id}
            className="flex min-h-screen py-18 px-[10%] lg:px-[5%] items-center justify-center"
          >
            {component}
          </Section>
        ))}
      </main>
      <Footer />
    </>
  );
}
