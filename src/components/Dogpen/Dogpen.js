import React from 'react';

import PropTypes from 'prop-types';

import dogShape from '../../helpers/propz/dogShape';

import Dog from '../Dog/Dog';

import './Dogpen.scss';

class Dogpen extends React.Component {
  static propTypes = {
    dogs: PropTypes.arrayOf(dogShape.dogShape),
  }

  render() {
    const { dogs } = this.props;
    const makeDogs = dogs.map(dog => (
      <Dog key={dog.id} dog={dog} />
    ));
    return (
      <div class="d-flex flex-wrap">
        <div className="Dogpen">
      </div>
        { makeDogs }
      </div>
    );
  }
}

export default Dogpen;
