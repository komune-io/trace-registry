import { typeIcons, typeIconsColor } from "./images";
import { useMemo } from "react";
import { TFunction } from "i18next";
import { Option } from "@smartb/g2";
import { Box, Stack, StackProps, SvgIcon, SvgIconProps, Typography, TypographyProps } from "@mui/material";
import { useTranslation } from "react-i18next";

export interface ProjectTypeIconProps extends SvgIconProps {
  projectType: number
}

const ProjectTypeIcon = (props: ProjectTypeIconProps) => {
  const { projectType, ...other } = props;
  const Component = useMemo(() => typeIcons[projectType - 1], [projectType]);
  if (!projectType || projectType < 1 || projectType > 25) return <> </>;
  return (
    <SvgIcon component={Component} inheritViewBox {...other} />
  );
};

export interface ProjectTypeProps extends StackProps {
  color?: string,
  projectType: number
  iconProps?: SvgIconProps,
  labelProps?: TypographyProps
  size?: "small" | "large" | "medium",
}

export const ProjectType = (props: ProjectTypeProps) => {
  const { projectType, color, iconProps, labelProps, size = "small" } = props
  const { t } = useTranslation()
  return (
    <Stack
      gap={1}
      direction="row"
      alignItems="center"
    >
      <Box
        sx={{
          background: color ?? typeIconsColor[projectType - 1],
          borderRadius: "50%",
          padding: size === "small" ? "7px" : size === "medium" ? "9px" : "11px",
          display: "flex"
        }}
      >
        <ProjectTypeIcon projectType={projectType} fontSize={size} {...iconProps} />
      </Box>
      <Typography variant="body2" {...labelProps} >{t(`projects.types.${projectType}`)}</Typography>
    </Stack>
  )
}


export const getProjectTypesOptions = (t: TFunction) => typeIcons.map((_, index): Option => ({
  key: index + 1,
  label: t(`projects.types.${index + 1}`),
  icon: <ProjectTypeIcon projectType={index + 1} fontSize="small" />
}))
