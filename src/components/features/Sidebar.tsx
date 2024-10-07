import React from "react";
import { Button } from "@/components/ui/button";
import { Home, Info, Mail } from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-slate-50 border-r h-screen p-4 hidden md:block">
      <nav className="space-y-2">
        <Button variant="ghost" className="w-full justify-start">
          <Home className="mr-2 h-4 w-4" />
          Home
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Info className="mr-2 h-4 w-4" />
          About
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Mail className="mr-2 h-4 w-4" />
          Contact
        </Button>
      </nav>
    </aside>
  );
};

export default Sidebar;
