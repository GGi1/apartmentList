import React, { Component } from 'react';

const BASE = 'http://localhost:3000'


class Registration extends Component {
  constructor(props){
    super(props)
    this.state ={
      form:{
        name: '',
        email: '',
        password: '',
        password_confirm: '',
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

  addUser(apartment){
  apartment.preventDefault()
  this.createListing(this.state.form)
  this.props.history.push('/apartments')
  }

  render() {
    let {form} = this.state
    return (
      <div>
      <h1>Create Account</h1>
      <form>
      <input type="text" placeholder="Name" name="name" onChange={this.updateForm.bind(this)} value={form.name} /><br/>
      <input type="text" placeholder="Email" name="email"
      onChange={this.updateForm.bind(this)} value={form.email}/><br/><br/>
      <input type="text" placeholder="Password" name="password" onChange={this.updateForm.bind(this)} value={form.password}/><br/>
      <input type="text" placeholder="Confirm Password" name="password_confirm"
      onChange={this.updateForm.bind(this)} value={form.password_confirm}/><br/><br/>
      <input type="submit" value="Register" onClick={this.addUser.bind(this)}/>
      </form>
      </div>
    )
  }
}


export default Registration;
