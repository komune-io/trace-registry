import  ReactComponent from './icon.svg?react'
import { SvgIcon, SvgIconProps } from '@mui/material';
export const StandardIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon
  
            component={ReactComponent}
            inheritViewBox 
            {...props}
        />
    );
};