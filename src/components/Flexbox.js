import styled from 'styled-components';
import PropTypes from 'prop-types';

const getFlexDirection = props => props.column ? 'column' : 'row';

const getFlexSize = ({ size }) => size;

const Flexbox = styled('div')`
  display: flex;
  flex-direction: ${getFlexDirection};
  flex: ${getFlexSize};
`;

Flexbox.propTypes = {
  column: PropTypes.bool,
  flex: PropTypes.number,
};

Flexbox.defaultProps = {
  column: false,
  flex: 1,
};

export default Flexbox;
