import { Box, Dialog, IconButton, Stack, Typography } from '@mui/material'
import { CustomButton, CustomLinkButton, StickyContainer, useRoutesDefinition } from 'components'

import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { CloseRounded } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import form from "./autoForm.json"
import { AutoForm, autoFormFormatter, BackAutoFormData, FormComposableState } from '@komune-io/g2'


export const ReferentialCreationPage = () => {
  const { t } = useTranslation()
  const { catalogueId, draftId, tab, /* referentialId */ } = useParams()

  const navigate = useNavigate()
  const { cataloguesCatalogueIdDraftsDraftIdTab } = useRoutesDefinition()

  const goBackUrl = cataloguesCatalogueIdDraftsDraftIdTab(catalogueId!, draftId!, tab!)

  const onClose = useCallback(
    () => {
      navigate(goBackUrl)
    },
    [navigate, goBackUrl],
  )

  const formData = useMemo(() => autoFormFormatter(form as BackAutoFormData), [form])

  const onSave = useCallback(
    (formState: FormComposableState) => {
      console.log(formState.values)
    },
    [],
  )
  
  const getFormActions = useCallback(
    (formState: FormComposableState) => {
      return (
        <StickyContainer>
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
    <Dialog
      fullScreen
      open
      onClose={onClose}
      PaperProps={{
        className: "scroll-container",
      }}
      sx={{
        "& .MuiDialog-paper": {
          p: 3,
          pb: 12,
          display: "flex",
          gap: 8
        }
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        gap={2}
      >
        <Typography variant="h5" >
          Saisie du référentiel : Mapping Finance V1
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
        <AutoForm
          onSubmit={(_, values) => console.log("Form submitted with values:", values)}
          formData={formData}
          getFormActions={getFormActions}
        />

      </Stack>
    </Dialog>
  )
}
