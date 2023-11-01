import React, { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/LayoutComponent/Navbar';
import ListBox from './components/ListComponent/ListBox';
import Login from './components/PageComponents/Login';
import Register from './components/PageComponents/Register';

import '../src/css/App.css'
import ForgetPassword from './components/PageComponents/ForgetPassword';
import Alert from './components/MiscellaneousComp/Alert';
import ProtectedRoute from './components/MiscellaneousComp/ProtectedRoute';

import todoListContext from './config/Auth';
import PageNotFound from './components/MiscellaneousComp/PageNotFound';

const App = () => {
  const [alert, setAlert] = useState("");
  const [token, setToken] = useState("");
  return (
    <todoListContext.Provider value={{ alert, setAlert, token, setToken }}>
      <Router>
        <Alert />
        <Navbar />
        <main className='d-flex'>
          <Routes>
            <Route path='/'
              element={<ProtectedRoute>
                <ListBox />
              </ProtectedRoute>} />
            <Route path='/sign-in' element={<Login />} />
            <Route path='/sign-up' element={<Register />} />
            <Route path='/forgot-password' element={<ForgetPassword />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </Router>
    </todoListContext.Provider>
  )
}

export default App