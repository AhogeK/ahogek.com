import React from 'react'
import './App.css'
import { Body, Header } from './components'
import { Masthead } from './components/Masthead'

const App: React.FC = () => {
  return (
    <Body>
      <Header />
      <main className='pt-[p5px]'>
        <Masthead />
      </main>
    </Body>
  )
}

export default App
