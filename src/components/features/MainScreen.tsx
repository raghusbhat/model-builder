import React from "react";
import { ReactFlow, Controls, Background } from "@xyflow/react";
import useStore from "@/store/useStore";
import "@xyflow/react/dist/style.css";

const MainScreen: React.FC = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  return (
    <main className="flex-1 bg-surface-a0 text-primary-a50">
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </main>
  );
};

export default MainScreen;
