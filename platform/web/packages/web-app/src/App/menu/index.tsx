import { Link, LinkProps } from "react-router-dom";
import { useMemo } from "react";
import { MenuItems } from '@smartb/g2-components'
import { useLocation } from "react-router";
import {AccountCircle, Login, Logout, TravelExplore} from "@mui/icons-material";
import { TFunction } from "i18next";
import { StandardIcon, useExtendedAuth, useRoutesDefinition } from "components";

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
    const {service} = useExtendedAuth()
    const {projects, catalogs} = useRoutesDefinition()
    const menu: MenuItem[] = useMemo(() => [
     {
        key: "Registry",
        to: projects(),
        label:  t("exploreProjects"),
        icon: <TravelExplore />,
        isSelected: location.pathname === "/" || location.pathname.includes(projects())
    },{
        key: "catalogs",
        to: catalogs(),
        label:  t("exploreStandards"),
        icon: <StandardIcon />,
        isSelected: location.pathname.includes(catalogs())
    }], [t, service.hasUserRouteAuth, location.pathname])
    return useMemo(() => getMenu(location.pathname, menu), [location.pathname, menu])
}

export const useUserMenu = (logout: () => void, login: () => void, t: TFunction) => {
    const location = useLocation()
    const {service} = useExtendedAuth()
    const loggedMenu: MenuItem[] = useMemo(() => [{
        key: "profil",
        to: "https://dev.connect.smart-b.io/myProfil",
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

