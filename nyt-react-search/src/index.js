import React from 'react';
import ReactDOM from 'react-dom';
import Parent from './components/Parent';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Parent />, document.getElementById('root'));
registerServiceWorker();
