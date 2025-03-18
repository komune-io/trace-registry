
import { type FormEventHandler, useCallback, useMemo, useState } from "react";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { FormComposable, FormComposableField, useFormComposable, validators } from "@komune-io/g2";
import { useTranslation } from "react-i18next";
import { maybeAddItem } from "./LoginConfigTotp.tsx";
import { CustomButton } from "../CustomButton";
import { Typography } from "@mui/material";

export default function LoginOtp(props: PageProps<Extract<KcContext, { pageId: "login-otp.ftl" }>, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

  const { t } = useTranslation()
  const { otpLogin, url, messagesPerField } = kcContext;

  const { msg, msgStr } = i18n;
  const [isAuthenticating, setAuthenticating] = useState(false)

  const formState = useFormComposable({
    formikConfig: {
      initialValues: {
        selectedCredentialId: otpLogin.selectedCredentialId
      }
    }
  })

  const fields = useMemo((): FormComposableField[] => {
    return [...maybeAddItem<FormComposableField>(otpLogin.userOtpCredentials.length > 1, {
      name: "selectedCredentialId",
      type: "radioChoices",
      params: {
        options: otpLogin.userOtpCredentials.map(otpCredential => ({
          key: otpCredential.id,
          label: otpCredential.userLabel,

        }))
      },
    }), {
      name: "otp",
      type: "textField",
      label: msgStr("loginOtpOneTime"),
      validator: validators.requiredField(t)
    }]
  }, [msgStr])

  const onSubmit = useCallback<FormEventHandler<HTMLFormElement>>(async (e) => {
    e.preventDefault();
    setAuthenticating(true);

    const errors = await formState.validateForm()
    if (errors && Object.keys(errors).length > 0) {
      setAuthenticating(false);
      return
    }

    const formElement = e.target as HTMLFormElement;

    formElement.submit();
  }, [formState.validateForm]);


  return (
    <Template
      kcContext={kcContext}
      i18n={i18n}
      doUseDefaultCss={doUseDefaultCss}
      classes={classes}
      displayMessage={!messagesPerField.existsError("totp")}
      headerNode={msg("verifyIdentity")}
    >
      <Typography
      variant="body2"
      >
        {msgStr("loginOtpInfo")}
      </Typography>
      <FormComposable
        sx={{
          "& .AruiActions-Wrapper": {
            justifyContent: "center"
          }
        }}
        fields={fields}
        formState={formState}
        action={url.loginAction}
        method="post"
        onSubmit={onSubmit}
      >
        <CustomButton
          type="submit"
          sx={{
            width: "80%",
            alignSelf: "center",
            mt: 2
          }}
          isLoading={isAuthenticating}
          size="large"
        >
          {msgStr("doLogIn")}
        </CustomButton>
      </FormComposable>
    </Template>
  );
}
