import { FC } from "react";
import "./Table.css";
import { TableProps } from "./types";

const Table: FC<TableProps> = ({}) => {
  return (
    <table>
      <tr>
        <th>Дата</th>
        <th>Название</th>
        <th>Количество</th>
        <th>Расстояние</th>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  );
};

export default Table;
