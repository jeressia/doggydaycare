import React from 'react';

import propTypes from 'prop-types';

import walkData from '../../helpers/data/walkData';
import employeeData from '../../helpers/data/employeeData';
import dogData from '../../helpers/data/dogData';

import SingleWalk from '../SingleWalk/SingleWalk';

import './Walks.scss';


class Walks extends React.Component {
  static propTypes = {
    deleteOrder: propTypes.func,
  }

  state = {
    walks: [],
    employees: [],
    dogs: [],
  }

  getWalks = () => {
    walkData.getMyWalks()
      .then(walks => this.setState({ walks }))
      .catch(err => console.error('uh-oh, no walks', err));
  }

  componentDidMount() {
    employeeData.getMyEmployees()
      .then(employees => this.setState({ employees }));
    dogData.getMyDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error('uh-oh, walks', err));

    this.getWalks();
  }

  deleteEvent = (walkId) => {
    walkData.deleteWalk(walkId)
      .then(() => this.getWalks())
      .catch(err => console.error('not deleted', err));
  }

  render() {
    const makeWalks = this.state.walks.map((walk) => {
      const { dogs, employees } = this.state;
      const dog = dogs.find(d => d.id === walk.dogId);
      const employee = employees.find(e => e.id === walk.employeeId);
      return <SingleWalk key={walk.id} walk={walk || {}} dog={dog || {}} employee={employee || {}} deleteEvent={this.deleteEvent}/>;
    });


    return (
      <div className="Walks">
      <h5>Walks</h5>
      <div className="d-flex col-4">
        { makeWalks }
      </div>
      <button className="btn btn-warning add">Add New Walk</button>
      </div>

    );
  }
}
export default Walks;
