import React, { Component } from 'react'
import './App.css'
import Quiz from './Quiz'
let quizData = require('./quiz_data.json')

class App extends Component {
  render() {
    return (
      <div >
        <Quiz/>
        </div>
    )
  }
}

export default App