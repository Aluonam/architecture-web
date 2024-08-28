import React from 'react'
import style from './Header.module.css'
import HeaderLogo from './headerLogo/HeaderLogo'
import HeaderMenu from './headerMenu/HeaderMenu'

const Header = () => {
  return (
    <div className={style.header}>
      <HeaderLogo></HeaderLogo>
      <HeaderMenu></HeaderMenu>
    </div>
  )
}

export default Header