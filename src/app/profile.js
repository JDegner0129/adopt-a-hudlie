import React from 'react';
import ReactDOM from 'react-dom';
import url from 'url';
import Layout from './layout';

function getUserID() {
  var u = url.parse(window.location.href);
  var p = u.pathname.split("/");
  return p[2];
}

var uid = getUserID()

var UserProfile = React.createClass({
  getInitialState: function() {
    return {
      userid: uid,
      name: '',
      email: '',
      description: '',
      location: '',
      thumbnailPath: '',
      about: ''
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get(this.props.source, function (result) {
      var userData = result[0];
      this.setState({
        name: user.name,
        email: user.email,
        description: user.description,
        location: user.location,
        thumbnailPath: user.thumbnailPath,
        about: user.about
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
        <ul>
        <li>{this.state.userid}</li>
        <li>{this.state.name}</li>
        <li>{this.state.email}</li>
        <li>{this.state.description}</li>
        <li>{this.state.location}</li>
        <li>{this.state.thumbnailPath}</li>
        <li>{this.state.about}</li>
        </ul>
      </div>
    );
  }
});

ReactDOM.render(
  <Layout>
    <UserProfile source="api/v1/users/{uid}" />  
  </Layout>, document.getElementById('profile-app') 
);
