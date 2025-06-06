import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { useMemo, useCallback, type FormEventHandler, useState } from "react";
import { FormComposableField, useFormComposable, FormComposable, validators } from "@komune-io/g2";
import { useTranslation } from "react-i18next";
import { CustomButton } from "../CustomButton";

export const LoginUpdatePassword = (props: PageProps<Extract<KcContext, { pageId: "login-update-password.ftl" }>, I18n>) => {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const [isLoading, setIsLoading] = useState(false)

    const { url, realm, auth, isAppInitiatedAction } = kcContext;

    const { msg, msgStr } = i18n;
    const { t } = useTranslation()

    const initialValues = useMemo(() => ({
        email: auth?.showUsername ? auth?.attemptedUsername : undefined,
    }), [auth])

    const formState = useFormComposable({
        formikConfig: {
            initialValues
        }
    })

    const fields = useMemo((): FormComposableField[] => {
        return [{
            name: "password",
            type: "textField",
            label: msgStr("passwordNew"),
            params: {
                textFieldType: "password",
            },
            validator: validators.password(t)
        }, {
            name: "password-confirm",
            type: "textField",
            label: msgStr("passwordConfirm"),
            params: {
                textFieldType: "password",
            },
            validator: validators.passwordCheck(t),
        }]
    }, [realm, msgStr, t])

    const onSubmit = useCallback<FormEventHandler<HTMLFormElement>>(async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const errors = await formState.validateForm()
        if (errors && Object.keys(errors).length > 0) {
            setIsLoading(false);
            return
        }

        const formElement = e.target as HTMLFormElement;

        //NOTE: Keycloak expect password-new
        formElement.querySelector("input[name='password']")?.setAttribute("name", "password-new");

        formElement.submit();
    }, [formState.validateForm]);

    return (
        <Template
            {...{ kcContext, i18n, doUseDefaultCss, classes }}
            headerNode={msg("updatePasswordTitle")}
        >
            <FormComposable
                fields={fields}
                formState={formState}
                action={url.loginAction}
                method="post"
                onSubmit={onSubmit}
            >
                {isAppInitiatedAction && (
                    <CustomButton
                        type="submit"
                        sx={{
                            width: "80%",
                            alignSelf: "center",
                            mt: 1
                        }}
                        isLoading={isLoading}
                        name="cancel-aia"
                        value="true"
                        size="large"
                        variant="text"
                    >
                        {msgStr("doCancel")}
                    </CustomButton>
                )}
                <CustomButton
                    type="submit"
                    sx={{
                        width: "80%",
                        alignSelf: "center",
                        mt: 2
                    }}
                    isLoading={isLoading}
                    size="large"
                    disabled={isAppInitiatedAction}
                >
                    {msgStr("doRegister")}
                </CustomButton>
                
            </FormComposable>
        </Template>
    );
}