import { AddCircleOutlineRounded } from '@mui/icons-material'
import { CustomButton, InfoTicket, TitleDivider } from 'components'
import { useCallback, useState } from 'react'
import { SubCataloguePanel } from '../SubCataloguePanel'
import { CatalogueDraft } from '../../model'
import { useTranslation } from 'react-i18next'

export interface SubCataloguesManagerProps {
  draft?: CatalogueDraft
  readOnly?: boolean
}

export const SubCataloguesManager = (props: SubCataloguesManagerProps) => {
  const { draft, readOnly = false } = props

  const { t } = useTranslation()

  const [creation, setCreation] = useState(false)

  const onCancel = useCallback(
    () => {
      setCreation(false)
    },
    [],
  )

  const onCreate = useCallback(
    () => {
      setCreation(true)
    }, [])

  return (
    <>
      <TitleDivider
        size="h6"
        title={t('subCatalogues')}
        actions={!readOnly ?
          <CustomButton
            startIcon={<AddCircleOutlineRounded />}
            onClick={onCreate}
          >
            {t('catalogues.createSubCatalogue')}
          </CustomButton>
          : undefined
        }
      />
      <InfoTicket
        title={t("catalogues.noSubCatalogue")}
      />
      {creation && <SubCataloguePanel
        context='create'
        onCancel={onCancel}
      />}
    </>
  )
}
