import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './introduction/part-1/App'
import App2 from './introduction/part-2/App'
import App3 from './introduction/part-3/App'
import App4 from './introduction/part-4/App'
import App5 from './introduction/part-5/App'
import App6 from './introduction/part-6/App'
import { Hangman } from './exercises/hangman'
import App7 from './introduction/part-7/App'
import App8 from './introduction/part-8/App'
import AppHooks from './hooks/App'


ReactDOM.render(
  <React.StrictMode>
    <AppHooks />
  </React.StrictMode>,
  document.getElementById('root')
);
