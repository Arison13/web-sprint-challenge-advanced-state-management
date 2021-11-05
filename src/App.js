import React, { Component } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import { fetchSuccess, fetchStart, fetchError } from "./actions";
import {connect} from 'react-redux';
class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchStart()
    axios.get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res.data)
        this.props.fetchSuccess(res.data)
      }).catch((err) => {
        console.log(err)
        this.props.fetchError()

      })      
  }
  render() {
    
    return (
      <div className="App">
        <Header />
        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

// mapStateToProps = () => {

// }

export default connect(null, {fetchSuccess, fetchStart, fetchError})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.