import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import propTypes from 'prop-types';

import employeeShape from '../../helpers/propz/employeeShape';
import employeeData from '../../helpers/data/employeeData';
import Employee from '../Employee/Employee';

import './AllEmployees.scss';

class AllEmployees extends React.Component {
  static propTypes = {
    employee: employeeShape.employeeShape,
  }

  state = {
    employees: [],
  }

  componentDidMount() {
    employeeData.getMyEmployees(firebase.auth().currentUser.uid)
      .then(employees => this.setState({ employees }))
      .catch(err => console.error('uh-oh, employees', err));
  }

  render() {
    const makeEmployees = this.state.employees.map(employee => (
      <Employee key={employee.id} employee={employee} />
    ));

    return (
      <div className="AllEmployees">
        { makeEmployees }
      </div>
    );
  }
}

export default AllEmployees;
