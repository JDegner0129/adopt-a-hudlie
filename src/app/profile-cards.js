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
            name={u.name}
          />
        )}
      </div>
    )
  }
};
