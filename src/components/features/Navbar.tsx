import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  const name = "John Doe";
  const email = "johndoe@example.com";
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <nav className="flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800 shadow shadow-black">
      <div className="flex items-center gap-2">
        <img src="../../../public/Logo.svg" alt="Logo" className="h-8 w-8" />
        <p className="text-2xl font-bold text-primary-a0 flex items-center h-8">
          Model Builder
        </p>
      </div>
      <div className="flex items-center space-x-4 text-white">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{name}</DropdownMenuLabel>
            <DropdownMenuLabel className="text-xs">{email}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Profile</DropdownMenuItem>
            <DropdownMenuItem>Edit Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
