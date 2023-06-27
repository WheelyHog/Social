import React from "react";
import s from './ProfileInfo.module.css';
import city from './assets/city_g.png';
import Status from "../../Status/Status";

const ProfileInfo = ({ profile, userStatus }) => {

  return <div className={s.content}>
    <div>
      <img className={s.content__img} src={city} alt="img"></img>
    </div>
    <div className={s.content__inner}>
      <div className="desriptionBlock">
        <img src={profile.photos.large} alt='profile_photo' />
        {/* <p>{profile.fullName}</p> */}
        <Status userStatus={userStatus} />
        {/* <p>{profile.lookingForAJobDescription}</p> */}
      </div>
    </div>
  </div>
}

export default ProfileInfo;