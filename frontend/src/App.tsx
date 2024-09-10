import { useState } from 'react'
import './App.css'
import Reminder from './components/Reminder'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full'>
      <Reminder/>
    </div>
  )
}

export default App
