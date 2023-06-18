import React from "react";
import { NavLink } from "react-router-dom";
import s from './DialogItem.module.css'

const DialogItem = ({ name, id }) => {

  return (
    <div className={s.dialog}><NavLink to={`/dialogs/${id}`}>{name}</NavLink></div>
  )
}

export default DialogItem;