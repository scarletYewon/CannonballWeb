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
        position: 'sticky',
        top:'0',
        background: 'black',
        height: '100px',
        display: 'flex',
        paddingTop:'5px',
        paddingBottom: '5px',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <img style={{marginLeft: '10px',}}src="img/logo_white.svg"/>
      <div>
        <div
          style={{
            listStyle: 'none',
            margin: '0',
            padding: '0',
            display: 'flex',
          }}
        >
          <img style={ {flexBasis: '25%', marginRight: '60px',}}src="img/introduction.svg"/>
          <img style={ {flexBasis: '25%', marginRight: '60px',}}src="img/vision.svg"/>
          <img style={ {flexBasis: '25%', marginRight: '60px',}}src="img/ourActivity.svg"/>
          <img style={ {flexBasis: '25%',}}src="img/more.svg"/>
        </div>
      </div>
      
      <div>
        <div
            style={{
              listStyle: 'none',
              marginRight: '50px',
              padding: '0',
              display: 'flex',
            }}
          >
          <img style={ {flexBasis: '25%',marginRight: '20px',}} src="img/login.svg"/>
          <img style={ {flexBasis: '25%',marginRight: '20px',}} src="img/signup.svg"/>
          <img style={ {flexBasis: '25%',marginRight: '20px',}} src="img/headerLine.svg"/>
          <img style={ {flexBasis: '25%',}} src="img/manager.svg"/>
        </div>
      </div>
      
    </div>
    
  );
}

export default Header;