import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Main from './pages/main';
import Signin from './pages/main/signin';
import Signup from './pages/main/signup';
import Introduction from './pages/main/introduction';
import Vision from './pages/main/vision';
import OurActivity from './pages/main/ourActivity';
import More from './pages/main/more';
import Manager from './pages/managePages/managementMain'
import Member from './pages/managePages/member';
import Event from './pages/managePages/event';
import Application from './pages/apply/application';
import AppDone from './pages/apply/appDone';
import TeamMember from './pages/apply/teamMember';
import AddEvent from './pages/managePages/addEvent';

const App:React.FC = (): JSX.Element => {
  const onSubmit = (form: { name: string, description: string}) => {
    console.log(form);
  }
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/signin' element={<Signin onSubmit={onSubmit}/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/introduction' element={<Introduction/>}/>
      <Route path='/vision' element={<Vision/>}/>
      <Route path='/ouractivity' element={<OurActivity/>}/>
      <Route path='/more' element={<More/>}/>
      <Route path='/manager' element={<Manager/>}/>
      <Route path='/managermember' element={<Member/>}/>
      <Route path='/managerevent' element={<Event/>}/>
      <Route path='/application' element={<Application/>}/>
      <Route path='/appdone' element={<AppDone/>}/>
      <Route path='/teammember' element={<TeamMember/>}/>
      <Route path='/addevent' element={<AddEvent/>}/>
    </Routes>
  );
}

export default App;
