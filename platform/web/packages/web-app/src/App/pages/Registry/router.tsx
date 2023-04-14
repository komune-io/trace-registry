import { PageRoute } from "App/routes";
import { ProjectList } from "./ProjectList/ProjectList";
import { ProjectView } from "./ProjectView/ProjectView";


export const registryPages: PageRoute[] = [
  {
    path: "",
    element: <ProjectList />
  },
  {
    path: "projects",
    element: <ProjectList />
  },
  {
    path: "projects/:projectId/view/:tab?/*",
    element: <ProjectView />
  }
]
