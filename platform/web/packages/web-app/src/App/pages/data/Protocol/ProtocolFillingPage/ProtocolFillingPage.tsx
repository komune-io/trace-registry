import {Box, IconButton, Stack, Typography} from '@mui/material'
import {CommentContainer, CustomButton, CustomLinkButton, StickyContainer, useRoutesDefinition} from 'components'
import {useCallback, useEffect, useMemo, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {CloseRounded} from '@mui/icons-material'
import {
    autoFormFormatter,
    autoformValuesToCommand,
    BackAutoFormData,
    FormComposableState,
    FormSection,
    useAutoFormState
} from '@komune-io/g2'
import {
  certificateDownLoadEvidenceUrl,
  ReservedProtocolTypes,
  useCertificationFillCommand,
  useCertificationGetQuery,
  useCertificationSubmitCommand,
  useProtocolGetQuery
} from 'domain-components'
import {DialogPage} from 'template'
import {useDebouncedCallback} from '@mantine/hooks'
import {useQueryClient} from "@tanstack/react-query";

export const ProtocolFillingPage = () => {
  const { t } = useTranslation()
  const { catalogueId, draftId, tab, protocolId, certificationId } = useParams()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const [isInitialized, setIsInitialized] = useState(false)
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
    },
    options: {
      enabled: !isInitialized
    }
  })

  const certification = certificationQuery.data?.item

  const isEditable = certification?.status === "PENDING" || certification?.status === "REJECTED"

  const certificationFill = useCertificationFillCommand({})
  const certificationSubmit = useCertificationSubmitCommand({})

  const saveForm = useDebouncedCallback(async (formState: FormComposableState) => {
    if (formData) {
      setIsSaving(true)
      const command = autoformValuesToCommand(formData, formState.values)
      const res = await certificationFill.mutateAsync({
        command: {
          id: certificationId!,
          values: command.command
        },
        files: command.files
      })
      if (res) {
        queryClient.invalidateQueries({ queryKey: ["control/certificationGet", { id: certificationId! }] })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftGet", { id: draftId }] })
      }
      setIsSaving(false)
    }
  }, 700)

  const handleSubmit = useCallback(async () => {
    if (!certificationId) return
    const res = await certificationSubmit.mutateAsync({ id: certificationId! })
    if (res) {
      queryClient.invalidateQueries({ queryKey: ["control/certificationGet", { id: certificationId! }] })
      queryClient.invalidateQueries({ queryKey: ["control/certificationPage"] })
      queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftGet", { id: draftId }] })
      navigate(goBackUrl)
    }
  }, [certificationSubmit.mutateAsync, certificationId, draftId, queryClient.invalidateQueries, goBackUrl])

  const sectionsType = formData?.sectionsType ?? 'default'

  const formState = useAutoFormState({
    onSubmit: handleSubmit,
    initialValues: certification?.values,
    isLoading: certificationQuery.isLoading,
    formData: formData,
    readOnly: !isEditable,
    downloadDocument: (fieldName: string)=> certificateDownLoadEvidenceUrl(fieldName, certification),
  })

  useEffect(() => {
    if (certification) {
      setIsInitialized(true)
    }
  }, [formState.values])

  useEffect(() => {
    if (isInitialized) {
      saveForm(formState)
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
        {certification?.status === "REJECTED" && certification.rejectReason && (
          <CommentContainer
            title={t("protocol.validatorComment")}
            comment={certification.rejectReason}
          />
        )}
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
          {isEditable && <CustomButton
            onClick={formState.submitForm}
            isLoading={isSaving}
          >
            {t("submitForValidation")}
          </CustomButton>}
        </StickyContainer>
      </Stack>
    </DialogPage>
  )
}
