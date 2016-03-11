import React from 'react';
import { setState } from './state';

export default class SearchBar extends React.Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);

    this.state = {
      query: '',
    };
  }

  search() {
    $.ajax({
      url: '/api/v1/search?q=' + this.state.query,
      dataType: 'json',
      cache: false,
      success: function(data) {
        setState('users', data);
      }.bind(this)
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

  render() {
    return (
      <div className="ko-field">
        <label>Search for Interests</label>
        <input
          type="text"
          placeholder="Interests..."
          value={this.state.query}
          onChange={this.handleChange}
          onKeyDown={this.onKeyPress}
        />
      </div>
    )
  };
};
