import { Theme as AruiTheme } from "@komune-io/g2-themes";
import { DeepPartial } from "@komune-io/g2-utils";
import { ThemeOptions } from "@mui/material";

export type LocalTheme = {
  rotation: string
}

export const theme: DeepPartial<AruiTheme<LocalTheme>> = {// to complete and to use
  colors: {
    primary: "#000000",
    secondary: "#353945",
    background: "#FFFFFF",
  },
  logoUrl: "/logo.svg",
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
  local: {
    rotation: "rotate(-2deg)"
  }
};

export const muiTheme: Partial<ThemeOptions> = {
  typography: {
    fontFamily: '"Degular", roboto, sans-serif',
    allVariants: {
      fontWeight: 400,
      color: "#000000"
    },
    body1: {
      fontSize: "1.125rem",
    },
    body2: {
      fontSize: "0.938rem",
    },
    caption: {
      fontSize: "0.813rem",
    },
    subtitle1: {
      fontSize: "1.188rem",
    },
    subtitle2: {
      fontSize: "1rem",
    },
    button: {
      fontSize: "1rem",
      fontWeight: 700
    },
    h1: {
      fontSize: "3.25rem",
      fontWeight: 700
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 700
    },
    h3: {
      fontSize: "2.625rem",
      fontWeight: 700
    },
    h4: {
      fontSize: "2rem",
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
    }
  }

}
