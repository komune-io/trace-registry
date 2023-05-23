import {ReactComponent} from './icon.svg'
import {SvgIcon, SvgIconProps} from '@mui/material';

export const DownloadIcon = (props: SvgIconProps) => {
    const { sx, ...other } = props
    return (
        <SvgIcon
            sx={{
                color: "white",
                ...sx
            }}
            component={ReactComponent}
            inheritViewBox {...other}
        />
    );
};