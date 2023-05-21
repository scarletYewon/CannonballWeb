import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
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
        marginTop: '50px'
      }}>
        <img className='welcome' src='img/welcome.svg' />
      </div>
    </div>
    <div>
      {/* 동아리 소개페이지 */}
      <div>
        <img className='introduce' src='img/introduce.svg' />
      </div>
    </div>
  </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
