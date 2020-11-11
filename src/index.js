import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTimes, faCheck} from '@fortawesome/free-solid-svg-icons'
import App from './App';
import './index.css'

library.add(faEdit, faTimes, faCheck)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  );
  