import React from 'react';
import ReactDOM from 'react-dom';
import url from 'url';

function getUserID() {
  var u = url.parse(window.location.href);
  var p = u.pathname.split("/");
  return p[2];
}

var uid = getUserID()

var ProfileTitle = React.createClass({
  render: function() {
    return <div>Profile of {uid}</div>;
  }
});

ReactDOM.render(
  <ProfileTitle/>, document.getElementById('profile-app')
);
