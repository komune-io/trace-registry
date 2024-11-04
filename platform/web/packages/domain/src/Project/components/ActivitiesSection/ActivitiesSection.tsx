import { Stack } from '@mui/material'
import 'reactflow/dist/style.css';
import {Activity} from "../../../Activity";
import { ActivitiesSummary, ActivitiesGraph } from "../../../Activity";
import { ReactFlowProvider } from 'reactflow';
import { Project } from '../../model';

export interface ActivitiesSectionProps {
  isLoading?: boolean
  items: Activity[]
  project?: Project
}

export const ActivitiesSection = (props: ActivitiesSectionProps) => {
  const { isLoading, items, project } = props

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
        <ActivitiesSummary project={project} isLoading={isLoading} activities={items} />
      </ReactFlowProvider>
    </Stack>
  )
}
