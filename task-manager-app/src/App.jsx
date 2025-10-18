import React from 'react';

function App() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>🚀 Task Manager App</h1>
      <p>If you can see this, Vercel deployment is working!</p>
      <button 
        onClick={() => alert('Success!')}
        style={{ padding: '10px 20px', margin: '10px', backgroundColor: '#007acc', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Test Button
      </button>
    </div>
  );
}

export default App;