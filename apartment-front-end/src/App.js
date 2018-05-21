import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import './App.css';
import Apartments from './pages/Apartments'
import NewListing from './pages/NewListing'

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


createListing(apartment) {
  return fetch(BASE + '/apartments', {
        body: JSON.stringify(apartment),  // <- we need to stringify the json for fetch
        headers: {  // <- We specify that we're sending JSON, and expect JSON back
            'Content-Type': 'application/json'
        },
        method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
    })
        .then((resp) => {
            let json = resp.json()

            return json
        })
        .then(successCat => {
        console.log("CREATE SUCCESS!", successCat);
        this.setState({
            newApartmentSuccess: true
        })
    })
}

  render() {
    return (
      <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path ="/apartments" render={(props) => <Apartments
          apartments={this.state.apartments}/>} />
          <Route exact path ="/apartments/new" render={(props) => <NewListing onSubmit ={this.createListing.bind(this)}/>}/>

        </Switch>
      </Router>

      </div>
    );
  }
}

export default App;
