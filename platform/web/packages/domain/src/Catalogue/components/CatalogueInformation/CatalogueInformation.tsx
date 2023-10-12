
import { Catalogue } from '../../model'
import { useTranslation } from 'react-i18next'
import { CatalogueDetails } from '../CatalogueDetails'
import { TitleDivider } from 'components'
import {MustUsedCatalogueSection} from "../MustUsedCatalogueSection";

export interface CatalogueInformationProps {
    catalogue?: Catalogue
    isLoading?: boolean
}

export const CatalogueInformation = (props: CatalogueInformationProps) => {
    const {
        catalogue,
        isLoading,
    } = props
    const { t } = useTranslation()

    return (
        <>
            <TitleDivider
                title={t("catalogues.standardDescription")}
            />
            <CatalogueDetails
                catalogue={catalogue}
                isLoading={isLoading}
            />
            {
                catalogue?.catalogues?.map((subCatalogue, index) => (
                   <MustUsedCatalogueSection
                            key={index}
                            catalogue={subCatalogue}
                        />
                ))
            }
        </>
    )
}
