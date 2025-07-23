// app/page.tsx
import { ThemeProvider } from "@/components/ThemeProvider";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import NavBar from "@/components/NavBar";
import { ButtonThema } from "@/components/ButtonThema";
import StartPage from "@/components/StartPage";

export default function Home() {
  return (
    <ThemeProvider>
      <ParticlesBackground />
      <NavBar />

      <main className="mt-8">
        <StartPage />
        <ButtonThema />
      </main>
    </ThemeProvider>
  );
}
