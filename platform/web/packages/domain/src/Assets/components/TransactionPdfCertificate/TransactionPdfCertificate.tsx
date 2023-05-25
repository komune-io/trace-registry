import {IconButton, Stack} from '@mui/material'
import {DownloadIcon, PdfDisplayer} from "components";
import {config} from "domain-components/src/config";
import {Transaction} from "domain-components";

export interface TransactionPdfCertificateProps {
    transaction : Transaction
}

export const TransactionPdfCertificate = (props: TransactionPdfCertificateProps) => {
    const { transaction,  } = props
    const downloadButton = (
        <IconButton sx={{
            marginLeft: "75%",
            bottom: "-50px",
            zIndex: 5

        }} aria-label="download" href={`${config().platform.url}/assetCertificateDownload?transactionId=${transaction.id}`} >
            <DownloadIcon />
        </IconButton>
    )

    return (
        <Stack
            alignItems="center"
            direction="column"
            flexGrow={1}
            flexBasis={1}
            sx={{
                "& .pdfPage": {
                    padding: "20px",
                },
                "& .react-pdf__Page__annotations": {
                    display: "none"
                },
                "& .react-pdf__Page__textContent": {
                    display: "none"
                }
            }}
        >

            <PdfDisplayer file={`${config().platform.url}/assetCertificateDownload?transactionId=${transaction.id}`} AbsoluteLayer={downloadButton}/>
       </Stack>
    )
}
