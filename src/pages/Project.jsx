import { useEffect } from "react";
import Projects from "../components/ProjectList";

export default function ProjectPage() {
  useEffect(() => {
    document.title = "Narmin | Portfolio";
  }, []);

  return (
    <main>
      <Projects />
    </main>
  );
}
