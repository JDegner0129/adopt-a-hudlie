import React from 'react';
import { stateUpdated } from './state';
import ProfileCard from './profile-card';

export default class ProfileCards extends React.Component {

  constructor() {
    super();

    this.state = {
      users: [],
    };

    stateUpdated((state) => {
      this.setState(state);
    });
  }

  render() {
    return (
      <div className="profile-cards">
        {this.state.users.map((u, i) =>
          <ProfileCard
            key={i}
            id={u._id}
            name={u.name}
            img={u.img}
            about={u.description}
            location={u.location}
            interests={u.interests}
          />
        )}
      </div>
    )
  }
};
