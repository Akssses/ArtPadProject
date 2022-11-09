import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import { Projects } from './pages/Profects';
import { Team } from './components/Team/Team';
import { Profile } from './components/Profile/Profile';
import { Steaking } from './components/Steaking/Steaking';
import { MyProject } from './components/MyProject/MyProject';
import { Seor } from './pages/Seor';
import { SignUp } from './pages/Signup';
import { Sigin } from './pages/Signin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/steaking' element={<Steaking/>}/>
        <Route path='/my-project' element={<MyProject/>}/>
        <Route path='/seor' element={<Seor/>}/>
        <Route path='/signin' element={<Sigin/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)