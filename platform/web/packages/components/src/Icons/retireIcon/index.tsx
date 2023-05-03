import { ReactComponent } from './retire.svg'
import { SvgIcon, SvgIconProps } from '@mui/material';
export const RetireIcon = (props: SvgIconProps) => {
    const { sx, ...other } = props
    return (
        <SvgIcon
            sx={{
                color: "#F36D25",
                ...sx
            }}
            component={ReactComponent}
            inheritViewBox {...other}
        />
    );
};