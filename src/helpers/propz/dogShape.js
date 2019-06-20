import PropTypes from 'prop-types';

const dogShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  daysSinceDropOff: PropTypes.number.isRequired,
  isfriendly: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
});

export default { dogShape };
