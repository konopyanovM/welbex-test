import './App.css'
import Table from './components/Table'
import { TableHeadingsEnum } from './constants'

function App() {
  const headingRow = {
    date: TableHeadingsEnum.DATA,
    title: TableHeadingsEnum.TITLE,
    amount: TableHeadingsEnum.AMOUNT,
    distance: TableHeadingsEnum.DISTANCE,
  }
  const data = [
    { date: '23.09.2022', title: 'Audi', amount: 213, distance: 2000 },
    { date: '23.09.2022', title: 'Mazda', amount: 355, distance: 1400 },
    { date: '23.09.2022', title: 'BMW', amount: 544, distance: 800 },
    { date: '23.09.2022', title: 'Toyota', amount: 982, distance: 4300 },
  ]

  return (
    <div className='app'>
      <div className='app__wrapper'>
        <Table data={data} headingData={headingRow}></Table>
      </div>
    </div>
  )
}

export default App
