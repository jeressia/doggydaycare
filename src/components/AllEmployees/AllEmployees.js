import React from 'react';

// import PropTypes from 'prop-types';

// import goatShape from '../../helpers/propz/goatShape';
import Employee from '../Employee/Employee';

import './AllEmployees.scss';

class AllEmployees extends React.Component {
  // static propTypes = {
  //   goats: PropTypes.arrayOf(goatShape),
  // }

  render() {
    const { employees } = this.props;
    const makeEmployees = employees.map(employee => (
      <Employee key={employee.id} employee={employee} />
    ));
    return (
      <div className="AllEmployees d-flex flex-wrap">
        { makeEmployees }
      </div>
    );
  }
}

export default AllEmployees;
