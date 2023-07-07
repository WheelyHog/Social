import React from 'react'
import s from './Contact.module.css'

export default function Contact({ contactTitle, contactValue }) {
  return (
    <div className={s.contact}>
      <b>{contactTitle}: {contactValue}</b>
    </div>
  )
}
