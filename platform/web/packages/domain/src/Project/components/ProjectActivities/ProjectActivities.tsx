import { Project } from '../../model'
import 'reactflow/dist/style.css';
import { useActivityPageQuery } from "../../../Activity";
import {ActivitiesSection} from "../ActivitiesSection";

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
      <ActivitiesSection items={activities} isLoading={isLoading}/>
  )
}
