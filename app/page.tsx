import { ModeToggle } from "@/components/mode-toggle";
import { StickyNote } from "lucide-react";

export default function Home() {
  return (
    <div className="p-3 border-b">
      <div className="flex justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <StickyNote className="text-primary" />
          <span className="font-bold text-2xl text-primary">ark</span>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
}
