import React from 'react';
import moment from 'moment';
import ReactDOM from 'react-dom';
import App from './App.jsx';

var currentDate = moment.utc().format();
ReactDOM.render(<App utctime={currentDate}/>, document.getElementById('app'))