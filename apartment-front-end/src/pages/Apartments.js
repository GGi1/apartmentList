import React, { Component } from 'react';
import Header from '../components/Header';

class Apartments extends Component {
  render() {
  return(
    <div>

    {this.props.apartments.map((element, index) =>{
        return (
          <div>
          <Header />
          { element.street1 } { element.street2 } { element.city }, { element.state }, { element.zip }, { element.country }
          </div>
        )
        })
    }
    </div>
  )}
}



export default Apartments;
