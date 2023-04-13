import { typeIcons } from "./images";
import { useMemo } from "react";
import { TFunction } from "i18next";
import { Option } from "@smartb/g2";
import { SvgIcon, SvgIconProps } from "@mui/material";

export type Size = "small" | "medium" | "large" | "extraLarge";

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


export const getSdgsOptions = (t: TFunction) => typeIcons.map((_, index): Option => ({
  key: index + 1,
  label: t(`projects.types.${index + 1}`),
  icon: <ProjectTypeIcon projectType={index + 1} fontSize="small" />
}))
