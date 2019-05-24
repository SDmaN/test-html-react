import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { Home } from './pages/Home';

const App = () => {
  return (
    <div>
      <nav>
        <Link to={'/'}>Home</Link>
      </nav>

      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
};

export default App;
