import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { addPost, subscribe, updateNewPostText } from './components/redux/state';
import './index.css';
import store from './components/redux/state';
import { ReactDOM } from "react";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
