import React from 'react'
import style from './Header.module.css'
import HeaderLogo from './headerLogo/HeaderLogo'
import HeaderImg from './headerMenu/HeaderImg'

const Header = () => {
  return (
    <div className={style.header}>
      <HeaderLogo></HeaderLogo>
      <HeaderImg></HeaderImg>
    </div>
  )
}

export default Header