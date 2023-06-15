import {Stack} from '@mui/material'
import {PdfDisplayer} from "components";
import {config} from "domain-components/src/config";
import {Transaction} from "domain-components";

export interface TransactionPdfCertificateProps {
    transaction? : Transaction
}

export const TransactionPdfCertificate = (props: TransactionPdfCertificateProps) => {
    const { transaction } = props
    return (
        <Stack
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
            {transaction && <PdfDisplayer file={`${config().platform.url}/assetCertificateDownload?transactionId=${transaction?.id}`}/>}
       </Stack>
    )
}
