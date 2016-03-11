import React, { PropTypes } from 'react';
import classNames from 'classnames';
import style from './style.scss';

export default function ProfileCard(props: Object) : ReactDOM {
  const imageStyle = classNames('ko-color-blocks', style.profileImage);

  return (
    <div className={style.profileCard}>
      <div className={imageStyle}>
        <div className="ko-color-block-orange">
            <img src={`https://static.hudl.com/craft/employees/${props.img}-regular.jpg`}/>
        </div>
      </div>
      <div className={style.profileAbout}><strong>{props.name}</strong><br/>{props.about}<br/>{props.location}</div>
      <div className={style.profileInterests}>
        <ul>
          {props.interests.map((i, k) =>
            <li key={k}>{i.name} {i.rating}</li>
          )}
        </ul>
      </div>
      <button>Connect</button>
    </div>
  )
};

ProfileCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  interests: PropTypes.array.isRequired,
};
