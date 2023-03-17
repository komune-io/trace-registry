import { Box, Typography } from '@mui/material'
import { Page, TableV2, ColumnFactory, useTable } from '@smartb/g2'
interface Registry {
    id: string
    name: string
    proponent: string
    type: string
    origin: string
    avgReductions: number
    yearReference: number
    endDate: number
    vintage: number
    status: string
}

export const Registry = () => {
    const registry: Registry[] = [
        {
            id: '3209',
            name: 'Installation of high efficiency wood burning cookstoves in Tanzania 2',
            proponent: "C-Quest Capital Stoves Asia Limited",
            type: "Solar",
            origin: "Tanzania",
            avgReductions: 1965147,
            yearReference: 2022,
            endDate: Date.now(),
            vintage: 2032,
            status: "Registration and Verification Approval Requested"
        }
    ]

    const columns = ColumnFactory<Registry>({
        generateColumns: (generators) => ({
            id: generators.text({
                header: 'ID',
                getCellProps: (registry) => ({
                    value: registry.id
                })
            }),

            name: generators.text({
                header: 'Name',
                getCellProps: (registry) => ({
                    value: registry.name
                })
            }),

            proponent: generators.text({
                header: 'Proponent',
                getCellProps: (registry) => ({
                    value: registry.proponent
                })
            }),

            type: generators.text({
                header: 'Type',
                getCellProps: (registry) => ({
                    value: registry.type
                })
            }),

            origin: generators.text({
                header: 'Origin',
                getCellProps: (registry) => ({
                    value: registry.origin
                })
            }),

            avgReductions: generators.text({
                header: 'AVG. reductions',
                getCellProps: (registry) => ({
                    value: registry.avgReductions.toString()
                })
            }),

            yearReference: generators.text({
                header: 'Ref. year',
                getCellProps: (registry) => ({
                    value: registry.yearReference.toString()
                })
            }),

            endDate: generators.date({
                header: 'End date',
                getCellProps: (registry) => ({
                    date: registry.endDate
                })
            }),

            vintage: generators.text({
                header: 'Vintage',
                getCellProps: (registry) => ({
                    value: registry.vintage.toString()
                })
            }),

        })
    })
    const tableState = useTable({
        data: registry,
        columns: columns,
    })
    return (
        <Page
            flexContent
        >
            <Box
                alignSelf="center"
            >
                <Typography sx={{marginTop: "40px", marginBottom: "5px"}} align="center" variant="h4">Registry of trusted projects</Typography>
                <Typography sx={{ marginBottom: "40px"}} align="center" variant="body1">Follow and track activities on verified and trusted projects.</Typography>
            </Box>
            <TableV2
                tableState={tableState}
            />
        </Page>
    )
}
