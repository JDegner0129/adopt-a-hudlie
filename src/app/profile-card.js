import React, { PropTypes } from 'react';

export default function ProfileCard(props: Object) : ReactDOM {
  return (
    <div className="profile-card">
      <div className="ko-color-blocks pc-img">
        <div className="ko-color-block-orange">
            <img src={`https://static.hudl.com/craft/employees/${props.img}-regular.jpg`}/>
        </div>
      </div>
      <div className="pc-about"><strong>{props.name}</strong><br/>{props.about}<br/>{props.location}</div>
      <div className="pc-interests">
        <ul>
          {props.interests.map((i, k) =>
            <li key="k">{i.interestId} {i.rating} {i.status}</li>
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
