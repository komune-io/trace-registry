import {PageRoute} from "App/routes";
import {ProjectList} from "./ProjectList/ProjectList";
import {ProjectView} from "./ProjectView/ProjectView";
import {TransactionView} from "./TransactionView/TransactionView";

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
  },
  {
    path: "projects/:projectId/transactions/:transactionId/view",
    element: <TransactionView />
  }
]
