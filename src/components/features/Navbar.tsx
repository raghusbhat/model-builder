import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800  shadow shadow-black">
      <div className="flex items-center gap-2">
        <img src="../../../public/Logo.svg" alt="Logo" className="h-8 w-8" />
        <p className="text-2xl font-bold text-primary-a0 flex items-center h-8">
          Model Builder
        </p>
      </div>
      <div className="flex items-center space-x-4 text-white">
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
