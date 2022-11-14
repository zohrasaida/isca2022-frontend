import 'react-bootstrap';
import React from 'react';
import './App.css';
import './pages/Home.css';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import { Route , Router, Routes, HashRouter, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import AbstractSubmission from './pages/AbstractSubmition';
import InvitedSpeakers from './pages/InvitedSpeakers';
import OrganizingComite from './pages/OrganizingComite';
import ScientificComite from './pages/ScientificComite';
import Sponsors from './pages/Sponsors';
import FirstCircular from './pages/FirstCircular';
import SecondCircular from './pages/SecondCircular';
import ThirdCircular from './pages/ThirdCircular';
import ParticipationFees from './pages/ParticipationFees';
import ProgramICSA2023 from './pages/ProgramICSA2023';
import ImportantDates from './pages/ImportantDates';

import index from './index';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='body'>
      <div className='side'><SideBar/></div>
      <div className='content'> 
      <BrowserRouter>
      <Routes>
      <Route exact path='/Home' element={<Home/>} ></Route> 
      <Route exact path='/AbstractSubmission' element={<AbstractSubmission/>} ></Route> 
      <Route exact path='/InvitedSpeakers' element={<InvitedSpeakers/>} ></Route> 
      <Route exact path='/OrganizingComite' element={<OrganizingComite/>} ></Route>       
      <Route exact path='/ScientificComite' element={<ScientificComite/>} ></Route> 
      <Route exact path='/Sponsors' element={<Sponsors/>} ></Route> 
      <Route exact path='/ParticipationFees' element={<ParticipationFees/>} ></Route> 
      <Route exact path='/ImportantDates' element={<ImportantDates/>} ></Route> 
      <Route exact path='/FirstCircular' element={<FirstCircular/>} ></Route> 
      <Route exact path='/SecondCircular' element={<SecondCircular/>} ></Route> 
      <Route exact path='/ThirdCircular' element={<ThirdCircular/>} ></Route> 
      <Route exact path='/ProgramICSA2023' element={<ProgramICSA2023/>} ></Route> 
      
      </Routes>
      </BrowserRouter>
      </div>
      </div>
      <Footer/>
      
    </div>
    
  );
}

export default App;
