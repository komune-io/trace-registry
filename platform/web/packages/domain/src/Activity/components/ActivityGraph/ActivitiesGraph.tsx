import { Box } from '@mui/material'
import { ReactFlow, Background, useEdgesState, useNodesState, Controls, useReactFlow } from "reactflow"
import 'reactflow/dist/style.css';
import {
  useCallback,
  useEffect,
  useMemo
} from 'react';
import { Activity, ActivityId } from "../../model";
import { ActivityGraphNode } from "../ActivityGraphNode";
import { getActivitiesOfDinasty, getNodesAnEdgesOfActivities } from "../../graph";
import { useNavigate, useParams } from 'react-router-dom';
import { useRoutesDefinition } from 'components';

export interface ActivitiesGraphProps {
  activities: Activity[],
}

const nodeTypes = {
  Activity: ActivityGraphNode,
};

export const ActivitiesGraph = (props: ActivitiesGraphProps) => {
  const { activities } = props
  const { projectsProjectIdViewTabAll } = useRoutesDefinition()
  const navigate = useNavigate()
  let { "*": splat, projectId } = useParams();
  const activityDinasty = useMemo(() => !!splat ? splat.split("/") : undefined, [splat])
  const reactFlowInstance = useReactFlow();

  const navigateActivities = useCallback(
    (ids?: string[], selectedId?: string) => {
      navigate(projectsProjectIdViewTabAll(projectId!, "activities", ...(ids ?? [])) + (selectedId ? "?selectedActivity=" + selectedId : ""))
    },
    [projectId],
  )

  const selectRequirement = useCallback(
    (targetId: ActivityId, parent?: ActivityId) => {
      const base = parent ? activities.find((el) => el.identifier === parent) : undefined
      if (base && activityDinasty){
        const parentIndexOnDynasty = activityDinasty?.findIndex((el) => el === base.identifier )
        if (parentIndexOnDynasty) {
          navigateActivities(activityDinasty.slice(0, parentIndexOnDynasty), targetId)
        } else {
          navigateActivities([...activityDinasty, base.identifier], targetId)
        }
      } else if (base) {
        navigateActivities([base.identifier], targetId)
      } else {
        navigateActivities()
      }
    },
    [activities, projectId, activityDinasty, navigateActivities],
  )
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    if (activities.length === 0) return 
    const current = getActivitiesOfDinasty(activities, activityDinasty)
    if (current.fixedDynasty != undefined) {
      navigateActivities(current.fixedDynasty)
      return 
    }
    const { nodes, edges } = getNodesAnEdgesOfActivities(current.activities, current.ancestors, selectRequirement)
    setNodes(nodes)
    setEdges(edges)
    setTimeout(() => {
      reactFlowInstance.fitView({nodes: nodes.filter((node) => !node.data.isAncestor)})
    }, 300);
  }, [activityDinasty, selectRequirement, activities, navigateActivities])
  

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

