import reportWebVitals from './reportWebVitals';
import './index.css';
import state from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AddPost, UpdateNewPost, AddMessege, subscribe} from './redux/state'


let renderEntireTree = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App state={state} AddPost={AddPost} UpdateNewPost={UpdateNewPost} AddMessege={AddMessege} />
      </React.StrictMode>
    );
}

renderEntireTree()

subscribe(renderEntireTree)

reportWebVitals();

