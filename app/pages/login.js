import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Input from '../components/input';
import { handleLogin } from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
        password: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      },
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleLogin(this.state.form, this.props.history);
    // clear all field
    this.setState({
      form: {
        email: '',
        password: '',
      },
    });
  }

  render() {
    return (
      <form
        className="box"
        onSubmit={this.handleSubmit}
        method="post"
        action="/api/login"
      >
        <p className="title">Login</p>
        <Input
          label="Email"
          name="email"
          onChange={this.handleChange}
          value={this.state.form.email}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          onChange={this.handleChange}
          value={this.state.form.password}
        />
        <div className="field">
          <p className="control">
            <button className="button is-success">Login</button>
          </p>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  handleLogin,
};

Login = withRouter(connect(null, mapDispatchToProps)(Login));
export default Login;
