import React from "react";
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate();

  const goSignin = () => {
    navigate('/signin');
  }
  const goSignup = () => {
    navigate('/signup');
  }
  const goMain = () => {
    navigate('/');
  }

  return (
    <div
        id='header'
        style={{
          display: 'inline',
          justifyContent: 'center',
          alignItems: 'center',
        }}
    >
      <img
        id='logo'
        style={{
          marginTop: '.8rem',
          marginBottom: '.8rem',
          width: '15rem',
          height: '3rem',
          marginLeft: '8rem'
        }}
        src='img/logorow.svg'
        onClick={goMain}
        />
      <div
        id='itemBox'
        style={{
          marginTop: '.8rem',
          marginBottom: '.8rem',
          height: '3rem',
          display: 'flex',
          marginRight: '8rem',
          justifyContent: 'center',
          alignItems: 'center',
          float: 'right',
        }}
      >
        <div
          id='signIn'
          style={{
            width: '5rem',
            display: 'block',
            textAlign: 'center',
            margin: '.25rem',
            padding: '.5rem 1rem',
            color: 'black',
            border: '1px solid #000000',
            borderRadius: '4px',
            background: 'white',
          }}
          onClick={goSignin}
        >
          Sign In
        </div>
        <div
          id='signUP'
          style={{
            width: '5rem',
            display: 'block',
            textAlign: 'center',
            margin: '.25rem',
            padding: '.5rem 1rem',
            color: 'white',
            border: '1px solid #000000',
            borderRadius: '4px',
            background: 'black',
          }}
          onClick={goSignup}
        >
          Sign Up
        </div>
      </div>
    </div>

    
  );
}

export default Header;