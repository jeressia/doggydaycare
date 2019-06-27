import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import dogData from '../../helpers/data/dogData';
import Dog from '../Dog/Dog';

import './Dogpen.scss';

class Dogpen extends React.Component {
  state = {
    dogs: [],
  }

  componentDidMount() {
    dogData.getMyDogs(firebase.auth().currentUser.uid)
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error('uh-oh, dogs', err));
  }

  render() {
    const dogComponents = this.state.dogs.map(dog => (
      <Dog key={dog.id} dog={dog} />
    ));

    return (
        <div className="Dogpen">
        { dogComponents }
      </div>
    );
  }
}

export default Dogpen;
