import ReactFlow from "reactflow";
import type { Node, Edge } from "reactflow";
import "reactflow/dist/style.css";

const nodes: Node[] = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: { label: "Trigger" },
    type: "input",
  },
];

const edges: Edge[] = [];

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow nodes={nodes} edges={edges} />
    </div>
  );
}
