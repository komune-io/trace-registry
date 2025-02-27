export const maybeAddItem = <T,>(condition: boolean, item: T): T[] => {
    return condition ? [item] : [];
  }