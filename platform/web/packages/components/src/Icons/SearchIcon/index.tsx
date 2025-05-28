import ReactComponent from './search.svg?react'
import { SvgIcon, SvgIconProps } from '@mui/material';
export const SearchIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon
            component={ReactComponent}
            inheritViewBox {...props}
            
        />
    );
};