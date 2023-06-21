import React from "react";
import s from './ProfileInfo.module.css';
import city from './assets/city_g.png';

const ProfileInfo = ({ profile }) => {
  return <div className={s.content}>
    <div>
      <img className={s.content__img} src={city} alt="img"></img>
    </div>
    <div className={s.content__inner}>
      <div className="desriptionBlock">
        <img src={profile.photos.large} />
        <p>{profile.fullName}</p>
        <p>{profile.lookingForAJobDescription}</p>
      </div>
    </div>
  </div>
}

export default ProfileInfo;