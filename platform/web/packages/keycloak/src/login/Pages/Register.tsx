// ejected using 'npx eject-keycloak-page'
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { useCallback, useMemo, useState } from "react";
import { Button, FormComposable, FormComposableField, Link, useFormComposable, validators } from "@komune-io/g2";
import { useTranslation } from "react-i18next";
import { Stack, Typography } from "@mui/material";
import { UserOnboardCommand, useUserOnboardCommand } from "../api";

export const Register = (props: PageProps<Extract<KcContext, { pageId: "register.ftl" }>, I18n>) => {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;
    const onBoardCommand = useUserOnboardCommand({})
    const [success, setsuccess] = useState(false)

    const { url, realm } = kcContext;

    const { msg, msgStr } = i18n;

    const { t } = useTranslation()

    const onSubmit = useCallback(
        async (values: UserOnboardCommand) => {
            const res = await onBoardCommand.mutateAsync(values)
            if (res) {
                setsuccess(true)
            }
        },
        [onBoardCommand.mutateAsync],
    )


    const formState = useFormComposable({
        onSubmit
    })

    const fields = useMemo((): FormComposableField/* <keyof UserOnboardCommand> */[] => {
        return [{
            name: "firstName",
            type: "textField",
            label: msgStr("firstName")
        }, {
            name: "lastName",
            type: "textField",
            label: msgStr("lastName"),
        }, {
            name: "entreprise",
            type: "textField",
            label: msgStr("entreprise"),
        }, {
            name: "reason",
            type: "textField",
            label: msgStr("whyJoinProgram"),
            params: {
                multiline: true
            }
        }, {
            name: "email",
            type: "textField",
            label: msgStr("email"),
            params: {
                textFieldType: "email",
            },
            validator: validators.email(t),
        }, {
            name: "password",
            type: "textField",
            label: msgStr("password"),
            params: {
                textFieldType: "password",
            },
            validator: validators.password(t),
        }, {
            name: "cgu",
            type: "checkBox",
            //@ts-ignore
            label: <>
                {msgStr("iReadAndAccept")}{" "}
                <Link>
                {msgStr("cgu")}
                </Link>
                {" "}{msgStr("and")}{" "}
                <Link>
                {msgStr("privacyPolicy")}
                </Link>
            </>,
        }, {
            name: "charte",
            type: "checkBox",
            //@ts-ignore
            label: <>
                {msgStr("iReadAndApprouve")}{" "}
                <Link>
                {msgStr("charter")}
                </Link>
            </>,
        }, {
            name: "newsletter",
            type: "checkBox",
            //@ts-ignore
            label: msgStr("wantNewsletter"),
        }
        ]
    }, [realm, msgStr, t])

    return (
        <Template {...{ kcContext, i18n, doUseDefaultCss, classes }} headerNode={msg("registerTitle")}>
            {success && <Typography
                variant="subtitle2"
            >
                {msgStr("emailNeedValidation")}
            </Typography>}
            <FormComposable
                fields={fields}
                formState={formState}
                sx={{
                    "& .MuiFormControlLabel-root": {
                        flexDirection: "row-reverse",
                        justifyContent: "space-between",
                        width: "100%"
                    }
                }}
            />
            <Stack
                gap={2}
                alignItems="center"
            >
                <Button
                    onClick={formState.submitForm}
                    disabled={success}
                    sx={{
                        width: "90%",
                    }}
                    size="large"
                >
                    {msgStr("signUp")}
                </Button>
                <Link
                    variant="body2"
                    href={url.loginUrl}
                    sx={{
                        color: "#828282",
                        textDecoration: "unset !important"
                    }}
                >
                    {`${msgStr("alreadyHaveAccount")} `}
                    <span
                        style={{
                            textDecoration: "underline"
                        }}
                    >
                        {msgStr("signIn")}
                    </span>
                </Link>
            </Stack>
        </Template>
    );
}