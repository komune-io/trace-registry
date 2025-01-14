import { Suspense, lazy, useEffect } from "react";
import type { ClassKey } from "keycloakify/login";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import DefaultPage from "keycloakify/login/DefaultPage";
import DefaultTemplate from "keycloakify/login/Template";
import {Info, Login, Register, ResetPassword, UpdatePassword} from "./Pages";
import Template from "./Template"
import { useTranslation } from "react-i18next";
const UserProfileFormFields = lazy(
    () => import("keycloakify/login/UserProfileFormFields")
);

const doMakeUserConfirmPassword = true;

export default function KcPage(props: { kcContext: KcContext }) {
    const { kcContext } = props;

    const { i18n } = useI18n({ kcContext });
    const {i18n: g2I18n } = useTranslation()

    useEffect(() => {
        if (i18n.currentLanguage.languageTag !== g2I18n.language) {
            g2I18n.changeLanguage(i18n.currentLanguage.languageTag)
        }

    }, [i18n.currentLanguage, g2I18n.language])

    return (
        <Suspense>
            {(() => {
                switch (kcContext.pageId) {
                    case "login.ftl": return <Login {...{ kcContext, i18n, classes }} Template={Template} doUseDefaultCss={true} />
                    case "login-reset-password.ftl": return <ResetPassword {...{ kcContext, i18n, Template, classes }} doUseDefaultCss={true} />;
                    case "login-update-password.ftl": return <UpdatePassword {...{ kcContext, i18n, Template, classes }} doUseDefaultCss={true} />;
                    case "register.ftl": return <Register {...{ kcContext, i18n, Template, classes }} doUseDefaultCss={true} />;
                    case "info.ftl": return <Info {...{ kcContext, i18n, Template, classes }} doUseDefaultCss={true} />;
                    default:
                        return (
                            <DefaultPage
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classes}
                                Template={DefaultTemplate}
                                doUseDefaultCss={true}
                                UserProfileFormFields={UserProfileFormFields}
                                doMakeUserConfirmPassword={doMakeUserConfirmPassword}
                            />
                        );
                }
            })()}
        </Suspense>
    );
}

const classes = {} satisfies { [key in ClassKey]?: string };
