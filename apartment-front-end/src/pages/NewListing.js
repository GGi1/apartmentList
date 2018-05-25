import React, { Component } from 'react';
import withAuth from '../components/withAuth'
import axios from 'axios';

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
				hours: '',
				avatar: null,
				avatar_base: null//,
			}//,
		// 	selectedFile: null,
		// 	avatar: 'test',
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
	// console.log(form.avatar);
	this.setState({form: form})

}

addApartment(apartment){
	// this.uploadHandler
	apartment.preventDefault()
	console.log(this.state.form);
  this.createListing(this.state.form)
	this.props.history.push('/apartments')
}

	// fileChangedHandler = (event) => {
	// 	// console.log(event.target.files[0]);
	//   this.setState({avatar: event.target.files[0]})
	//
	// }

	getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

	fileChangeHandler(event){
    const file = event.target.files[0]
    this.getBase64(file).then( (fileString) => {
      const formState = Object.assign({}, this.state.form)
      formState.avatar_base = fileString
      this.setState({form: formState})
    })
  }

	// uploadHandler = () => {
	//
	// 	const formData = new FormData()
	// 	console.log(this.state.avatar);
	// 	formData.append('myFile', this.state.avatar, this.state.avatar.name)
	// 	axios.post('http://localhost:3000/apartments', formData)
	// // axios.post('http://localhost:3000/apartments', this.state.selectedFile)
	//
	// }



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

	{/* <input type="file" name="avatar" direct_upload="true" id="avatar" onChange={this.updateForm.bind(this)} value={form.avatar}/> */}
		<input type="file" onChange={this.fileChangeHandler.bind(this)}/>
			{/* <button onClick={this.uploadHandler}>Upload!</button><br/> */}
    <input type="submit" value="Add New Apartment" onClick={this.addApartment.bind(this)}/>
    </form><br/><br/>
		{/* {this.fixlink(this.state.form.avatar)} */}


		{console.log(this.state.avatar)}
		{/* <form action="http://localhost:3000/apartments" method="post" enctype="multipart/form-data" >
		 <div>
		   <input type="file" id="avatar" name="avatar"/>
		 </div>
		 <div>
		   <button>Submit</button>
		 </div>
		</form>
<br/> */}
{/* <input type="file" onChange={this.fileChangedHandler}/>
<button onClick={this.uploadHandler}>Upload!</button> */}
     </div>
  )
}

}
export default withAuth(NewListing)
