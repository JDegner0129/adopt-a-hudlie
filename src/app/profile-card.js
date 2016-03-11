import React, { PropTypes } from 'react';

export default function ProfileCard(props: Object) : ReactDOM {
  return (
    <div className="profile-card">
      <div className="ko-color-blocks">
        <div className="ko-color-block-orange">
          {props.name}
        </div>
      </div>
    </div>
  )
};

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired
};
