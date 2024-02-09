import { useState } from 'react'
import react from '../assets/react.svg'
import vite from '/vite.svg'
import '../styles/app.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div id='app' className='m-5 p-5 flex flex-col justify-center items-center'>
    <div id='app-container' className='m-5 p-5 flex flex-row justify-start items-center'>
      <h1 className='m-2.5 p-2.5 text-2.5xl font-semibold'>Pages-Tv</h1>
        <a href="https://vitejs.dev" >
          <img src={vite} className='m-1 p-1' alt="Vite logo" width={50} />
        </a>
        <a href="https://reactjs.dev" >
          <img src={react} className='m-1 p-1' alt="Preact logo" width={50} />
        </a>
      </div>
      <div id='app-card' className="m-2.5 p-2.5 flex flex-row justify-center items-center">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className='m-2.5 p-2.5'>
          Edit <code>src/app.jsx</code> and save to test Hmr
        </p>
      </div>
      <p id="read" className='m-2.5 p-2.5 bg-[#1A1A1A] rounded-lg'>
        Click on the Vite and Preact logos to learn more
      </p>
    </div>
    </>
  )
}

export default App