import React from "react";
import PropTypes from 'prop-types';
import { ApolloProvider } from "react-apollo";

import client from './client';

const Provider = ({ children }) => (
  <ApolloProvider client={client}>
    {children}  
  </ApolloProvider>
);

Provider.propTypes = {
  children: PropTypes.element,
};

export default Provider;
