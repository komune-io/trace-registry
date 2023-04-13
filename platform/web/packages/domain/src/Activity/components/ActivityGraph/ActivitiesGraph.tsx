import { Box } from '@mui/material'
import { ReactFlow, Background, useEdgesState, useNodesState, Controls, ReactFlowInstance, OnSelectionChangeFunc } from "reactflow"
import 'reactflow/dist/style.css';
import {
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import { Activity, ActivityId } from "../../model";
import { ActivityGraphNode } from "../ActivityGraphNode";
import { getNodesAnEdgesOfActivities } from "../../graph";
import { useNavigate, useParams } from 'react-router-dom';
import { useRoutesDefinition } from 'components';

export interface ActivitiesGraphProps {
  activities: Activity[],
  onActivitySelect: (node: Activity) => void
}

const nodeTypes = {
  Activity: ActivityGraphNode,
  // group: ActivityGraphGroupNode
};

export const ActivitiesGraph = (props: ActivitiesGraphProps) => {
  const { activities, onActivitySelect } = props
  const { projectsProjectIdViewTabAll } = useRoutesDefinition()
  const navigate = useNavigate()
  let { "*": splat, projectId } = useParams();
  const activityDinasty = useMemo(() => splat?.split("/"), [splat])
  

  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | undefined>(undefined)
  const onInit = useCallback((reactFlowInstance: ReactFlowInstance) => setReactFlowInstance(reactFlowInstance), [])

  const selectRequirement = useCallback(
    (_: ActivityId, parent?: ActivityId) => {
      const navigateActivities = (ids?: string[]) => navigate(projectsProjectIdViewTabAll(projectId!, "activities", ...(ids ?? [])))
      const base = parent ? activities.find((el) => el.identifier === parent) : undefined
      if (base && activityDinasty){
        const parentIndexOnDynasty = activityDinasty?.findIndex((el) => el === base.identifier )
        if (parentIndexOnDynasty) {
          navigateActivities(activityDinasty.slice(0, parentIndexOnDynasty))
        } else {
          navigateActivities([...activityDinasty, base.identifier])
        }
      } else if (base) {
        navigateActivities([base.identifier])
      } else {
        navigateActivities()
      }
    },
    [activities, projectId, activityDinasty],
  )
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    const currentActivities = baseRequirement ? baseRequirement.hasRequirement : activities
    const { nodes, edges } = getNodesAnEdgesOfActivities(currentActivities, baseRequirement, selectRequirement)
    setNodes(nodes)
    setEdges(edges)
    // TODO Find a better way to auto fit the view after the graph is rendered
    setTimeout(() => {
      reactFlowInstance && reactFlowInstance.fitView()
    }, 500)
  }, [activityDinasty, selectRequirement, activities])

  const onSelectionChange: OnSelectionChangeFunc = useCallback(
    (params) => {
      const { nodes } = params
      onActivitySelect(nodes[0]?.data?.current);
    },
    [],
  )
  

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
        onInit={onInit}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        onSelectionChange={onSelectionChange}
        fitView
        attributionPosition="bottom-right"
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

