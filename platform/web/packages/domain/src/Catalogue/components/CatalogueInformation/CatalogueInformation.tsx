
import { Stack } from '@mui/material';
import { Catalogue } from '../../model'
import { CatalogueDetails } from '../CatalogueDetails'
import { CataloguePresentation } from '../CataloguePresentation';
import { TitleDivider } from 'components';

export interface CatalogueInformationProps {
    catalogue?: Catalogue
    isLoading?: boolean
}

export const CatalogueInformation = (props: CatalogueInformationProps) => {
    const {
        catalogue,
        isLoading,
    } = props

    return (
        <>
            <CataloguePresentation
                catalogue={catalogue}
                isLoading={isLoading}
            />
            <Stack
                direction="row"
                gap={3}
            >
                <Stack
                    gap={5}
                    flexGrow={1}
                >
                    <TitleDivider title='Approche Système' />
                </Stack>
                <CatalogueDetails
                    catalogue={catalogue}
                    isLoading={isLoading}
                />
            </Stack>

        </>
    )
}
