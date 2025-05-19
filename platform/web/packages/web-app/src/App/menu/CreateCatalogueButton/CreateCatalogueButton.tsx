import { AddCircleOutlineRounded } from '@mui/icons-material'
import { CustomButton, IconPack, TMSMenuItem, useButtonMenu, useExtendedAuth, useRoutesDefinition } from 'components'
import {  useCatalogueRefGetTreeQuery } from 'domain-components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

interface CatalogueCreateButtonDTO {
    label: string
    types: CatalogueTypeDTO[]
}
interface CatalogueTypeDTO {
    identifier: string
    name: string
    icon?: string
}

interface CreateCatalogueButtonProps {
    identifier: string
}

export const CreateCatalogueButton = (props: CreateCatalogueButtonProps) => {
    const { identifier } = props
    const { policies } = useExtendedAuth()
    const { cataloguesCreateType } = useRoutesDefinition()

    const { t, i18n } = useTranslation()

    const createButtonStruture = useCatalogueRefGetTreeQuery({
        query: {
          identifier: identifier,
          language: i18n.language
        }
      }).data?.item?.structure?.createButton as CatalogueCreateButtonDTO

    const items = useMemo(() => createButtonStruture?.types?.map((type): TMSMenuItem | undefined => {
        return {
                key: type.identifier,
                label: type.name,
                icon: <IconPack.system />,
                to: cataloguesCreateType(type.identifier)
            }
    }).filter(Boolean) as TMSMenuItem[], [t, createButtonStruture])

    const { buttonProps, menu } = useButtonMenu({
        items
    })
    return (
        <>
            {policies.catalogue.canCreate() && <CustomButton
                sx={{
                    width: "100%"
                }}
                startIcon={<AddCircleOutlineRounded />}
                {...buttonProps}
            >
                {createButtonStruture.label}
            </CustomButton>}
            {menu}
        </>
    )
}
