import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//BrowserRouter interacts with history library and URL, Route is a react component that provides config that deciedes what component to show based on URL
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
  render() { return <div> Hello! </div>}
}

class Goodbye extends React.Component {
  render() { return <div>Goodbye!</div>}
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/hello" component={Hello}/>
        <Route path="/goodbye" component={Goodbye}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
