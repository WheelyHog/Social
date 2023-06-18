import React from "react";
import s from './ProfileInfo.module.css';
import city from './assets/city_g.png';

const ProfileInfo = () => {
  return <div className={s.content}>
    <div>
      <img className={s.content__img} src={city} alt="img"></img>
    </div>
    <div className={s.content__inner}>
      <div className="desriptionBlock">avatar + description</div>
    </div>
  </div>
}

export default ProfileInfo;