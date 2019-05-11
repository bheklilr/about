import React from 'react';
import { HashRouter, Route } from "react-router-dom";

import Home from './Home';

const App: React.FC = () => {
  return (
    <div className="app">
      <HashRouter basename="/">
        <Route exact path="/" component={Home} />
      </HashRouter>
    </div>
  );
}

export default App;
