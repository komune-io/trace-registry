import { Stack } from '@mui/material'
import { Project } from '../../model'
import 'reactflow/dist/style.css';
import { useActivityPageQuery } from "../../../Activity";
import { ActivitiesSummary, ActivitiesGraph } from "../../../Activity";
import { ReactFlowProvider } from 'reactflow';

export interface ProjectActivitiesProps {
  project: Project
  isLoading?: boolean
}

export const ProjectActivities = (props: ProjectActivitiesProps) => {
  const { isLoading, project } = props
  const activityPageQuery = useActivityPageQuery({
    query: {
      projectId: project.id,
      limit: undefined,
      offset: undefined,
    }
  })
  const activities = activityPageQuery.data?.items ?? []
  
  return (
    <Stack
      direction="row"
      sx={{
        height: "calc(100vh - 200px)",
        minHeight: "fit-content"
      }}
    >
      <ReactFlowProvider>
        <ActivitiesGraph activities={activities} />
        <ActivitiesSummary isLoading={isLoading} activities={activities} />
      </ReactFlowProvider>
    </Stack>
  )
}
