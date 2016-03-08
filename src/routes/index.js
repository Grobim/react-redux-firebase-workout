import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import CoreLayout from 'layouts/CoreLayout/CoreLayout';
import HomeView from 'views/HomeView/HomeView';
import TodoView from 'views/TodoView';
import NotFoundView from 'views/NotFoundView/NotFoundView';

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='todos' component={TodoView} />
    <Route path='404' component={NotFoundView} />
    <Redirect from='*' to='404' />
  </Route>
);
