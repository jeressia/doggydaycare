import React from 'react';

// import PropTypes from 'prop-types';

// import goatShape from '../../helpers/propz/goatShape';
import Dog from '../Dog/Dog';

import './Dogpen.scss';

class Dogpen extends React.Component {
  // static propTypes = {
  //   goats: PropTypes.arrayOf(goatShape),
  // }

  render() {
    const { dogs } = this.props;
    const makeDogs = dogs.map(dog => (
      <Dog key={dog.id} dog={dog} />
    ));
    return (
      <div className="Dogpen d-flex flex-wrap">
        { makeDogs }
      </div>
    );
  }
}

export default Dogpen;
