import { create } from "zustand";
import { Node, Edge } from "@xyflow/react";

interface LayerItem {
  name: string;
  description: string;
}

interface FlowState {
  nodes: Node[];
  edges: Edge[];
  addNode: (layer: LayerItem) => void;
}

const useStore = create<FlowState>((set) => ({
  nodes: [],
  edges: [],
  addNode: (layer: LayerItem) =>
    set((state) => {
      const newNode: Node = {
        id: `${layer.name}-${state.nodes.length}`,
        type: "default",
        data: { label: layer.name },
        position: { x: 100, y: 100 + state.nodes.length * 100 },
      };
      return { nodes: [...state.nodes, newNode] };
    }),
}));

export default useStore;
