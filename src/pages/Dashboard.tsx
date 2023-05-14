import DataTable from '../components/DataTable'
import Background from '../assets/images/gamesroom.jpg'

function Dashboard() {
  return (
    <div       style={{ backgroundImage: `url(${ Background })`}} 
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
      <div>
        <DataTable />
      </div>
    </div>
  )
}

export default Dashboard