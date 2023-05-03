import { ReactComponent } from './close.svg'
import { SvgIcon, SvgIconProps } from '@mui/material';
export const CloseIcon = (props: SvgIconProps) => {
    const { sx, ...other } = props
    return (
        <SvgIcon
            sx={{
                color: "#676879",
                ...sx
            }}
            component={ReactComponent}
            inheritViewBox {...other}
        />
    );
};