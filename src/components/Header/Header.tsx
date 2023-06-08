import React from 'react'
import { Link } from 'react-router-dom'
import { SITE_TITLE } from '../../config.ts'
import { BsFillChatRightHeartFill } from 'react-icons/bs'
import './Header.css'

const Header: React.FC = () => {
  return (
    <div className='fixed w-full p-2 z-20 backdrop-blur-md'>
      <div className='mx-auto max-w-3xl'>
        <nav className='flex items-center gap-3 text-base'>
          <Link to='/'>
            <h2
              className='font-semibold tracking-tighter p-2 font-mplus text-lg flex items-center title-h2'
            >
              <BsFillChatRightHeartFill className='icon-shake' />
              <span className='mr-1' />
              {SITE_TITLE}
            </h2>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Header
