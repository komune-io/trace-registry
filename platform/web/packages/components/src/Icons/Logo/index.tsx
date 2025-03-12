import ReactComponent from './logo.svg?react'
import { SvgIcon, SvgIconProps } from '@mui/material';
export const LogoIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon
            component={ReactComponent}
            inheritViewBox {...props}
        />
    );
};