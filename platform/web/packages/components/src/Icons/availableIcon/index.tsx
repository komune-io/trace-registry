import { ReactComponent } from './available.svg'
import { SvgIcon, SvgIconProps } from '@mui/material';
export const AvailableIcon = (props: SvgIconProps) => {
    const { sx, ...other } = props
    return (
        <SvgIcon
            sx={{
                color: "#159D50",
                ...sx
            }}
            component={ReactComponent}
            inheritViewBox {...other}
        />
    );
};