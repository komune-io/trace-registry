import { config } from "./config";

export const languages = config().languages ?? {
  en: "en-US",
  fr: "fr-FR",
  es: "es-ES"
};
