import { StandAloneAppLayout } from "@komune-io/g2";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import { CustomMenu, useUserMenu } from "./menu";
import { useMemo } from "react";
import { useExtendedAuth } from "components";

export const App = () => {
  const { t } = useTranslation()
  const { service, keycloak } = useExtendedAuth()
  const user = useMemo(() => service.getUser(), [service.getUser])
  const { loggedMenu, notLoggedMenu } = useUserMenu(keycloak.logout,  keycloak.login, t)
  
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

      scrollableContent={<CustomMenu />}
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
    >
      <Outlet />
    </StandAloneAppLayout>
  )
};

