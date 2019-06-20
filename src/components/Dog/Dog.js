import React from 'react';


// import goatShape from '../../helpers/propz/goatShape';

import './Dog.scss';

class Dog extends React.Component {
  // static propTypes = {
  //   goat: goatShape.goatShape,
  // }

  render() {
    const { dog } = this.props;
    return (
      <div className="Dog col-3">
        <div className="card">
            <img className="card-img-top" src={dog.imageUrl} alt="Card cap"/>
            <div className="card-body">
                <h5 className="card-title">{dog.name}</h5>
                <p className="card-text">{dog.favPose}</p>
            </div>
        </div>
      </div>
    );
  }
}

export default Dog;
