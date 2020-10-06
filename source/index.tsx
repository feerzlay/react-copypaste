import React from 'react';
import ReactDOM from 'react-dom';

import { Application } from './application';

const container = document.getElementById('container');

if (container) {
  ReactDOM.render(<Application />, container);
}
