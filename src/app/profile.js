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

var ProfileTitle = React.createClass({
  render: function() {
    return <div>Profile of {uid}</div>;
  }
});

ReactDOM.render(
  <Layout>
    <ProfileTitle/>
  </Layout>, document.getElementById('profile-app')
);
