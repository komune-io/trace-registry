import { useQueryClient } from '@tanstack/react-query'
import { TitleDivider, useRoutesDefinition } from 'components'
import { CatalogueCreateCommand, CatalogueMetadataForm, CatalogueTypes, useCatalogueCreateCommand } from 'domain-components'
import { useCallback, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { AppPage } from 'template'

interface CatalogueCreationPageProps {
    type: CatalogueTypes
}

export const CatalogueCreationPage = (props: CatalogueCreationPageProps) => {
    const { type } = props
    const { t } = useTranslation()
    const sheetTitle = useRef("")
    const navigate = useNavigate()
    const {cataloguesCatalogueIdEdit} = useRoutesDefinition()

    const queryClient = useQueryClient()

    const onChangeSheetTitle = useCallback(
      (title: string) => {
        sheetTitle.current = title
      },
      [],
    )

    const createCommand = useCatalogueCreateCommand({})
    

    const title = type === "100m-solution" ? t("newSolution") : type === "100m-system" ? t("newSystem") : t("newSector")

    const onCreate = useCallback(
      async (values: CatalogueCreateCommand & {illustration?: File}) => {
        const command = {...values}
        delete command.illustration
        const res = await createCommand.mutateAsync({
          command: {
            ...command,
            type
          },
          files: [{
            file: values.illustration!
          }]
        })

        if (res) {
          queryClient.invalidateQueries({queryKey: ["data/cataloguePage"]})
          queryClient.invalidateQueries({queryKey: ["data/catalogueRefGetTree"]})
          queryClient.invalidateQueries({queryKey: ["data/catalogueListAvailableParents"]})
          navigate(cataloguesCatalogueIdEdit(res.id))
        }
      },
      [createCommand.mutateAsync, type],
    )
    

    return (
        <AppPage
            title={title}
            bgcolor='background.default'
            maxWidth={1020}
        >
            <TitleDivider onChange={onChangeSheetTitle} title={title} onDebouncedChange={() => {}} />
            <CatalogueMetadataForm type={type} onSubmit={onCreate} />
        </AppPage>
    )
}
