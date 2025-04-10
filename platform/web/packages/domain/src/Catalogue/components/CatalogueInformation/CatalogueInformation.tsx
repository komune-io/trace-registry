
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

    const {editor} = useCatalogueDistributionLexicalEditor(catalogue, dataset)

    return (
        <>
            <CataloguePresentation
                catalogue={catalogue}
                isLoading={isLoading}
            />
            <Stack
                direction="row"
                gap={6}
                minWidth={0}
            >
                <Stack
                    gap={5}
                    flexGrow={1}
                >
                    {editor}
                </Stack>
                {dataset.structure?.definitions?.withCatalogueMetadata === "true" && <CatalogueDetails
                    catalogue={catalogue}
                    isLoading={isLoading}
                />}
            </Stack>

        </>
    )
}