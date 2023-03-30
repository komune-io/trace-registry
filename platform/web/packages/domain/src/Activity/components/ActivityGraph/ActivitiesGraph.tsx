import { Box } from '@mui/material'
import {useNodesState, useEdgesState, ReactFlow, Background} from "reactflow"
import 'reactflow/dist/style.css';
import {MouseEvent as ReactMouseEvent, useCallback, useEffect, useState} from 'react';
import {Activity} from "../../model";
import {ActivityGraphNode} from "../ActivityGraphNode";
import {ActivityDataNode, getNodesAnEdgesOfActivities} from "../../graph";

export interface ActivitiesGraphProps {
    activities: Activity[],
    selectedActivity?: Activity,
    onActivitySelect: (node: Activity) => void
}

const nodeTypes = {
    Activities: ActivityGraphNode
};

export const ActivitiesGraph = (props: ActivitiesGraphProps) => {
    const {activities, selectedActivity, onActivitySelect} = props
    const [baseRequirement, setBaseRequirement] = useState(activities[0])
    // const [selectedNode, setSelectedNode] = useState<ActivityDataNode | undefined>(undefined);

    const selectRequirement = useCallback(
      (id: string) => {
        const requirement = activities.find((el) => el.identifier === id)
        if (requirement) setBaseRequirement(requirement)
      },
      [activities],
    )
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    useEffect(() => {
        const res = getNodesAnEdgesOfActivities(activities, baseRequirement, selectRequirement)
        setNodes(res.nodes)
        setEdges(res.edges)
    }, [activities, baseRequirement, selectRequirement])
    const onSelectionChange = (_: ReactMouseEvent, node: ActivityDataNode) => {
      if(node.data.current.identifier !== selectedActivity?.identifier) {
        onActivitySelect(node.data.current);
      }
    };
    return (
      <Box
        sx={{
          flexGrow: 1,
          flexBasis: 0,
          height: "100%"
        }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          onNodeClick={onSelectionChange}
          fitView
          attributionPosition="bottom-left"
          style={{
            background: "#F0EDE6"
          }}
        >
          <Background color={"#9E9E9E"} />
        </ReactFlow>
      </Box>
    )
}

