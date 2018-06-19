import React from 'react';
import ReactDOM from 'react-dom';
import Presentation from './presentation';
import registerServiceWorker from './registerServiceWorker';

import './styles.css';

ReactDOM.render(<Presentation presentation="home" />, document.getElementById('root'));
registerServiceWorker();

