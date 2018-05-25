import React, { Component } from 'react'
import {nav} from 'react-bootstrap'
import AuthService from '../services/AuthService'
import {Redirect} from 'react-router-dom';

const Auth = new AuthService()


class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggedOut: false
    }
  }

  handleLogout(){ // <- Remove local storage, and redirect the user
     Auth.logout()
     this.setState({
       loggedOut: true
     })
   }

  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/apartments">Apartments</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/apartments/new">Add an Apartment</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={this.handleLogout.bind(this)} href="/">Log Out</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>

    </nav>
    )
  }
}
export default Navbar;
