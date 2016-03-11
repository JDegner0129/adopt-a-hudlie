import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';

class UserLogin extends React.Component {
  constructor() {
    super()
    this.state = {
      userid: '',
      email: ''
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }
  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }
  render() {
    return (
      <div className="ko-field-wrapper">
        <div className="ko-field">
          <label>Enter Email to Login:</label>
          <input
            type="text"
            placeholder="foo@bar.baz"
            onChange={this.handleEmailChange}/>
        </div>
        <ul className="ko-checkboxes">
          <li>
            <span className="ko-choice-mark"></span>
            <span className="ko-choice-label">Remember me</span>
          </li>
        </ul>
        <div className="ko-form-actions">
          <button className="btn-primary">Submit</button>
        </div>
      </div>
    );
  }
};

ReactDOM.render(
  <Layout header="User login">
    <UserLogin/>
  </Layout>, document.getElementById('login-app')
);
