import {PageRoute} from "App/routes";
import {LandingPage} from "./LandingPage/LandingPage";
import {TransactionView} from "./Transaction/TransactionView/TransactionView";

export const registryPages: PageRoute[] = [
  {
    path: "",
    element: <LandingPage />
  },
  {
    path: "transactions/:transactionId",
    element: <TransactionView />
  }
]

