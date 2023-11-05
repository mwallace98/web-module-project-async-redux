import React from 'react';
import './App.css';
import axios from 'axios'
import { connect } from 'react-redux';
import { fetchPersonSuccess } from './Actions/GetPerson';



function App(props) {
  const {name,city,imageURL} = props
  
  const getFakePerson = () => {
    axios.get('https://randomuser.me/api/')
  .then(res => {
    const personData =  res.data.results[0]
    console.log(personData)
  })
  .catch(err => {
    console.log(err)
  })
  }

  return (
    <div className="App">
      <h1>Random Person</h1>

      <button onClick={getFakePerson}>Get Fake Person</button>
      <p>Name:{props.name}</p>
      <p>City:{props.city}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    name:state.name,
    city:state.name
  }
}


export default connect(mapStateToProps)(App);