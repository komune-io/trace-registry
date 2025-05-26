import { AddCircleOutlineRounded } from '@mui/icons-material'
import { Accordion, CustomButton, InfoTicket, TitleDivider } from 'components'
import { useCallback, useState, useMemo } from 'react'
import { SubCataloguePanel } from '../SubCataloguePanel'
import { Catalogue, CatalogueRef } from '../../model'
import { useTranslation } from 'react-i18next'
import { Typography } from '@mui/material'
import { CatalogueTable } from '../CatalogueTable'
import { PageQueryResult } from 'template'

export interface SubCataloguesManagerProps {
  catalogue?: Catalogue
  readOnly?: boolean
}

export const SubCataloguesManager = (props: SubCataloguesManagerProps) => {
  const { catalogue, readOnly = false } = props

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

  const data = useMemo((): PageQueryResult<CatalogueRef> => {
    const items = Object.values(catalogue?.relatedCatalogues ?? {}).flatMap((related) => related)
    return {
      items,
      total: items.length,
    }
  }, [catalogue])

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
      <Accordion
        summary={<Typography variant="h6" >{t("catalogueList")}</Typography>}
      >
        <CatalogueTable
          page={data}
          isRef
        />
      </Accordion>
    </>
  )
}
