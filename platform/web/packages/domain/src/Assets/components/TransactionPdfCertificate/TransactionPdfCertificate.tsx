import {IconButton, Stack} from '@mui/material'
import {DownloadIcon, PdfDisplayer} from "components";
import {config} from "domain-components/src/config";
import {Transaction} from "domain-components";

export interface TransactionPdfCertificateProps {
    transaction : Transaction
}

export const TransactionPdfCertificate = (props: TransactionPdfCertificateProps) => {
    const { transaction } = props

    return (
        <Stack
            alignItems="center"
            direction="column"
            width="65%"
            sx={{
                "& .pdfPage": {
                    padding: "20px",
                }
            }}
        >
            <IconButton sx={{
                marginLeft: "75%",
                bottom: "-50px",
                zIndex: 5

            }} aria-label="download" href={`${config().platform.url}/assetCertificateDownload?transactionId=${transaction.id}`} >
                <DownloadIcon />
            </IconButton>
            <PdfDisplayer file={`${config().platform.url}/assetCertificateDownload?transactionId=${transaction.id}`} width={950} />
       </Stack>
    )
}
