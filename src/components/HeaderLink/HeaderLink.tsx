import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import './HeaderLink.css'

interface HeaderLinkProps {
  to: string
  children: React.ReactNode
  target?: string
  className?: string
}

const HeaderLink: React.FC<HeaderLinkProps> = ({
                                                 to, children,
                                                 target, className
                                               }) => {
  const location = useLocation()
  const isActive = to === location.pathname ||
    to === location.pathname.replace(/\/$/, '')

  const classList = classNames(className, { active: isActive })

  return (
    <Link to={to} target={target} className={classList}>
      {children}
    </Link>
  )
}

export default HeaderLink
