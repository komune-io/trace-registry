import { Stack, Typography } from '@mui/material'
import { SubtitledLinkTicket, TitleDivider } from 'components'
import { useTranslation } from 'react-i18next'

export const ActivitiesNextSteps = () => {
    const {t} = useTranslation()
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
        title={t("projects.activities")}
      />
      <Typography sx={{ color: "#666560" }} >Activities description. Consectetur excepturi delectus. Ducimus iste fugiat. Molestias repudiandae inventore corrupti magnam atque. Laborum libero est voluptatem.</Typography>

      <Typography variant="h6" >{t("nextSteps")}</Typography>
      <Stack
      gap={1}
      >
        <SubtitledLinkTicket 
        title='P1 - Eligibility' 
        activity={{
            label: "Identification of the project",
            url:"#"
        }}
        />
        <SubtitledLinkTicket 
        title='P1 - Eligibility' 
        activity={{
            label: "Third party audit",
            url:"#"
        }}
        />
        <SubtitledLinkTicket 
        title='P1 - Eligibility' 
        activity={{
            label: "First Documentation",
            url:"#"
        }}
        />
      </Stack>
    </Stack>
  )
}
