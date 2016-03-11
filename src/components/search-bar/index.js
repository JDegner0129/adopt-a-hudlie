import React, { Component } from 'react';

import ProfileCard from '../profile-card';

export default class SearchBar extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.renderProfileCards = this.renderProfileCards.bind(this);

    this.state = {
      query: '',
      users: [],
    };
  }

  search() {
    $.ajax({
      url: '/api/v1/search?q=' + this.state.query,
      dataType: 'json',
      cache: false,
      success: data => {
        console.log(data);
        data.forEach((u) => {
          u.img = u.name.toLowerCase().replace(' ', '-');
        });
        this.setState({
          users: data,
        });
      },
      error: () => {
        this.setState({
          users: [],
        });
      },
    });
  }

  handleChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  onKeyPress(e) {
    if(e.key === 'Enter') {
      this.search();
    }
  }

  renderProfileCards() {
    return this.state.users.map((u, i) => {
      return (
        <ProfileCard
          key={i}
          id={u._id}
          name={u.name}
          img={u.img}
          about={u.description}
          location={u.location}
          email={u.email}
          interests={u.interests}
        />);
      }
    );
  }

  render() {
    return (
      <div>
        <div className="ko-field">
          <label>Interest, person or location...</label>
          <input
            type="text"
            placeholder="Interest, person or location..."
            value={this.state.query}
            onChange={this.handleChange}
            onKeyDown={this.onKeyPress}
          />
        </div>
        {this.renderProfileCards()}
      </div>
    )
  };
};
