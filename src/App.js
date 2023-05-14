import React, { useState } from 'react';
import Content from './components/Content';
import './App.css';

function App() {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true);
  }

  const buttonStyle = {
    marginTop:'200px',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '16px',
  };
 
  return (
    <div className="App">
      {showComponent ? (
        <div> 
          <Content />
        </div>
      ) : (
        <button style={buttonStyle} onClick={handleClick}>Submit</button>
      )}
    </div>
  );
}

export default App;
