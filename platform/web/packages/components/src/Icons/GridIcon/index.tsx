import ReactComponent from './icon.svg?react'
import { SvgIcon, SvgIconProps } from '@mui/material';
export const GridIcon = (props: SvgIconProps) => {
    const { sx, ...oter } = props
    return (
        <SvgIcon
            sx={{
                fill: "none",
                ...sx
            }}
            component={ReactComponent}
            inheritViewBox {...oter}
        />
    );
};