import { FC } from 'react'
import './TableRow.css'
import { TableRowProps } from './types'

const TableRow: FC<TableRowProps> = ({ item, isHeading = false }) => {
  const itemComponents = Object.values(item).map((value) => {
    if (isHeading) return <th className='cell heading'>{value}</th>
    return <td className='cell'>{value}</td>
  })
  return <tr className='row'>{itemComponents}</tr>
}

export default TableRow
