export type NodeType =
  | "trigger_manual"
  | "trigger_schedule"
  | "http"
  | "if"
  | "set"
  | "s3"
  | "email"
  | "js";

export interface FlowNode {
  id: string;
  type: NodeType;
  data: any;
}

export interface FlowEdge {
  source: string;
  target: string;
  label?: string;
}

export interface Workflow {
  id: string;
  nodes: FlowNode[];
  edges: FlowEdge[];
}
