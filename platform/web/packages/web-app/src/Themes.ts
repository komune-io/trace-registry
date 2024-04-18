import { Theme as AruiTheme} from "@komune-io/g2-themes";
import { DeepPartial } from "@komune-io/g2-utils";
import { PermanentHeader } from "components";

export const theme: DeepPartial<AruiTheme> = {// to complete and to use
  colors: {
    primary: "#EDBA27",
    secondary: "#353945",
    background: "#FAF8F3"
  },
   //@ts-ignore
   permanentHeader: PermanentHeader,
   logoUrl: "/trace.png",
   drawerAbsolutePositionBreakpoint: "always"
};
