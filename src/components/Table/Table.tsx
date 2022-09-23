import { FC } from 'react'
import { TableHeadingsEnum } from '../../constants'
import TableRow from '../TableRow'
import './Table.css'
import { TableProps } from './types'

const Table: FC<TableProps> = ({ data }) => {
  const headingRow = {
    date: TableHeadingsEnum.DATA,
    title: TableHeadingsEnum.TITLE,
    amount: TableHeadingsEnum.AMOUNT,
    distance: TableHeadingsEnum.DISTANCE,
  }
  return (
    <table>
      <TableRow item={headingRow} isHeading={true} />
    </table>
  )
}

export default Table
