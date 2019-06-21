import React from 'react';

import PropTypes from 'prop-types';

import employeeShape from '../../helpers/propz/employeeShape';

import './Employee.scss';

class Employee extends React.Component {
  static propTypes = {
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
  }

  render() {
    const { employee } = this.props;
    return (
      <div className="Employee col-3">
        <div className="card shadow-sm">
            <div className="card-body">
                <h5 className="card-title">{employee.name}</h5>
                <img className="card-img-top" src={employee.imageUrl} alt="Card cap"/>
                <p className="card-text"><strong>{employee.jobTitle}</strong></p>
            </div>
        </div>
      </div>
    );
  }
}

export default Employee;
