import React from 'react';

import DogPen from '../Dogpen/Dogpen';
import AllEmployees from '../AllEmployees/AllEmployees';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.scss';


class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  render() {
    const { dogs } = this.state;
    const { employees } = this.state;
    return (
        <div className="Home">
        <h5 className="section-title">Dogs In Care</h5>
        <DogPen dogs={ dogs }/>
        <h5 className="section-title">My Employees</h5>
        <AllEmployees employees={ employees }/>
        </div>
    );
  }
}

export default Home;
