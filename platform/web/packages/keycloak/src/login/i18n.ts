import { i18nBuilder } from "keycloakify/login";
import type { ThemeName } from "../kc.gen";

/** @see: https://docs.keycloakify.dev/i18n */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { useI18n, ofTypeI18n } = i18nBuilder
    .withThemeName<ThemeName>()
    .withCustomTranslations({
        en: {
            alphanumericalCharsOnly: "Only alphanumerical characters",
            gender: "Gender",
            // Here we overwrite the default english value for the message "doForgotPassword" 
            // that is "Forgot Password?" see: https://github.com/InseeFrLab/keycloakify/blob/f0ae5ea908e0aa42391af323b6d5e2fd371af851/src/lib/i18n/generated_messages/18.0.1/login/en.ts#L17
            doForgotPassword: "Forgot password ?",
            backToLogin: "Back to login",
            email: "Email",
            resetPasswordInstructions: "Please enter the email address associated with your account. We will send you a link to reset your password.",
            resetPasswordNoEmailInstructions: "If you don't receive an email within a few minutes, please check your spam folder.",
            resetPasswordNote: "Note: Make sure to provide the email address that you used to create your account.",
            resetPasswordSend: "Send reset instructions",
            alreadyHaveAccount: "Already have an account ?",
            signIn: "Sign in",
            signUp: "Sign up",
            registerTitle: "Welcome on board !",
            optionnal: "(optionnal)",
            signInTitle: "Log in to your account",
            dontHaveAccount: "Don't have an account ?",
            proceedWithAction: "Click here to proceed",
            emailNeedValidation: "Your account has been created, a validation email has been sent to your email address. You must validate it before signing in the application.",
            entreprise: "Entreprise",
            whyJoinProgram: "Why do you get involved in Objectif100M ?",
            wantNewsletter: "I accept to receive mails from 100M",
            iReadAndApprouve: "I have read and approved",
            iReadAndAccept: "I have read and accepted the",
            cgu: "general conditions of use",
            and: "and",
            privacyPolicy: "privacy policy",
            charter: "the charter of 100 millions",
            loginTotpStep2: "Open the application and scan the following qr code",
            loginTotpStep3: "Enter the one-time code provided by the application and click Submit to finish the setup.",
            loginTotpManualStep2: "Open the application and enter the following key:",
            loginTotpManualStep3: "Use the following configuration values if the application allows setting them:",
            loginTotpStep3DeviceName: "Provide a Device Name to help you manage your OTP devices.",
            loginTotpScanBarcode: "Scan a qr code instead"
        },
        fr: {
            alphanumericalCharsOnly: "Caractère alphanumérique uniquement:",
            gender: "Genre",
            doForgotPassword: "Mot de passe oublié ?",
            backToLogin: "Retour à la connexion",
            email: "Email",
            resetPasswordInstructions: "Veuillez entrer l'adresse email associé à votre compte. Nous allons vous envoyer un lien pour renouveller votre mot de passe.",
            resetPasswordNoEmailInstructions: "Si vous ne recevez pas un email dans les prochaines minutes, n'oubliez pas de regarder vos spams.",
            resetPasswordNote: "Note: Assurez vous de renseigner l'adresse mail que vous avez utilisé pour créer votre compte.",
            resetPasswordSend: "Envoyer les instructions de renouvellement",
            alreadyHaveAccount: "Vous avez déjà un compte ?",
            signIn: "Se connecter",
            registerTitle: "Bienvenu(e) à bord !",
            optionnal: "(optionnel)",
            signUp: "Je m'inscris",
            signInTitle: "Connexion à votre compte",
            dontHaveAccount: "Vous n'avez pas de compte ?",
            proceedWithAction: "Click here to proceed",
            emailNeedValidation: "Votre compte a été créé, un email de validation a été envoyé à votre adresse email. Vous devez le valider avant de pouvoir vous connecter à l'application.",
            entreprise: "Entreprise",
            whyJoinProgram: "Pourquoi rejoignez vous Objectif100M ?",
            wantNewsletter: "J'accepte de recevoir les emails des 100M",
            iReadAndApprouve: "J’ai lu et j'approuve",
            iReadAndAccept: "J’ai lu et j’accepte les",
            cgu: "conditions générales d’utilisation",
            and: "et",
            privacyPolicy: "la politique de confidentialité",
            charter: "la charte des 100 millions",
            loginTotpStep2: "Ouvrez l'application et scannez le qr code ci-dessous:",
            loginTotpStep3: "Entrez le code à usage unique fourni par l'application et cliquez sur Soumettre pour terminer.",
            loginTotpManualStep2: "Ouvrez l'application et saisissez la clé ci-dessous:",
            loginTotpManualStep3: "Utilisez les valeurs de configuration suivantes si l'application permet leurs éditions:",
            loginTotpStep3DeviceName: "Renseignez le nom de l'appareil pour vous aider à gérer vos appareils OTP.",
            loginTotpScanBarcode: "Scanner un qr code à la place"
        }
    })
    .build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
