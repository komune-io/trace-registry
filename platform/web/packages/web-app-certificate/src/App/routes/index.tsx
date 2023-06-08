import { Router } from "@smartb/g2";
import { Route } from "react-router-dom";
import { Routes } from "components";
import { App } from "App";
import {useMemo} from "react"
import {registryPages} from "../pages/router";

const allPages: PageRoute[] = [...registryPages]

export const AppRouter = () => {
  const pages = useMemo(() => allPages.map((page) => GenerateRoute(page)), [])
  return (
    <Router>
      <Route path="/" element={<App />} >
        {pages}
      </Route >
    </Router>
  );
};

export interface PageRoute {
  path: Routes
  element: JSX.Element
}

export const GenerateRoute = (props: PageRoute) => {
  const { element, path } = props
  return (
    <Route key={path} path={path} element={element} />
  )
}
