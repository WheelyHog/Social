import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import store from './components/redux/redux-store';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

// let rerenderEntireTree = (state) => {
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
// }

// rerenderEntireTree();

// store.subscribe(() => {
//   rerenderEntireTree()
// });
