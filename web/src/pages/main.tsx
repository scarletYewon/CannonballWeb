import React from 'react';
import Header from '../components/header';
import { url } from 'inspector';
import axios from 'axios';
import { relative } from 'path';


function Main() {

  return (
    <div
      style={{
        margin: '0',
      }}
    >
      <Header/>
      <div
        style={{
          width: '100%',
          height: '1px',
          color: 'white',
        }}
      />
      <div
        style={{
          background: 'black',
        }}
      >
        <img
          style={{
            width: '100%',
          }}
          src='img/main_background.svg'
        />
        <img
          style={{
            width: '100%',
          }}
          src='img/footer.svg'
        />
      </div>
    </div>
  );
}

export default Main;
