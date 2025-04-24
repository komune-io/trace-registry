import {SearchRounded, DoneRounded, FolderOpen, Settings, LogoutRounded, DeleteRounded, ContentPaste} from "@mui/icons-material"
import { SvgIconProps } from '@mui/material';
import { IconComponent } from "..";

export const iconPackSrcGeco = {
    search: SearchRounded,
    validate: DoneRounded,
    settings: Settings,
    contribution: ContentPaste,
    outArrow: LogoutRounded,
    trash: DeleteRounded,
    folder: FolderOpen,
} as const

type IconPackGeco  = Record<keyof typeof iconPackSrcGeco, IconComponent>;

export const iconPackGeco = Object.keys(iconPackSrcGeco).reduce<IconPackGeco>(
    (obj, key) => ({ ...obj, [key]: (props: SvgIconProps) => {
        const Icon = iconPackSrcGeco[key as keyof typeof iconPackSrcGeco]
        return <Icon {...props} />
    } }
    ), {} as IconPackGeco);
