import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Apartments from './pages/Apartments'
import NewListing from './pages/NewListing'
import Login from './components/Login'
import Registration from './components/Registration'
import Navbar from './components/nav'



const BASE = 'http://localhost:3000'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: [],
      newApartmentSuccess: false,
    }
  }




componentWillMount() {
  return fetch(BASE + '/apartments')
    .then((resp) => {
      return resp.json()
    })
    .then(APIinfo => {
      this.setState({
        apartments: APIinfo
        })
      console.log(this.state.apartments);
    })
}




  render() {
    return (
      <div className="App">
      <Navbar/>
      <Router>
        <Switch>
          <Route exact path ="/apartments" render={(props) => <Apartments apartments={this.state.apartments}/>} />
          <Route path ="/apartments/new" component={NewListing}/>
          <Route exact path ="/login" component={Login} />
          <Route exact path ="/" component={Login} />
          <Route exact path ="/register" component={Registration} />
        </Switch>
      </Router>

      </div>
    );
  }
}

export default App
