import React, { useState } from 'react'
import { profileAPI } from '../../api/profile_api'
import s from './Status.module.css'

export default function Status({ userStatus }) {

  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(userStatus)

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deActivateEditMode = () => {
    setEditMode(false)
    console.log(status)
    profileAPI.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.target.value)
  }

  return (
    <div>
      {!editMode && <div>
        <span onDoubleClick={activateEditMode}>{status || 'No status'}</span>
      </div>}
      {editMode && <div>
        <input autoFocus={true} onBlur={deActivateEditMode} onChange={onStatusChange} value={status} />
      </div>}
    </div>
  )
}
