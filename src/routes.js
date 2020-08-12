import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/detail/:id" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;