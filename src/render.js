
import React from "react";
import './index.css';
import { ReactDOM } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { addPost } from "./components/redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} />
      </BrowserRouter>
    </React.StrictMode>
  );
}