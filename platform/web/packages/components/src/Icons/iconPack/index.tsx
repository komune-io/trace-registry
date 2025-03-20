import project from './project.png';
import home from './home.png';
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
import { Icon } from "../PngIcon";

export const iconPackSrc = {
    project,
    home,
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

type IconPack = Record<keyof typeof iconPackSrc, JSX.Element>;

export const iconPack = Object.keys(iconPackSrc).reduce<IconPack>(
    (obj, key) => ({ ...obj, [key]: <Icon src={iconPackSrc[key as keyof typeof iconPackSrc]} /> }
    ), {} as IconPack);
