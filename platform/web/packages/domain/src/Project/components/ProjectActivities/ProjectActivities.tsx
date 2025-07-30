import { Project } from '../../model'
import 'reactflow/dist/style.css';
import {ActivitiesSection} from "../ActivitiesSection";

export interface ProjectActivitiesProps {
  project: Project
  isLoading?: boolean
}

export const ProjectActivities = (props: ProjectActivitiesProps) => {
  const { isLoading, project } = props
  
  return (
      <ActivitiesSection project={project}  isLoading={isLoading}/>
  )
}
