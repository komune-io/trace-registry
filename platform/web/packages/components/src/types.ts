import React from 'react'

export type MergeReactElementProps<
  T extends React.ElementType,
  P extends object = {}
> = Omit<React.ComponentPropsWithRef<T>, keyof P> & P

export type RecordRouteCamelCase<Keys extends string, Types = any> = {
  [K in Keys as K extends string
    ? ReplaceAll<ReplaceAllByCamelCase<ReplaceAllByCamelCase<ReplaceAllByCamelCase<K, ":">, "/">, "?">, "*", "All">
    : K]: Types;
};

export type ReplaceAllByCamelCase<
  S extends string,
  ToReplace extends string
> = ToReplace extends ""
  ? never
  : S extends `${infer Head}${ToReplace}${infer Tail}`
  ? `${Head}${Capitalize<ReplaceAllByCamelCase<Tail, ToReplace>>}`
  : S;

  export type ReplaceAll<
  S extends string,
  ToReplace extends string,
  replacer extends string
> = ToReplace extends ""
  ? never
  : S extends `${infer Head}${ToReplace}${infer Tail}`
  ? `${Head}${replacer}${Capitalize<ReplaceAll<Tail, ToReplace, replacer>>}`
  : S;


  export const insertObjectIdsInsideRoutes = <Routes extends string = string>(
    route: Routes,
    ...objectIds: string[]
  ) => {
    const splitted = route.replaceAll("?", "").split("/");
    let objectIdsIndex = 0;
  
    return splitted
      .map((str) => {
        if (str.startsWith(":")) {
          if (objectIds[objectIdsIndex]) {
            const id = objectIds[objectIdsIndex];
            objectIdsIndex++;
            return id;
          }
          return undefined
        }
        if (str.startsWith("*")) {
          const ids = objectIds.slice(objectIdsIndex);
          return ids.join("/");
        }
        return str;
      })
      .filter((element) => element != undefined && element !== "")
      .join("/");
  };
  