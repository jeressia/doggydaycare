import React from 'react';


import myDogs from './dogs';
import myEmployees from './employees';

import DogPen from '../components/Dogpen/Dogpen';
import AllEmployees from '../components/AllEmployees/AllEmployees';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


class App extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  componentDidMount() {
    this.setState({ dogs: myDogs });
    this.setState({ employees: myEmployees });
  }

  render() {
    const { dogs } = this.state;
    const { employees } = this.state;
    return (
      <div>
        <div className="App">
        <div>Doggy Daycare</div>
        <DogPen dogs={ dogs }/>
        <h1>My Employees</h1>
        <AllEmployees employees={ employees }/>
      </div>
      </div>
    );
  }
}

export default App;
