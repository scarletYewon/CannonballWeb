import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Main from './pages/main';
import Mgrouping from './pages/Mgrouping';
import Mmember from './pages/Mmember';
import Signin from './pages/signin';
import Signup from './pages/signup';
import ApplicationStat from './pages/applicationStat';
import ApplicationStatDone from './pages/applicationStatDone';
import MapplicationStat from './pages/MapplicationStat';
import Group from './pages/group';

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/Mmember' element={<Mmember/>}/>
      <Route path='/Mgrouping' element={<Mgrouping/>}/>
      <Route path='/Mapplicationstat' element={<MapplicationStat/>}/>
      <Route path='/applicationstat' element={<ApplicationStat/>}/>
      <Route path='/applicationstatdone' element={<ApplicationStatDone/>}/>
      <Route path='/group' element={<Group/>}/>
    </Routes>
  );
}

export default App;
