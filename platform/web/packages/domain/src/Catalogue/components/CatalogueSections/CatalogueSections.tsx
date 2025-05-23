import { Fragment, useMemo } from 'react'
import { Catalogue } from '../../model'
import { SectionEditor } from '../SectionEditor'
import { EditorState } from 'lexical'
import { CircularProgress, Stack } from '@mui/material'
import {useLexicalDistribution} from "../../api";
import {Dataset} from "../../../Dataset";

interface CatalogueSectionsProps {
    catalogue?: Catalogue
    dataset?: Dataset
    readOnly?: boolean
    onSectionChange?: (editorState: EditorState, dataset?: Dataset) => void
    isLoading?: boolean
}

export const CatalogueSections = (props: CatalogueSectionsProps) => {
    const { catalogue, dataset, readOnly = false, onSectionChange, isLoading } = props

    const lexicalDistribution = useLexicalDistribution(catalogue, dataset)

    const sectionsDisplay = useMemo(() => {
        return (
            <Fragment
                key={lexicalDistribution.dataset?.id ?? "newSection"}
            >
                <SectionEditor
                    {...lexicalDistribution}
                    readOnly={readOnly}
                    onChange={(editorState) => onSectionChange && onSectionChange(editorState, lexicalDistribution.dataset)}
                    namespace={lexicalDistribution.dataset?.id}
                />
            </Fragment>
        )
    }, [catalogue, readOnly, onSectionChange, lexicalDistribution.dataset?.id])

    return (
        <Stack
        gap={4}
        sx={{
            py: 4
        }}
        >
            {isLoading ? <CircularProgress sx={{
                alignSelf: "center"
            }} />  : sectionsDisplay}
            {/* sections.length === 0 && !readOnly &&
                <AddSectionDivider
                    onAddSection={handleAddSection(0)}
                />
             */}
        </Stack>
    )
}

/* export interface AddSectionDividerProps {
    onAddSection: () => void
}

const AddSectionDivider = (props: AddSectionDividerProps) => {
    const { onAddSection } = props

    const { t } = useTranslation()

    return (
        <Divider
            sx={{
                my: -2.5,
                "&::before": {
                    borderTop: "2px dashed#E0E0E0"
                },
                "&::after": {
                    borderTop: "2px dashed#E0E0E0"
                }
            }}
        >
            <CustomButton
                onClick={onAddSection}
                startIcon={<ControlPointRounded />} >
                {t("catalogues.newSection")}
            </CustomButton>
        </Divider>
    )
}
 */