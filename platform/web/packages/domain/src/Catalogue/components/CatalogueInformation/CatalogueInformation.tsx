
import { Stack } from '@mui/material';
import { Catalogue } from '../../model'
import { CatalogueDetails } from '../CatalogueDetails'
import { CataloguePresentation } from '../CataloguePresentation';
import { useCatalogueDistributionLexicalEditor } from "../DistributionLexicalEditor";

export interface CatalogueInformationProps {
    catalogue?: Catalogue
    isLoading?: boolean
}

export const CatalogueInformation = (props: CatalogueInformationProps) => {
    const {
        catalogue,
        isLoading,
    } = props

    const {editor} = useCatalogueDistributionLexicalEditor(catalogue)

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
                <CatalogueDetails
                    catalogue={catalogue}
                    isLoading={isLoading}
                />
            </Stack>

        </>
    )
}