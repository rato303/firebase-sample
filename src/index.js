import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

require('picnic/picnic.min.css');

import App from './App';

render(<App />, document.getElementById('root'));
