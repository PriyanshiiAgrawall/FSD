import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  function increementHandler() {
    setCount(count + 1);
  }
  function decreementHandler() {
    setCount(count - 1);
  }
  function resetHandler() {
    setCount(0);
  }

  return (
    <>
      <h2 className='counteapp'>Count <h1>{count}</h1></h2>
      <div className='buttonHolder'>
        <button className='increaseBtn' onClick={increementHandler}>Increase</button>
        <button className='resetBtn' onClick={resetHandler}>Reset</button>
        <button className='decreaseBtn' onClick={decreementHandler}>Decrease</button>

      </div>
    </>
  )
}

export default App
