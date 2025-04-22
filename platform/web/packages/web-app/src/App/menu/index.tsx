import { Link, LinkProps } from "react-router-dom";
import { useMemo } from "react";
import { MenuItems } from '@komune-io/g2-components'
import { useLocation  } from "react-router";
import { Login } from "@mui/icons-material";
import { TFunction } from "i18next";
import {useExtendedAuth, Menu, IconPack} from "components";
import {config} from "domain-components";
import { Stack } from "@mui/material";
import { MenuHeader } from "./MenuHeader";
import {useCatalogueMenu} from "./useCatalogueMenu";

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

export const useUserMenu = (logout: () => void, login: () => void, t: TFunction) => {
  const location = useLocation()
  const { service } = useExtendedAuth()
  const adminUrl = config().admin.url
  const loggedMenu: MenuItem[] = useMemo(() => [{
    key: "profil",
    to: `${adminUrl}/myProfil`,
    label: t("administration"),
    icon: <IconPack.settings />
  }, {
    key: "logout",
    action: logout,
    label: t("logout"),
    icon: <IconPack.outArrow />
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

export const AppMenu = () => {
  const menu = useCatalogueMenu("menu")

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
export const ConfigMenu = () => {
  const menuConfig = useCatalogueMenu("menu-config")

  return (
    <Stack
      sx={{
        px: 1,
        pb: 2,
      }}
    >
      <Stack
        alignItems="bottom"
        flexGrow={1}
        width="100%"
      >
        <Menu
          sx={{
            width: "100%"
          }}
          menu={menuConfig}
        />
      </Stack>
    </Stack>
  )
}
