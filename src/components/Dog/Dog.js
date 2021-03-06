import React from 'react';

import './Dog.scss';

class Dog extends React.Component {
  render() {
    const { dog } = this.props;
    return (
      <div className="Dog">
        <div className="card" id={dog.isfriendly}>
            <div className="card-body">
                <h5 className="card-title">{dog.name}</h5>
                <img className="card-img-top" src={dog.imageUrl} alt="Card cap"/>
                <p className="card-text drop-off">Dropped off by owner <strong>{dog.daysSinceDropOff}</strong> day(s) ago</p>
                <p className="card-text"><strong>{dog.size}</strong></p>
                <p className="card-text" id={dog.color}><strong>{dog.color}</strong></p>
            </div>
        </div>
      </div>
    );
  }
}

export default Dog;
