import React from 'react'
import style from './BodyTitle.module.css'
import imgArchitectureCorner from '../../../images/architectureImage.jpg'

const BodyTitle = () => {
  return (
    <div className={style.bodyTitle}>
      <h1 className={style.textTitle}>ARQUITECTURA <br></br>
      TÉCNICA</h1>
    <img className={style.img} src="https://gatopardo.com/wp-content/uploads/2018/10/architecture-3555773_960_720.jpg"></img>
    </div>  
  )
}

export default BodyTitle