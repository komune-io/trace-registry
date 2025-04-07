import { SxProps, Theme } from "@mui/material";

export const maybeAddItem = <T,>(condition: boolean, item: T): T[] => {
  return condition ? [item] : [];
}
export const maybeAddItems = <T,>(condition: boolean, items: T[]): T[] => {
  return condition ? items : [];
}

export const addLineClampStyles = (lineClamp: number): SxProps<Theme> => {
  return {
      WebkitLineClamp: lineClamp,
      lineClamp: lineClamp,
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
  }
};

export type LocalTheme = {
  colors: {
    solution: string
    project: string
    system: string
    sector: string
  }
  rotation: string
}