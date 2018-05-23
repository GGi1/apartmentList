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
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/apartments">Apartments</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/apartments/new">Add an Apartment</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onClick={this.handleLogout.bind(this)} href="/">Log Out</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search"/>
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>

    </nav>
    )
  }
}
export default Navbar;
