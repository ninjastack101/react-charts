import React from 'react';
import styled from 'styled-components';
import loadingImage from '../images/loader.gif'

const Mask = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Loader = () => (
  <Mask>
    <img src={loadingImage} alt="loading" />
  </Mask>
);

export default Loader;
