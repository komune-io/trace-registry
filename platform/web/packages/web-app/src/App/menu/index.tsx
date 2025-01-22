import { Link, LinkProps } from "react-router-dom";
import { useMemo } from "react";
import { MenuItems } from '@komune-io/g2-components'
import { useLocation } from "react-router";
import { AccountCircle, Login, Logout, TravelExplore } from "@mui/icons-material";
import { TFunction } from "i18next";
import { StandardIcon, useExtendedAuth, useRoutesDefinition, Wco2Menu } from "components";
import { g2Config } from "@komune-io/g2";
import { useCatalogueRefGetTreeQuery, useFlagGetQuery } from "domain-components";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

interface MenuItem {
  key: string,
  to?: string,
  action?: () => void,
  label: string
  icon: JSX.Element;
  isVisible?: boolean;
  isSelected?: boolean;
}

export const getMenu = (location: string, menu: MenuItem[]): MenuItems<LinkProps>[] => {
  const finalMenu: MenuItems<LinkProps>[] = []
  menu.forEach((item): MenuItems<LinkProps> | undefined => {
    const additionals = item.to ? {
      component: Link,
      componentProps: {
        to: item.to
      }
    } : {
      goto: item.action
    }
    if (item.isVisible === false) return
    finalMenu.push({
      key: `appLayout-${item.key}`,
      label: item.label,
      icon: item.icon,
      isSelected: item.isSelected ?? (item.to ? item.to === "/" ? item.to === location : location.includes(item.to) : false),
      ...additionals
    })
  })
  return finalMenu
}

export const useMenu = (t: TFunction) => {
  const location = useLocation()
  const flagGetQuery = useFlagGetQuery()


  const module = useMemo(() => {
    return flagGetQuery.data?.module ?? {
      project: false,
      data: false,
      control: false,
      identity: false
    }
  }, [flagGetQuery.data])

  const catalogueRefGetTreeQuery = useCatalogueRefGetTreeQuery({
    query: {
      identifier: "menuWikiCoe",
      language: "fr"
    },
    options: {
      // enabled: module.data
      enabled: true
    }
  })
  const {projects, cataloguesAll} = useRoutesDefinition()

  const menu: MenuItem[] = useMemo(() => {
    return [
      ...maybeAddItem(/* module.project */ true, {
        key: "project",
        to: projects(),
        label: t("exploreProjects"),
        icon: <TravelExplore />,
        isSelected: location.pathname === "/" || location.pathname.includes(projects())
      }),
      {
        key: "system",
        to: cataloguesAll(),
        label: t("system"),
        icon: <TravelExplore />,
        isSelected: location.pathname === "/" || location.pathname.includes(cataloguesAll()),
        items: catalogueRefGetTreeQuery.data?.item?.catalogues?.map((item) => {
          const ref = cataloguesAll(undefined, item.identifier)
          return {
            key: item.identifier,
            to: ref,
            label: item.title,
            icon: <StandardIcon/>,
            isSelected: location.pathname.includes(ref)
          } as MenuItem
    
        }) ?? []
      }
    ]
  }, [module.project, projects, location, t, catalogueRefGetTreeQuery.data?.item?.catalogues, cataloguesAll])

  return useMemo(() => getMenu(location.pathname, menu), [location.pathname, menu])
}

export const useUserMenu = (logout: () => void, login: () => void, t: TFunction) => {
  const location = useLocation()
  const {service} = useExtendedAuth()
  // @ts-ignore
  const adminUrl = g2Config().admin.url
  const loggedMenu: MenuItem[] = useMemo(() => [{
    key: "profil",
    to: `${adminUrl}/myProfil`,
    label: t("profil"),
    icon: <AccountCircle />
  }, {
    key: "logout",
    action: logout,
    label: t("logout"),
    icon: <Logout />
  }], [logout, t])

  const notLoggedMenu: MenuItem[] = useMemo(() => [{
    key: "login",
    action: login,
    label: t("login"),
    icon: <Login />
  }], [Login, t, service.hasUserRouteAuth])

  return {
    loggedMenu: useMemo(() => getMenu(location.pathname, loggedMenu), [location.pathname, loggedMenu]),
    notLoggedMenu: useMemo(() => getMenu(location.pathname, notLoggedMenu), [location.pathname, notLoggedMenu])
  }
}

export const maybeAddItem = <T,>(condition: boolean, item: T): T[] => {
  return condition ? [item] : [];
}

export const maybeAddItems = <T,>(condition: boolean, items: T[]): T[] => {
  return condition ? [...items] : [];
}

export const CustomMenu = () => {
  const { t } = useTranslation()
  const menu = useMenu(t)

  return (
      <Stack
          sx={{
              gap: 2,
              px: 0,
              pb: 2,
              height: "100%"
          }}
      >
          <Stack
              alignItems="center"
              flexGrow={1}
              overflow="auto"
              width="100%"
          >
                  <Wco2Menu
                      sx={{
                          width: "100%"
                      }}
                      menu={menu}
                  />
          </Stack>
      </Stack>
  )
}