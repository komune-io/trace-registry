import { Box, Dialog, IconButton, Stack, Typography } from '@mui/material'
import { CustomButton, CustomLinkButton, useRoutesDefinition } from 'components'

import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { CloseRounded } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import form from "./autoForm.json"
import { AutoForm, autoFormFormatter, BackAutoFormData, FormComposableState } from '@komune-io/g2'


export const ReferentialCreationPage = () => {
  const { t } = useTranslation()

  const navigate = useNavigate()
  const {} = useRoutesDefinition()

  const goBackUrl = "/"


  const onClose = useCallback(
    () => {
      navigate(goBackUrl)
    },
    [navigate, goBackUrl],
  )

  const FormData = useMemo(() => autoFormFormatter(form as BackAutoFormData), [form])

  const getFormActions = useCallback(
    (formState: FormComposableState) => {
      return (
        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
          <CustomLinkButton
            variant="text"
            to={goBackUrl}
          >
            {t("cancel")}
          </CustomLinkButton>
             <CustomButton
            onClick={formState.submitForm}
          >
            {t("submitForValidation")}
          </CustomButton>
        </Stack>
      )
    },
    [goBackUrl],
  )

  return (
    <Dialog
      fullScreen
      open
      onClose={onClose}
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
          to={"/"}
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
          formData={FormData}
          getFormActions={getFormActions}
        />

      </Stack>
    </Dialog>
  )
}
