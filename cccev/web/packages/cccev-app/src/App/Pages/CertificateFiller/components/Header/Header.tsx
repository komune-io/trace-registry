import { Box, styled, Typography, Stack} from '@mui/material'
import { TrustabilityCard } from './TrustabilityCard'
import { useTranslation } from "react-i18next"

const CertificateInformationsBox = styled(Box)({
    display: "flex",
    width: "30%",
    flexDirection: "column",
    justifyContent: "space-between",
    '@media (max-width:1400px)': {
        width: '35%',
        justifyContent: "flex-start",
    }
})

export const Header = () => {
    const {t} = useTranslation()
    // @ts-ignore
    const title = window._env_.framework == "carboncopy" ? "Déclaration Carbon Copy" : "Déclaration Carbon Equity"
    return (
        <Box
            sx={{
                display: "flex",
                position: "relative",
                height: "100%",
                boxSizing:"border-box",
                padding: "10px 15px",
                justifyContent: "space-between"
            }}
        >
            <Stack
                sx={{
                    width: "60%",
                }}
            >
                <Typography
                    variant="h4"
                >
                    {title}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: "#878787"
                    }}
                >
                    #4452
                </Typography>
            </Stack>
            <CertificateInformationsBox>
                <Typography textAlign="end">
                    {t("createdOn", {creationDate: "08/10/2021"})}
                </Typography>
                <Stack
                    justifyContent="space-around"
                >
                    <Typography>
                        {t("representative", {name: "Layton"})}
                    </Typography>
                    <Typography>
                        {t("beneficiary", {name: "Mr Bourgeon Thomas"})}
                    </Typography>
                </Stack>
            </CertificateInformationsBox>
            <TrustabilityCard />
        </Box>
    )
}
