import {PageRoute} from "App/routes";
import {ProjectList, ProjectView} from "./Project";
import {TransactionView} from "./Transaction/TransactionView/TransactionView";
import {TransactionList} from "./Transaction/TransactionList/TransactionList";
import { ProjectCreate } from "./Project/ProjectCreate/ProjectCreate";

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
    path: "projects/create/:step",
    element: <ProjectCreate />
  },
  {
    path: "projects/:projectId/transactions/:transactionId/view",
    element: <TransactionView />
  },
  {
    path: "transactions",
    element: <TransactionList />
  },
  {
    path: "transactions/:transactionId",
    element: <TransactionView />
  },
]
