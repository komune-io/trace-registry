/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

interface SvgrComponent
  extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const svgUrl: string
  const svgComponent: SvgrComponent
  export default svgUrl
  export { svgComponent as ReactComponent }
}

declare module '*.png' {
  const value: any
  export = value
}

declare module '*.jpg' {
  const value: any
  export = value
}

declare module '*.JPG' {
  const value: any
  export = value
}

declare module '*.pdf' {
  const value: any
  export = value
}

declare type Nullable<T> = T | undefined;
declare type Array<T> = T[];
declare namespace kotlin.collections {
  type List<T> = T[];
}
declare namespace kotlin {
  type Long = number;
}

declare module "react-pdf/dist/esm/entry.webpack5" {
  import {Document as _Document, Page as _Page, PageProps, DocumentProps} from "react-pdf"
  function componentWithChildren<Props>(Component: React.ComponentType<Props>) {
    return Component as React.ComponentType<Props>;
  }
  const Document = componentWithChildren<DocumentProps>(_Document);
  const Page = componentWithChildren<PageProps>(_Page);

  export const {Document, Page}
}

declare module "react-pdf" {
  import {Document as _Document, Page as _Page, PageProps, DocumentProps} from "react-pdf"
  function componentWithChildren<Props>(Component: React.ComponentType<Props>) {
    return Component as React.ComponentType<Props>;
  }
  const Document = componentWithChildren<DocumentProps>(_Document);
  const Page = componentWithChildren<PageProps>(_Page);

  const pdfjs: any

  export const {Document, Page, pdfjs}
}