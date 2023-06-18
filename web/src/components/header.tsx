import React from "react";

function Header() {
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
        src='img/logo.svg'/>
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
          id='item1'
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
        >
          Sign In
        </div>
        <div
          id='item2'
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
        >
          Sign Up
        </div>
      </div>
    </div>
  );
}

export default Header;