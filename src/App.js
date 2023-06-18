import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App({ profilePage, dialogsPage, dispatch, store }) {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs' element={<Dialogs store={store} />} />
          <Route path='/dialogs/:id' element={<Dialogs store={store} />} />
          <Route path='/profile' element={<Profile {...profilePage} dispatch={dispatch} />} />
          <Route path='/news' />
          <Route path='/music' />
          <Route path='/settings' />
        </Routes>
      </div>
    </div>
  );
}

export default App;
