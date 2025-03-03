
import { Stack } from '@mui/material';
import { Catalogue } from '../../model'
import { CatalogueDetails } from '../CatalogueDetails'
import { CataloguePresentation } from '../CataloguePresentation';
import { RichtTextEditor } from 'components';
import { useLexicalDownloadDistribution } from '../../api';

export interface CatalogueInformationProps {
    catalogue?: Catalogue
    isLoading?: boolean
}

export const CatalogueInformation = (props: CatalogueInformationProps) => {
    const {
        catalogue,
        isLoading,
    } = props

    const {
        query,
        dataSet
    } = useLexicalDownloadDistribution(catalogue)

    const isMarkdown = dataSet?.distribution.mediaType === "text/markdown"

    return (
        <>
            <CataloguePresentation
                catalogue={catalogue}
                isLoading={isLoading}
            />
            <Stack
                direction="row"
                gap={6}
                minWidth={0}
            >
                <Stack
                    gap={5}
                    flexGrow={1}
                >
                    <RichtTextEditor
                        readOnly
                        markdown={isMarkdown && query.data ? query.data : undefined}
                        editorState={!isMarkdown && query.data ? JSON.stringify(query.data) : undefined}
                    />
                </Stack>
                <CatalogueDetails
                    catalogue={catalogue}
                    isLoading={isLoading}
                />
            </Stack>

        </>
    )
}