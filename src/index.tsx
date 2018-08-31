import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {appStore} from './redux/app-store';
import App from './App';

import './index.css';
import registerServiceWorker from './registerServiceWorker';


const Root = (
  <Provider store={appStore}>
      <App />
  </Provider>
);
ReactDOM.render(
  Root,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
