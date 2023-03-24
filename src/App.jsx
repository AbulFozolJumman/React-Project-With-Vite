import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Watch from './Component/Watch/Watch'
import Knob from './Component/Knob/Knob'
import Device from './Component/Device/Device'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Device name="Oppo A31" price="20000TK"></Device>
      <Knob steps="777"></Knob>
      <Watch></Watch>
    </div>
  )
}

export default App
