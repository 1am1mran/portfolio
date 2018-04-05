import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'Cormorant Garamond', 'Josefin Sans', 'Homemade Apple', 'Share Tech Mono', 'Orbitron']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
