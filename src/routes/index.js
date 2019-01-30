import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { BASE_ROUTE, BASE_ROUTE_WITH_SLUG } from '../constants/routes';
import Home from '../containers/Home';
import RootWrapper from '../components/RootWrapper';

export default (
  <BrowserRouter>
    <RootWrapper>
      <Route path={BASE_ROUTE} exact component={Home} />
      <Route path={BASE_ROUTE_WITH_SLUG} exact component={Home} />
    </RootWrapper>
  </BrowserRouter>
);
