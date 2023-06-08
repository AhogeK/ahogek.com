import React from 'react'
import './App.css'
import Header from './components/Header/Header.tsx'
import Body from './components/Body/Body.tsx'

const App: React.FC = () => {
  return (
    <Body>
      <Header />
    </Body>
  )
}

export default App
