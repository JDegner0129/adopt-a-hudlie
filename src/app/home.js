import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './search-bar';
import Layout from './layout';
import ProfileCards from './profile-cards';

ReactDOM.render(
  <Layout header="Search for mentors">
    <SearchBar />
    <ProfileCards />
  </Layout>,
  document.getElementById('home-app')
);
