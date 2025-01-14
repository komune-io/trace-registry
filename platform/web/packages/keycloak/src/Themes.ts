import { Theme as AruiTheme } from "@komune-io/g2-themes";
import { DeepPartial } from "@komune-io/g2-utils";
import { ThemeOptions } from "@mui/material";

export const theme: DeepPartial<AruiTheme> = {// to complete and to use
  colors: {
    //@ts-ignore
    primary: window._env_?.theme?.primaryColor ?? "#492161",
    secondary: "#EDF5F1",
    background: "#FAF8F3"
  },
};

export const muiTheme: Partial<ThemeOptions> = {
  typography: {
    fontFamily: '"Lexend", sans-serif',
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
    },
    button: {
      fontWeight: 400,
    }
  },
}
