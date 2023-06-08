import { Box, Stack, Typography } from '@mui/material'
import { Header } from '@smartb/g2'
import {
  AssetsTransactionsTable, Transaction,
  useAssetTransactionPage, useTransactionsFilters
} from 'domain-components'
import {Fragment, useCallback, useMemo} from "react"
import { useTranslation } from 'react-i18next';
import { AppPage, Offset, OffsetPagination } from "template";
import {useRoutesDefinition} from "components";
import {useNavigate} from "react-router-dom";

export const TransactionList = () => {
  const { component, setOffset, submittedFilters } = useTransactionsFilters()
  const { t } = useTranslation()

  const { transactionsTransactionId } = useRoutesDefinition()
  const navigate = useNavigate();

  const pagination = useMemo((): OffsetPagination => (
    { offset: submittedFilters.offset ?? Offset.default.offset,
      limit: submittedFilters.limit ?? Offset.default.limit
    }
  ), [submittedFilters.offset, submittedFilters.limit])
  const transactions = useAssetTransactionPage({
    query: {
      ...submittedFilters,
    }
  })

  const gotoCertificate = useCallback( (transaction: Transaction) => {
    transaction?.id && navigate(transactionsTransactionId(transaction.id))
  },[])

  return (
    <Stack
      sx={{
          width: "100%",
          height: "100%",
          "& .AruiPage-pageCenterer": {
              flexGrow: 1,
              overflow: "auto"
          }
      }}
    >
        <AppPage
          flexContent
        >
            <Box alignSelf="center">
                <Typography sx={{ marginBottom: "5px" }} align="center" variant="h4">{t("transactions.registry")}</Typography>
            </Box>
            <Box
              sx={{
                  paddingBottom: "70px"
              }}
            >
              <AssetsTransactionsTable
                header={
                  <Header
                    content={[
                      {
                        leftPart: [
                          <Fragment key="filters" >{component}</Fragment>
                        ]
                      }
                    ]}
                    sx={{
                      backgroundColor: "none",
                      zIndex: 0,
                      "& .AruiHeader-leftPartContainer": {
                        width: "100%"
                      }
                    }}
                  />
                }
                page={transactions.data}
                pagination={pagination}
                isLoading={transactions.isLoading}
                onOffsetChange={setOffset}
                onTransactionClick={(row) => gotoCertificate(row.original)}
                sx={{
                  "& .selectedRow": {
                    bgcolor: (theme) => theme.palette.primary.main + "33"
                  }
                }}
              />
            </Box>
        </AppPage>
    </Stack>
  )
}
