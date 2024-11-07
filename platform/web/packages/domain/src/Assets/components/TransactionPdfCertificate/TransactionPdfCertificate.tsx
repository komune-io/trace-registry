import {Stack} from '@mui/material'
import {PdfDisplayer} from "components";
import {config} from "domain-components/src/config";
import {Transaction} from "domain-components";
import {useElementSize} from "@mantine/hooks"

export interface TransactionPdfCertificateProps {
    transaction? : Transaction
}

export const TransactionPdfCertificate = (props: TransactionPdfCertificateProps) => {
    const { transaction } = props
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
            {transaction && <PdfDisplayer parentWidth={800} file={`${config().platform.url}/assetCertificateDownload?transactionId=${transaction?.id}`}/>}
       </Stack>
    )
}
