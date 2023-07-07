import React, { useState } from 'react'
import Contact from './Contact/Contact';
import s from './ProfileData.module.css'

export default function ProfileData({ profile, isowner }) {
  const [editMode, setEditMode] = useState(false)
  const goToEditMode = () => {
    setEditMode(true)
  }
  return (
    <div>
      {isowner && <div><button onClick={goToEditMode}>Edit Profile</button></div>}
      <div>
        <b>Full name: {profile.fullname}</b>
      </div>
      <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      {profile.lookingForAJob &&
        <div>
          <b>My professional skills: {profile.lookingForAJobDescription}</b>
        </div>
      }
      <div>
        <b>About me: {profile.aboutMe}</b>
      </div>
      <div>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}
      </div>
    </div>
  )
}
