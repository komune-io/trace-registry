import { Link, LinkProps } from "react-router-dom";
import { useMemo } from "react";
import { MenuItems } from '@komune-io/g2-components'
import { useLocation } from "react-router";
import { Login } from "@mui/icons-material";
import { TFunction } from "i18next";
import {useExtendedAuth, useRoutesDefinition, Menu, iconPack, Icon} from "components";
import { CatalogueRefTree, config, useCatalogueRefGetTreeQuery } from "domain-components";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { MenuHeader } from "./MenuHeader";

export interface MenuItem<T = {}> extends MenuItems<T> {
  to?: string,
  action?: () => void,
  isVisible?: boolean;
  number?: number
  items?: MenuItem<T>[]
}

export const getMenu = (location: string, menu: MenuItem[]): MenuItem<LinkProps>[] => {
  const finalMenu: MenuItem<LinkProps>[] = []
  menu.forEach((item): MenuItem<LinkProps> | undefined => {
    const additional = item.to ? {
      component: Link,
      componentProps: {
        to: item.to
      }
    } : {
      goto: item.action
    }
    if (item.isVisible === false) return
    const isSelected = item.isSelected ?? (item.to ? item.to === "/" ? item.to === location : location.includes(item.to) : false)
    finalMenu.push({
      key: `appLayout-${item.key}`,
      label: item.label,
      icon: item.icon,
      color: 'primary.main',
      onClick: item.onClick,
      isSelected: isSelected,
      items: item.items ? getMenu(location, item.items) : undefined,
      number: item .number,
      ...additional
    })
  })
  return finalMenu
}

export const useCatalogueMenu = () => {
  const location = useLocation()
  const { i18n } = useTranslation()
  const {platform} = config()
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
  const catalogues = catalogueRefGetTreeQuery.data?.item?.catalogues ?? []

  const menu: MenuItem[] = useMemo(() => {
    return catalogues.map((item) => {
      const catalogue = item.type == "menu" ? item.catalogues![0] : item

      const baseUrl = platform.url.endsWith('/')
        ? platform.url.slice(0, -1) // remove trailing slash
        : platform.url
      const path = item.img?.startsWith("/")
        ? item.img
        : `/${item.img}`
      const icon = item.img ?
        <Icon src={`${baseUrl}${path}`} /> : iconPack.system
      const items = catalogue.catalogues?.map(mapCatalogueRef([catalogue.identifier], cataloguesAll))
      return {
        key: catalogue.id,
        to: cataloguesAll(catalogue?.identifier!),
        label: item.title,
        icon: icon,
        isSelected: location.pathname === cataloguesAll(catalogue?.identifier!),
        items: items
      }
    })
  }, [catalogues, location.pathname, cataloguesAll])
  return useMemo(() => getMenu(location.pathname, menu), [location.pathname, menu])
}

export const useUserMenu = (logout: () => void, login: () => void, t: TFunction) => {
  const location = useLocation()
  const { service } = useExtendedAuth()
  const adminUrl = config().admin.url
  const loggedMenu: MenuItem[] = useMemo(() => [{
    key: "profil",
    to: `${adminUrl}/myProfil`,
    label: t("administration"),
    icon: iconPack.settings
  }, {
    key: "logout",
    action: logout,
    label: t("logout"),
    icon: iconPack.outArrow
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

const mapCatalogueRef = (currentPaths: string[], cataloguesAll: (...objectIds: string[]) => string) => (item: CatalogueRefTree): MenuItem => {
  const newPath = [...currentPaths, item.identifier]
  const ref = cataloguesAll(...currentPaths, item.identifier)
  const pathWithoutTab = location.pathname
  return {
    key: item.identifier,
    to: ref,
    label: item.title,
    isSelected: pathWithoutTab === ref,
    items: item.catalogues?.map(mapCatalogueRef(newPath, cataloguesAll))
  } as MenuItem
}

export const CustomMenu = () => {
  const menu = useCatalogueMenu()

  return (
    <Stack
      sx={{
        px: 1,
        pb: 2,
        height: "100%"
      }}
    >
      <MenuHeader />
      <Stack
        alignItems="center"
        flexGrow={1}
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