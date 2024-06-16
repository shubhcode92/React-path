// import logo from './logo.svg';
import './App.css';
// import React from 'react'



// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }



import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    });
    
    return (
      <div>
      <p className=' text-2xl font-bold'>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
  }
  
export default App;