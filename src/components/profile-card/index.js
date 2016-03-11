import React, { PropTypes } from 'react';
import classNames from 'classnames';
import style from './style.scss';

const renderStars = numStars => {
  const starElems = [];
  const starStyle = classNames('em', 'em-star');

  for (var i = 0; i < numStars; i++) {
    starElems.push(<i className={starStyle}></i>);
  }
  return starElems;
}

const renderInterests = interests => {
  return interests.map((i, k) => {
    const canMentorEl = i.canMentor ? <strong>Yes</strong> : 'No';
    const needsMentorEl = i.needsMentor ? <strong>Yes</strong> : 'No';

    return (
      <tr key={k}>
        <td>{i.name}</td>
        <td>{renderStars(i.rating)}</td>
        <td>{canMentorEl}</td>
        <td>{needsMentorEl}</td>
      </tr>
    );
  });
}

export default function ProfileCard(props: Object) : ReactDOM {
  const imageStyle = classNames('ko-color-blocks', style.profileImage);

  return (
    <div className={style.profileCard}>
      <div className={imageStyle}>
        <div className="ko-color-block-orange">
            <img src={`https://static.hudl.com/craft/employees/${props.img}-regular.jpg`}/>
        </div>
      </div>
      <div className={style.profileAbout}>
        <h4 className={style.profileName}>{props.name}</h4>
        <div>
          {props.about}
        </div>
        <div>
          {props.location}
        </div>
        <div>
          <a href={`mailto:${props.email}`} className="ko-link">{props.email}</a>
        </div>
      </div>
      <div className={style.profileInterests}>
        <table>
          <thead>
            <tr>
              <th>Skill</th>
              <th>Rating</th>
              <th>Can Mentor</th>
              <th>Needs Mentor</th>
            </tr>
          </thead>
          <tbody>
            {renderInterests(props.interests)}
          </tbody>
        </table>
      </div>
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
  email: PropTypes.string.isRequired,
};
