import { FC } from 'react'
import './TableRow.css'
import { TableRowProps } from './types'

const TableRow: FC<TableRowProps> = ({ item, isHeading = false }) => {
  const itemComponents = Object.values(item).map((value) => {
    if (isHeading) return <th>value</th>
    return <td>value</td>
  })
  return <tr>{itemComponents}</tr>
}

export default TableRow
