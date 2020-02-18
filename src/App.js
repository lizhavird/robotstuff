import React, { Component } from 'react'
// importing the Greeter component
import Greeter from './Component/Greeter.js'
// importing the NameInput component that we are about to create
import NameInput from './Component/NameInput.js'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    // state object stays the same
    this.state = {
      name: ''
    }
  }

  updateName = (name) => {
    // this method is passed as props to <NameInput /> so the value from the child component can be passed back "up river" to the parent App.js
    this.setState({ name: name })
  }

  render() {
    return (
      <div>
        {/* <Greeter /> gets the same information as props */}
        <Greeter
          name={ this.state.name }
        />
        {/* <NameInput /> gets the information from state and a method as props  */}
        <NameInput
          name={ this.state.name }
          updateName={ this.updateName }
        />
      </div>
    )
  }
}

export default App
