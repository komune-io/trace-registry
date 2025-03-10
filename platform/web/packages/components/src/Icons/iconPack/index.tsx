import caseStudy from './caseStudy.png';
import home from './home.png';
import sector from './sector.png';
import system from './system.png';
import solution from './solution.png';
import search from './search.png';
import validate from './validate.png';
import contribution from './contribution.png';
import { PngIcon } from './PngIcon';

export const iconPackSrc = {
    caseStudy,
    home,
    sector,
    system,
    solution,
    search,
    validate,
    contribution,
} as const

type IconPack = Record<keyof typeof iconPackSrc, JSX.Element>;

export const iconPack = Object.keys(iconPackSrc).reduce<IconPack>(
    (obj, key) => ({ ...obj, [key]: <PngIcon src={iconPackSrc[key as keyof typeof iconPackSrc]} /> }
    ), {} as IconPack);

export { PngIcon } from './PngIcon';