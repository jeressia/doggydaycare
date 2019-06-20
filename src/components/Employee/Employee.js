import React from 'react';


// import goatShape from '../../helpers/propz/goatShape';

import './Employee.scss';

class Employee extends React.Component {
  // static propTypes = {
  //   goat: goatShape.goatShape,
  // }

  render() {
    const { employee } = this.props;
    return (
      <div className="Employee col-3">
        <div className="card">
            <img className="card-img-top" src={employee.imageUrl} alt="Card cap"/>
            <div className="card-body">
                <h5 className="card-title">{employee.name}</h5>
                <p className="card-text">{employee.favPose}</p>
            </div>
        </div>
      </div>
    );
  }
}

export default Employee;
