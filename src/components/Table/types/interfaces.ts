export type tableData = {
  data: string;
  title: string;
  amount: number;
  distance: number;
};

export interface TableProps {
  data: tableData;
}
