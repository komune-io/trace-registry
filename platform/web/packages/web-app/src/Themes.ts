import { Theme as AruiTheme } from "@komune-io/g2-themes";
import { DeepPartial } from "@komune-io/g2-utils";
import { ThemeOptions } from "@mui/material";
import { LocalTheme, PermanentHeader, config, createObjWithFallbackValue } from "components";
import { createBreakpoints } from "@mui/system";

export const theme: DeepPartial<AruiTheme<LocalTheme>> = {// to complete and to use
  colors: {
    primary: config().theme?.colors?.primary ?? "#000000",
    secondary: config().theme?.colors?.secondary ?? "#353945",
    background: config().theme?.colors?.background ?? "#FFFFFF",
  },
  permanentHeader: PermanentHeader,
  logoUrl: config()?.theme?.logo?.url ?? "/logo.svg",
  shadows: [
    "none",
    config().theme?.shadow ?? "0px 4px 8px 0px #E4DEE7",
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
  local: {
    colors: createObjWithFallbackValue(config().theme?.colors?.local ?? {
      solution: "#F9DC44",
      project: "#EEBBFD",
      system: "#D0E9A7",
      sector: "#A3BDFD"
    }, "#E6E5E0") ,
    rotation: config().theme?.rotation,
    numberFont: config().theme?.numberFont,
    borderRadius: config().theme?.borderRadius
  }
};

const breakpoints = createBreakpoints({});

export const muiTheme: Partial<ThemeOptions> = {
  typography: {
    fontFamily: config().theme?.font ?? '"Degular", roboto, sans-serif',
    allVariants: {
      fontWeight: 400,
      color: "#000000",
    },
    body1: {
      fontSize: "1.125rem",
      whiteSpace: "pre-line"
    },
    body2: {
      fontSize: "0.938rem",
      whiteSpace: "pre-line"
    },
    caption: {
      fontSize: "0.813rem",
      whiteSpace: "pre-line"
    },
    subtitle1: {
      fontSize: "1.188rem",
      whiteSpace: "pre-line"
    },
    subtitle2: {
      fontSize: "1rem",
      whiteSpace: "pre-line"
    },
    button: {
      fontSize: "1rem",
      fontWeight: 700
    },
    h1: {
      fontSize: "3.25rem",
      [breakpoints.down("md")]: {
        fontSize: "2.625rem",
      },
      fontWeight: 700
    },
    h2: {
      fontSize: "3rem",
      [breakpoints.down("md")]: {
        fontSize: "2.3rem",
      },
      fontWeight: 700
    },
    h3: {
      fontSize: "2.625rem",
      [breakpoints.down("md")]: {
        fontSize: "2rem",
      },
      fontWeight: 700
    },
    h4: {
      fontSize: "2rem",
      [breakpoints.down("md")]: {
        fontSize: "1.7rem",
      },
      fontWeight: 700
    },
    h5: {
      fontSize: "1.375rem",
      fontWeight: 700
    },
    h6: {
      fontSize: "1.2rem",
      fontWeight: 700
    }
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        }
      }
    },
  }

}
