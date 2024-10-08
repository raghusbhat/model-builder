import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { ChevronRight, Plus } from "lucide-react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
} from "@/components/ui/context-menu";

// Define interfaces for layer items and sidebar sections
interface LayerItem {
  name: string;
  description: string;
}

interface SidebarSection {
  title: string;
  items: LayerItem[];
}

// Define the sidebar sections with their respective layer items
const sidebarSections: SidebarSection[] = [
  {
    title: "BASIC LAYERS",
    items: [
      {
        name: "Input Layer",
        description:
          "The starting point of your model, where data enters the network.",
      },
      {
        name: "Dense Layer",
        description:
          "A fully connected layer where each neuron connects to all neurons in the previous layer.",
      },
      {
        name: "Embedding Layer",
        description:
          "Converts categorical data (like words) into dense vectors of fixed size.",
      },
      {
        name: "Dropout Layer",
        description:
          "Helps prevent overfitting by randomly setting a fraction of input units to 0 during training.",
      },
      {
        name: "Flatten Layer",
        description:
          "Converts multi-dimensional input into a 1D array for the next layer.",
      },
      {
        name: "Output Layer",
        description:
          "The final layer of your model that produces the prediction or classification result.",
      },
    ],
  },
  {
    title: "ADVANCED LAYERS",
    items: [
      {
        name: "Conv1D",
        description:
          "Applies 1D convolution, useful for processing sequences or time series data.",
      },
      {
        name: "Conv2D",
        description:
          "Applies 2D convolution, commonly used for image processing tasks.",
      },
      {
        name: "Conv3D",
        description:
          "Applies 3D convolution, useful for processing 3D data like video or volumetric images.",
      },
      {
        name: "MaxPooling1D",
        description:
          "Reduces the size of 1D input by taking the maximum value over a window.",
      },
      {
        name: "MaxPooling2D",
        description:
          "Reduces the size of 2D input (like images) by taking the maximum value over a window.",
      },
      {
        name: "MaxPooling3D",
        description:
          "Reduces the size of 3D input by taking the maximum value over a window.",
      },
      {
        name: "AveragePooling1D",
        description:
          "Similar to MaxPooling1D, but takes the average value instead of the maximum.",
      },
      {
        name: "AveragePooling2D",
        description:
          "Similar to MaxPooling2D, but takes the average value instead of the maximum.",
      },
      {
        name: "AveragePooling3D",
        description:
          "Similar to MaxPooling3D, but takes the average value instead of the maximum.",
      },
      {
        name: "BatchNormalization",
        description:
          "Normalizes the input to improve the stability and performance of the neural network.",
      },
      {
        name: "LSTM",
        description:
          "Long Short-Term Memory layer, useful for processing and predicting time series data.",
      },
      {
        name: "GRU",
        description:
          "Gated Recurrent Unit, a simpler alternative to LSTM for sequence data.",
      },
      {
        name: "SimpleRNN",
        description:
          "Basic Recurrent Neural Network layer for processing sequence data.",
      },
    ],
  },
  {
    title: "SPECIALIZED LLM LAYERS",
    items: [
      {
        name: "Attention Layer",
        description: "Focuses on relevant parts of input",
      },
      {
        name: "Transformer Block",
        description: "Core processing unit of the model",
      },
      {
        name: "Position Encoding Layer",
        description: "Adds positional information to input",
      },
      {
        name: "LayerNormalization Layer",
        description: "Normalizes layer inputs",
      },
    ],
  },
  {
    title: "CUSTOM LAYERS",
    items: [{ name: "Custom Layer", description: "A custom layer" }],
  },
  {
    title: "UTILITY LAYERS",
    items: [
      {
        name: "Reshape Layer",
        description:
          "Transforms the shape of the input tensor without changing its data.",
      },
      {
        name: "Concatenate Layer",
        description: "Combines multiple input tensors along a specified axis.",
      },
      {
        name: "Add Layer",
        description: "Performs element-wise addition on input tensors.",
      },
      {
        name: "Subtract Layer",
        description: "Performs element-wise subtraction on input tensors.",
      },
      {
        name: "Multiply Layer",
        description: "Performs element-wise multiplication on input tensors.",
      },
      {
        name: "Average Layer",
        description: "Computes the element-wise average of input tensors.",
      },
    ],
  },
  {
    title: "OUTPUT LAYERS",
    items: [
      {
        name: "Dense Layer (Softmax)",
        description:
          "Fully connected layer with softmax activation, used for multi-class classification.",
      },
      {
        name: "Dense Layer (Sigmoid)",
        description:
          "Fully connected layer with sigmoid activation, used for binary classification or multi-label problems.",
      },
    ],
  },
];

// Main Sidebar component
const Sidebar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  // Filter sections based on search query
  const filteredSections =
    searchQuery.trim() === ""
      ? sidebarSections
      : sidebarSections
          .map((section) => ({
            ...section,
            items: section.items.filter((item) =>
              item.name.toLowerCase().includes(searchQuery.toLowerCase())
            ),
          }))
          .filter((section) => section.items.length > 0);

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const collapseAllSections = () => {
    const allClosed = Object.keys(openSections).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {} as Record<string, boolean>);
    setOpenSections(allClosed);
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <aside className="w-64 bg-slate-900 shadow-md h-screen flex-col hidden md:flex">
          {/* Search input */}
          <div className="p-4">
            <div className="mb-4 relative">
              <Input
                type="text"
                placeholder="Search layers..."
                className="w-full pl-8 bg-surface-a0 text-primary-a50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Scrollable area for sidebar sections */}
          <ScrollArea className="flex-1">
            <nav className="space-y-2 p-4">
              {filteredSections.map((section) => (
                <Collapsible
                  key={section.title}
                  open={openSections[section.title] || false}
                  onOpenChange={() => toggleSection(section.title)}
                >
                  {/* Section title button */}
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`w-full justify-between hover:bg-slate-900 hover:text-primary-a0 ${
                        openSections[section.title]
                          ? "text-primary-a0"
                          : "text-white"
                      }`}
                    >
                      <span className="font-semibold flex items-center">
                        <ChevronRight
                          className={`mr-2 h-4 w-4 transition-transform duration-200 ${
                            openSections[section.title] ? "rotate-90" : ""
                          }`}
                        />
                        <p className="titillium-web-bold">{section.title}</p>
                      </span>
                    </Button>
                  </CollapsibleTrigger>
                  {/* Collapsible content with layer items */}
                  <CollapsibleContent>
                    <div className="space-y-1 p-1 ml-1 rounded">
                      {section.items.map((item) => (
                        <div key={item.name} className="flex items-center">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="flex items-center">
                                  {/* Add layer button */}
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="p-1 text-white bg-surface-a0 hover:bg-primary-a0 hover:text-surface-a0"
                                    onClick={() => handleAddLayer(item)}
                                  >
                                    <Plus />
                                  </Button>
                                  {/* Layer name button */}
                                  <p className="text-white m-2 p-1 text-sm">
                                    {" "}
                                    {item.name}
                                  </p>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className=" p-2 rounded shadow-lg">
                                <p>{item.description}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </nav>
          </ScrollArea>
        </aside>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onSelect={collapseAllSections}>
          Collapse All
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

// Function to handle adding a layer (to be implemented)
const handleAddLayer = (layer: LayerItem) => {
  // TODO: Implement the logic to add the layer to the main screen
  console.log(`Adding layer: ${layer.name}`);
};

export default Sidebar;
