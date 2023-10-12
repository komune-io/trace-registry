import { NoMatchPage, Router } from "@smartb/g2";
import { Route, useParams, useSearchParams } from "react-router-dom";
import { Routes, useExtendedAuth } from "components";
import { App } from "App";
import { registryPages } from "App/pages/router";
import {useMemo} from "react"
import { catalogPages } from "App/pages/Catalogue";



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
      // <PrivateElement route={path}>
      //   {element}
      // </PrivateElement>
      element
    } />
  )
}

export const PrivateElement = (props: { route: Routes, children: JSX.Element }) => {
  const { service } = useExtendedAuth()
  const { userId, organizationId } = useParams()
  const [searchParams] = useSearchParams()
  if (!service.hasUserRouteAuth({ route: props.route, authorizedUserId: searchParams.get("userId") ?? userId, authorizedUserOrgId: searchParams.get("organizationId") ?? organizationId })) return <NoMatchPage />
  return props.children;
}