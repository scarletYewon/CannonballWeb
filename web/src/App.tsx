import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div>
      {/* 캐논볼 로고 들어가는자리 */}
        <div style={{
          textAlign: 'center',
          marginTop: '20px',
        }}>
          <img className='logoImage' src='img/header.png' />
        </div>
      </div>
      <div>
        {/* 참가신청하는자리 */}
        <div style={{
          textAlign: 'center'
        }}>
          <img className='body' src='img/body.png' />
        </div>
      </div>
      <div>
        {/* 환영합니다 */}
        <div style={{
          marginTop: '50px',
          textAlign: 'center'
        }}>
          <img className='welcome' src='img/welcome.svg' />
        </div>
      </div>
      <div>
        {/* 동아리 소개페이지 */}
        <div style={{
          textAlign: 'center'
        }}>
          <img className='introduce' src='img/introduce.svg' />
        </div>
      </div>
    </div>
  );
}

export default App;
