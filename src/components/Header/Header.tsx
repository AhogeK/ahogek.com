import React from 'react'
import { Link } from 'react-router-dom'
import { SITE_TITLE } from '../../config.ts'
import { BsFillChatRightHeartFill } from 'react-icons/bs'
import './Header.css'
import HeaderLink from '../HeaderLink/HeaderLink.tsx'
import { IoBook, IoHome } from 'react-icons/io5/index.js'

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
          <div className='items-center gap-6 hidden md:flex'>
            <HeaderLink to='/'><IoHome /> 首页</HeaderLink>
            <HeaderLink to='/blog'><IoBook /> 文章</HeaderLink>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
