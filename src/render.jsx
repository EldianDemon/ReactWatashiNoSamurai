import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AddPost} from './redux/state'

export let renderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App state={state} AddPost={AddPost}/>
      </React.StrictMode>
    );
}


