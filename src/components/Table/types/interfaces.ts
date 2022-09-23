export type tableData = {
  date: string
  title: string
  amount: number | string
  distance: number | string
}

export interface TableProps {
  data: tableData[]
  headingData?: tableData
}
