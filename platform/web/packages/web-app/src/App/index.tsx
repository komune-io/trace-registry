import { StandAloneAppLayout } from "@komune-io/g2";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import { AppMenu, ConfigMenu, useUserMenu } from "./menu";
import { useEffect, useMemo } from "react";
import { languages, useExtendedAuth } from "components";
import { Footer } from "template";

export const App = () => {
  const { t, i18n } = useTranslation()
  const { service, keycloak } = useExtendedAuth()
  const user = useMemo(() => service.getUser(), [service.getUser])
  const { loggedMenu, notLoggedMenu } = useUserMenu(keycloak.logout, () => keycloak.login("/"), t)

  useEffect(() => {
    if (!Object.keys(languages).includes(i18n.language)) {
      i18n.changeLanguage(Object.keys(languages)[0])
    }
  }, [i18n.language])

  return (
    <StandAloneAppLayout
      defaultCloseButton={false}
      defaultOpenButton={false}
      drawerProps={{
        sx: {
          "& .MuiListItemButton-root.Mui-selected": {
            background: "none",
            color: "primary.main"
          },
          "& .MuiListItemButton-root.Mui-selected .MuiListItemIcon-root": {
            color: "primary.main"
          },
          "& .MuiListItemButton-root": {
            color: "secondary.main"
          },
          "& .MuiListItemButton-root .MuiListItemIcon-root": {
            color: "secondary.main"
          }
        }
      }}

      scrollableContent={<AppMenu />}
      bottomContent={<ConfigMenu />}
      userMenuProps={{
        currentUser: user ? {
          givenName: user.firstName ?? "",
          familyName: user.lastName ?? "",
          role: ""
        } : undefined,
        loggedMenu,
        notLoggedMenu,
        defaultOpen: true
      }}
      mainProps={{
        sx: {
          paddingBottom: "100px",
          zIndex: -10,
          position: "absolute",
          bgcolor: 'background.default',
        }
      }}
    >
      <Outlet />
      <Footer />
    </StandAloneAppLayout>
  )
};

