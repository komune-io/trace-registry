import project from './project.png';
import sector from './sector.png';
import system from './system.png';
import solution from './solution.png';
import search from './search.png';
import validate from './validate.png';
import contribution from './contribution.png';
import settings from './settings.png';
import outArrow from './outArrow.png';
import trash from "./trash.png";
import folder from "./folder.png"
import loading from "./loading.png"
import { Icon, PngIconProps } from "../../PngIcon";
import { IconComponent } from '..';

export const iconPackSrc100m = {
    project,
    sector,
    system,
    solution,
    search,
    validate,
    contribution,
    settings,
    outArrow,
    trash,
    folder,
    loading
} as const

type IconPack100m = Record<keyof typeof iconPackSrc100m, IconComponent>

export const iconPack100m = Object.keys(iconPackSrc100m).reduce<IconPack100m>(
    (obj, key) => ({ ...obj, [key]: (props: PngIconProps) => <Icon src={iconPackSrc100m[key as keyof typeof iconPackSrc100m]} {...props} /> }
    ), {} as IconPack100m);
