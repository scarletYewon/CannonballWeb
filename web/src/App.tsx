import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Main from './pages/main';
import Signin from './pages/signin';
import Signup from './pages/signup';

const App:React.FC = (): JSX.Element => {
  const onSubmit = (form: { name: string, description: string}) => {
    console.log(form);
  }
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/signin' element={<Signin onSubmit={onSubmit}/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
  );
}

export default App;
