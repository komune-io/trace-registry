import { useCallback, useState, useEffect, useMemo } from 'react';
import { Activity } from "../../model";
import { useOnSelectionChange, OnSelectionChangeFunc, useStoreApi, useNodes } from 'reactflow';
import { useActivityStepPageQuery } from '../../api';
import { useParams, useSearchParams } from 'react-router-dom';
import {isDynastyInGraph} from "../../graph";
import {ActivitiesStepSummary} from "../ActivityStepSummary/ActivitiesStepSummary";

export interface ActivitiesSummaryProps {
  activities: Activity[]
  isLoading?: boolean
}

export const ActivitiesSummary = (props: ActivitiesSummaryProps) => {
  const { isLoading, activities } = props
  const reactFlowStore = useStoreApi();
  const [searchParams, setSearchParams] = useSearchParams();
  const { "*": splat } = useParams();
  const activityDinasty = useMemo(() => !!splat ? splat.split("/") : undefined, [splat])
  const selectedActivity = searchParams.get("selectedActivity")
  const [selectedNode, setSelectedNode] = useState<Activity>(activities[0])
  const nodes = useNodes();

  useEffect(() => {
    //This useEffect will select the node saved in the url if not already selected
    if (selectedActivity && selectedNode?.identifier !== selectedActivity && nodes.length !== 0) {
      const { addSelectedNodes } = reactFlowStore.getState()
      addSelectedNodes([selectedActivity])
    }
  }, [selectedActivity, nodes])
  
  const onSelectionChange: OnSelectionChangeFunc = useCallback(
    (params) => {
      const selectedNodes = params.nodes
      const {getNodes} = reactFlowStore.getState()
      const nodes = getNodes()
      if (nodes.length > 0 && isDynastyInGraph(nodes, activityDinasty)) { //we change the selection only if the graph has loaded the correct graph wanted in the url
        const isNodeInTheGraph = nodes.find((el) => el.id === selectedNodes[0]?.id && !selectedNodes[0]?.data?.isAncestor)
        if (isNodeInTheGraph || !selectedNodes[0]) {//we change the selection only if the node is in the graph or unselect
          setSelectedNode(selectedNodes[0]?.data?.current);
          if (selectedActivity !== selectedNodes[0]?.data?.current.identifier) { //we change the url only if it is different
            setSearchParams(selectedNodes[0] ? { selectedActivity: selectedNodes[0]?.data?.current.identifier } : undefined, {replace: true})
          }
        }
      }
    },
    [selectedActivity, setSearchParams, activityDinasty],
  )

  useOnSelectionChange({
    onChange: onSelectionChange,
  });

  const activityStepPageQuery = useActivityStepPageQuery({
    query: {
      certificationIdentifier: selectedNode?.certification?.identifier ?? "",
      activityIdentifier: selectedNode?.identifier ?? "",
      limit: undefined,
      offset: undefined,
    },
    options: {
      enabled: !!selectedNode?.identifier
    }
  })

  const isactivityStepPageQueryLoading = activityStepPageQuery.isLoading && !!selectedNode?.identifier
  const steps = activityStepPageQuery.data?.items ?? []
  return (
    <ActivitiesStepSummary activity={selectedNode} isLoading={isLoading || isactivityStepPageQueryLoading} steps={steps} />
  )
}
