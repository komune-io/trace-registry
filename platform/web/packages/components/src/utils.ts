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
  colors: Record<string, string>
  rotation?: string
  numberFont?: string
  borderRadius?: string
}

export const createObjWithFallbackValue = <T extends {}, F = any>(obj: T, fallback: F) =>
  new Proxy(obj, {
    get: (target, prop) =>
      prop in target ? target[prop] : fallback
  });

export type PathsOfObj<T, Prev extends string = ''> = {
  [K in keyof T]: T[K] extends object
  ? `${Prev}${K & string}` | PathsOfObj<T[K], `${Prev}${K & string}.`>
  : `${Prev}${K & string}`
}[keyof T]