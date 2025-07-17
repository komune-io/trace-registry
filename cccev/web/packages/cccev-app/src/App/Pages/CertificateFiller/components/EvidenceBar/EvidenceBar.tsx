import { ArrowBackRounded } from '@mui/icons-material'
import { Box, IconButton, styled } from '@mui/material'
import { PdfDisplayer } from 'components'
import { EvidenceTypeDTO, EvidenceTypeListDTO } from 'datahub'
import { useCallback, useMemo } from 'react'
import { AsyncStatus } from 'utils'
import { Dropzone } from './Dropzone'
import { EvidenceList } from './EvidenceList'
import { EvidenceListLoading } from './EvidenceListLoading'

const EvidenceBarContainer = styled(Box)({
    position: "fixed",
    height: "100vh",
    width: "500px",
    boxSizing: "border-box",
    padding: "20px 15px",
    top: 0,
    right: 0,
    background: "#F5F5F5",
    "& .evidenceBar-backArrow": {
        width: 35,
        height: 35,
    },
    "& .evidenceBar-backButton": {
        position: "absolute",
        top: "10px",
        left: "10px",
        color: "black",
        zIndex: 1
    }
})

interface EvidenceBarProps {
    currentEvidence?: string
    changeEvidence: (evidence?: string) => void
    evidenceTypeAdded?: string
    setEvidenceTypeAdded: (evidenceTypeId?: string | undefined) => void
    addEvidenceType: (evidenceTypeId?: string | undefined) => void
    evidenceTypeLists?: EvidenceTypeListDTO[][]
    evidenceTypeMapped?: Map<string, EvidenceTypeDTO>
    evidenceTypeListsFetchStatus?: AsyncStatus
    fetchEvidenceTypeLists: () => void
}

export const EvidenceBar = (props: EvidenceBarProps) => {
    const { currentEvidence, changeEvidence, addEvidenceType, setEvidenceTypeAdded, evidenceTypeAdded, evidenceTypeLists, evidenceTypeListsFetchStatus, evidenceTypeMapped, fetchEvidenceTypeLists } = props

    const removeCurrentEvidence = useCallback(
        () => changeEvidence(),
        [changeEvidence],
    )

    const CanAddEvidence = useMemo(() => {
        if (evidenceTypeMapped === undefined) {
            return false
        }
        let canAdd = false
        evidenceTypeMapped.forEach((evidenceType) => {
            if (!evidenceType.evidence) {
                canAdd = true
            }
        })
        return canAdd
    }, [evidenceTypeMapped])

    const currentFile = useMemo(() => currentEvidence ? evidenceTypeMapped?.get(currentEvidence)?.evidence?.file : undefined, [currentEvidence, evidenceTypeMapped])

    if (evidenceTypeListsFetchStatus !== "SUCCESS" || evidenceTypeLists === undefined) {
        return (
            <EvidenceBarContainer>
                <EvidenceListLoading />
            </EvidenceBarContainer>
        )
    }
    if (!currentEvidence) {
        return (
            <EvidenceBarContainer>
                <EvidenceList CanAddEvidence={CanAddEvidence} fetchEvidenceTypeLists={fetchEvidenceTypeLists} evidenceTypeLists={evidenceTypeLists} addEvidenceType={addEvidenceType} changeEvidence={changeEvidence} />
                {CanAddEvidence && <Dropzone fetchEvidenceTypeLists={fetchEvidenceTypeLists} evidenceTypeMapped={evidenceTypeMapped} setEvidenceTypeAdded={setEvidenceTypeAdded} evidenceTypeAdded={evidenceTypeAdded} />}
            </EvidenceBarContainer>
        )
    }
    return (
        <EvidenceBarContainer>
            <IconButton size="small" className="evidenceBar-backButton" onClick={removeCurrentEvidence} >
                <ArrowBackRounded className="evidenceBar-backArrow" />
            </IconButton>
            <PdfDisplayer file={currentFile} />
        </EvidenceBarContainer>
    )
}
