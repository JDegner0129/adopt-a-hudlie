import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../../components/search-bar';
import Layout from '../../components/layout';

import './style.scss';

ReactDOM.render(
  <Layout header="Search for mentors">
    <SearchBar />
  </Layout>,
  document.getElementById('home-app')
);
