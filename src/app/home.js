import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './search-bar';
import Layout from './layout';

ReactDOM.render(
  <Layout header="Search for mentor">
    <SearchBar />
  </Layout>,
  document.getElementById('home-app')
);
