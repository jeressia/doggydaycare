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
        <h1 className="section-title">Doggy Daycare</h1>
        <h4 className="section-title">Dogs In Care</h4>
        <div class="legend d-flex">Legend:
        <div class="red">Not Friendly</div>
        <div class="yellow">May Be Friendly</div>
        <div class="white">Friendly</div>
        </div>
        <DogPen dogs={ dogs }/>
        <h4 className="section-title">My Employees</h4>
        <AllEmployees employees={ employees }/>
        </div>
      </div>
    );
  }
}

export default App;
