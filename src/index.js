import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
import MatkaApp from './MatkaApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MatkaApp />, document.getElementById('root'));
=======
import './css/materialize.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> 2bb3dc350265849995404c1ded4454fff5db48b9

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
