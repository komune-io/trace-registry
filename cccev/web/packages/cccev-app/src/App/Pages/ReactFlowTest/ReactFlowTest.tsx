import {useNodesState, useEdgesState, ReactFlow, Background, BackgroundVariant, MiniMap, Controls} from "reactflow"
import { requirementsToNodes, requirementsToEdges } from './cccev';
import 'reactflow/dist/style.css';
import { CustomNode } from "./CustomNode";
import axess from "./axess.json";

const nodeTypes = {
    custom: CustomNode,
};

export const ReactFlowTest = () => {
    const [nodes, _, onNodesChange] = useNodesState(requirementsToNodes(axess));
    const [edges, , onEdgesChange] = useEdgesState(requirementsToEdges(axess));
    return (
        <main
            style={{
                width: "100vw",
                height: "100vh"
            }}
        >
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                fitView
                attributionPosition="bottom-left"
                minZoom={0.05}
            >
              <Background variant={BackgroundVariant.Dots} />
              <MiniMap zoomable pannable/>
              <Controls />
            </ReactFlow>
        </main>
    )
}
