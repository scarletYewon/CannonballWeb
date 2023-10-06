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
        }}
      />
      <div
        style={{
          background: 'black',
        }}
      >
        <div
          style={{
            display: 'flex',
            // position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              color: 'white',
              marginTop: '100px',
              marginLeft: '100px',
            }}
          >
            <div>
              2023.07.20 ~ 2023.08.07
            </div>
            <div>
              2023 F/F Season
            </div>
            <div>
              Bowling Party
            </div>
            <div>
              Participate
            </div>
          </div>
          <img
            style={{
              width: '100%',
            }}
            src='img/main_background.svg'
          />
        </div>
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
