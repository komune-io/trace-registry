import { g2Config, useTheme } from '@komune-io/g2'
import { Stack, Box } from '@mui/material'
import { ContentIllustrated, LocalTheme, RichtTextEditor } from 'components'
import {
    CatalogueBreadcrumbs,
    Catalogue,
    SubCatalogueGrid,
    useLexicalDownloadDistribution,
} from 'domain-components'
import { AppPage } from 'template'

interface MosaicCatalogueEntryPointProps {
    catalogue: Catalogue
}

export const MosaicCatalogueEntryPoint = (props: MosaicCatalogueEntryPointProps) => {
    const { catalogue } = props
    const theme = useTheme<LocalTheme>()

    const {
        query,
        dataSet
    } = useLexicalDownloadDistribution(catalogue)

    return (
        <AppPage
            title={catalogue?.title ?? ""}
            sx={{
                paddingBottom: "90px"
            }}
        >
            <CatalogueBreadcrumbs />
            <ContentIllustrated
                title={catalogue?.title ?? ""}
                description={catalogue?.description ?? ""}
                illustration={catalogue?.img ? g2Config().platform.url + catalogue?.img : undefined}
                color={theme.local?.colors.solution}
            />
            {dataSet?.distribution.mediaType === "text/markdown" && query.data &&
                <Box
                    alignSelf="center"
                    padding={5}
                    maxWidth="700px"
                >
                    <RichtTextEditor markdown={query.data} readOnly />
                </Box>
            }
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
