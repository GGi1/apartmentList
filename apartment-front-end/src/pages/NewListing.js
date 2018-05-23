import React, { Component } from 'react';
import withAuth from '../components/withAuth'

const BASE = 'http://localhost:3000'

class NewListing extends Component {
	constructor(props){
		super(props)
		this.state ={
			form:{
				street1: '',
				street2: '',
				city: '',
				state: '',
				zip: '',
				country: '',
				manager: '',
				phone: '',
				email: '',
				hours: ''
			}
		}
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
	        .then(resp2 => {
	        console.log("CREATE SUCCESS!", resp2);
	        this.setState({
	            newApartmentSuccess: true
	        })
	    })
	}

updateForm(event){
	let {form} = this.state
	form[event.target.name] = event.target.value
	this.setState({form: form})

}

addApartment(apartment){
	apartment.preventDefault()
  this.createListing(this.state.form)
	this.props.history.push('/apartments')
}

render(){
	let {form} = this.state
  return(
    <div>
		<h1> Add a Listing</h1>
    <form>
    <input type="text" placeholder="Street" name="street1" onChange={this.updateForm.bind(this)} value={form.street1} />
    <input type="text" placeholder="Unit #" name="street2"
		onChange={this.updateForm.bind(this)} value={form.street2}/><br/>
    <input type="text" placeholder="City" id="city" name="city" onChange={this.updateForm.bind(this)} value={form.city}/>
    <input type="text" placeholder="State" id="state" name="state"
		onChange={this.updateForm.bind(this)} value={form.state}/><br/>
		<input type="text" placeholder="Zip" id="zip" name="zip"
		onChange={this.updateForm.bind(this)} value={form.zip}/>
		<input type="text" placeholder="Country" id="country" name="country" onChange={this.updateForm.bind(this)} value={form.country}/><br/><br/>
		<input type="text" placeholder="Property Manager" id="manager" name="manager" onChange={this.updateForm.bind(this)} value={form.manager}/>
		<input type="text" placeholder="Phone" id="phone" name="phone" onChange={this.updateForm.bind(this)} value={form.phone}/><br/>
		<input type="text" placeholder="E-mail" id="email" name="email" onChange={this.updateForm.bind(this)} value={form.email}/>
		<input type="text" placeholder="Business Hours" id="hours" name="hours" onChange={this.updateForm.bind(this)} value={form.hours}/><br/><br/>
    <input type="submit" value="Add New Apartment" onClick={this.addApartment.bind(this)}/>
    </form>

     </div>
  )
}

}
export default withAuth(NewListing)
