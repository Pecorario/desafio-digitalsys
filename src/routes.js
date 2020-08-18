import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NewOccurrence from './pages/NewOccurrence';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={NewOccurrence} />
      </Switch>
    </BrowserRouter>
  );
}