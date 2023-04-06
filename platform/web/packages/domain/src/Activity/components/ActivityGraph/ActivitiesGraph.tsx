import { Box } from '@mui/material'
import {ReactFlow, Background, useEdgesState, useNodesState, Controls} from "reactflow"
import 'reactflow/dist/style.css';
import {MouseEvent as ReactMouseEvent, useCallback, useEffect, useState} from 'react';
import {Activity, ActivityId} from "../../model";
import {ActivityGraphNode} from "../ActivityGraphNode";
import {ActivityDataNode, getNodesAnEdgesOfActivities} from "../../graph";

export interface ActivitiesGraphProps {
    activities: Activity[],
    selectedActivity?: Activity,
    onActivitySelect: (node: Activity) => void
}

const nodeTypes = {
    Activities: ActivityGraphNode,
    // group: ActivityGraphGroupNode
};

export const ActivitiesGraph = (props: ActivitiesGraphProps) => {
    const {activities, selectedActivity, onActivitySelect} = props
    const [baseRequirement, setBaseRequirement] = useState<Activity | undefined>(undefined)

    const selectRequirement = useCallback(
      (selected: ActivityId, parent?: ActivityId) => {
        const base = parent ? activities.find((el) => el.identifier === parent) : undefined
        setBaseRequirement(base)
        console.log(selected)
      },
      [activities],
    )
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    useEffect(() => {
      const currentActivities = baseRequirement ? baseRequirement.hasRequirement : activities
      const {nodes, edges} = getNodesAnEdgesOfActivities(currentActivities, baseRequirement, selectRequirement)
      setNodes(nodes)
      setEdges(edges)
    }, [baseRequirement, selectRequirement])

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
          <Controls />
        </ReactFlow>
      </Box>
    )
}

