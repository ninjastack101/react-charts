import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import BASE_ROUTE from '../constants/routes';
import Home from '../containers/Home';

export default (
  <BrowserRouter>
    <Route path={BASE_ROUTE} exact component={Home} />
  </BrowserRouter>
);
