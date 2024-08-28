import React from 'react'
import style from './Body.module.css'
import BodyTitle from './bodyTitle/BodyTitle'
import BodyFeatures from './bodyFeatures/BodyFeatures'
import BodyGallery from './bodyGallery/BodyGallery'

const Body = () => {
  return (
    <div className={style.body}>
      <BodyTitle></BodyTitle>
      <BodyFeatures></BodyFeatures>
      <BodyGallery></BodyGallery>
    </div>
  )
}

export default Body