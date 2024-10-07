import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Layers,
  Box,
  Cpu,
  Code,
  Settings,
  ArrowRight,
  ArrowRightCircle,
  ChevronDown,
  // Add these new imports
  Square,
  Zap,
  Cog,
  ArrowUpRight,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LayerItem {
  name: string;
  icon: React.ReactNode;
}

interface SidebarSection {
  title: string;
  icon: React.ReactNode;
  items: LayerItem[];
}

const sidebarSections: SidebarSection[] = [
  {
    title: "Basic Layers",
    icon: <Square className="h-4 w-4" />,
    items: [
      { name: "Input Layer", icon: <Layers className="h-4 w-4" /> },
      { name: "Dense Layer", icon: <Box className="h-4 w-4" /> },
      { name: "Embedding Layer", icon: <Box className="h-4 w-4" /> },
      { name: "Dropout Layer", icon: <Box className="h-4 w-4" /> },
      { name: "Flatten Layer", icon: <Box className="h-4 w-4" /> },
      { name: "Output Layer", icon: <ArrowRightCircle className="h-4 w-4" /> },
    ],
  },
  {
    title: "Advanced Layers",
    icon: <Zap className="h-4 w-4" />,
    items: [
      { name: "Conv1D", icon: <Cpu className="h-4 w-4" /> },
      { name: "Conv2D", icon: <Cpu className="h-4 w-4" /> },
      { name: "Conv3D", icon: <Cpu className="h-4 w-4" /> },
      { name: "MaxPooling1D", icon: <Cpu className="h-4 w-4" /> },
      { name: "MaxPooling2D", icon: <Cpu className="h-4 w-4" /> },
      { name: "MaxPooling3D", icon: <Cpu className="h-4 w-4" /> },
      { name: "AveragePooling1D", icon: <Cpu className="h-4 w-4" /> },
      { name: "AveragePooling2D", icon: <Cpu className="h-4 w-4" /> },
      { name: "AveragePooling3D", icon: <Cpu className="h-4 w-4" /> },
      { name: "BatchNormalization", icon: <Cpu className="h-4 w-4" /> },
      { name: "LSTM", icon: <Cpu className="h-4 w-4" /> },
      { name: "GRU", icon: <Cpu className="h-4 w-4" /> },
      { name: "SimpleRNN", icon: <Cpu className="h-4 w-4" /> },
    ],
  },
  {
    title: "Specialized LLM Layers",
    icon: <Cpu className="h-4 w-4" />,
    items: [
      { name: "Attention Layer", icon: <Cpu className="h-4 w-4" /> },
      { name: "Transformer Block", icon: <Cpu className="h-4 w-4" /> },
      { name: "Position Encoding Layer", icon: <Cpu className="h-4 w-4" /> },
      { name: "LayerNormalization Layer", icon: <Cpu className="h-4 w-4" /> },
    ],
  },
  {
    title: "Custom Layers",
    icon: <Code className="h-4 w-4" />,
    items: [{ name: "Custom Layer", icon: <Code className="h-4 w-4" /> }],
  },
  {
    title: "Utility Layers",
    icon: <Cog className="h-4 w-4" />,
    items: [
      { name: "Reshape Layer", icon: <Settings className="h-4 w-4" /> },
      { name: "Concatenate Layer", icon: <Settings className="h-4 w-4" /> },
      { name: "Add Layer", icon: <Settings className="h-4 w-4" /> },
      { name: "Subtract Layer", icon: <Settings className="h-4 w-4" /> },
      { name: "Multiply Layer", icon: <Settings className="h-4 w-4" /> },
      { name: "Average Layer", icon: <Settings className="h-4 w-4" /> },
    ],
  },
  {
    title: "Output Layers",
    icon: <ArrowUpRight className="h-4 w-4" />,
    items: [
      {
        name: "Dense Layer (Softmax)",
        icon: <ArrowRight className="h-4 w-4" />,
      },
      {
        name: "Dense Layer (Sigmoid)",
        icon: <ArrowRight className="h-4 w-4" />,
      },
    ],
  },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-slate-900 shadow-md h-screen flex-col hidden md:flex">
      <div className="p-4">
        <div className="mb-4 relative">
          <Input
            type="text"
            placeholder="Search layers..."
            className="w-full pl-8 bg-surface-a0 text-primary-a50"
          />
          <Search className="h-4 w-4 text-surface-a40 absolute left-2 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      <ScrollArea className="flex-1">
        <nav className="space-y-2 p-4">
          {sidebarSections.map((section) => renderSection(section))}
        </nav>
      </ScrollArea>
    </aside>
  );
};

const renderSection = ({ title, icon, items }: SidebarSection) => (
  <Collapsible key={title}>
    <CollapsibleTrigger asChild>
      <Button
        variant="ghost"
        className="w-full justify-between text-sm text-white hover:bg-surface-a0 hover:text-primary-a0"
      >
        <span className="font-semibold flex items-center ">
          {icon}
          <span className="ml-2">{title}</span>
        </span>
        <ChevronDown className="h-4 w-4" />
      </Button>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <div className="space-y-1 m-1">
        {items.map((item) => (
          <Button
            key={item.name}
            variant="ghost"
            className="w-full justify-start text-sm pl-4 text-white hover:bg-surface-a0 hover:text-primary-a0"
          >
            {item.icon}
            <span className="ml-2">{item.name}</span>
          </Button>
        ))}
      </div>
    </CollapsibleContent>
  </Collapsible>
);

export default Sidebar;
