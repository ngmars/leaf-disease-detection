import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import './App.css';
import React, {Component} from 'react'
import ImageUpload from './Container/main';
class App extends Component {
  render () {
  return (

    <div className="App">
      <Router>
        <Switch>
        <Route path="/" exact component={ImageUpload}/>
        </Switch>
      </Router>
    </div>
  )
}

}

export default App;
