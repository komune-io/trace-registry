import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { KcPage } from "./kc.gen";

// The following block can be uncommented to test a specific page with `yarn dev`
// Don't forget to comment back or your bundle size will increase

import { getKcContextMock } from "./login/KcPageStory";
import { AlertHub, AppProvider, G2ConfigBuilder, initI18next, ThemeContextProvider } from "@komune-io/g2";
import { muiTheme, theme } from "./Themes";
import { QueryClient } from "@tanstack/react-query";

//@ts-ignore
G2ConfigBuilder(window._env_)

if (import.meta.env.DEV) {
    window.kcContext = getKcContextMock({
        pageId: "register.ftl",
        overrides: {
            locale: {
                currentLanguageTag: "fr"
            }
        }
    });
}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 86400000 //stale time set to one day
        }
    }
})

const i18n = initI18next({ en: "en-US", fr: 'fr-FR' })
i18n.addResourceBundle(
    'fr',
    'translation',
    {
        http: {
            backendErrors: {
                "2000": "L'email indiqué correspont déjà à un compte existant",
                "2002": "L'entreprise que vous avez rentré est déjà intégré dans la plateforme"
            },
            errors: {
                "identity/userOnboard": "Votre compte n'a pas pu être créé",
            },
            success: {
                "identity/userOnboard": "Votre compte a bien été créé",
            }
        }
    },
    true,
    false
)

i18n.addResourceBundle(
    'en',
    'translation',
    {
        http: {
            backendErrors: {
                "2000": "The  L'email utilisatn correspont déjà à un compte existant",
                "2002": "The given entreprise is already incorporated in the platform"
            },
            errors: {
                "identity/userOnboard": "Votre compte n'a pas pu être créé",
            },
            success: {
                "identity/userOnboard": "Votre compte a bien été créé",
            }
        }
    },
    true,
    false
)

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {!window.kcContext ? (
            <h1>No Keycloak Context</h1>
        ) : (
            <ThemeContextProvider theme={theme} customMuiTheme={muiTheme} >
                <AlertHub>
                    <AppProvider i18nOverride={i18n} queryClient={queryClient}>
                        <KcPage kcContext={window.kcContext} />
                    </AppProvider>
                </AlertHub >
            </ThemeContextProvider>

        )}
    </StrictMode>
);
