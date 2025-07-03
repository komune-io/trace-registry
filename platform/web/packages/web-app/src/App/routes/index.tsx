import { getIn, NoMatchPage, Router } from "@komune-io/g2";
import { Route } from "react-router-dom";
import { Routes, strictRoutesAuthorizations, useExtendedAuth } from "components";
import { App } from "App";
import { registryPages } from "App/pages/router";
import {useMemo} from "react"
import { catalogPages } from "App/pages/data";


const allPages: PageRoute[] = [...registryPages, ...catalogPages]

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
    <Route key={path} path={path} element={
      <PrivateElement route={path}>
        {element}
      </PrivateElement>
    } />
  )
}

export const PrivateElement = (props: { route: Routes, children: JSX.Element }) => {
  const { policies } = useExtendedAuth()

  const policyPath = strictRoutesAuthorizations[props.route]

  const policy: (() => boolean) | undefined = getIn(policies, policyPath)

  const canEnter = policyPath === "open" ? true : policy ? policy() : false;

  if (!canEnter) return <NoMatchPage />
  return props.children;
}