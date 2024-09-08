import React, { useState } from 'react';
import './Heropage.css';

const Heropage = () => {
  const [link, setLink] = useState(''); // State to track the input value

  const Cm = () => {
    console.log('Meeting is being Created');
  };

  // Function to handle input change
  const handleInputChange = (e) => {
    setLink(e.target.value);
  };

  return (
    <div className="main">
      <div className="hero-h1">
        Streamlingo: Revolutionizing video calls with real-time translation technology.
        <div className="slogan">
          Connect and collaborate seamlessly from anywhere with real-time translation.
        </div>
        <div className="input-area">
          <button onClick={Cm}>Create Meeting</button> or
          <input
            type="text"
            placeholder="Enter meeting link"
            value={link}
            onChange={handleInputChange}
          />
         
          {link && <button>Join</button>}
        </div>
      </div>
    </div>
  );
};

export default Heropage;
