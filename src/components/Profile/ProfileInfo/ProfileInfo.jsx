import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="japan" width={1000} />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
};

export default ProfileInfo;
