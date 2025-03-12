export const maybeAddItem = <T,>(condition: boolean, item: T): T[] => {
  return condition ? [item] : [];
}

export type LocalTheme = {
  colors: {
    solution: string
    project: string
    system: string
    sector: string
  }
  rotation: string
}