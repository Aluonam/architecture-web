import React from 'react'
import style from './Header.module.css'
import HeaderLogo from './headerLogo/HeaderLogo'

const Header = () => {
  return (
    <div className={style.header}>
      <HeaderLogo></HeaderLogo>
    </div>
  )
}

export default Header