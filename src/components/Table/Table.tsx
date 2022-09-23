import { FC } from 'react'
import { TableHeadingsEnum } from '../../constants'
import TableRow from '../TableRow'
import './Table.css'
import { TableProps } from './types'

const Table: FC<TableProps> = ({ data, headingData }) => {
  const Rows = data.map((item) => {
    return <TableRow item={item} />
  })

  return (
    <table className='table'>
      {headingData && <TableRow item={headingData} isHeading={true} />}
      {Rows}
    </table>
  )
}

export default Table
