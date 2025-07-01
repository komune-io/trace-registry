import { g2Config, useTheme } from '@komune-io/g2'
import {Box, Stack} from '@mui/material'
import { ContentIllustrated, LocalTheme, useExtendedAuth } from 'components'
import {
    CatalogueBreadcrumbs,
    Catalogue,
    SubCatalogueGrid, useCatalogueDistributionLexicalEditor,
    CreateDraftButton,
} from 'domain-components'
import { AppPage } from 'template'


interface MosaicCatalogueEntryPointProps {
    catalogue: Catalogue
}

export const MosaicCatalogueEntryPoint = (props: MosaicCatalogueEntryPointProps) => {
    const { catalogue } = props
    const theme = useTheme<LocalTheme>()
    const {policies} = useExtendedAuth()
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
              actions={<CreateDraftButton catalogue={catalogue} canCreate={policies.catalogue.canUpdate(catalogue)} />}
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
                {catalogue?.id && <SubCatalogueGrid
                  catalogue={catalogue}
                  parentIds={[catalogue?.id]}
                />}
            </Stack>
        </AppPage>
    )
}
