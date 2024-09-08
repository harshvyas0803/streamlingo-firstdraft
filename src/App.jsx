import React from 'react';
import Navbar from './component/Navbar';
import Heropage from './component/Heropage';
import './App.css';  

const App = () => {
  return (
    
    <div className="container">
      <div className="navbar">
      <Navbar /></div>
     <div className="hero"><Heropage /></div> 
    </div>
  );
};

export default App;
