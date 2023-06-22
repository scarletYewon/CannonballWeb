import React from 'react';
import Footer from '../components/footer';
import Grid from '../components/grid';
import Header from '../components/header';
import Introduce from '../components/introduce';

function Main() {
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
      <Footer/>
    </div>
  );
}

export default Main;
