import React, { useState } from "react";
import s from './ProfileInfo.module.css';
import city from './assets/city_g.png';
import oggy from './assets/oggy.png'
import Status from "../../Status/Status";
import ProfileData from "../ProfileData/ProfileData";
import ProfileDataForm from "../ProfileData/ProfileDataForm/ProfileDataForm";

const ProfileInfo = ({ profile, userStatus, isowner, savePhoto }) => {
  console.log(isowner)

  const [editMode, setEditMode] = useState(false)


  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const goToEditMode = () => {
    setEditMode(true)
  }

  return <div className={s.content}>
    <div>
      <img className={s.content__img} src={city} alt="img"></img>
    </div>
    <div className={s.content__inner}>
      <div className="description_block">
        <img src={profile.photos.large || oggy} alt='profile_photo' />
        {isowner && <input type={'file'} onChange={onMainPhotoSelected} />}
        {/* <p>{profile.fullName}</p>
        <p>Looking for job: {profile.lookingForAJob ? 'Yes' : 'No'}</p> */}
        <Status userStatus={userStatus} editMode={editMode} setEditMode={setEditMode} />
        {editMode ? <ProfileDataForm profile={profile} goToEditMode={goToEditMode} /> : <ProfileData profile={profile} isowner={isowner} />}
        {/* <p>{profile.lookingForAJobDescription}</p> */}
      </div>
    </div>
  </div>
}

export default ProfileInfo;