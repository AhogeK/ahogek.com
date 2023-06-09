import React from 'react'
import './App.css'
import { Header, Masthead } from './components'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className='pt-[p5px]'>
        <Masthead />
      </main>
    </>
  )
}

export default App
