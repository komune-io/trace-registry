import { g2Config, useTheme } from '@komune-io/g2'
import {Box, Stack} from '@mui/material'
import { ContentIllustrated, LocalTheme } from 'components'
import {
    CatalogueBreadcrumbs,
    Catalogue,
    SubCatalogueGrid, useCatalogueDistributionLexicalEditor,
} from 'domain-components'
import { AppPage } from 'template'


interface MosaicCatalogueEntryPointProps {
    catalogue: Catalogue
}

export const MosaicCatalogueEntryPoint = (props: MosaicCatalogueEntryPointProps) => {
    const { catalogue } = props
    const theme = useTheme<LocalTheme>()
    const distributionLexicalEditor = useCatalogueDistributionLexicalEditor(catalogue)
    return (
        <AppPage
          title={catalogue?.title ?? ""}
          sx={{
              paddingBottom: "90px"
          }}
        >
            <CatalogueBreadcrumbs/>
            <ContentIllustrated
              title={catalogue?.title ?? ""}
              description={catalogue?.description ?? ""}
              illustration={catalogue?.img ? g2Config().platform.url + catalogue?.img : undefined}
              color={theme.local?.colors.solution}
            />
            <Box
              alignSelf="center"
              padding={5}
              maxWidth="700px"
            >
                {distributionLexicalEditor.editor}
            </Box>
            <Stack
              gap={5}
            >
                {catalogue?.identifier && <SubCatalogueGrid
                  catalogue={catalogue}
                  parentIds={[catalogue?.identifier]}
                />}
            </Stack>
        </AppPage>
    )
}
