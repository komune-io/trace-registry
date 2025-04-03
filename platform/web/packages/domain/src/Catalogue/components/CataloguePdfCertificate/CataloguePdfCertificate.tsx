import {Stack} from '@mui/material'
import {PdfDisplayer} from "components";
import {Catalogue, config} from "domain-components";
import {useElementSize} from "@mantine/hooks"

export interface CataloguePdfCertificateProps {
    catalogue : Catalogue
}

export const CataloguePdfCertificate = (props: CataloguePdfCertificateProps) => {
    const { catalogue } = props
    const { ref } = useElementSize();
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
            {
              <PdfDisplayer
                parentWidth={800}
                file={`${config().platform.url}/data/catalogues/${catalogue.id}/certificate`}
              />
            }
       </Stack>
    )
}
