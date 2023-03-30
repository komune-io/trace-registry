import { Stack } from '@mui/material'
import { Project } from '../../model'
import 'reactflow/dist/style.css';
import {useState} from 'react';
import {activitiesExample, Activity, useActivityPageQuery, useActivityStepPageQuery} from "../../../Activity";
import {ActivitiesSummary, ActivitiesGraph} from "../../../Activity";

export interface ProjectActivitiesProps {
    project: Project
    isLoading?: boolean
}

export const ProjectActivities = (props: ProjectActivitiesProps) => {
    const {isLoading, project} = props
    const activities = activitiesExample
    const [selectedNode, setSelectedNode] = useState<Activity>(activities[0])
    console.log(setSelectedNode)
    const activityPageQuery = useActivityPageQuery({
      query: {
        projectId: project.id,
        limit: undefined,
        offset: undefined,
      }
    })

    const activityStepPageQuery = useActivityStepPageQuery({
      query: {
        activityId: project.id,
        limit: undefined,
        offset: undefined,
      }
    })

  console.log(activityPageQuery.data?.items)
  console.log(activityStepPageQuery.data?.items)

  return (
      <Stack
          direction="row"
          sx={{
              height: "calc(100vh - 200px)",
              minHeight: "fit-content"
          }}
      >
          <ActivitiesGraph activities={activities} selectedActivity={selectedNode} onActivitySelect={setSelectedNode}/>
          <ActivitiesSummary isLoading={isLoading} activity={selectedNode} steps={[]}/>
      </Stack>
  )
}
