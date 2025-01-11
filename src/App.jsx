
import './App.css'
import { DataProvider } from './components/Datacontext'
import { Navbar } from './components/Navbar'
import Routing from './utils/Routing'

function App() {

  return (
    <>
      <DataProvider>
        <div>
          <Navbar />
        </div>
        <div className='w-full bg-slate-100'>
          <Routing />
        </div>
      </DataProvider>

    </>
  )
}

export default App
