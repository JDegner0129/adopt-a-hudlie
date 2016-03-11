import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';

var UserLogin = React.createClass({
  getInitialState: function() {
    return {
      userid: '',
      email: ''
    };
  },
  render: function() {
    return (
      <div class="ko-field-wrapper">
        <div className="ko-field">
          <label>Enter Email to Login:</label>
          <input type="text" placeholder="foo@bar.baz" />
        </div>
        <ul class="ko-checkboxes">
          <li>
            <span class="ko-choice-mark"></span>
            <span class="ko-choice-label">Remember me</span>
          </li>
        </ul>
        <div class="ko-form-actions">
          <button class="btn-primary">Submit</button>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <Layout header="User login">
    <UserLogin/>
  </Layout>, document.getElementById('login-app')
);
