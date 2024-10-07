import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-slate-100 border-b">
      <h1 className="text-xl font-bold">My App</h1>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="hidden md:inline-flex">
          Home
        </Button>
        <Button variant="ghost" className="hidden md:inline-flex">
          About
        </Button>
        <Button variant="ghost" className="hidden md:inline-flex">
          Contact
        </Button>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-4 w-4" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
