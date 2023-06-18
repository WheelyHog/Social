import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import store from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <App {...state} dispatch={store.dispatch.bind(store)} store={store} />
    </BrowserRouter>
  );
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)