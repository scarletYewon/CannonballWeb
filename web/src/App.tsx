import React from 'react';
import Grid from './components/grid';
import Header from './components/header';
import Introduce from './components/introduce';

function App() {
  return (
    <div>
      <div
        style={{
          background: 'white',
          position: 'sticky',
          top: '0',
        }}
      >
        <Header/>
      </div>
      <Grid/>
      <Introduce/>
    </div>
  );
}

export default App;
