import { Box, IconButton, Stack, Typography } from '@mui/material'
import { CommentContainer, CustomButton, CustomLinkButton, StickyContainer, useRoutesDefinition } from 'components'

import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { CloseRounded } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { AutoForm, autoFormFormatter, autoformValuesToCommand, BackAutoFormData, FormComposableState } from '@komune-io/g2'
import { ReservedProtocolTypes, useCertificationFillCommand, useCertificationGetQuery, useProtocolGetQuery } from 'domain-components'
import { DialogPage } from 'template'


export const ProtocolFillingPage = () => {
  const { t } = useTranslation()
  const { catalogueId, draftId, tab, protocolId, certificationId } = useParams()

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

  const onSave = useCallback(
    async (formState: FormComposableState) => {
      if (formData) {
        const command = autoformValuesToCommand(formData, formState.values)
        await certificationFill.mutateAsync({
          command: {
            id: certificationId!,
            values: command.command
          },
          files: command.files
        })
      }
    },
    [formData, certificationId],
  )

  const getFormActions = useCallback(
    (formState: FormComposableState) => {
      return (
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
            onClick={() => onSave(formState)}
          >
            {t("save")}
          </CustomButton>
          <CustomButton
            onClick={formState.submitForm}
          >
            {t("submitForValidation")}
          </CustomButton>
        </StickyContainer>
      )
    },
    [goBackUrl, onSave],
  )

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
        <AutoForm
          onSubmit={(_, values) => console.log("Form submitted with values:", values)}
          formData={formData}
          getFormActions={getFormActions}
          initialValues={certificationQuery.data?.item?.values}
          isLoading={certificationQuery.isLoading}
        />

      </Stack>
    </DialogPage>
  )
}
