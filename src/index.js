import React from 'react';
import ReactDOM from 'react-dom';
import './ui/styles/index.css';
import App from './ui';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
