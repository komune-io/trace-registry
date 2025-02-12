import { Link, LinkProps } from "react-router-dom";
import { useMemo } from "react";
import { MenuItems } from '@komune-io/g2-components'
import { useLocation } from "react-router";
import { AccountCircle, Login, Logout } from "@mui/icons-material";
import { TFunction } from "i18next";
import { GridIcon, useExtendedAuth, useRoutesDefinition, Menu } from "components";
import { g2Config } from "@komune-io/g2";
import { CatalogueRefTree, useCatalogueRefGetTreeQuery } from "domain-components";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { MenuHeader } from "./MenuHeader";

export interface MenuItem extends MenuItems {
  to?: string,
  action?: () => void,
  isVisible?: boolean;
  items?: MenuItem[]
}

export const getMenu = (location: string, menu: MenuItem[]): MenuItems<LinkProps>[] => {
  const finalMenu: MenuItems<LinkProps>[] = []
  menu.forEach((item): MenuItems<LinkProps> | undefined => {
    const additional = item.to ? {
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
      color: 'primary.main',
      onClick: item.onClick,
      isSelected: item.isSelected ?? (item.to ? item.to === "/" ? item.to === location : location.includes(item.to) : false),
      items: item.items ? getMenu(location, item.items) : undefined,
      ...additional
    })
  })
  return finalMenu
}

export const useMenu = (t: TFunction) => {
  const location = useLocation()
  const { i18n } = useTranslation()

  const catalogueRefGetTreeQuery = useCatalogueRefGetTreeQuery({
    query: {
      identifier: "menu",
      language: i18n.language
    },
    options: {
      enabled: true
    }
  })
  const { cataloguesAll } = useRoutesDefinition()
  const secteurMenu = catalogueRefGetTreeQuery.data?.item?.catalogues
    ?.find(value => value.identifier == "100m-sectors")
  const secteurSubMenu = secteurMenu?.catalogues?.map(mapCatalogueRef([secteurMenu.identifier], cataloguesAll))

  const systemMenu = catalogueRefGetTreeQuery.data?.item?.catalogues
    ?.find(value => value.identifier == "100m-systems")
  const systemSubMenu = systemMenu?.catalogues?.map(mapCatalogueRef([systemMenu.identifier], cataloguesAll))


  const menu: MenuItem[] = useMemo(() => {
    return [
      {
        key: "systems",
        to: cataloguesAll(systemMenu?.identifier),
        label: t("systems"),
        icon: <GridIcon />,
        isSelected: location.pathname === "/" || location.pathname.includes(cataloguesAll(systemMenu?.identifier)),
        items: systemSubMenu ?? []
      },
      {
        key: "Secteur",
        to: cataloguesAll(secteurMenu?.identifier),
        label: "Secteur",
        icon: <GridIcon />,
        isSelected: location.pathname.includes(cataloguesAll(secteurMenu?.identifier)),
        items: secteurSubMenu ?? []
      }
    ]
  }, [location, t, catalogueRefGetTreeQuery.data?.item?.catalogues, cataloguesAll])

  return useMemo(() => getMenu(location.pathname, menu), [location.pathname, menu])
}

export const useUserMenu = (logout: () => void, login: () => void, t: TFunction) => {
  const location = useLocation()
  const { service } = useExtendedAuth()
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

const mapCatalogueRef = (currentPaths: string[], cataloguesAll: (tab?: string, ...objectIds: string[]) => string) => (item: CatalogueRefTree): MenuItem => {
  const newPath = [...currentPaths, item.identifier]
  const ref = cataloguesAll(item.identifier, ...currentPaths)
  return {
    key: item.identifier,
    to: ref,
    label: item.title,
    isSelected: location.pathname.includes(ref),
    items: item.catalogues?.map(mapCatalogueRef(newPath, cataloguesAll))
  } as MenuItem
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
      <MenuHeader />
      <Stack
        alignItems="center"
        flexGrow={1}
        overflow="auto"
        width="100%"
      >
        <Menu
          sx={{
            width: "100%"
          }}
          menu={menu}
        />
      </Stack>
    </Stack>
  )
}