// app/page.tsx
import { ThemeProvider } from "@/components/ThemeProvider";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import NavBar from "@/components/NavBar";
import ThemeToggle from "@/components/ButtonThema";
import StartPage from "@/components/StartPage";
import Section from "@/components/Section";
import About from "@/components/About";

export default function Home() {
  return (
    <ThemeProvider>
      <ParticlesBackground />
      <NavBar />

      <main className="mt-8">
        <Section
          id="home"
          className="flex h-screen py-18 px-[10%] lg:px-[5%] items-center"
        >
          <StartPage />
        </Section>

        <Section
          id="about"
          className="h-auto items-start
 pt-24 px-[5%] pb-16 md:py-28 md:px-[5%] md:h-screen flex md:items-center justify-center scroll-mt-8"
        >
          <About />
        </Section>

        <ThemeToggle />
      </main>
    </ThemeProvider>
  );
}
