import { SvgIconProps } from "@mui/material"
import { PngIconProps } from "../PngIcon"
import { iconPack100m, iconPackSrc100m } from "./100mIconPack"
import { iconPackGeco, iconPackSrcGeco } from "./gecoIconPack"
import { config } from "../../config"
import { createObjWithFallbackValue } from "../../utils"

export type IconComponent = (props: PngIconProps | SvgIconProps) => JSX.Element

export type IconPackType = Record<keyof typeof iconPackSrc100m | keyof typeof iconPackSrcGeco, IconComponent>

const configIconpack = config().theme?.iconPack === "geco" ? iconPackGeco : iconPack100m

export const IconPack = createObjWithFallbackValue(configIconpack, () => <></>) as IconPackType
