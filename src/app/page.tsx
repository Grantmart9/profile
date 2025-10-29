import { Header } from "@/components/header";
import { Summary } from "@/components/summary";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Additional } from "@/components/additional";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9ff] via-[#f0f4ff] to-[#eef8ff] dark:from-[#1a1a2e] dark:via-[#16213e] dark:to-[#1a1a35]">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 dark:opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-secondary/10 blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="container relative z-10 mx-auto px-4 py-8 max-w-4xl">
        <Header />
        <div className="space-y-10">
          <Summary />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Additional />
        </div>
      </div>
    </div>
  );
}
