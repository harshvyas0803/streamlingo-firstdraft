import React from 'react';
import './Heropage.css';

const Heropage = () => {
  return (
    <div className='main'>
      <div className="hero-h1">
        Streamlingo: Revolutionizing video calls with real-time translation technology.
        <div className="gap"></div>
        <div className="slogan">
          "Connect and collaborate seamlessly from anywhere with real-time translation.
        </div>
        <div className="input-area">
        <button>Create Meeting</button> or
        <input type="text" placeholder="Enter meeting link" />
        <button>join</button>
      </div>

      </div>

    
    
      <div className="gap"></div>

      <div className="second-part">
        2nd part
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, autem. Assumenda
          repellendus laborum provident dicta nemo dolorem explicabo, quos cumque voluptatibus
          enim adipisci harum necessitatibus distinctio rem.
        </p>
      </div>
    </div>
  );
};

export default Heropage;
