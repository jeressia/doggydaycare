import PropTypes from 'prop-types';

const employeeShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  likesDog: PropTypes.bool.isRequired,
  helpfulness: PropTypes.number.isRequired,
  jobTitle: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
});

export default { employeeShape };
