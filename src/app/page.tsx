// app/page.tsx
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { ParticlesBackground } from "@/components/common";
import NavBar from "@/components/navbar";
import ThemeToggle from "@/components/ui/ThemeToggle";
import StartPage from "@/components/startpage";
import Section from "@/components/layout/Section";
import About from "@/components/about";

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
