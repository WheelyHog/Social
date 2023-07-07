import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { authAPI } from './api/api';
import './App.css';
import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import Navbar from './components/Navbar/Navbar';
import Users from './components/Users/Users';
import { initializedSuccess } from './redux/appReducer';
import { setUserDataAction } from './redux/authReducer';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const Profile = React.lazy(() => import('./components/Profile/Profile'))


function App() {
  const dispatch = useDispatch()
  const initialized = useSelector(store => store.app.initialized)
  useEffect(() => {
    authAPI.me()
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(setUserDataAction(res.data))
          dispatch(initializedSuccess())
        }
      })
  }, [])

  // if (initialized) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs' element={<Suspense><DialogsContainer /></Suspense>} />
          <Route path='/profile' element={<Suspense><Profile /></Suspense>} />
          <Route path='/profile/:id' element={<Suspense><Profile /></Suspense>} />
          <Route path='/users' element={<Users />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/news' />
          <Route path='/music' />
          <Route path='/settings' />
        </Routes>
      </div>
    </div>
  );
}
// }

export default App;
