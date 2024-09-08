import React, { useState, useEffect } from 'react';
import './DateTimeDisplay.css'
const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
     
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    
    return () => clearInterval(intervalId);
  }, []);

   
  const formattedDate = currentDateTime.toLocaleDateString('en-US', {
    weekday: 'long',
    
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = currentDateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <div className='main'>
         <p className='date'> {formattedTime}|{formattedDate} </p>
      
    </div>
  );
};

// // Optional inline styles
// const styles = {
//   container: {
//     textAlign: 'center',
//     padding: '10px',
//     borderRadius: '8px',
//     backgroundColor: '#f5f5f5',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
//   date: {
//     fontSize: '1.2rem',
//     color: '#333',
//   },
//   time: {
//     fontSize: '1.5rem',
//     color: '#007bff',
//     fontWeight: 'bold',
//   },
// };

export default DateTimeDisplay;
