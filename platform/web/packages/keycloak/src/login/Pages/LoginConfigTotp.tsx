
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import {type FormEventHandler, useCallback, useMemo, useState} from "react";
import {Action, FormComposable, FormComposableField, useFormComposable, validators} from "@komune-io/g2";
import {useTranslation} from "react-i18next";
import {Stack} from "@mui/material";

export default function LoginConfigTotp(props: PageProps<Extract<KcContext, { pageId: "login-config-totp.ftl" }>, I18n>) {
  const {kcContext, i18n, doUseDefaultCss, Template, classes} = props;

  const [isAuthenticating, setAuthenticating] = useState(false)
  const {url, isAppInitiatedAction, totp, mode, messagesPerField} = kcContext;

  const {msg, msgStr} = i18n;
  const {t} = useTranslation()

  const initialValues = useMemo(() => ({
    mode: mode,
  }), [mode, totp])


  const formState = useFormComposable({
    formikConfig: {
      initialValues
    }
  })

  const actions = useMemo((): Action[] => {
    return [{
      key: "logIn",
      label: msgStr("doSubmit"),
      type: "submit",
      sx: {
        width: "90%",
        alignSelf: "center",
        mt: 1
      },
      isLoading: isAuthenticating,
      size: "large"
    },...maybeAddItem<Action>(!!isAppInitiatedAction,{
      key: "cancelTOTPBtn",
      label: msgStr("doCancel"),
      type: "submit",
      sx: {
        width: "90%",
        alignSelf: "center",
        mt: 1
      },
      value: "true",
      isLoading: isAuthenticating,
      size: "large"
    })]
  }, [isAuthenticating, msgStr])


  const fields = useMemo((): FormComposableField[] => {
    return [{
      name: "totp",
      type: "textField",
      label: msgStr("authenticatorCode"),
      validator: validators.requiredField(t)
    }, {
      name: "totpSecret",
      type: "hidden"
    }, ...maybeAddItem<FormComposableField>(!!mode, {
      name: "mode",
      type: "hidden"
    }), {
      name: "userLabel",
      type: "textField",
      label: msgStr("loginTotpDeviceName"),
    }, {
      name: "logout-sessions",
      type: "checkBox",
      label: msgStr("logoutOtherSessions"),
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
      headerNode={msg("loginTotpTitle")}
      displayMessage={!messagesPerField.existsError("totp", "userLabel")}
    >
      <Stack sx={{
        "ol": {
          marginTop: 0,
          marginBottom: 0
        }
      }}>
        <LoginConfigTotpDocs i18n={i18n} kcContext={kcContext} />
        <FormComposable
          sx={{
            "& .AruiActions-Wrapper": {
              justifyContent: "center"
            }
          }}
          fields={fields}
          formState={formState}
          actions={actions}
          action={url.loginAction}
          method="post"
          onSubmit={onSubmit}
        />
      </Stack>
    </Template>
  );
}

interface LoginConfigTotpDocsProps {
  i18n: I18n;
  kcContext: Extract<KcContext, { pageId: "login-config-totp.ftl" }>;
}

const LoginConfigTotpDocs = (props: LoginConfigTotpDocsProps) => {
  const {i18n, kcContext} = props;

  const {totp, mode} = kcContext;
  const {msg, advancedMsg} = i18n;
  return (
    <ol id="kc-totp-settings">
      <li>
        <p>{msg("loginTotpStep1")}</p>
        <ul id="kc-totp-supported-apps">
          {totp.supportedApplications.map(app => (
            <li key={app}>{advancedMsg(app)}</li>
          ))}
        </ul>
      </li>

      {mode == "manual" ? (
        <>
          <li>
            <p>{msg("loginTotpManualStep2")}</p>
            <p>
              <span id="kc-totp-secret-key">{totp.totpSecretEncoded}</span>
            </p>
            <p>
              <a href={totp.qrUrl} id="mode-barcode">
                {msg("loginTotpScanBarcode")}
              </a>
            </p>
          </li>
          <li>
            <p>{msg("loginTotpManualStep3")}</p>
            <ul>
              <li id="kc-totp-type">
                {msg("loginTotpType")}: {msg(`loginTotp.${totp.policy.type}`)}
              </li>
              <li id="kc-totp-algorithm">
                {msg("loginTotpAlgorithm")}: {totp.policy.getAlgorithmKey()}
              </li>
              <li id="kc-totp-digits">
                {msg("loginTotpDigits")}: {totp.policy.digits}
              </li>
              {totp.policy.type === "totp" ? (
                <li id="kc-totp-period">
                  {msg("loginTotpInterval")}: {totp.policy.period}
                </li>
              ) : (
                <li id="kc-totp-counter">
                  {msg("loginTotpCounter")}: {totp.policy.initialCounter}
                </li>
              )}
            </ul>
          </li>
        </>
      ) : (
        <li>
          <p>{msg("loginTotpStep2")}</p>
          <img id="kc-totp-secret-qr-code" src={`data:image/png;base64, ${totp.totpSecretQrCode}`}
               alt="Figure: Barcode"/>
          <br/>
          <p>
            <a href={totp.manualUrl} id="mode-manual">
              {msg("loginTotpUnableToScan")}
            </a>
          </p>
        </li>
      )}
      <li>
        <p>{msg("loginTotpStep3")}</p>
        <p>{msg("loginTotpStep3DeviceName")}</p>
      </li>
    </ol>
  )
}

export const maybeAddItem = <T, >(condition: boolean, item: T): T[] => {
  return condition ? [item] : [];
}
