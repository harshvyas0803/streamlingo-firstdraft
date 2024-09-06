import React from 'react';
import Navbar from './component/Navbar';
import Heropage from './component/Heropage';
import './App.css'; // Ensure your CSS styles are imported

const App = () => {
  return (
       <div className="body"> {/* Background layer with blur effect */}
      <Navbar />
      <Heropage />
      </div>
  );
};

export default App;
