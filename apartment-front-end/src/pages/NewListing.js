import React, { Component } from 'react';
import {
	Button,
	Col,
	ControlLabel,
	FormGroup,
	FormControl,
	Row
} from 'react-bootstrap'



class NewListing extends Component {



addApartment(){
  
}

render(){
  return(
    <div>
    <form>
    <input type="text" placeholder="street" id="street1" name="street1"/>
    <input type="text" placeholder="street 2" id="street1" name="street1"/><br/>
    <input type="text" placeholder="city" id="street1" name="street1"/>
    <input type="text" placeholder="state" id="street1" name="street1"/><br/>
    <input type="submit" value="Add New Apartment" onClick={this.addApartment.bind(this)}/>
    </form>

     </div>
  )
}

}
export default NewListing
