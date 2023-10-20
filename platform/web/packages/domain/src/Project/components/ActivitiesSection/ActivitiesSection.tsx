import { Stack } from '@mui/material'
import 'reactflow/dist/style.css';
import {Activity} from "../../../Activity";
import { ActivitiesSummary, ActivitiesGraph } from "../../../Activity";
import { ReactFlowProvider } from 'reactflow';

export interface ActivitiesSectionProps {
  isLoading?: boolean
  items: Activity[],
}

export const ActivitiesSection = (props: ActivitiesSectionProps) => {
  const { isLoading, items } = props

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
        <ActivitiesSummary isLoading={isLoading} activities={items} />
      </ReactFlowProvider>
    </Stack>
  )
}
