import { StickyNote } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <div className="border-b">
      <div className="flex justify-between max-w-7xl mx-auto py-4 px-8">
        <div className="flex items-center gap-2">
          <StickyNote className="text-primary" />
          <span className="font-bold text-xl text-primary">ark</span>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
}
