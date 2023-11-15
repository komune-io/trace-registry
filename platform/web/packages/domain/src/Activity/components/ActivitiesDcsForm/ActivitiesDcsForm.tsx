import { TitleDivider } from 'components'
import { Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { AutoForm, autoFormFormatter } from '@smartb/g2'
import json from './autoForm.json'

export const ActivitiesDcsForm = () => {
  const { t } = useTranslation()
  return (
    <Stack
      sx={{
        height: "100%",
        width: "550px",
        padding: "24px 32px",
        overflowY: "auto"
      }}
      gap={2}
    >
      <TitleDivider
        title={t("projects.identification")}
        status={{
          label: "To do",
          color: "#18159D"
        }}
      />
      <Typography sx={{color: "#666560"}} >This activity involves identifying the project and its location.</Typography>
      {/* @ts-ignore */}
      <AutoForm formData={autoFormFormatter(json)} />
    </Stack>
  )
}
