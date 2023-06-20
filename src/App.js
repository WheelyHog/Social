import { Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Users from './components/Users/Users';

function App() {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs' element={<DialogsContainer />} />
          {/* <Route path='/dialogs/:id' element={<DialogsContainer />} /> */}
          <Route path='/profile' element={<Profile />} />
          <Route path='/users' element={<Users />} />
          <Route path='/news' />
          <Route path='/music' />
          <Route path='/settings' />
        </Routes>
      </div>
    </div>
  );
}

export default App;
