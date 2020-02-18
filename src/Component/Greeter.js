import React, { Component } from 'react'
import './Greeter.css'

class Greeter extends Component {
  // Greeter is a dumb/display component that does not hold state

    capitalizer = (userInput) => {
      // a display component can have its own methods that act on the information being passed as props
      return userInput.toUpperCase()
    }
    lowercaserizer = (userInput) => {
        // a display component can have its own methods that act on the information being passed as props
        return userInput.toLowerCase()
      }

    beepbop = (userInput) => {
        var regex = /[aA-zZ]/g
        const replaceInput = userInput
        return replaceInput.replace(regex, 'monkey')
    }

  render() {
    return (
        <div>
          <h1>ANGRY ROBOT: </h1>
          <img src="https://i.imgur.com/sQLyURc.png"/>
          <h2>{ this.capitalizer(this.props.name) }! </h2>
          <br />
          <h1>~vibing~ ~robot~:</h1>
           <img src="https://i.pinimg.com/originals/95/1e/6b/951e6b191124c70445007f030335e7d5.jpg"/>
          <h2>{ this.lowercaserizer(this.props.name) }! </h2>
          <br />
          <h1> MonkeyBot:</h1>
          <img src="https://lh3.googleusercontent.com/proxy/sUJa9x46jpdyHC6dn9Ug-HC7i_laZRKylsuTx_YU7UvEsrGeI9GA889W45dCwqab2s9VM1RIX8Oj8wsfXM2I1GzgVlmMzaFEN0TN0_iGVDwAkXyM7I-1ttmvtZ2KBZJPixdNaQ"/>
          <h2> { this.beepbop(this.props.name) }! </h2>
          <br />
        </div>
    )
  }
}

export default Greeter
