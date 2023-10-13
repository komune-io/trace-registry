import { ReactComponent } from './icon.svg'
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