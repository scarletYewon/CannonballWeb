import React from "react";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  // const goSignin = () => {
  //   navigate('/signin');
  // }
  // const goSignup = () => {
  //   navigate('/signup');
  // }
  // const goMain = () => {
  //   navigate('/');
  // }

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      {/* <img src="img/logo_white.png" /> */}
      {/* 로고 수정 후 재반영 예정 */}
      <div
        style={{
          display: 'flex',
        }}
      >
        <div>
          <img src="img/introduction.png"/>
        </div>
        <div>
          <img src="img/vision.png"/>
        </div>
        <div>
          <img src="img/ouractivity.png"/>
        </div>
        <div>
          <img src="img/more.png"/>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
        }}
      >
        <div>
          <img src="img/login.png"/>
        </div>
        <div>
          <img src="img/signup.png"/>
        </div>
        <div>
          <img src="img/manager.png"/>
        </div>
      </div>
      
  
    </div>
    
  );
}

export default Header;