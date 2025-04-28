
import { Stack } from '@mui/material';
import { Catalogue } from '../../model'
import { CatalogueDetails } from '../CatalogueDetails'
import { CataloguePresentation } from '../CataloguePresentation';
import { useCatalogueDistributionLexicalEditor } from "../DistributionLexicalEditor";
import { Dataset } from '../../../Dataset';

export interface CatalogueInformationProps {
    catalogue?: Catalogue
    dataset: Dataset
    isLoading?: boolean
}

export const CatalogueInformation = (props: CatalogueInformationProps) => {
    const {
        catalogue,
        isLoading,
        dataset
    } = props

    const {editor, distribution} = useCatalogueDistributionLexicalEditor(catalogue, dataset)

    const withCatalogueMetadata = dataset.structure?.definitions?.withCatalogueMetadata === "true"

    if ((!dataset || !distribution) && !withCatalogueMetadata) return
    return (
        <>
            <CataloguePresentation
                catalogue={catalogue}
                isLoading={isLoading}
            />
            <Stack
                sx={{
                    flexDirection: {
                        xs: "column",
                        sm: "row",
                    },
                }}
                gap={6}
                minWidth={0}
            >
                <Stack
                    gap={5}
                    flexGrow={1}
                >
                    {editor}
                </Stack>
                {withCatalogueMetadata && <CatalogueDetails
                    catalogue={catalogue}
                    isLoading={isLoading}
                />}
            </Stack>

        </>
    )
}