import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Main from './pages/main';
import Signin from './pages/signin';
import Signup from './pages/signup';

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
  );
}

export default App;
