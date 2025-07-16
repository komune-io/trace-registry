
import { Stack } from '@mui/material';
import { Catalogue } from '../../model'
import { CatalogueDetails } from '../CatalogueDetails'
import { CataloguePresentation } from '../CataloguePresentation';
import { useCatalogueDistributionLexicalEditor } from "../DistributionLexicalEditor";
import { Dataset } from '../../../Dataset';
import { useMemo } from 'react';
import { useExtendedAuth } from 'components';

export interface CatalogueInformationProps {
    catalogue?: Catalogue
    dataset: Dataset
    isLoading?: boolean
    isEmpty?: (isEmpty: boolean) => void
}

export const CatalogueInformation = (props: CatalogueInformationProps) => {
    const {
        catalogue,
        isLoading,
        isEmpty,
        dataset
    } = props
    const {keycloak} = useExtendedAuth()

    const {editor, distribution} = useCatalogueDistributionLexicalEditor(catalogue, dataset)

    const withCatalogueMetadata = dataset.structure?.definitions?.withCatalogueMetadata === "true"

    const isDatasetEmpty = useMemo(() => {
        const bool = (!dataset || !distribution) && !withCatalogueMetadata
        if (isEmpty) {
            isEmpty(bool)
        }
        return bool
    }, [dataset, distribution, withCatalogueMetadata])

    const isProtected = catalogue?.accessRights === "PROTECTED"

    const canViewDetails = !(isProtected && !keycloak.isAuthenticated)

    if (isDatasetEmpty) {
        return 
    }
    return (
        <>
            <CataloguePresentation
                catalogue={catalogue}
                isLoading={isLoading}
            />
            {canViewDetails && <Stack
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
            </Stack>}

        </>
    )
}