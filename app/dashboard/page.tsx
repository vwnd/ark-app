import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";

export default function ProjectsPage() {
  return (
    <section>
      <h1>Projects</h1>
      <p>Here are the projects you are working on.</p>
      <Button>
        <PlusCircleIcon className="mr-2 h-4 w-4" />
        Create Project
      </Button>
    </section>
  );
}
