import React from 'react'

interface BodyProps {
  children: React.ReactNode
}

const Body: React.FC<BodyProps> = ({ children }) => {
  return (
    <div
      className='w-full h-full bg-orange-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-300 break-words leading-6
    transition-colors duration-500'
    >
      {children}
    </div>
  )
}
export default Body
