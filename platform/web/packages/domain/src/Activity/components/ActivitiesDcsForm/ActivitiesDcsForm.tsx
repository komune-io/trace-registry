import { TitleDivider } from 'components'
import { Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { AutoForm, Button, CommandWithFile, autoFormFormatter } from '@komune-io/g2'
import json from './autoForm.json'
import { Project } from '../../../Project'

export interface ActivitiesDcsFormProps {
  project?: Project
}

export const ActivitiesDcsForm = (props: ActivitiesDcsFormProps) => {
  const { project } = props
  const { t } = useTranslation()

  //@ts-ignore
  const formData = autoFormFormatter(json)

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
      <Typography sx={{ color: "#666560" }} >This activity involves identifying the project and its location.</Typography>

      <AutoForm
        formData={formData}
        getFormActions={(formState) => <Button sx={{ alignSelf: "flex-end" }} onClick={formState.submitForm} >{t("submitForValidation")}</Button>}
        onSubmit={(command) => console.log(formatDcsCommand(command, project))}
      />
    </Stack>
  )
}

const formatDcsCommand = (command: CommandWithFile<any>, project?: Project) => {
  return {
    files: command.files,
    command: {
      values: command.command,
      // identifier: formData.identifier
      certificationId: project?.certificationId
    }
  }
}
