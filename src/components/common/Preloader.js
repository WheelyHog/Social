import React from 'react'
import s from './Proloader.module.css'
import preloader from '../../images/preloader.svg'

export default function Preloader({ isFetching }) {



  return (
    <div>
      <img src={preloader} alt='preloader' />
    </div>
  )
}
