
import './App.css'
import { Navbar } from './components/Navbar'
import Poster from './components/Poster'
import Items from './components/Items'

function App() {
  return (
    
      <div className='min-h-screen flex flex-col justify-between'>
        <Navbar/>
        <main className="pt-16"> {/* Adjust pt-16 based on navbar height */}
        <Poster/>
        <Items/>
      </main>
    </div>

    
  )
}

export default App
