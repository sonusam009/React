import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  let myObject = {
    userName: 'Sonu',
    age: 33
  }

  let myArr = [1, 2, 3];
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card userName="Coffee With React" btnTxt="click me"></Card>
      <Card userName="Sonu Parmar" btnTxt="Visit me"></Card>
    </>
  )
}

export default App
