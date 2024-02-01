import reportWebVitals from './reportWebVitals';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/redux_store';

let renderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App state={state} dispatch={store.dispatch.bind(store)}/>
      </React.StrictMode>
    );
}

renderEntireTree(store.getState())

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
})

reportWebVitals();

