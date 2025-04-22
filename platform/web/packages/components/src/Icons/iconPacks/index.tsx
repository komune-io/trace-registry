import { SvgIconProps } from "@mui/material"
import { PngIconProps } from "../PngIcon"
import { iconPack100m, iconPackSrc100m } from "./100mIconPack"
import { iconPackGeco, iconPackSrcGeco } from "./gecoIconPack"

export type IconComponent = (props: PngIconProps | SvgIconProps) => JSX.Element

export type IconPackType = Record<keyof typeof iconPackSrc100m | keyof typeof iconPackSrcGeco, IconComponent>

const createObjWithFallbackValue = <T extends {}>(obj: T, fallback: IconComponent) =>
    new Proxy(obj, {
      get: (target, prop) =>
        prop in target ? target[prop] : fallback
    });

export const IconPack = createObjWithFallbackValue(iconPackGeco, () => <></>) as IconPackType
