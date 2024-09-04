import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecurringDatePicker from './Components/RecurringDatePicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RecurringDatePicker></RecurringDatePicker>
    </>
  )
}

export default App
