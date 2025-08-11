import { Box, IconButton, Stack, Typography } from '@mui/material'
import { CommentContainer, CustomButton, CustomLinkButton, StickyContainer, useRoutesDefinition } from 'components'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { CloseRounded } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { autoFormFormatter, autoformValuesToCommand, BackAutoFormData, FormComposableState, FormSection, useAutoFormState } from '@komune-io/g2'
import { ReservedProtocolTypes, useCertificationFillCommand, useCertificationGetQuery, useProtocolGetQuery } from 'domain-components'
import { DialogPage } from 'template'
import { useDebouncedCallback } from '@mantine/hooks'


export const ProtocolFillingPage = () => {
  const { t } = useTranslation()
  const { catalogueId, draftId, tab, protocolId, certificationId } = useParams()

  const [isInit, setIsInit] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const { cataloguesCatalogueIdDraftsDraftIdTab } = useRoutesDefinition()

  const goBackUrl = cataloguesCatalogueIdDraftsDraftIdTab(catalogueId!, draftId!, tab!)

  const protocol = useProtocolGetQuery({
    query: {
      id: protocolId!,
    }
  }).data?.item

  const formData = useMemo(() => {
    //@ts-ignore
    const form = protocol?.steps?.find(step => step.type === ReservedProtocolTypes.DATA_COLLECTION_STEP) as BackAutoFormData
    if (!form) return undefined
    return autoFormFormatter(form)
  }, [protocol])

  const certificationQuery = useCertificationGetQuery({
    query: {
      id: certificationId!,
    }
  })

  const certificationFill = useCertificationFillCommand({})

   const saveLexicalDistribution = useDebouncedCallback(async (formState: FormComposableState) => {
      if (formData) {
        const command = autoformValuesToCommand(formData, formState.values)
        await certificationFill.mutateAsync({
          command: {
            id: certificationId!,
            values: command.command
          },
          files: command.files
        })
        setIsSaving(false)
      }
    }, 500)

  const sectionsType = formData?.sectionsType ?? 'default'

  const formState = useAutoFormState({
    onSubmit: (_, values) => console.log("Form submitted with values:", values),
    initialValues: certificationQuery.data?.item?.values,
    isLoading: certificationQuery.isLoading
  })

  
  useEffect(() => {
    if (certificationQuery.data?.item) {
      setIsInit(true)
    }
  }, [formState.values])

  useEffect(() => {
    if (isInit) {
      setIsSaving(true)
      saveLexicalDistribution(formState)
    }
  }, [formState.values])
  

  const formSectionsDisplay = useMemo(() => {
    return formData?.sections.map((section) => {
      return (
        <FormSection
          key={section.id}
          section={section}
          formState={formState}
          sectionsType={sectionsType}
        />
      )
    })
  }, [formData, formState, sectionsType])


  return (
    <DialogPage
      goBackUrl={goBackUrl}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        gap={2}
      >
        <Typography variant="h5" >
          {t("protocol.protocolFillingTitle", {
            name: protocol?.label
          })}
        </Typography>
        <Box flex={1} />
        <IconButton
          component={Link}
          to={goBackUrl}
          sx={{
            color: "rgba(0, 0, 0, 0.54) !important",
          }}
        >
          <CloseRounded />
        </IconButton>
      </Stack>

      <Stack
        gap={8}
        sx={{
          maxWidth: "1200px",
          alignSelf: "center",
        }}
      >
        <CommentContainer
          title={t("protocol.validatorComment")}
          comment="Certaines informations déclarées sont incomplètes ou manquent de précision, notamment sur la part d’activité liée à l’offre climat.\nMerci d’apporter des éléments plus concrets ou de joindre une preuve (rapport, lien, etc.).\n\nUne fois corrigé, vous pourrez soumettre à nouveau ce référentiel."
        />
        {formSectionsDisplay}
        <StickyContainer
          sx={{
            width: "fit-content",
            alignSelf: "flex-end",
          }}
        >
          <CustomLinkButton
            variant="text"
            to={goBackUrl}
          >
            {t("cancel")}
          </CustomLinkButton>
          <CustomButton
            onClick={formState.submitForm}
            isLoading={isSaving}
          >
            {t("submitForValidation")}
          </CustomButton>
        </StickyContainer>
      </Stack>
    </DialogPage>
  )
}
