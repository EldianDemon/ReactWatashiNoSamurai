import reportWebVitals from './reportWebVitals';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/redux_store';
import { Provider } from 'react-redux';

let renderEntireTree = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

renderEntireTree(store.getState())

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
})

reportWebVitals();

