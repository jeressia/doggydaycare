import React, { Component } from 'react';

import propTypes from 'prop-types';

import employeeShape from '../../helpers/propz/employeeShape';
import dogShape from '../../helpers/propz/dogShape';
import walkShape from '../../helpers/propz/walkShape';

import './SingleWalk.scss';

export class Walk extends Component {
  static propTypes = {
    walk: walkShape.walkShape,
    dog: dogShape.dogShape,
    employee: employeeShape.employeeShape,
    deleteEvent: propTypes.func,
  }

  deleteEvent = (e) => {
    const { walk, deleteEvent } = this.props;
    e.preventDefault();
    deleteEvent(walk.id);
    console.error('button works');
  }

  render() {
    const { walk, dog, employee } = this.props;
    return (
      <div className="SingleWalk">
        <div className="card walk-card" id={walk.id}>
          <div className="card-body">
            <h5 className="card-title">{employee.name} + {dog.name}</h5>
              <p className="card-text">{walk.date}</p>
              <div className="d-flex mx-auto">
                <img src={employee.imageUrl} alt="employee" className="walk-image"/>
                <img src={dog.imageUrl} alt="employee" className="walk-image"/>
                </div>
                <button className="btn btn-danger delete" onClick={this.deleteEvent}>x</button>
            </div>
          </div>
        </div>
    );
  }
}

export default Walk;
