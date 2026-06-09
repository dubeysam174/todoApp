import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Button } from './components/ui/button'
import Navbar from './pages/Navbar'
import { Input } from './components/ui/input'
function App() {
  const [count, setCount] = useState(0)

 return (
  <>
  <Navbar/>
  <div className='flex items-center gap-5'>

  <Input type='text' placeholder='add a new todo' className='border-amber-400 m-4 w-1/4' />
  <Button> Add todo ....</Button>
  </div>

  </>
 )
}

export default App
