import { useCallback, useState, useEffect } from 'react';
import { Activity } from "../../model";
import { useOnSelectionChange, OnSelectionChangeFunc, useStoreApi, useNodes } from 'reactflow';
import { ActivitiesSummaryForm } from './ActivitiesSummaryForm';
import { useActivityStepPageQuery } from '../../api';
import { useSearchParams } from 'react-router-dom';

export interface ActivitiesSummaryProps {
  activities: Activity[]
  isLoading?: boolean
}

export const ActivitiesSummary = (props: ActivitiesSummaryProps) => {
  const { isLoading, activities } = props
  const reactFlowStore = useStoreApi();
  let [searchParams, setSearchParams] = useSearchParams();
  const selectedActivity = searchParams.get("selectedActivity")
  const [selectedNode, setSelectedNode] = useState<Activity>(activities[0])
  const nodes = useNodes();

  useEffect(() => {
    if (selectedActivity && selectedNode?.identifier !== selectedActivity && nodes.length !== 0) {
      const { addSelectedNodes } = reactFlowStore.getState()
      addSelectedNodes([selectedActivity])
    }
  }, [selectedActivity, nodes])
  
  const onSelectionChange: OnSelectionChangeFunc = useCallback(
    (params) => {
      const selectedNodes = params.nodes
      console.log(selectedNodes)
      const {getNodes} = reactFlowStore.getState()
      const nodes = getNodes()
      if (nodes.length > 0) {
        const isNodeInTheGraph = nodes.find((el) => el.id === selectedNodes[0]?.id && !selectedNodes[0]?.data?.isAncestor)
        if (isNodeInTheGraph || !selectedNodes[0]) {
          setSelectedNode(selectedNodes[0]?.data?.current);
          if (selectedActivity !== selectedNodes[0]?.data?.current.identifier) {
            setSearchParams(selectedNodes[0] ? { selectedActivity: selectedNodes[0]?.data?.current.identifier } : undefined, {replace: true})
          }
        }
      }
    },
    [selectedActivity, setSearchParams],
  )

  useOnSelectionChange({
    onChange: onSelectionChange,
  });

  const activityStepPageQuery = useActivityStepPageQuery({
    query: {
      requestId: selectedNode?.requestId ?? "",
      activityIdentifier: selectedNode?.identifier ?? "",
      limit: undefined,
      offset: undefined,
    },
    options: {
      enabled: !!selectedNode?.identifier
    }
  })
  const steps = activityStepPageQuery.data?.items ?? []

  return (
    <ActivitiesSummaryForm activity={selectedNode} isLoading={isLoading || activityStepPageQuery.isLoading} steps={steps} />
  )

}
