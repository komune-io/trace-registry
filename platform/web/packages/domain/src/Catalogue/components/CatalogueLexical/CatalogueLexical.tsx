import {Catalogue, useCatalogueDistributionLexicalEditor} from "domain-components";
import { Box, BoxProps } from "@mui/material";

interface CatalogueLexicalProps extends BoxProps {
  catalogue: Catalogue
}

export const CatalogueLexical = (props: CatalogueLexicalProps) => {
  const { catalogue, ...boxProps } = props
  const {editor} = useCatalogueDistributionLexicalEditor(catalogue)
  return (<Box {...boxProps}>{editor}</Box>)
}