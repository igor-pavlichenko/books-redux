import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './containers/Root.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
