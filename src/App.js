import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import UserList from './Composant/UserList';
import UpdateUser from './Composant/UpdateUser';
import AddUser from './Composant/AddUser';

function App() {
  return (
    <div className="App">
      <h1> Crud App Using Redux </h1>
      <BrowserRouter>
        
        <Routes>

          <Route path='/' element={<UserList />} /> 
          <Route path='/add-user' element={<AddUser />} /> 
          <Route path='/update-user/:id' element={<UpdateUser />} /> 


      </Routes>
      
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
