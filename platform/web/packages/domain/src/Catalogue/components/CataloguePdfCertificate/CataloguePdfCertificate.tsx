import {Stack} from '@mui/material'
import {PdfDisplayer} from "components";
import {Catalogue, config} from "domain-components";
import {useElementSize} from "@mantine/hooks"
import {useCallback} from "react";
import {Button} from "@komune-io/g2";

export interface CataloguePdfCertificateProps {
    catalogue : Catalogue
}

export const CataloguePdfCertificate = (props: CataloguePdfCertificateProps) => {
    const { catalogue } = props
    const { ref } = useElementSize();

    const url = `${config().platform.url}/data/catalogues/${catalogue.id}/certificate`
    const handleDownload = useCallback(() => {
        const link = document.createElement('a')
        link.href = url
        link.download = "Attestation.pdf"
        link.click()
    }, [url])

    return (
        <Stack
            ref={ref}
            alignItems="center"
            direction="column"
            flexGrow={1}
            flexBasis={1}
            sx={{
                "& .pdfPage": {
                    padding: "20px",
                }
            }}
        >
            <Button sx={{alignSelf: "end"}} onClick={handleDownload} >Download</Button>
            <PdfDisplayer
                parentWidth={800}
                file={url}
            />
       </Stack>
    )
}
