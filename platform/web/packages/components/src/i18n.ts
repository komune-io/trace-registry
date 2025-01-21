import { useI18n } from "@komune-io/g2";

export interface Languages {
  en: string;
  fr: string
  es: string
}

export const languages: Languages = {
  en: "en-US",
  fr: "fr-FR",
  es: "es-ES"
};

export const useExtendedI18n = () => {
  return useI18n<Languages>();
};
