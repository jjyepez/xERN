import React    from 'react';
import ReactDOM from 'react-dom';

import {MemoryRouter as Router} from 'react-router-dom';

import App from './app';

ReactDOM.render(
    
    <Router>
        <App/>
    </Router>,

    document.getElementById('app')
);