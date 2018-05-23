import React, { Component } from 'react';
import '../css/Login.css';
import AuthService from '../services/AuthService';


class Login extends Component {
  constructor(){
    super()
    this.Auth = new AuthService()
    this.state={
      email: '',
      password: ''
    }
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFormSubmit(e){
    e.preventDefault()
    this.Auth.login(this.state.email,this.state.password)
    .then(res =>{
      this.props.history.replace('/apartments')
    })
    .catch(err =>{ alert(err) })
  }

  goRegister(){
    this.props.history.push('/register')
  }
  render() {
    return (
      <div className="center">
        <div className="card">
          <h1>Login</h1>
          <form
            onSubmit={this.handleFormSubmit.bind(this)}
          >
            <input
              className="form-item"
              placeholder="Email"
              name="email"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={this.state.email}
            />
            <input
              className="form-item"
              placeholder="Password"
              name="password"
              type="password"
              onChange={this.handleChange.bind(this)}
              value={this.state.password}
            />
            <input
              className="form-submit"
              value="Submit"
              type="submit"
            />
          </form>
          <br/>
          <input
            className="card"
            type ="submit"
            value = "Sign Up"
            onClick = {this.goRegister.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Login;
