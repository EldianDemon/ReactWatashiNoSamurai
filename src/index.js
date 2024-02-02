import reportWebVitals from './reportWebVitals';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/redux_store';
import StoreContext from './StoreContext';

let renderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </React.StrictMode>
  );
}

renderEntireTree(store.getState())

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
})

reportWebVitals();

