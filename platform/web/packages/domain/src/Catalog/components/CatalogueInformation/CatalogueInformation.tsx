
import { Catalogue } from '../../model'
import { useTranslation } from 'react-i18next'
import { CatalogDetails } from '../CatalogDetails'
import { TitleDivider } from 'components'
import {MustUsedCatalogueSection} from "../MustUsedCatalogueSection";

export interface CatalogInformationProps {
    catalogue?: Catalogue
    isLoading?: boolean
}

export const CatalogueInformation = (props: CatalogInformationProps) => {
    const {
        catalogue,
        isLoading,
    } = props
    const { t } = useTranslation()

    return (
        <>
            <TitleDivider
                title={t("catalogs.standardDescription")}
            />
            <CatalogDetails
                catalog={catalogue}
                isLoading={isLoading}
            />
            {
                catalogue?.catalogues?.map((subCatalog, index) => (
                   <MustUsedCatalogueSection
                            key={index}
                            catalogue={subCatalog}
                        />
                ))
            }
        </>
    )
}
