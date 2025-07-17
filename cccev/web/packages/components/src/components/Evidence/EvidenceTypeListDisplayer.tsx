import { Box, Divider, Stack, Typography } from "@mui/material"
import { Fragment, useMemo } from "react"
import { Evidence } from "./Evidence"
import { useTranslation } from "react-i18next"
import { EvidenceTypeListDTO } from "datahub"

export interface EvidenceTypeListDisplayerProps {
    evidenceTypeLists: EvidenceTypeListDTO[]
    onUpload?: (evidenceId: string) => void
    onView?: (evidenceId: string) => void
    onDelete?: (evidenceId: string) => void
}

export const EvidenceTypeListDisplayer = (props: EvidenceTypeListDisplayerProps) => {
    const { evidenceTypeLists, onDelete, onUpload, onView } = props

    const { t } = useTranslation()

    const evidencesDisplay = useMemo(() => evidenceTypeLists.map((evidenceTypeList, firstIndex) => (
        <Fragment key={evidenceTypeList.identifier}>
            {evidenceTypeList.specifiesEvidenceType.map((evidenceType: any, secondIndex: any,) => {
                let divider: JSX.Element = <Divider sx={{ borderBottom: "2px solid black", width: "20px" }} />
                if (firstIndex === 0 && secondIndex === 0) {
                    divider = (
                        <Stack
                            sx={{
                                height: "100%"
                            }}
                            alignItems="center"
                        >
                            <Box sx={{ height: "50%", background: "#F5F5F5", marginLeft: "-20px", width: "20px" }} />
                            <Divider sx={{ borderTop: "2px solid black", borderBottom: "none", width: "20px", height: "50%" }} flexItem />
                        </Stack>
                    )
                }
                if (firstIndex + 1 === evidenceTypeLists.length && secondIndex + 1 === evidenceTypeList.specifiesEvidenceType.length) {
                    divider = (
                        <Stack
                            sx={{
                                height: "100%"
                            }}
                            alignItems="center"
                        >
                            <Divider sx={{ borderBottom: "2px solid black", width: "20px", height: "50%" }} flexItem />
                            <Box sx={{ height: "50%", background: "#F5F5F5", marginLeft: "-20px", width: "20px" }} />
                        </Stack>
                    )
                }
                return (
                    <Stack alignItems="center" key={evidenceType.identifier} direction="row">
                        {divider}
                        <Evidence
                            label={!!evidenceType.evidence ? evidenceType.evidence.name : evidenceType.name}
                            variant={!!evidenceType.evidence ? "added" : "needed"}
                            onDelete={() => onDelete && onDelete(evidenceType.identifier)}
                            onUpload={() => onUpload && onUpload(evidenceType.identifier)}
                            onView={() => onView && onView(evidenceType.identifier)}
                        />
                    </Stack>
                )
            }
            )}
            {firstIndex + 1 < evidenceTypeLists.length && (
                <Box
                    key={`${evidenceTypeList.identifier}-or`}
                    sx={{
                        width: "100%",
                        padding: "2px 10px",
                        background: "#F5F5F5"
                    }}
                    style={{ marginLeft: "-20px", marginTop: "6px", marginBottom: "-10px" }}
                >
                    <Typography variant="subtitle2">
                        {t("or")}
                    </Typography>
                </Box>
            )}
        </Fragment>
    )), [evidenceTypeLists, onDelete, onUpload, onView])

    return (
        <Box sx={{ width: "100%" }}>
            <Typography sx={{ marginLeft: "35px" }} variant="subtitle1">
                {evidenceTypeLists[0]?.name}
            </Typography>
            <Stack
                sx={{ width: "100%" }}
                direction="row"
            >
                {evidenceTypeLists.length > 1 && <Divider orientation="vertical" sx={{ borderRight: "2px solid black" }} flexItem />}
                <Stack
                    sx={{ width: "100%" }}
                    spacing={2}
                >
                    {evidencesDisplay}
                </Stack>
            </Stack>
        </Box>
    )
}
