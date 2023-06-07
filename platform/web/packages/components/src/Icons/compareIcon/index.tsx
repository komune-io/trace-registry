import { ReactComponent } from './compare.svg'
import { SvgIcon, SvgIconProps } from '@mui/material';
export const CompareIcon = (props: SvgIconProps) => {
    const { sx, ...other } = props
    return (
        <SvgIcon
            sx={{
                color: "#284FDB",
                ...sx
            }}
            component={ReactComponent}
            inheritViewBox {...other}
        />
    );
};