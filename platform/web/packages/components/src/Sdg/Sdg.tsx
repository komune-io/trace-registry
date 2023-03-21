import { sdgIcons } from "./images";
import { useTranslation } from "react-i18next";
import { Tooltip } from "@smartb/g2-notifications";
import { styled } from '@mui/material/styles';
import React from "react";

export type Size = "small" | "medium" | "large" | "extraLarge";

export interface SdgProps {
  sdgId: number;
  className?: string;
  size?: Size;
  noTooltip?: boolean;
}

const SdgBase = (props: SdgProps) => {
  const { sdgId, className, size = "medium", noTooltip = false } = props;
  const { t } = useTranslation();
  if (!sdgId || sdgId < 1 || sdgId > 17) return <> </>;
  return (
    <Tooltip open={noTooltip ? false : undefined} helperText={t(`sdg.${sdgId}`)}>
      <StyledSdg
        sdgId={sdgId}
        sx={
          size === "small"
            ? { width: "25px", height: "25px" }
            : size === "medium"
            ? { width: "30px", height: "30px" }
            : size === "large"
            ? { width: "40px", height: "40px" }
            : { width: "55px", height: "55px" }
        }
        className={className}
      />
    </Tooltip>
  );
};

export const Sdg = styled(SdgBase)({});

type Props = React.ComponentPropsWithRef<"svg"> & { sdgId: number };

const SdgSvg = React.forwardRef((props: Props, ref: React.Ref<SVGSVGElement>) => {
  const { sdgId, ...other } = props;
  const Component = sdgIcons[sdgId - 1];
  return <Component ref={ref} {...other} />;
});

const StyledSdg = styled(SdgSvg)({});
