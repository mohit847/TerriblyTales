import React, { useState } from 'react';
import Content from './components/Content';
import './App.css';

function App() {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true);
  }

  return (
    <div className="App">
      {showComponent ? (
        <div className="App-content">
          <Content />
        </div>
      ) : (
        <button className='btn' onClick={handleClick}>Submit</button>
      )}
    </div>
  );
}

export default App;
