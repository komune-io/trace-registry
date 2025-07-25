import { Stack } from '@mui/material'
import 'reactflow/dist/style.css';
import { Activity } from "../../../Activity";
import { ActivitiesSummary, ActivitiesGraph } from "../../../Activity";
import { ReactFlowProvider } from 'reactflow';
import { Project } from '../../model';
import { Dataset, useDatasetDataQuery } from '../../../Dataset';

export interface ActivitiesSectionProps {
  isLoading?: boolean
  dataset?: Dataset
  project?: Project
}

export const ActivitiesSection = (props: ActivitiesSectionProps) => {
  const { isLoading, dataset, project } = props

  const fileListQuery = useDatasetDataQuery({ query: { id: dataset?.id! }, options: { enabled: !!dataset } })

  const items = fileListQuery.data?.items as Activity[]

  return (
    <Stack
      direction="row"
      sx={{
        height: "calc(100vh - 200px)",
        minHeight: "fit-content"
      }}
    >
      <ReactFlowProvider>
        <ActivitiesGraph activities={items} />
        <ActivitiesSummary project={project} isLoading={isLoading || fileListQuery.isLoading} activities={items} />
      </ReactFlowProvider>
    </Stack>
  )
}
