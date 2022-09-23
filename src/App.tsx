import './App.css'
import Table from './components/Table'

function App() {
  const data = [
    { date: '23.09.2022', title: 'string 1', amount: 213, distance: 2000 },
    { date: '23.09.2022', title: 'string 2', amount: 355, distance: 1400 },
    { date: '23.09.2022', title: 'string 3', amount: 544, distance: 800 },
    { date: '23.09.2022', title: 'string 4', amount: 982, distance: 4300 },
  ]

  return (
    <div className='app'>
      <Table data={data}></Table>
    </div>
  )
}

export default App
