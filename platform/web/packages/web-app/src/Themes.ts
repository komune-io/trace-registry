import { Theme as AruiTheme } from "@komune-io/g2-themes";
import { DeepPartial } from "@komune-io/g2-utils";
import { ThemeOptions } from "@mui/material";
import { PermanentHeader } from "components";


export const theme: DeepPartial<AruiTheme> = {// to complete and to use
  colors: {
    //@ts-ignore
    primary: window._env_?.theme?.primaryColor ?? "#492161",
    secondary: "#353945",
    //@ts-ignore
    background: window._env_?.theme?.backgroundColor ?? "#F6F4F7",
  },
  permanentHeader: PermanentHeader,
  logoUrl: "/logo.png",
  shadows: [
    "none", 
    "0px 4px 8px 0px #E4DEE7",
    '0px 5px 12px rgba(0, 0, 0, 0.21)',
    '0px 6px 16px rgba(0, 0, 0, 0.22)',
    '0px 7px 20px rgba(0, 0, 0, 0.23)',
    '0px 8px 24px rgba(0, 0, 0, 0.24)',
    '0px 9px 28px rgba(0, 0, 0, 0.25)',
    '0px 10px 32px rgba(0, 0, 0, 0.26)',
    '0px 11px 36px rgba(0, 0, 0, 0.27)',
    '0px 12px 40px rgba(0, 0, 0, 0.28)',
    '0px 13px 44px rgba(0, 0, 0, 0.29)',
    '0px 14px 48px rgba(0, 0, 0, 0.3)',
    '0px 15px 52px rgba(0, 0, 0, 0.31)'
  ],
  bgColorOnMenu: true,
};

export const muiTheme: Partial<ThemeOptions> = {
  typography: {
    fontFamily: '"Lexend", roboto, sans-serif',
    allVariants: {
      fontWeight: 400,
      color: "#13151a"
    },
    subtitle1: {
      lineHeight: 1.5
    },
    subtitle2: {
      lineHeight: 1.43
    },
    caption: {
      lineHeight: 1.35
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: "8px !important"
        }
      },

    }
  }

}
