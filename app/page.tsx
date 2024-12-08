import Header from "@/components/Header";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <Experience />
      <Projects />
      <Education />
    </main>
  );
}