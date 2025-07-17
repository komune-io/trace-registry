import { Box } from '@mui/material'
import { EvidenceTypeDTO, EvidenceTypeListDTO } from 'datahub'
import { useEffect } from 'react'
import { FiltersState } from 'store/filters/filters.reducer'
import { AsyncStatus } from 'utils'
import { EvidenceBar } from './components/EvidenceBar/EvidenceBar'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

interface CertificateFillerProps {
    filters: FiltersState
    changeFilters: (filters: FiltersState) => void
    changeEvidence: (evidence?: string) => void
    evidenceTypeAdded?: string
    setEvidenceTypeAdded: (evidenceTypeId?: string | undefined) => void
    addEvidenceType: (evidenceTypeId?: string | undefined) => void
    fetchEvidenceTypeLists: () => void
    evidenceTypeLists?: EvidenceTypeListDTO[][]
    evidenceTypeMapped?: Map<string, EvidenceTypeDTO>
    evidenceTypeListsFetchStatus?: AsyncStatus
}

export const CertificateFiller = (props: CertificateFillerProps) => {
    const { filters, changeFilters, changeEvidence, addEvidenceType, setEvidenceTypeAdded, evidenceTypeAdded, fetchEvidenceTypeLists, evidenceTypeLists, evidenceTypeListsFetchStatus, evidenceTypeMapped } = props
    useEffect(() => {
        fetchEvidenceTypeLists()
    }, [])

    return (
        <>
            <Box
                sx={{
                    display: "block",
                    width: "calc(100vw - 500px)",
                    height: "100vh",
                    position: 'relative',
                    overflow: "auto",
                    minWidth: "650px"
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "170px",
                        width: "100%",
                        minWidth: "650px",
                        background: "#8294A3",
                        height: "2px"
                    }}
                />
                <Box
                    sx={{
                        maxWidth: "1500px",
                        margin: "auto",
                        width: "100%",
                        height: "170px"
                    }}
                >
                    <Header />
                </Box>
                <Main evidenceTypeMapped={evidenceTypeMapped} filters={filters} changeFilters={changeFilters} />
            </Box>
            <EvidenceBar
                addEvidenceType={addEvidenceType}
                setEvidenceTypeAdded={setEvidenceTypeAdded}
                evidenceTypeAdded={evidenceTypeAdded}
                currentEvidence={filters.evidence}
                changeEvidence={changeEvidence}
                evidenceTypeLists={evidenceTypeLists}
                evidenceTypeMapped={evidenceTypeMapped}
                evidenceTypeListsFetchStatus={evidenceTypeListsFetchStatus}
                fetchEvidenceTypeLists={fetchEvidenceTypeLists}
            />
        </>
    )
}
