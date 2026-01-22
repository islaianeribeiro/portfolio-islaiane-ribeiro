import { ParticlesBackground } from "@/components/common/ParticlesBackground";
import NavBar from "@/components/navbar";
import StartPage from "@/components/startpage";
import { Section, Footer } from "@/components/layout";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Services from "@/components/services-section";

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
    id: "services",
    component: <Services />,
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
      <NavBar />

      <main className="mt-8">
        {sections.map(({ id, component }) => (
          <Section
            key={id}
            id={id}
            className="flex min-h-screen py-18 px-[5%] lg:px-[2%] xl:px-[6%] items-center justify-center"
          >
            {component}
          </Section>
        ))}
      </main>

      <Footer />
      <ParticlesBackground />
    </>
  );
}
