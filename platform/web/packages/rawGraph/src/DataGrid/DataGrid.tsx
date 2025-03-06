import { useMemo, useState } from "react";
import ReactDataGrid, { Column, SortColumn } from "react-data-grid";
import "react-data-grid/lib/styles.css";
//@ts-ignore
import { getTypeName } from '@rawgraphs/rawgraphs-core'

export interface DataGridProps {
  dataset: any
  errors: string[]
  dataTypes: any
}

export const DataGrid = (props: DataGridProps) => {
  const {
    dataset,
    dataTypes,
  } = props
  const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);

  const [containerEl, setContainerEl] = useState<HTMLDivElement | undefined>();

  // Make id column just as large as needed
  // Adjust constants to fit cell padding and font size
  // (Math.floor(Math.log10(data.dataset.length)) + 1) is the number
  //   of digits of the highest id
  const idColumnWidth =
    24 + 8 * (Math.floor(Math.log10(dataset.length)) + 1);

  const equalDinstribution =
    ((containerEl?.getBoundingClientRect().width ?? 0) - idColumnWidth - 1) /
    Object.keys(dataTypes).length;
  const columnWidth = equalDinstribution
    ? Math.max(equalDinstribution, 170)
    : 170;

  const columns = useMemo((): Column<any>[] => {
    if (!dataset || !dataTypes) {
      return [];
    }
    return [
      {
        key: "id",
        name: "",
        frozen: true,
        width: idColumnWidth,
        sortable: true,
        minWidth: 10
      },
      ...Object.keys(dataTypes).map((k): Column<any> => ({
        key: k,
        name: k,
        sortable: true,
        resizable: true,
        width: columnWidth,
      })),
    ];
  }, [
    dataTypes,
    idColumnWidth,
    columnWidth,
  ]);

  const sortedDataset = useMemo(() => {
    const datasetWithIds = dataset.map((item: any, i: number) => ({
      ...item,
      id: i + 1,
    }))

    return datasetWithIds.sort((a: any, b: any) => {
      for (const sort of sortColumns) {
        let compResult = 0
        if (sort.columnKey === "id") {
          compResult = a.id - b.id
        }
        else {
          const sortColumnType = getTypeName(dataTypes[sort.columnKey])

          if (sortColumnType === 'number') {
            compResult = a[sort.columnKey] - b[sort.columnKey]
          } else if (sortColumnType === 'date') {
            compResult = (a[sort.columnKey]?.valueOf() ?? 0 - b[sort.columnKey]?.valueOf()) ?? 0
          } else {
            compResult = a[sort.columnKey]?.toString().localeCompare(b[sort.columnKey].toString())
          }
        }
        if (compResult !== 0) {
          return sort.direction === 'ASC' ? compResult : -compResult;
        }
      }
      return 0;
    });
  }, [dataset, sortColumns]);

  return (
    //@ts-ignore
    <div ref={setContainerEl}>
      <ReactDataGrid
        columns={columns}
        rows={sortedDataset}
        rowHeight={48}
        sortColumns={sortColumns}
        onSortColumnsChange={setSortColumns}
        className={"rdg-light"}
      />
    </div>
  );
};
