import logo from './logo.svg';
import React, { useState, useEffect }from 'react';
import './App.css';
import {Homepage} from './Homepage';
import {Userdetails} from './Userdetails';
import {Navigationbar} from './Navigationbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import axios from "axios";

function App(){
  return (
    <BrowserRouter>
    <div className="container">
   <h3 className="m-3 d-flex justify-content-center"
   font-family = 'sans-serif'
   font-style =  'bold'>
              iamNEO TALENT CENTER         
              
    </h3> 
   <Navigationbar/>
      <Routes>
        <Route path="home" element={<Homepage/>}/>
        <Route path="users" element={<Userdetails/>}/>

      </Routes>

     </div>
    </BrowserRouter>

  );
  }

export default App;
