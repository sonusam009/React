import { useState } from 'react'
function App() {
  const [color, setColor] = useState("olive");

  return (
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed fiex flex-wrap justify-center bottom-12 insect-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap shadow-xl bg-white px-3 py-2 rounded-3xl'>
            <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor: "red"}}>Red</button>
            <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor: "green"}}>Greem</button>
            <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor: "blue"}}>blue</button>
            <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor: "yellow"}}>Yellow</button>
          </div>
        </div>
      </div>
  )
}

export default App
