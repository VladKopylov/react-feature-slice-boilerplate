import React from 'react';

import { Routing } from 'Pages';
import { withHocs } from './providers';

import './index.scss';

const App = () => {
  return (
    <div className="app">
      <Routing />
    </div>
  );
};

const AppWithHocs = withHocs(App);

export default AppWithHocs;
