import { Box, Paper, Stack, Typography } from '@mui/material'
import { Badge, useRoutesDefinition, ValidationHeader } from 'components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import form from "../ProtocolFillingPage/autoForm.json"
import { AutoForm, autoFormFormatter, BackAutoFormData } from '@komune-io/g2'
import { AppPage } from 'template'


export const ProtocolVerificationPage = () => {
  const { t } = useTranslation()
  const {cataloguesAll} = useRoutesDefinition()


  const formData = useMemo(() => autoFormFormatter(form as BackAutoFormData), [form])

  const title = t("protocol.protocolTitle", {
    name: "Mapping finance v1"
  })

  return (
    <AppPage
      title={title}
      basicHeader={false}
      maxWidth={1080}
      customHeader={<ValidationHeader 
        onAccept={() => {return new Promise((resolve) => resolve(true))}} 
        onReject={() => {return new Promise((resolve) => resolve(true))}} 
        isUpdating={false} 
        creator={{
          email: "creator@example.com",
          givenName: "John",
          familyName: "Doe"
        }}
        linkTo={{
          href: cataloguesAll("1"),
          label: t("consultSheet")
        }}
        />}
        headerContainerProps={{
          sx: {
            position: "sticky",
                borderRadius: 0,
                top: 0,
                zIndex: 1,
          }
        }}
    >
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          px: 6,
          py: 4
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={2}
        >
          <Typography variant="h5" >
            {title}
          </Typography>
          <Box flex={1} />
          <Badge label='Finance v1' value={85} />
        </Stack>
        <AutoForm
          formData={formData}
        />
      </Paper>
    </AppPage>
  )
}
