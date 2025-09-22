import {Box, Paper, Stack, Typography} from '@mui/material'
import {useRoutesDefinition, ValidationHeader} from 'components'
import {useCallback, useMemo} from 'react'
import {useTranslation} from 'react-i18next'
import {AutoForm, autoFormFormatter, BackAutoFormData, navigate} from '@komune-io/g2'
import {AppPage} from 'template'
import {
    CertificationBadge,
    ReservedProtocolTypes,
    useCertificationGetQuery,
    useCertificationRejectCommand,
    useCertificationValidateCommand
} from "domain-components";
import {useParams} from "react-router-dom";
import {useQueryClient} from "@tanstack/react-query";


export const ProtocolVerificationPage = () => {
  const { t } = useTranslation()
  const queryClient = useQueryClient()

  const { certificationId } = useParams()
  const { cataloguesAll, protocolsToVerify } = useRoutesDefinition()

  const certificationGetQuery = useCertificationGetQuery({
    query: {
      id: certificationId!,
    }
  })

  const certification = certificationGetQuery.data?.item

  const formData = useMemo(() => {
    //@ts-ignore
    const form = certification?.protocol
      ?.steps
      ?.find(step => step.type === ReservedProtocolTypes.DATA_COLLECTION_STEP) as BackAutoFormData
    if (!form) return undefined

    return autoFormFormatter(form)
  }, [certification])

  const title = t("protocol.protocolTitle", {
    name: certification?.protocol.label
  })

  const certificationValidateCommand = useCertificationValidateCommand({})
  const handleValidate = useCallback(async () => {
    const res = await certificationValidateCommand.mutateAsync({ id: certificationId! })
    if (res) {
      queryClient.invalidateQueries({ queryKey: ["control/certificationGet", { id: certificationId! }] })
      queryClient.invalidateQueries({ queryKey: ["control/certificationPage"] })
      queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftGet"] })
      queryClient.invalidateQueries({ queryKey: ["data/catalogueGet", { id: certification?.catalogue?.id }] })
      navigate(protocolsToVerify())
    }
  }, [certificationId, certification?.catalogue?.id])

  const certificationRejectCommand = useCertificationRejectCommand({})
  const handleReject = useCallback(async (reason: string) => {
    const res = await certificationRejectCommand.mutateAsync({ id: certificationId!, reason })
    if (res) {
      queryClient.invalidateQueries({ queryKey: ["control/certificationGet", { id: certificationId! }] })
      queryClient.invalidateQueries({ queryKey: ["control/certificationPage"] })
      queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftGet"] })
      navigate(protocolsToVerify())
    }
  }, [certificationId])

  return (
    <AppPage
      title={title}
      basicHeader={false}
      maxWidth={1080}
      customHeader={<ValidationHeader
        onAccept={handleValidate}
        onReject={handleReject}
        isUpdating={certificationGetQuery.isLoading}
        creator={certification?.creator}
        linkTo={certification?.catalogue && {
          href: cataloguesAll(certification?.catalogue.id!),
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
          {certification?.badges.map((badge) => (
            <CertificationBadge key={badge.id} {...badge} />
          ))}
        </Stack>
        <AutoForm
          formData={formData}
          readOnly
          initialValues={certification?.values}
          downloadDocument={() => Promise.resolve("")} // TODO: implement document download
        />
      </Paper>
    </AppPage>
  )
}
